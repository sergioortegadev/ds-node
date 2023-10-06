import "dotenv/config";
import jwt from "jsonwebtoken";

const logged = async (req, res, next) => {
  try {
    if (req.user.role !== "admin") return res.status(403).json({ message: "XXX - Acceso no autorizado - XXX" });

    next();
  } catch (error) {
    if (!user) return res.status(500).json({ message: "XXX - Error inesperado - XXX" });
  }
};

const dataFromToken = async (token) => {
  return jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
    if (err) return err;
    return data;
  });
};

export default logged;
