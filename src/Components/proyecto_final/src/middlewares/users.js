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

module.exports = { hasId, add };
