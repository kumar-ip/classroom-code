const add = (a, b) => a + b;

const addNew = add;

function doSomething() {
    let a = 1;
    console.log('Hello World!!!');
}
doSomething();




function outer() {
    let a = 1;

    function inner() {
        console.log(a);
    }

    return inner;
}

const fn = outer();
fn();
fn();