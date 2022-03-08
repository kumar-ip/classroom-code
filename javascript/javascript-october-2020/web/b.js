var x = 10;


var print = function() {

    var y = 20;

    console.log(x, y);
    
    function doSomething() {
        var z = 100;
        console.log(x, y, z);        
    }

    doSomething();

    x = 50;
    l = 10;

   // y = z; //reference error
   

}


function test() {
    var a = 10;

    for(var i = 0; i < 10; i++) {

    }


    var x = 10;


}



function getUniqueCharacters(str) {


    if(typeof(str) !== 'string' || str.length <= 1) {
        return str;
    }


    var characters = str.split('');

    console.log(characters);

    var charsObj = {};

    for(var char of characters) {
        if(!charsObj[char]) {
            charsObj[char] = 1;
        } else {
            charsObj[char] = charsObj[char] + 1;
        }
    }

    console.log(charsObj);


    for(var c in charsObj) {
        if(charsObj[c] == 1) {
            console.log(c);
        }
    }




}


getUniqueCharacters("Hello");
getUniqueCharacters("AAABBBBCCC");






//print();

