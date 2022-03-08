let a1 = {
    id: 101,
    balance: 1000.00,
    type: 'CHECKING'
}

let a2 = {
    id: 102,
    balance: 2000.0,
    type: 'SAVING'
}

let a3 = null;
a3 = a2;
a3.balance += 100;
console.log(a2.balance);


a2 = null;


a2 = {
    id: 103,
    balance: 500,
    type: 'SAVING'
}

let a4 = a1;
a1 = a2;
a2 = null;
a1 = null;







