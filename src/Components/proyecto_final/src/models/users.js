const mongoose = require("../config/mongo");
const ObjectId = mongoose.Types.ObjectId;

let users = [];

const usersSchema = new mongoose.Schema({
  firstname: { type: String, required: true, lowercase: true },
  lastname: String,
  email: String,
  age: Number,
});

const Users = mongoose.model("Users", usersSchema);

async function add(data) {
  try {
    const newUser = new Users(data);
    newUser.save();
    return newUser;
  } catch (error) {
    console.error(error);
  }
}

async function get(id) {
  const filter = id ? new ObjectId(id) : {};
  return await Users.find(filter);
}

async function update(id, data) {
  try {
    return await Users.findByIdAndUpdate(new ObjectId(id), data);
  } catch (error) {
    throw error;
  }
}

async function del(id) {
  try {
    return await Users.findByIdAndRemove(new ObjectId(id));
  } catch (error) {
    throw error;
  }
}

module.exports = { add, get, update, del };
