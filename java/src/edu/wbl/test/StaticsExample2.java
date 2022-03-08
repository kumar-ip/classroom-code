package edu.wbl.test;

import edu.wbl.basic.Account;

public class StaticsExample2 {

    public static void main(String[] args) {


        Account a1 = new Account();

        Account a2 = new Account();


       System.out.println(Account.getInterestRate());


    }
}
