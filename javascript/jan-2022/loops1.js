//iteration - keep doing something until you reach a certain condition to exit (loops)
//recursion - a function keeps calling itself until a condition is met to exit.
//ends in infinite loop - stop the infinite loop

//while loop
//do while loop
//for loop

//for in loop
//for of loop
//forEach loop

let i = 1; //initialization

while(i <= 10) { //condition
    console.log(i);
    i++; //increment or decrement
}

do {
    console.log(i);
    i++;
} while(i <= 10)

//iteration until a limit, when we read arrays (array.length)
for(let i = 1; i <= 10; i++) {
    console.log(i);
}

//select * from employee where age > 30;

// let sql = 'select * from employee where age > 30';
// const results = sql.execute(); //pointer to the top of the memory - cursor

// let row = results.next(); //pointer to the next row

// while(row) {
//     console.log(row);
//     row = results.next();
// }

// let line = fs.readLine();

// while(line) {
//     console.log(line);
//     line = fs.readLine();
// }


//problems where we know how many times we have to iterate

const names = ['John', 'Jane', 'Mary'];
// for(let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

for(let index in names) {
    console.log(names[index]);
}

for(let name of names) {
    console.log(name);
}

names.forEach(name => console.log(name));