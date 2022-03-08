var a = 10;
var b = 10.2;
var c = true;
var d = undefined;
var e = "Hello";
var f = "World";
var g = 2;
var h = 3;
var i = false;

//unary

    //logical
console.log(!c); 

    //arthimetic
console.log(a++);
console.log(++h);

//binary

    //arthimetic
console.log(a + b);
console.log(b - a);
console.log(a * g);
console.log('division', a/g);
console.log('modulus', a%h);

    //logical
console.log(c && i); //select * from employee where name like '%Kumar%' AND country='USA'
console.log(c || i);
console.log(c ^ i);  //xor = true, true ||||| false, false

    //bitwise operators
var x1 = 1; //000000000000000001
var x2 = 2; //000000000000000010
console.log('bitwise', x1 & x2);


    //comparison
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);

    //assignment operators
    var l = 10;
    l += 20; //-=, /=, 

    //string
console.log(e + f); //operator overloading.
var k = 10;
var j = 20;
var m = "A"
console.log(k + m);


//ternary
var z = c ? 10 : 20;

var a1 = ((a + g) - h) * (b / g);
