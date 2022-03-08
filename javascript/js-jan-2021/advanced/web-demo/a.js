(function() {
  var x = 10;
  var a1 = 100;

  console.log("I am from file A");

  function doSomething() {
    console.log("Hello World!!!" + x);
  }
})(); //IIFE = Immediately invoked function expression.

var a1 = 300;
var a2 = 500;
var name = 'Hello Galaxy!!!';

function doSomething() {
    console.log(this.name, 'THIS');
    var a1 = 100;
    a1 = 200;
    var b = a1;
    a3 = 600;
    a2 = 400;
    //b = a4;
    b = window.a4;
    console.log(b, a1, window.a2, a3);
}

doSomething();
