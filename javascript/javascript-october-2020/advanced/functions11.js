function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log('I am eating');
}

Animal.prototype.sleep = function() {
    console.log('I am sleeping');
}


function Dog(color, breed) {
    this.color = color;
    this.breed = breed;
    
}

Dog.prototype = new Animal("Dog");

Dog.prototype.bark = function() {
    console.log('I am barking');
}

var dog1 = new Dog("Brown", "Taiwanese Shepard");
dog1.sleep();
dog1.bark();
console.log(dog1.name, dog1.breed);
