//classify data types - two types of data types
//value types
//reference types

//LIFO - last in first out
//FIFO - first in first out

//Runtime Engines
//Node.js
//JRE

//Memory - 
//stack - lifo
//heap - fifo

//value types - stack
//are values
//cannot exist without values
//cannot share values

//reference types - heap
//are not values
//can exist without values
//can share values

//number, string, boolean, undefined, symbol

let i = 10;
let j = 20;
i = j;
i = 30;

//objects (arrays, objects, functions)
let car1 = {
    make: "Tesla",
    model: "Model S",
    year: 2015
}

let car2 = car1;
car1.year = 2021;

console.log(car2.year);

