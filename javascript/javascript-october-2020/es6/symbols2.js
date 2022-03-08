const car = {
    make: 'Honda',
    model: 'Accord',
    "MAKE YEAR": 1999
}

car[Symbol.toStringTag] = () => {
    return "Car"; 
}

console.log(car.toString());