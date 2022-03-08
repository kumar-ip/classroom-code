function outer() {
    var a = 10;

    function inner() {
        console.log(a);
    }

    return inner;
}

var fn = outer();

fn();
fn();
fn();