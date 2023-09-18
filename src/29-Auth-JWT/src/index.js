import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

import usersRouter from "./routes/users.js";
app.use("./users", usersRouter);
import authRouter from "./routes/auth.js";
app.use("./auth", authRouter);

app.listen(port, () => {
  console.log(`  ▒  App funcionando ok, desde el puerto: ${port} ▒ `);
});
