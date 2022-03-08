let sym1 = Symbol();

let sym2 = Symbol("555-55-5555");

let sym3 = Symbol("555-55-5555");

let sym4 = Symbol.for("46547632");
let sym5 = Symbol.for("46547632");

console.log(sym4 === sym5);

console.log(sym2 === sym3);

console.log(sym1, typeof sym1);

console.log(sym2, typeof sym2);

let person = {
  name: "WBL",
  phone: "000-000-0000",
  [sym2]: "Some information",
  [Symbol.toStringTag]: function () {
    return "Person";
  },
};

for (let key in person) {
  console.log(key, person[key]);
}

console.log(Object.getOwnPropertyNames(person));

console.log(Object.getOwnPropertySymbols(person));

var names = ["One", "Two"];

console.log(Object.getOwnPropertySymbols(names));

console.log(person.toString());

class NewPerson {
  constructor() {
    this.name = "WBL";
  }

  get [Symbol.toStringTag]() {
    return "New Person Object";
  }

//   static [Symbol.hasInstance](instance) {
//     return instance['name'] !== undefined;
//   }
}


const newPerson1 = new NewPerson();
console.log(newPerson1.name, newPerson1.toString());

console.log(person instanceof NewPerson);