package edu.wbl.test;

import edu.wbl.basic.Account;

public class ObjectClassExample {

    public static void main(String[] args) {


        Account a1 = new Account();
        Account a2 = new Account();


        System.out.println(a1.toString());


        if (a1.equals(a2)) {
           System.out.println("Equals");
        }

       // a1 = a2;

        System.out.println(a1.hashCode());
        System.out.println(a2.hashCode());

       // a1 = null;
        //a2 = null;


        if (a1 == a2) {
            System.out.println("Referential Equal");
        }

    }
}
