const userLogger = (req, res, next) => {
  console.log("todo lo referedio a usuarios");
  next();
};

const validations = (req, res, next) => {
  try {
    console.log("aquí valido todo");
    if (!req.body.nombre) {
      console.log("Encontré un error el nombre");
      throw "Falta nombre";
    }

    next();
  } catch (error) {
    res.status(200).json({ msj: error });
  }
};

export default { userLogger, validations };
