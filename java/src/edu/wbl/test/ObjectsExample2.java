package edu.wbl.test;

import edu.wbl.basic.Account;

public class ObjectsExample2 {

    public static void main(String[] args) {

        Account a1 = new Account();
        a1.deposit(100);
        a1.withdraw(25);


        System.out.println(a1.getAccountBalance());

        
    }


}
