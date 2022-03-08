let a = 1;
let b = 2;
let propertyName = "address";

const obj1 = {
    a,
    b,
    [propertyName + 1] : "Dublin",
    doSomething() {
        console.log(this.address1);
    }
}

console.log(obj1.address1);
obj1.doSomething();