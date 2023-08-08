export function User(id, typeUser, user, firstName, lastName, mail) {
  return {
    id,
    typeUser,
    user,
    firstName,
    lastName,
    mail,
    accounts: [],
  };
}

export function Account(accountId, currency, typeAccount, balance) {
  return {
    accountId,
    currency,
    typeAccount,
    balance,

    transfer: function transfer(credit, amount) {
      console.log(
        `TRANSF= TimeStamp: ${Date.now()} - Se debitan ${this.currency} ${amount} de la cuenta ${
          this.accountId
        }, y se los acredita en la cuenta ${credit}`
      );
    },
  };
}

/* export function User(id, typeUser, firstName, lastName, mail) {
  this.id = id;
  this.typeUser = typeUser;
  this.firstName = firstName;
  this.lastName = lastName;
  this.mail = mail;
  this.accounts = [];
}

export function Account(accountId, currency, typeAccount, balance) {
  this.accountId = accountId;
  this.currency = currency;
  this.typeAccount = typeAccount;
  this.balance = balance;

  this.transfer = function transfer(credit, amount) {
    console.log(
      `TRANSF= TimeStamp: ${Date.now()} - Se debitan ${
        this.currency
      } ${amount} de la cuenta ${
        this.accountId
      }, y se los acredita en la cuenta ${credit}`
    );
  };
} */
