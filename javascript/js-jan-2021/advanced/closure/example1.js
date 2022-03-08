function test() {
    let a = 10;

    console.log(a);
}

test();


function outer() {
    var a = 10;

    function inner() {
        console.log('I am inner' + a);
    }

    return inner;
}

let inner = outer();

inner();
inner();
inner();
inner();
inner();