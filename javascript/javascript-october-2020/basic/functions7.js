var a = 10;

function print() {
    console.log('Hello World!!!');
}

// var print = function() {
//     console.log('Hello World!!!');
// }


var b = a;

var print1 = print;

var arr = [1,2,3,a];

arr[4] = print;

var newArray = [undefined, null, {}, 10, true, 'Hellow', function() {

}];

newArray[6]();

arr[3] = a;

var obj = {
    name: 'Hello',
    rollNumber: a
}

var customer = {
    name: 'QA',
    batch: 2020,
    printDetails: function() {

    }
}

customer.printDetails();