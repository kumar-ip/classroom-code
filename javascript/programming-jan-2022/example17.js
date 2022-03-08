function add() {
   let sum = 0;

   for(let i in arguments) {
       if(typeof arguments[i] === 'number') {
           sum += arguments[i];
       }
   }

   return sum;
}

console.log(add());
console.log(add(2));
console.log(add(2,3));
console.log(add(2,"Hello"));
console.log(add("Hello", "World"));
console.log(add(2,3,4));
console.log(add(2,3,4,5));

// let a = undefined + undefined;
// console.log(a, typeof a);
