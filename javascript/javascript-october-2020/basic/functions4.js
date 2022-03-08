var a = 10;


function doSomething() {
    console.log("Hello World!!!");
} //function declaration

var print = function() {
    console.log("Hello Universe!!!");
} //function expression.

var show = new Function("console.log('Hello Galaxy!!!');"); //function constructor

doSomething();

print();

show();