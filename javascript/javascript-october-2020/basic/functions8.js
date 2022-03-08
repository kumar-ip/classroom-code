function doSomething(a) {
    var a = 10;

    return a;
}


function outer(fn) {

    fn();
    
    function inner() {

    }

    return inner;

    // return function() {

    // }

}


outer(function() {

});


var fn = outer();

fn();