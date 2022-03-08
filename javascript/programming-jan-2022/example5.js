//branching statements

let a = 10;
let b = 20;
let c = 30;

if (a >= 10) {
    console.log('a is greater than or equal 10');
} else if (b > 10) {
    console.log('b is greater than 10');
}
else {
    console.log('a is less than 10');
}

console.log('Continue with execution');

switch (a) {
    case 10:
        console.log('a is 10');
        break;
    case 20:
        console.log('a is 20');
        break;
    default:
        console.log('a is not 10 or 20');
        break;
}