//import usersController from "../controllers/users";

const hasId = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    console.log(`el dato enviado no es un número (${req.params.indice})`);
    return res.status(404).json({ msj: "no enviaste id" });
  }

  next();
};

const add = (req, res, next) => {
  const { filenumber, username, password, firstname, lastname, email } = req.body;
  if (!filenumber || !username || !password || !firstname || !lastname || !email) {
    console.log(` ▒  » Log - No se agregó el usuario ${req.body.username} porque faltan campos`);
    return res.status(404).json({
      msj: `Usuario ${req.body.username} No Registrado - No enviaste todos los campos necesarios para agregar un usuario`,
    });
  }
  next();
};

const auth = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    console.log(`No ingresó toda la data (${req.body})`);
    return res.status(401).json({ msj: "falta data necesaria para loguearse" });
  }
  next();
};

const userMiddleware = { hasId, add, auth };
export default userMiddleware;
