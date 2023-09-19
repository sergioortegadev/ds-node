import UserModel from "../models/users.js";
import "dotenv/config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    let { firstname, lastname, email, username, password } = req.body;
    const newUser = new UserModel({ firstname, lastname, email, username, password, admin: false });
    const user = await newUser.save();
    return res.status(201).json({ msj: "El usuario ha sido agregado", user });
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

    let logged = await user.comparePassword(password);
    if (!logged) return res.status(401).json({ msj: "Credenciales inválidas" });

    const token = jwt.sign({ username: user.username, id: user._id, admin: user.admin }, process.env.TOKEN_SECRET);

    return res.status(200).json({ msj: "login exitoso", token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ msj: "error inesperado" });
  }
};

export default { login, register };
