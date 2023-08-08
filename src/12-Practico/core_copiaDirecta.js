import { User, Account } from "./prototypes.js";
import db from "./db.json" assert { type: "json" };

function newUser(userId, typeUser, user, firsName, lastName, mail) {
  db.users.push(new User(userId, typeUser, user, firsName, lastName, mail));
}

function accountOpening(id, accountNumberInit, type) {
  if (db.users.some((el) => el.id === id)) {
    let pos;
    for (let index = 0; index < db.users.length; index++) {
      if (db.users[index].id === id) {
        pos = index;
      }
    }
    switch (type) {
      case "ca$":
        db.users[pos].id.accounts.push(new Account(accountNumberInit, "$", "ca", 1000));
        break;
      case "cc$":
        db.users[pos].id.accounts.push(new Account(accountNumberInit, "$", "cc", 0));
        break;
      case "caU$D":
        db.users[pos].id.accounts.push(new Account(accountNumberInit, "U$D", "ca", 0));
        break;
      case "ccU$D":
        db.users[pos].id.accounts.push(new Account(accountNumberInit, "U$D", "cc", 0));
        break;
      case "pack":
        db.users[pos].accounts.push(new Account(accountNumberInit, "$", "ca", 1000));
        db.users[pos].accounts.push(new Account(accountNumberInit + 1, "$", "cc", 0));
        db.users[pos].accounts.push(new Account(accountNumberInit + 2, "U$D", "ca", 0));
        db.users[pos].accounts.push(new Account(accountNumberInit + 3, "U$D", "cc", 0));
        break;
    }
  } else {
    throw new Error(`010 ▒ Cuenta no creada porque el usuario ingresado no existe con el 'id':${id} ▒`);
  }
}

function pruebas() {
  try {
    newUser(23987478969, "customer", "peter", "Peter", "Parker", "peterparker@mail.com");
    accountOpening(23987478969, 127, "pack");
    console.log(db.users);
    db.users[db.users.length - 1].accounts[2].transfer(126, 500);
    console.log(db.users[7].accounts);
  } catch (error) {
    console.error(error);
  }
}
pruebas();
