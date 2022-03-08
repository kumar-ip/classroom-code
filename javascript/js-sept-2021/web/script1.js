function print() {
    console.log(this.name);
}

let name = "Whitebox Learning!";

console.log(window.name);
window.print();

