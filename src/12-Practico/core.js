import { User, Account } from "./prototypes.js";
import db from "./db.json" assert { type: "json" };

function newUser(userId, typeUser, firsName, lastName, mail) {
  db.users.push(new User(userId, typeUser, firsName, lastName, mail));
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

let currentUser = {};

function accountsList(cu, op) {
  let accountsSummary = "";
  let list = "";
  if (!cu.accounts.length > 0) {
    return (accountsSummary = `El usuario no posee cuentas activas.`);
  }

  function balance(cu) {
    cu.accounts.forEach((el) => {
      switch (el.typeAccount) {
        case "ca":
          if (el.currency === "$") {
            accountsSummary += `Caja de ahorro en pesos nº${el.accountId}. Saldo: ${el.balance}\n`;
          } else {
            accountsSummary += `Caja de ahorro en dolares nº${el.accountId}. Saldo: ${el.balance}\n`;
          }
          break;
        case "cc":
          if (el.currency === "$") {
            accountsSummary += `Cuenta corriente en pesos nº${el.accountId}. Saldo: ${el.balance}\n`;
          } else {
            accountsSummary += `Cuenta corriente en dolares nº${el.accountId}. Saldo: ${el.balance}\n`;
          }
          break;

        default:
          break;
      }
    });
    return accountsSummary;
  }
  function listAcc(cu) {
    cu.accounts.forEach((el) => {
      switch (el.typeAccount) {
        case "ca":
          if (el.currency === "$") {
            list += `1 - Caja de ahorro en pesos nº${el.accountId}\n`;
          } else {
            list += `3 - Caja de ahorro en dolares nº${el.accountId}\n`;
          }
          break;
        case "cc":
          if (el.currency === "$") {
            list += `2 - Cuenta corriente en pesos nº${el.accountId}\n`;
          } else {
            list += `4 - Cuenta corriente en dolares nº${el.accountId}\n`;
          }
          break;

        default:
          break;
      }
    });
    return list;
  }

  switch (op) {
    case "balance":
      balance(cu);
      return accountsSummary;

    case "income":
      listAcc(cu);
      return list;

    default:
      break;
  }
}

/* const usGenerico = [23124578969, "customer", "Jhon", "Perk", "jhonperk@mail.com"]; */

/* export function pruebas() {
  try {
    newUser(usGenerico[0], usGenerico[1], usGenerico[2], usGenerico[3], usGenerico[4]);
    accountOpening(23124578969, 123, "pack");
    console.log(db.users);
    db.users[db.users.length - 1].accounts[2].transfer(126, 500);
    console.log(db.users[6].accounts);
  } catch (error) {
    console.error(error);
  }
} */

function menuA1(us) {
  let opcion;
  opcion = parseInt(
    prompt(`Bienvenido ${us}

    Elija una opción
 1 - Buscar Usuario
 2 - Crear Usuario
 3 - Modificar Usuario
 4 - Eliminar Usuario`)
  );

  switch (opcion) {
    case 1:
      alert("Menu Buscar Usuario");
      break;
    case 2:
      alert("Menu Crear Usuario");
      break;
    case 3:
      alert("Menu Modificar Usuario");
      break;
    case 4:
      alert("Menu Eliminar Usuario");
      break;
    default:
      alert("Opción no disponible");
      menuA1(us);
      break;
  }
}

// menu principal consumer
function menuC1(us, pos) {
  currentUser = db.users[pos];
  let accountTemp = accountsList(currentUser, "balance");

  let opcion;
  opcion = parseInt(
    prompt(`Bienvenido/a ${currentUser.firstName} ${currentUser.lastName}
   ${accountTemp}
    Elija una opción
 1 - Ingresar Dinero
 2 - Transferir a otro cliente
 3 - Compra de divisas
 4 - Extracción de dinero
 0 - Salir`)
  );

  switch (opcion) {
    case 1:
      menuC1_1(currentUser, us, pos);
      break;
    case 2:
      alert("transferir en desarrollo");
      menuC1(us, pos);
      break;
    case 3:
      alert("Afip no autoriza su compra de dolares. XD");
      menuC1(us, pos);
      break;
    case 4:
      menuC1_4(currentUser, us, pos);
      break;

    case 0:
      alert("Usuario deslogueado \nGracias por usar home banking");

      break;
    default:
      alert("Opción no disponible");
      menuC1(us);
      break;
  }
}

// menu ingresar primera
function menuC1_1(cu, us, pos) {
  let accountTemp = accountsList(currentUser, "income");

  let opcion;
  opcion = parseInt(
    prompt(`Menu Deposito - Ingresar Dinero
    Seleccione cuenta a ingresar:
    ${accountTemp}
    Elija 0 (cero) para volver al menú anterior`)
  );
  let accountN;
  switch (opcion) {
    case 1:
      accountN = cu.accounts[0].accountId;
      menuC1_1_1(cu, us, pos, accountN);
      menuC1(us, pos);
      break;
    case 2:
      if (!cu.accounts[1]) {
        alert(`Opcion no disponible`);
        return menuC1_1(cu, us, pos);
      }
      accountN = cu.accounts[1].accountId;
      menuC1_1_1(cu, us, pos, accountN);
      menuC1(us, pos);
      break;
    case 3:
      if (!cu.accounts[2]) {
        alert(`Opcion no disponible`);
        return menuC1_1(cu, us, pos);
      }
      accountN = cu.accounts[2].accountId;
      menuC1_1_1(cu, us, pos, accountN);
      menuC1(us, pos);
      break;
    case 4:
      if (!cu.accounts[3]) {
        alert(`Opcion no disponible`);
        return menuC1_1(cu, us, pos);
      }
      accountN = cu.accounts[3].accountId;
      menuC1_1_1(cu, us, pos, accountN);
      menuC1(us, pos);
      break;
    case 0:
      menuC1(us, pos);
      break;
    default:
      alert("Opción no disponible");
      menuC1_1(cu, us, pos);
      break;
  }
}
//menu extraer primera
function menuC1_4(cu, us, pos) {
  let accountTemp = accountsList(currentUser, "income");

  let opcion;
  opcion = parseInt(
    prompt(`Menu Deposito - Ingresar Dinero
    Seleccione cuenta a extraer:
    ${accountTemp}
    Elija 0 (cero) para volver al menú anterior`)
  );
  let accountN;
  switch (opcion) {
    case 1:
      accountN = cu.accounts[0].accountId;
      menuC1_4_1(cu, us, pos, accountN);
      menuC1(us, pos);
      break;
    case 2:
      if (!cu.accounts[1]) {
        alert(`Opcion no disponible`);
        return menuC1_4(cu, us, pos);
      }
      accountN = cu.accounts[1].accountId;
      menuC1_4_1(cu, us, pos, accountN);
      menuC1(us, pos);
      break;
    case 3:
      if (!cu.accounts[2]) {
        alert(`Opcion no disponible`);
        return menuC1_4(cu, us, pos);
      }
      accountN = cu.accounts[2].accountId;
      menuC1_4_1(cu, us, pos, accountN);
      menuC1(us, pos);
      break;
    case 4:
      if (!cu.accounts[3]) {
        alert(`Opcion no disponible`);
        return menuC1_4(cu, us, pos);
      }
      accountN = cu.accounts[3].accountId;
      menuC1_4_1(cu, us, pos, accountN);
      menuC1(us, pos);
      break;
    case 0:
      menuC1(us, pos);
      break;
    default:
      alert("Opción no disponible");
      menuC1_1(cu, us, pos);
      break;
  }
}

// Ingresar dinero segunda
function menuC1_1_1(cu, us, pos, acc) {
  let amount;
  amount = parseInt(
    prompt(`Ingresar monto:
    Elija 0 (cero) para volver al menú anterior`)
  );

  if (amount === 0) {
    return menuC1_1(cu, us, pos);
  }
  let currencyTemp;
  cu.accounts.forEach((el) => {
    if (el.accountId == acc) {
      el.balance += amount;
      currencyTemp = el.currency;
    }
  });
  console.log(
    `Usuario ${us} realizó ingreso/depósito de ${currencyTemp} ${amount} en la cuenta nº${acc} \nCon marca de tiempo ${Date.now()}`
  );
}

// Extraer dinero segunda
function menuC1_4_1(cu, us, pos, acc) {
  let amount;
  amount = parseInt(
    prompt(`Ingresar monto:
    Elija 0 (cero) para volver al menú anterior`)
  );

  if (amount === 0) {
    return menuC1_1(cu, us, pos);
  }
  let currencyTemp;
  cu.accounts.forEach((el) => {
    if (el.accountId == acc) {
      if (el.balance >= amount) {
        el.balance -= amount;
        currencyTemp = el.currency;
        console.log(
          `Usuario ${us} realizó extracción de ${currencyTemp} ${amount} en la cuenta nº${acc} \nCon marca de tiempo ${Date.now()}`
        );
      } else if (el.typeAccount === "cc" && el.balance - amount >= -1000) {
        el.balance -= amount;
        currencyTemp = el.currency;
        console.log(
          `Usuario ${us} realizó extracción de ${currencyTemp} ${amount} en la cuenta nº${acc} \nCon marca de tiempo ${Date.now()}`
        );
      } else {
        alert(`No se puede realizar la operación porque la cuenta nº${acc} tiene un saldo insuficiente.`);
        console.log(
          `Usuario ${us} intentó realizar una extracción de ${amount} desde la cuenta nº${acc} \nCon marca de tiempo ${Date.now()}`
        );
      }
    }
  });
}

function menu1() {
  let usuarioIn;
  usuarioIn = prompt(`Ingresar Nombre de Usuario`);
  if (usuarioIn === null) return;

  if (db.users.some((el) => el.user === usuarioIn)) {
    let pos;
    for (let index = 0; index < db.users.length; index++) {
      if (db.users[index].user === usuarioIn) {
        pos = index;
      }
    }

    if (db.users[pos].typeUser === "admin") {
      console.log(`Usuario ${usuarioIn} logueado con marca de tiempo: ${Date.now()}`);
      menuA1(usuarioIn, currentUser);
    } else {
      console.log(`Usuario ${usuarioIn} logueado con marca de tiempo: ${Date.now()}`);
      menuC1(usuarioIn, pos, currentUser);
    }
  } else {
    alert(`No se encontró el usuario ${usuarioIn}`);
    menu1();
    throw new Error("▒ Usuario No Encontrado en la Base de Datos ▒");
  }
}

export function init() {
  try {
    menu1();
  } catch (error) {
    console.error(error);
  }
}
// Se podría agregar un prototipo dentro de las cuentras que guarde los registros de transferencias.
