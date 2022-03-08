//number, string, boolean, undefined, - value types
//object, arrays, functions - reference type

//value types
//value types are values
//cannot exist without value
//cannot share values
//value types are copied by their value
//STACK
//number, string, boolean, undefined

//reference types
//reference types are not values
//can exist without values
//can share values
//reference types are copied by their reference
//HEAP - all objects are stored in the heap

//STACK
//LIFO
//last in first out
//permanent storage
//self managed

//HEAP - Garbage collector
//FIFO


let i = 1;
let j;
let k = 10;

i = k;
console.log(i, k);
k = 20;
console.log(i, k);



const student = {
    name: 'Fahad',
};

const student1 = null;

const student2 = { 
    name: 'Kavya',
}

student = student2;

student.name = 'Manjuladevi';



//student = 100;

