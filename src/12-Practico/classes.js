export class User {
  constructor(id, typeUser, firstName, lastName, mail) {
    this.id = id;
    this.typeUser = typeUser;
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
  }
}

export class Account {
  constructor(accountId, currency, typeAccount, balance) {
    this.accountId = accountId;
    this.currency = currency;
    this.typeAccount = typeAccount;
    this.balance = balance;
  }
  transfer(debit, credit, currency, amount) {
    // quitar currency
    console.log(
      `TimeStamp: ${Date.now()} - Se debitan ${currency} ${amount} de la cuenta ${debit}, y se los acredita en la cuenta ${credit}`
    );
  }
}
