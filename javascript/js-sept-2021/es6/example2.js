//block scope - let and const ---var
//constants
//arrow functions
//default parameters
//rest parameters
//spread operator
//template literals ``
//destructuring



// const findLargest = (arr = [], count = 0) => {

// }

//findLargest([1,2,3]);

const doSomething = (count, ...items) => {

    console.log('count', count);
    console.log('items', items);

}

doSomething(10);

const add = (...numbers) => {
    
        let sum = 0;
    
        for (let i = 0; i < numbers.length; i++) {
            sum += numbers[i];
        }
    
        return sum;
    }

function traditionalAdd(a,b,c,d, e) {
    return add(a,b,c,d, e);
}

let numbers = [1,2,3,4,5];

traditionalAdd(...numbers);
