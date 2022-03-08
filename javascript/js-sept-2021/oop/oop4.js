function Animal() {
    this.name = "Animal";
}

Animal.prototype.eat = function() {
    console.log("Animal eats");
}

Animal.prototype.sleep = function() {
    console.log("Animal sleeps");
}

function Dog(breed) {
    this.name = "Dog";
    this.breed = breed;
}

Dog.prototype = new Animal();

Dog.prototype.bark = function() {
    console.log("Dog barks");
}

const dog1 = new Dog("Labrador");  
dog1.eat();
dog1.sleep();
dog1.bark();
console.log(dog1.breed);

