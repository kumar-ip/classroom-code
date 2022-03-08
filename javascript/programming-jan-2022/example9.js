const names = ['Anitha', 'Komala'];

names.pop();
names.push('Sharavi');

names.shift();
names.unshift('Anitha');
names.unshift('Komala');


for (let name of names) {
    console.log(name);
}
