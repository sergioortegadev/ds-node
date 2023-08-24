const userAuth = (req, res, next) => {
  console.log(" - - Consulta realizada por: UsuarioXX - Autorizado - - ");
  next();
};

export default userAuth;
