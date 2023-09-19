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
    password: { type: String, required: true, select: false },
  },
  { timestamps: true }
);

usersSchema.pre("save", async function (next) {
  let user = this;

  if (!user.isModified("password")) return next();

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
