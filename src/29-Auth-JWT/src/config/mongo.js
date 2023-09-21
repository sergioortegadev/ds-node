import mongoose from "mongoose";
import "dotenv/config";

// Establecemos la conexión con MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Manejamos eventos de conexión y error

const db = mongoose.connection;

db.once("error", () => {
  console.error("   XXX - Error de conexión - XXX");
  process.exit(1);
});

db.once("open", () => {
  console.log("  ▒ >> Conexión exitosa con la base de datos.  ▒");
});

export default mongoose;
