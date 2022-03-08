const doSomething = async () => 'Hello World!!!';

async function print() {
    return 'Hello Galaxy!';
}


doSomething().then(value => console.log(value));

print().then(value => console.log(value));

const getPromise = async (time, text) => {
    await setTimeout(() => { 
        console.log(text);
    }, time);
}

getPromise(1000, 'Promise Done').then(() => console.log('Promise is resolved.'));

async function doSomething() {
    let promises = undefined;

    for await(let p of promises) {
        
    }
}