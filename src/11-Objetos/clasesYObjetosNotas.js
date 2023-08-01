// Notas de BeerJs sobre diferentes formas de crear objetos

/*  - 1 - Objeto Literar - 1 -  */

let personLiteral = {
  nombre: "Sergio",
  apellido: "Ortega",
  saludar: function () {
    console.log(`Hola!, mi nombre es ${this.nombre} ${this.apellido}. Y este es un objeto Literal!`);
  },
};

personLiteral.saludar();

/*  - 2 - Constructor Functions - 2 -  */

function PersonConsFunc(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.greet = function () {
    console.log(
      `Hola!, mi nombre es ${this.firstName} ${this.lastName}. Y este es un objeto instanciado con una construction function!`
    );
  };
}

let sergito = new PersonConsFunc("Sergio Adrian", "Ortega");
sergito.greet();

/*  - 3 - Object.create (Prototype) - 3 -  */

let personPrototype = {
  greet: function () {
    console.log(
      `Hola!, mi nombre es ${this.firstName} ${this.lastName}. Y este es un objeto instanciado con Object.create (Prototype)!`
    );
  },
};

let sergillo = Object.create(personPrototype);
sergillo.firstName = "Sergio";
sergillo.lastName = "Ortega";
sergillo.greet();

/*  - 4 - Factory Functions - 4 -  */

function createPerson(firstName, lastName) {
  return {
    firstName,
    lastName,
    greet: function () {
      console.log(
        `Hola!, mi nombre es ${this.firstName} ${this.lastName}. Y este es un objeto instanciado con Factory Function!`
      );
    },
  };
}

let sergioFacFun = createPerson("Sergio", "Ortega");
sergioFacFun.greet();

/*  - 5 - Clases - 5 - */

class PersonClass {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log(
      `Hola!, mi nombre es ${this.firstName} ${this.lastName}. Y este es un objeto instanciado de una CLASE!`
    );
  }
}

let sergioClase = new PersonClass("Sergio", "Ortega");
sergioClase.greet();
