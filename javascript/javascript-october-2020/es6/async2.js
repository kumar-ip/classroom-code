//Hello - 2 mins
//World - 1 mins

console.log("Starting");

setTimeout(function() {

    let a = 10;
    console.log("Hello");

    setTimeout(function() {
        console.log("World");

        setTimeout(function() {
            console.log("World");

            setTimeout(function() {
                console.log("World");

                setTimeout(function() {

                    let a = 10;

                    
                    console.log("World");
                }, 1000);


            }, 1000);


        }, 1000);


    }, 1000);

}, 2000);



console.log("End");