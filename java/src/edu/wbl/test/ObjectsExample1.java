package edu.wbl.test;

import edu.wbl.basic.*;

public class ObjectsExample1 {

    public static void main(String[] args) {

        int i = 10;

        Customer c1 = new Customer();

//        System.out.println(c1.id);
//        System.out.println(c1.name);

        //object is created
        //default values are set
        //initializations from the class.
        //constructor will run
        //address is copied to reference.


        c1.email = "kumar@wbl.com";
        c1.name = "Kumar";
        c1.id = 101;

        c1.openAccount("SAVING");
        System.out.println(c1.isPremimumCustomer());
        System.out.println(c1.getDetails());


        Customer c2 = new Customer();
        c2.email = "Anuradha@wbl.com";
        c2.name = "Anuradha";
        c2.id = 101;

        c2.openAccount("CHECKING");

        System.out.println(c2.isPremimumCustomer());
        System.out.println(c2.getDetails());


    }

}
