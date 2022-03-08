package edu.wbl.test;

import edu.wbl.basic.Account;

public class DataTypes {

    public static void main(String[] args) {

        //Value types

        //numerical
        byte b = 10;
        short s = 100;
        int i = 1000;
        long l = 100000;

        //decimal
        float f = 100.2334F;
        double d = 100.2343;

        //logical
        boolean b1 = true;

        //character
        char c = 'A';

        Account a1 = new Account();
        a1.setAccountId(101);
        a1.deposit(1000);
        a1.setAccountType("SAVING");

        a1.deposit(500);

        System.out.println(a1.getAccountBalance());
        System.out.println(a1.getMonthlyBalance());

    }

}
