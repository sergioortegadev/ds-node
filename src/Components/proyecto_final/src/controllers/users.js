const usersModel = require("../models/users");

async function userAdd(data) {
  try {
    return await usersModel.add(data);
  } catch (error) {
    console.error(error);
  }
}

async function userShow(id) {
  return await usersModel.get(id);
}

async function userAuth(user) {
  let userdb = await usersModel.getUser(user);
  if (userdb !== []) {
    return userdb;
  } else {
    console.log("error controller usuario no existente");
  }
}

async function userUpdate(id, data) {
  return await usersModel.update(id, data);
}

async function userDelete(id) {
  return await usersModel.del(id);
}

module.exports = { userAdd, userShow, userAuth, userUpdate, userDelete };
