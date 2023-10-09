import UserModel from "../model/users.js";

const profile = async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.user.id });
    return res.status(200).json({ message: " > > Mi Perfil < <", user });
  } catch (error) {
    return res.status(500).json({ message: " X - Error inesperado - X" });
  }
};

const updateUser = async (req, res) => {
  let { _id, username, firstname, lastname, mail, image } = req.body;
  const user = await UserModel.findOne({ _id });

  if (user) {
    try {
      await UserModel.findOneAndUpdate({ _id }, { username, firstname, lastname, mail, image });

      const userModified = await UserModel.findOne({ _id });

      /* await article.save(); // También funciona así, sin el new Article */

      return res
        .status(201)
        .json({ message: `El usuario ${userModified.username} modificado con exito.`, userModified });
    } catch (error) {
      if (error.code === 11000 && error.keyPattern.mail) {
        return res.status(400).json({ message: "XXX - Mail ya registrado, intente recuperar contraseña - XXX" });
      }
      if (error.code === 11000 && error.keyPattern.username) {
        return res.status(400).json({ message: "XXX - Nombre de usuario ya registrado, elija otro - XXX" });
      }
      return res.status(500).json({ message: "XXX - Error inesperado en controller al modificar usuario - XXX" });
    }
  }
  return res.status(200).json({ message: "XXX - Error, usuario a modificar no encontrado - XXX" });
};

const allUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json({ message: " > > Todos los usuarios < <", users });
  } catch (error) {
    return res.status(500).json({ message: " X - Error inesperado al traer todos los usuarios de la base - X" });
  }
};

export default { profile, updateUser, allUsers };
