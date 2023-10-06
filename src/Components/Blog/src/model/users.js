import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usersSchema = new mongoose.Schema(
  {
    role: String, // admin || editor || author || subscriber
    active: Boolean,
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true, select: false },
    mail: { type: String, required: true, index: { unique: true } },
    firstname: String,
    lastname: String,
    image: String,
  },
  { timestamps: true }
);

usersSchema.pre("save", async function (next) {
  let user = this;

  // if (!user.isModified("password")) return next(); // revisar esta linea

  const salt = await bcrypt.genSaltSync(parseInt(process.env.SALT));
  const passwordHashed = await bcrypt.hash(user.password, salt);
  user.password = passwordHashed;
  next();
});

usersSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const UserModel = mongoose.model("users", usersSchema);

export default UserModel;
