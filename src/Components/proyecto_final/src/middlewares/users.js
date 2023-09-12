const usersController = require("../controllers/users");

const hasId = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    console.log(`el dato enviado no es un número (${req.params.indice})`);
    return res.status(404).json({ msj: "no enviaste id" });
  }

  next();
};

const add = (req, res, next) => {
  const { firstname, lastname, email } = req.body;
  if (!lastname || !email) {
    console.log(`No enviaste toda la data (${req.body})`);
    return res.status(404).json({ msj: "no enviaste toda la data necesaria para agregar un usuario" });
  }
  console.log("middleware add user");

  next();
};

const auth = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    console.log(`No ingresó toda la data (${req.body})`);
    return res.status(401).json({ msj: "falta data necesaria para loguearse" });
  }
  let user = await usersController.userAuth(username); // acá next()     // esto va al controller

  if (user[0] == undefined) {
    console.log(` » No se encontró el usuario: ${req.body.username}`);
    return res.status(401).json({ msj: " ▒  Usuario no encontrado  ▒ " });
  }

  try {
    if (password === user[0].password) {
      console.log(` » Usuario: ${user[0].username} logueado ok`);
      // genero token
      return res.status(200).json({ msj: "password correcta" }); // aca va el token
    } else {
      console.log(` » Usuario: ${user[0].username} logueo rechazado`);
      return res.status(401).json({ msj: " ▒  password incorrecta  ▒ " });
    }
  } catch (error) {
    console.log(error);
  }
  next();
};

module.exports = { hasId, add, auth };
