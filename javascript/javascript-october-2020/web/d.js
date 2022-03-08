var name = "Madhavi";



function doSomething() {

    setTimeout(() => {
        console.log(self.name);
    }, 2000);

}

doSomething.bind(window);

doSomething();




// let a = 10;
// const b = 20;

// const doSomething = function() {
//     console.log(b);
// }

// console.log(d);

// let d = 10;

// var obj = {
//     name: 'Madhavi',
//     doSomething: function() {
//         console.log(this.name);
//     }
// }

// //obj.doSomething();

// var fn = obj.doSomething;

// setTimeout(function() {

//     fn();
// }, 2000);

// () => {

// }



