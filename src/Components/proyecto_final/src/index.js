import "dotenv/config";
import express from "express";
import logger from "./middlewares/global.js";
const app = express();
app.use(express.json());
app.use(logger);

import usersRouter from "./routes/users.js";
app.use("/users", usersRouter);

app.listen(process.env.PORT, function () {
  console.log(`  ▒░ APP funcionando ok en puerto: ${process.env.PORT} ░▒`);
});
