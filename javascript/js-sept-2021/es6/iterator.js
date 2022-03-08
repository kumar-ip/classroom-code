const names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for (let name of names) {
    console.log(name);
}

names[Symbol.iterator] = function () {
    let nextIndex = 0;
    return {
        next: function () {
            return nextIndex < names.length ?
                { value: names[nextIndex++], done: false } :
                { done: true };
        }
    };
}


const it = names[Symbol.iterator]();
let item = it.next();
console.log(item);
item = it.next();
console.log(item);
item = it.next();
console.log(item);
item = it.next();
console.log(item);
item = it.next();
console.log(item);
item = it.next();
console.log(item);