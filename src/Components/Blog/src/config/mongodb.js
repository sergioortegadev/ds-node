import "dotenv/config";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("error", () => {
  console.error("   ▓   XXX - Error de Conexión con la DB - XXX  ▓");
  process.exit(1);
});

db.once("open", () => {
  console.log("   ░              Conectada con DB              ░");
});

export default mongoose;
