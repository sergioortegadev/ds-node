import "dotenv/config";
import express from "express";
import mongoose from "./config/mongo.js";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

import usersRouter from "./routes/users.js";
app.use("/users", usersRouter);
import authRouter from "./routes/auth.js";
app.use("/auth", authRouter);
import adminRouter from "./routes/admin.js";
app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log(`  ▒  App funcionando ok, desde el puerto: ${port} ▒ `);
});
