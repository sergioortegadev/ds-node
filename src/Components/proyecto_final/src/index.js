require("dotenv").config();
const express = require("express");
const logger = require("./middlewares/global");
const app = express();
app.use(express.json());
app.use(logger);

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

app.listen(process.env.PORT, function () {
  console.log(`app connected on ${process.env.PORT} port`);
});
