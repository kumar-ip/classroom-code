function doSomething() {
    var a = 10;
}

function outer() {

    var a = 10;

    function inner() {
        console.log("Hello World!!!");
    }

    return inner;


}

// function getSomething() {
//     return 10;
// }

// var i = getSomething();

var fn = outer();
fn();