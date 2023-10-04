import UserModel from "../model/users.js";

const profile = async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.user.id });
    return res.status(200).json({ message: " > > Mi Perfil < <", user });
  } catch (error) {
    return res.status(500).json({ message: " X - Error inesperado - X" });
  }
};

const allUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json({ message: " > > Todos los usuarios < <", users });
  } catch (error) {
    return res.status(500).json({ message: " X - Error inesperado al traer todos los usuarios de la base - X" });
  }
};

export default { profile, allUsers };
