const names = ['Avanthi', 'Kshama', 'Lija', 'Pallavi'];

names[5] = 'Shilpa';

for(let i = 0; i < names.length; i++) {
    console.log(i, names[i]);
}

for(let i in names) {
    console.log(i, names[i]);
}

for(let name of names) {
    console.log(name);
}