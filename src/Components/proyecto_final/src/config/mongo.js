const mongoose = require("mongoose");
require("dotenv").config();

// Establecemos la conexión con MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Manejamos eventos de conexión y error
mongoose.connection.on("error", () => {
  console.error("errorrrrrr de conexionirijilla");
  console.error.bind(console, "Error de conexión:");
});
mongoose.connection.once("open", () => {
  console.log("Conexión exitosa con la base de datos.");
});

module.exports = mongoose;
