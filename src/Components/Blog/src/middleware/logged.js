import "dotenv/config";
import jwt from "jsonwebtoken";

const logged = async (req, res, next) => {
  try {
    const bearerToken = req.header("authorization");
    if (!bearerToken) return res.status(401).json({ message: " X - Credenciales inválidas - X" });

    const token = bearerToken.split(" ")[1];
    const user = await dataFromToken(token);
    if (!user.id) return res.status(401).json({ message: " X - Credenciales inválidas - X" });

    req.user = user;
    next();
  } catch (error) {
    if (!user) return res.status(500).json({ message: " X - Error inesperado - X" });
  }
};

const dataFromToken = async (token) => {
  return jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
    if (err) return err;
    return data;
  });
};

export default logged;
