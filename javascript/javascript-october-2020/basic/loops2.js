var i = 0;

while(i < 10) {
    console.log(++i);
}


do {
    console.log(++i);
}while(i < 10);

for(; i >= 1; --i) {
    console.log(i);
}

// for(;;) {
//     console.log("Hello World!!!");
// }


for(var x=1; x <= 10; x++) {

    if (x == 5) {
        continue;
    }

    console.log('New', x);
}
