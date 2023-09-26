import "dotenv/config";
import express from "express";
import mongoose from "./config/mongodb.js";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

import usersRouter from "./route/users.js";
app.use("/users", usersRouter);
import authRouter from "./route/auth.js";
app.use("/auth", authRouter);
import adminRouter from "./route/admin.js";
app.use("/admin", adminRouter);
import articleRouter from "./route/article.js";
app.use("/article", articleRouter);

app.listen(port, () => {
  console.log(`   ▒  BLOG App encendida - Listen on port: ${port} ▒ `);
});
