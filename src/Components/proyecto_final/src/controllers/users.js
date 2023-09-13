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

async function userAuth(username, password) {
  let userdb = await usersModel.getUser(username);
  try {
    if (userdb[0] == undefined) {
      console.log(` ▒  » Log - No se encontró el usuario: ${username}`);

      return {
        mensaje: ` ▒ Usuario o Password incorrecta - logueo rechazado.`,
        JWT: false,
      };
    }

    if (password === userdb[0].password) {
      console.log(` » Log - user: ${userdb[0].username} logueado ok`);

      let token = `sdñlfkajsdkjfa.askldlaksdjlfads.alskdjfñlakjsdlkfa`; // genero token JWT

      return {
        mensaje: `Usuario y password correcta - ${userdb[0].username} logueado`,
        JWT: token, // aca va el token
      };
    } else {
      console.log(` ▒  » Log - password incorrecta - Usuario: ${userdb[0].username} logueo rechazado.`);

      return {
        mensaje: ` ▒ Usuario o Password incorrecta - logueo rechazado.`,
        JWT: false,
      };
    }
  } catch (error) {
    console.log(error);
  }
}

async function userUpdate(id, data) {
  return await usersModel.update(id, data);
}

async function userDelete(id) {
  return await usersModel.del(id);
}

module.exports = { userAdd, userShow, userAuth, userUpdate, userDelete };
