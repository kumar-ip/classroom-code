package edu.wbl.test;

import edu.wbl.basic.*;

public class AbstractClassesExample1 {

    public static void main(String[] args) {

        Car c1 = new Car();
        c1.make = "Toyota";
        c1.model = "Camry";
        c1.year = 2010;
        c1.setMpg(30);
        c1.setOdoMeterReading(100000);

        System.out.println(c1.getGallonsConsumed());

        System.out.println(isSmogCheckRequired(c1));

    }

    public static boolean isSmogCheckRequired(Vehicle v) {

        if (v.getGallonsConsumed() > 3000) {
            return true;
        }

        return false;

    }


}
