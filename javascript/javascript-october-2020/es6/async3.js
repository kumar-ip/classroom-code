const promise = new Promise((resolve, reject) => {
//http call

    setTimeout(() => {
        resolve("Hello")
    }, 2000);
});

console.log(promise, typeof(promise));

console.log("I am not waiting, doing my own stuff");

promise.then((value) => {
    console.log("1" + value) 
});

promise.then((value) => {
    console.log("2" + value) 
});

promise.then((value) => {
    console.log("3" + value) 
});

// promise.catch((value) => {
//     console.log(value) 
// });

setTimeout(() => console.log(promise, typeof(promise)), 5000);