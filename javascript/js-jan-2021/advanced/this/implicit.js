name = "Hello World!!!";

function print() {
    console.log(this.name);
}

print();

//current object - does not matter in js, does not matter where the function is sitting.
//who is calling that function - this, with what object this function is being called.
//implicitly - global object.

//THIS
//implicit
//explicit
//hard
//new