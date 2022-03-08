const add = function() {
    //console.log(typeof(arguments), arguments);

    let sum = 0;
    for (let i in arguments) {

        if (typeof(arguments[i]) === 'number') {
            sum += arguments[i];
        }
    };
    return sum;

    
}


console.log(add());
console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4));
console.log(add(1, 'something'));

const arr = [];

//console.log(arr[0]);
