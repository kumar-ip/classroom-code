//functional programming

//declarative coding 
    //high level functions - low level function 
//immutablity
//pure functions
//no side effects

const names = ['Kshama', 'Lija', 'Pallavi', 'Avanthi',  'Shilpa', 'Sheeladevi'];

// for(let i =0; i < names.length; i++) {
//     console.log(i, names[i]);
// }

names.forEach(function(name) {
    console.log(name);
})


const newNames1 = names.map(function(name) {
    return name.toUpperCase();
})

console.log(newNames1);

const newNames2 = names.filter(function(name) {
    return name[name.length-1] === 'i';
})

console.log(newNames2);

const totalName = names.reduce(function(prev, current) {
    return prev + ":" + current;
})

console.log(totalName);

//String s1 = new String("Hello");
//String s2 = s1;
//s1.equals(s2);