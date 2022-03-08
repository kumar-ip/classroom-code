//global, local
// block scope - let, const 

function doSomething() {
    let i = 20;

    for(let i = 0; i < 10; i++) {
        //console.log(i);
    }

    if(true) {
        const i = 50;
        //i = 100;
    }

    console.log(i);
}

doSomething();