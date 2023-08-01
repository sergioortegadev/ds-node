import { User, Account } from "./classes.js";
import { db } from "./db.js";

const us23_12457896_9 = new User(23124578969, "customer", "Jhon", "Perk", "jhonperk@mail.com");

function accountOpening(id, accountNumberInit) {
  id.ca$ = new Account(accountNumberInit, "$", "ca", 1000);

  id.cc$ = new Account(accountNumberInit + 1, "$", "cc", 0);

  id.caU$D = new Account(accountNumberInit + 2, "U$D", "ca", 0);

  id.ccU$D = new Account(accountNumberInit + 3, "U$D", "cc", 0);
}

console.log(us23_12457896_9);

accountOpening(us23_12457896_9, 123);

console.log(us23_12457896_9);

us23_12457896_9.transfer(123, 125, "U$D", 500);
