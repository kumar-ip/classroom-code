package edu.wbl.test;

import edu.wbl.basic.*;

public class CompositionExample {

    public static void main(String[] args) {


        //Collection
        //Arrays, ArrayList, Set, Maps

        //Composition



        int[] arr = new int[2]; //{1,2,3,4,5}
        arr[0] = 5;
        arr[1] = 10;
        System.out.println(arr[1]);

        Account[] accounts = new Account[2];
        accounts[0] = new Account();
        accounts[1] = new Account();

        auditAccounts(accounts);


        Customer c1 = new Customer(100);
        System.out.println(c1.getDetails());

        for (Account a : c1.accounts) {
            System.out.println(a.getDetails());
        }




        //list, set and map
        //Set =
        //List - index





    }

    public static void auditAccounts(Account[] accounts) {

    }
}
