import UserModel from "../models/users.js";

const profile = async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.user.id });
    return res.status(200).json({ msj: " >> Mi perfil:", user });
  } catch (error) {
    return res.status(500).json({ msj: "  XXX - Error inesperado" });
  }
};

export default { profile };
