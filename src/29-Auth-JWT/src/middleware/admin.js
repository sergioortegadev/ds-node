import "dotenv/config";
import jwt from "jsonwebtoken";

const logged = async (req, res, next) => {
  try {
    if (!req.user.admin) return res.status(403).json({ msj: "  XXX - Acceso no autorizado" });

    next();
  } catch (error) {
    if (!user) return res.status(500).json({ msj: "  XXX - Error inesperado" });
  }
};

const dataFromToken = async (token) => {
  try {
    return jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
      if (err) return err;
      return data;
    });
  } catch (error) {
    throw error;
  }
};

export default logged;
