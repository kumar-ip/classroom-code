function callback(fn) {

    fn();
}

function doSomething() {
    console.log("Hello World!!!");
}

//doSomething();

callback(doSomething);

callback(function() {
    console.log("Call me back when you are done.")
});