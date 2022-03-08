function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

const PrimeNumber = {
    [Symbol.iterator]() {
        let current = 1;
        return {
            next() {
                let prime = current++;
                while (!isPrime(prime)) {
                    prime++;
                }
                return { done: false, value: prime };
            }
        }
    },

    
}


// for (let n of PrimeNumber) {
//     if (n > 100) break;
//     console.log(n);
// }

function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

const it = generator();
let item = it.next();
console.log(item);
item = it.next();
console.log(item);
item = it.next();
console.log(item);
item = it.next();
console.log(item);

for(let n of generator()) {
    console.log(n);
}