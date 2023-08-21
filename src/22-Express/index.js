import express from "express";
import "dotenv/config";
import usersRoutes from "./routes/users.js";

const app = express();
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(process.env.PORT, () => {
  console.log(" - App funcionando ok - ");
}); // La Func Listen tiene un callback, la que se puede utilizar para chequear
