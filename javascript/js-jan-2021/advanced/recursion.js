function factorial(a) {

    if (typeof(a) !== 'number' || a < 1) {
        return a;
    }

    if (a > 1) {
       return (factorial(a-1) * a);
    } else {
        return a;
    }
}

console.log(factorial(5));