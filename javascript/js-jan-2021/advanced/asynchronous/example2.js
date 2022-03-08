//Web API - Browser
//C++ Node.js API

console.log("First!!!");

setTimeout(function() {
    console.log("Third");

    setTimeout(function() {
        console.log("Fourth");
    }, 2000);

}, 5000);

// let interval = setInterval(function() {

// }, 5000);

// interval.clearInterval();

// setTimeout(function() {
//     console.log("Fourth");
// }, 2000);


console.log('Second');



getDbConnection(function(err, conn) {
    conn.getStatement(function(err, stmt) {
        stmt.executeQuery(function(err, resultSet) {
            //loop the result set
        })
    })
})




// function callback(fn) {
//     fn();
// }

// callback(function() {
//     console.log('Hello World');
// })