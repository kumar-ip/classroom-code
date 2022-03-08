package edu.wbl.test;

import edu.wbl.basic.*;

public class AbstractClassesExample2 {

    public static void main(String[] args) {

        Aeroplane a = new Aeroplane();
        checkVehicle(a);
        controlAirTraffic(a);


    }


    public static void controlAirTraffic(Flyer f) {
        f.land();
    }

    public static boolean checkVehicle(Vehicle v) {
        if (v.getGallonsConsumed() > 10000) {
            return false;
        }
        return true;
    }

}
