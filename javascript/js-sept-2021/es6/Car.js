export class Car {

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this._details = `${this.make} ${this.model} ${this.year}`;
    }

    get details() {
        return this._details;
    }

    set details(value) {
        this._details = value;
    }

    changeTires() {
        console.log('Changing tires...');
    }

    static getDealer() {
        return 'Car Dealer';
    }


}

console.log(Car.getDealer());

export class ElectricCar extends Car {
    
        constructor(make, model, year) {
            super(make, model, year);
            this.batteryKWh = 0;
        }
    
        changeBattery() {
            console.log('Changing battery...');
        }
}




const car1 = new Car('Honda', 'Civic', '2018');
console.log(car1.details);
car1.changeTires();