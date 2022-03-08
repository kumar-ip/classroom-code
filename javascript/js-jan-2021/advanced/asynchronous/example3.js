//const p1 = new Promise((resolve) => setTimeout(() => resolve('One'), 5000));

const getPromise = (time, text) => {
    return new Promise((resolve) => setTimeout(() => { 
        console.log(text);
        resolve(); 
    }, time));
}

getPromise(5000, 'One').then(() => getPromise(2000, 'Two')).then(() => getPromise(5000, 'Three'));

function successCallback1(obj) {
    console.log(`Success One: ${obj.name}`);
}

function successCallback2(obj) {
    console.log(`Success One: ${obj.name}`);
}

function failureCallback(err) {
    console.log('Failure: ' + err.errorMessage);
}


const resolve1 = (response) => {
    console.log(response);
    setTimeout(() => console.log('Two'), 2000);
}

//p1.then(resolve1);
