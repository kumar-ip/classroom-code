function Person(name, phone, email) {

    this.name = name;
    this.phone = phone;
    this.email = email;

}

Person.prototype.getDetails = function() {
    return `${this.name} - ${this.phone} - ${this.email}`;
}

class NewPerson {

    constructor(name, phone, email) {
        this._name = name;
        this._phone = phone;
        this._email = email;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(name) {
       if (name && name.length > 0) {
            this._name = name;
       }
    }

    getDetails() {
        return `${this._name} - ${this._phone} - ${this._email}`;
    }
}

const p1 = new Person("Mian", "555-555-5555", "mian@gmail.com");
console.log(Person.prototype);
console.log("Proto", p1.__proto__);
console.log(p1.constructor);

const p2 = new NewPerson("Nagendra", "000-000-0000", "nagendra@gmail.com");
console.log(NewPerson.prototype);
console.log("Proto",  p2.__proto__);
console.log(p2.constructor);


p2.name = "something";
console.log("Name", p2.name);
console.log(p1.getDetails());
console.log(p2.getDetails());


class Account {

    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this._balance = balance;
    }

    static interestRate = 0.02;

    get accountBalance() {
        return this._balance;
    }

    get accountBalanceWithInterest() {
        return this._balance + (this._balance * Account.interestRate);
    }

    deposit(amount) {
        this._balance += amount;
    }

    withdraw(amount) {
        this._balance += amount;
    }

    static updateInterestRate(rate) {
        Account.interestRate = rate;
    }

}

class CheckingAccount extends Account {

    constructor(accountNumber, balance) {
        super(accountNumber, balance);
    }

    static minimumBalance = 25;


}

Account.updateInterestRate(0.03);

const a1 = new Account(101, 1000.0);
a1.deposit(200);

const a2 = new Account(102, 2000.0);
a1.withdraw(200);

console.log(a1.accountBalanceWithInterest);


const ca1 = new CheckingAccount(103, 3500);
ca1.deposit(100);
ca1.withdraw(500);
console.log(ca1.accountBalance);

console.log(a2.accountBalanceWithInterest);





//empty object
//this is set to the empty object
//function will be executed 
//link to prototype -

