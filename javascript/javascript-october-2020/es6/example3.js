const names = ['Devika', 'Jayshree', 'Lavanyaa'];

for(let name of names) {
    console.log(name);
}

let str1 = "Hello, How are you? \n Your exam is tomorrow";


let str2 = `Hello, How are you? ${names[0]}
Your exam is tomorrow`;

console.log(str1);

console.log(str2);


let rawString = String.raw`Hello, How are you? \n Your exam is tomorrow`;
console.log(rawString);