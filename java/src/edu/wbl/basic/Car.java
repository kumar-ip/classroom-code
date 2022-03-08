package edu.wbl.basic;

public class Car extends Vehicle {
    private double mpg;

    private double odoMeterReading;

    @Override
    public double getMPG() {
        return mpg;
    }

    public void setMpg(double mpg) {
        this.mpg = mpg;
    }

    @Override
    public double getOdoMeterReading() {
        return odoMeterReading;
    }

    public void setOdoMeterReading(double odoMeterReading) {
        this.odoMeterReading = odoMeterReading;
    }

}
