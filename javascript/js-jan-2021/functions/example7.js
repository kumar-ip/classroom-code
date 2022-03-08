function add() {
    let sum = 0;

    for (let i in arguments) {
        if (typeof(arguments[i]) === 'number') {
            sum += arguments[i];
        }
    }


    return sum;
}

console.log(add());
console.log(add(1));
console.log(add(1,2));
console.log(add(1,2,3,4,5,6));
console.log(add('Hello', 'World'));
console.log(add(false, false));
console.log(add(0, false));
console.log(add(undefined, null));