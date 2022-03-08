package edu.wbl.test;

import edu.wbl.basic.Account;

public class PassByValue {

    public static void main(String[] args) {
        int i = 10;
        doSomething(i);
        System.out.println(i);

        Account a = new Account();
        a.setAccountType("CHECKING");
        a.deposit(100);
        a.accountNumber = 101;

        doSomething(a);
        System.out.println(a.getAccountBalance());

    }

    public static void doSomething(Account a) {

        a.deposit(1000);
        a = null;
    }

    public static void doSomething(int i) {

        i = 100;

    }

    public static int add(int a, int b) {
        return a+b;
    }
}
