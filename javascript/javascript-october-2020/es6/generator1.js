
function* getNames() {

    const names = ["Mian", "Devika", "Jayshreeben", "Lavanyaa"];
    for(let name of names) {
        yield name;
    }
}

const iterator = getNames();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
