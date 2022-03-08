function* getNumber() {

    yield 1;

    yield 2;

    yield 3;

}


for(let number of getNumber()) {
    console.log(number);
}