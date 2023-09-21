import mongoose from "mongoose";
import bcrypt from "bcrypt";
import "dotenv/config";

const usersSchema = new mongoose.Schema(
  {
    admin: Boolean,
    firstname: String,
    lastname: String,
    email: String,
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true, select: false }, // "select: false" borra la password del objeto, no sale de models
  },
  { timestamps: true }
);

usersSchema.pre("save", async function (next) {
  // Antes de guardar en DB:
  let user = this;

  if (!user.isModified("password")) return next(); // revisar y borrar esta línea

  const salt = await bcrypt.genSaltSync(parseInt(process.env.SALT)); // traigo la cantidad de salt (desde .env), lo proceso, y lo almaceno en la variable salt.
  const passwordHashed = await bcrypt.hash(user.password, salt); // Hasheo la pass
  user.password = passwordHashed; // cambio la pass de texto plano por la hasheada
  next(); // ya está listo para guardar en DB
});

// Valido password en models, porque al tener "select: false" no la puedo enviar para validar en controllers
usersSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const UserModel = mongoose.model("users", usersSchema);

export default UserModel;
