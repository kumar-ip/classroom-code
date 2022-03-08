let p1 = Promise.resolve('One');
let p2 = 'Two';
const p3 = new Promise((resolve, reject) => setTimeout(() => reject('Three')), 1000);

Promise.race([p1, p2, p3])
    .then(values => {
        console.log('All are done: ' + values);
        // for(let key in values) {
        //     console.log(key, values[key]);
        // }
    })
    .catch(err => console.log(err));