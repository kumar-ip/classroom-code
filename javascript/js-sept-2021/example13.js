const names = ['Avanthi', 'Kshama', 'Lija', 'Pallavi', 'Shilpa', 'Sheeladevi'];

// const newNames1 = names.slice(1, -2);

// console.log(newNames1.toString());

const newNames1 = names.splice(2, 1, 'Indra', 'Rasna');

console.log(names.toString());
console.log(newNames1.toString());