// function add(a, b = 10) {
//     return a+b;
// }

// console.log(add(2));


function add(prefix, suffix, ...args) {
    let sum = 0;

    //console.log(arguments);
    for(let attr of args) {
        
        sum += attr;
    }

    return prefix + sum + suffix;
}

console.log(add("Prefix : ", " : SUFFIX", 2,3,4,5,6));