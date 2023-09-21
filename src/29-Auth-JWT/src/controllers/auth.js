import UserModel from "../models/users.js";
import "dotenv/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    let { firstname, lastname, email, username, password } = req.body;
    const newUser = new UserModel({ firstname, lastname, email, username, password, admin: false });
    await newUser.save(); // Guardo en DB (en models se hará la pre de hashear password)
    const userReturned = await UserModel.findOne({ username: req.body.username }); // Luego busco en la base el user recientemente guardado. Como en models, en schema, la password tiene "select: false" no me la traerá, y no la mostraré aquí. Esto es porque nunca debemos devolver el pass, por seguridad, ya que podrían averiguar el SALT que usamos y usar fuerza bruta para vulnerar una clave hasheada.

    return res.status(201).json({ msj: "El usuario ha sido agregado", userReturned });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msj: "error inesperado" });
  }
};

const login = async (req, res) => {
  try {
    let { username, password } = req.body;

    const user = await UserModel.findOne({ username: username }).select("_id username password admin");
    if (!user) return res.status(401).json({ msj: "Credenciales inválidas" });

    // Envío a validar a models, ya que al tener un "select: false" no me puedo traer el objeto con la password para validar aquí
    let logged = await user.comparePassword(password);
    if (!logged) return res.status(401).json({ msj: "Credenciales inválidas" });

    const JWToken = jwt.sign({ username: user.username, id: user._id, admin: user.admin }, process.env.TOKEN_SECRET);

    return res.status(200).json({ msj: `Usuario ${username} logueado exitosamente`, JWToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msj: "XXX - Error inesperado - XXX" });
  }
};

export default { login, register };
