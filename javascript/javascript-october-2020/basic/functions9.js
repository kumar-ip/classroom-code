function print() {
    console.log('Hello World!!!');
}


//console.log(print.length);

function add() {
    var sum = 0;

    for(var arg of arguments) {
        if (typeof(arg) === 'number') {
            sum += arg;
        }
    }

    return sum;

    // //arguments
    // for(var i in arguments) {
    //     console.log(arguments[i]);
    // }

    // console.log('---------------------------');
    // return a+b;
}

//console.log(add.length);

console.log(add(2,3));
console.log(add("U","I"));
console.log(add(10,20,30));
console.log(add(10));
console.log(add(true, false));
console.log(add(10,20,30, 40, 50));
console.log(add());

var a = 10 + undefined;
console.log(a, typeof(a));