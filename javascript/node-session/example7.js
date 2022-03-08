const { R_OK } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('How did you do in exam yesterday?', answer => {
    console.error('Trying...', answer);
    rl.close();
});