package edu.wbl.basic;

public abstract class Vehicle {

    public String make;
    public String model;
    public int year;

    public abstract double getMPG();

    public abstract double getOdoMeterReading();

    public double getGallonsConsumed() {
        return getOdoMeterReading()/getMPG();
    }

}

//Abstraction
//Encapsulation
//Inheritance
//Polymorphism

//Abstract Classes, Interfaces
//is a relationship - one direct parent

//can be relationship
//Interfaces

//Errors and Exceptions