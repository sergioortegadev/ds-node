import UserModel from "../model/users.js";

const get = async (req, res) => {
  try {
    return res.status(200).json({ message: "  >>> Hola Admin :) " });
  } catch (error) {
    return res.status(500).json({ message: "XXX - Error inesperado :( " });
  }
};

const deleteUser = async (req, res) => {
  const user = await UserModel.findOne({ username: req.body.username });
  if (user.role === "admin")
    return res.status(400).json({ message: "XXX - Error no es posible eliminar user 'administrador' - XXX" });

  if (user) {
    try {
      await UserModel.findOneAndDelete({ username: req.body.username });

      return res.status(200).json({ message: `El user ${user.username} eliminado con exito.` });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "XXX - Error inesperado al eliminar user - XXX" });
    }
  }
  return res.status(200).json({ message: "XXX - Error, user a eliminar no encontrado - XXX" });
};

export default { get, deleteUser };
