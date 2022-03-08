var a = 10;

function doSomething() {
    var a = 20;
    console.log(this.a);
}

doSomething();

//implicit binding.