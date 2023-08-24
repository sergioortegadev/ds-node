// index es el inicio del backend. Escucha peticiones a través del puerto configurado en .env
import express from "express";
import cors from "cors";
import "dotenv/config";
import chakl from "chalk";
import productRoutes from "./routes/productRoutes.js";
import userAuth from "./middleware/userAuth.js";

const app = express();
app.use(express.json());

app.use(userAuth);

app.use(cors());

app.use("/product", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(chakl.green(" ░▒▓ - Backend funcionando ok - ▓▒░"));
}); // La función Listen tiene un callback, la que se puede utilizar para chequear que todo está ok
