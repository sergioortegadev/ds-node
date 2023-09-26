import UserModel from "../model/users.js";

const profile = async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.user.id });
    return res.status(200).json({ message: " > > Mi Perfil < <", user });
  } catch (error) {
    return res.status(500).json({ message: " X - Error inesperado - X" });
  }
};

export default { profile };
