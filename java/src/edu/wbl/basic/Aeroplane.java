package edu.wbl.basic;

public class Aeroplane extends Vehicle implements Flyer, FoodService {

    private double mpg = 100;
    private double odoMeterReading = 100000;

    @Override
    public double getMPG() {
        return mpg;
    }

    @Override
    public double getOdoMeterReading() {
        return odoMeterReading;
    }

    @Override
    public void fly() {
        System.out.println("I am flying");
    }

    @Override
    public void land() {
        System.out.println("I am landing");
    }

    @Override
    public void takeOff() {
        System.out.println("I am taking off");
    }

    @Override
    public String getMenu() {
        return "This is the menu";
    }

    @Override
    public void order() {

    }

    @Override
    public void pay() {

    }
}
