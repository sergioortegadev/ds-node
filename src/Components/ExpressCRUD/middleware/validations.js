import chalk from "chalk";
const validations = (req, res, next) => {
  try {
    if (!req.body.prodName) {
      console.log(chalk.bgRed("Error al guardar producto: falta el nombre del producto"));
      throw "Error al guardar: Falta nombre del producto";
    }

    next();
  } catch (error) {
    res.status(200).json({ msj: error });
  }
};

export default validations;
