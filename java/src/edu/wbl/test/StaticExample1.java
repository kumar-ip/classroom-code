package edu.wbl.test;

import edu.wbl.basic.Account;

public class StaticExample1 {

    public static void main(String[] args) {
        Account a = null;
        System.out.println(Account.getInterestRate());
    }
}
