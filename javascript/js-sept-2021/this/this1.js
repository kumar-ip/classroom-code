//this represents the object that is calling/executing the function.
//it does not matter where the function is declared. it only matters with which object it is called.

//4 bindings
//1. global object - implicit binding
//explicit binding = person.print()
//hard binding = print.call(person)
//new binding = new print()

function print() {
    console.log(this.name);
}


name = "Global Name";


print();