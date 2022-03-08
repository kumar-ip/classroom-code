//java, OOP - current object - this
//javascript - who is calling the function.


var car1 = {
    make: 'Honda',
    model: 'Accord',
    year: 2020,
    getDetails: function() {
        return `${this.make} - ${this.model} - ${this.year}`;
    }
}

console.log(car1.getDetails());

//Implicit Binding
//Explicit Binding
//Hard Binding
//New Binding