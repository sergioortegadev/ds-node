import "dotenv/config";
import UserModel from "../model/users.js";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    let { username, password, mail, firstname, lastname } = req.body;
    const newUser = new UserModel({
      role: "subscriber",
      active: true,
      username,
      password,
      mail,
      firstname,
      lastname,
      image: "../assets/no-photo.jpg",
    });
    await newUser.save();
    const userReturned = await UserModel.findOne({ username: req.body.username });

    return res.status(201).json({ message: `Usuario ${req.body.username} agregado con exito.`, userReturned });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "XXX - Error inesperado al agregar usuario - XXX" });
  }
};

const login = async (req, res) => {
  try {
    let { username, password } = req.body;

    const user = await UserModel.findOne({ username: username }).select("_id role username password active");
    if (!user) return res.status(401).json({ message: "XXX - Credenciales inválidas - XXX" });

    let logged = await user.comparePassword(password);
    if (!logged) return res.status(401).json({ message: "XXX - Credenciales inválidas - XXX" });

    const JWToken = jwt.sign(
      { username: user.username, id: user._id, role: user.role, active: user.active },
      process.env.TOKEN_SECRET,
      { expiresIn: 60 * 60 * 24 * 30 }
    );

    return res.status(200).json({ message: `Usuario ${username} logueado exitosamente`, JWToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "XXX - Error inesperado al loguear usuario - XXX" });
  }
};

const logout = async (req, res) => {
  try {
    /* let { username } = req.body*/
    const user = req.body;
    /*  const user = await UserModel.findOne({ username: username }).select("_id admin username password active");
    if (!user) return res.status(401).json({ message: "XXX - Credenciales inválidas - XXX" }); */

    /*  let logged = await user.comparePassword(password);
    if (!logged) return res.status(401).json({ message: "XXX - Credenciales inválidas - XXX" }); */

    const JWToken = jwt.sign({ username: user.username }, process.env.TOKEN_SECRET, { expiresIn: 1 });

    return res.status(200).json({ message: `Usuario ${user.username} deslogueado`, JWToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "XXX - Error inesperado al desloguear usuario - XXX" });
  }
};

export default { login, register, logout };
