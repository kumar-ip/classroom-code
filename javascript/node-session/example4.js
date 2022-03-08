const fs = require('fs');

fs.readFile('./notes/note2.txt', (err, data) =>  {
    if (!err) {   
        console.log(data.toString());
    }

    fs.readFile('./notes/note1.txt', (err, data) =>  {
        if (!err) {   
            console.log(data.toString());
        }
    });
});