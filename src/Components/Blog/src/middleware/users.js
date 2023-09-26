const userLogger = (req, res, next) => {
  console.log(" - Middleware user validations -");
  next();
};

const validations = (req, res, next) => {
  try {
    console.log(" - Validaciones en middleware -");
    if (!req.body.nombre) {
      console.log(" - Error en 'nombre', Middleware - ");
      throw "Falta Nombre";
    }

    next();
  } catch (error) {
    res.status(200).json({ message: error });
  }
};

export default { userLogger, validations };
