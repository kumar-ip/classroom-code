package edu.wbl.basic;

import java.util.ArrayList;

public class Account {

    public int accountNumber;
    private double accountBalance;
    private String accountType;
    private static double interestRate;

    static {
        interestRate = 0.02;
    }

    public Account() {
        accountBalance = 50.0;
        accountType = "CHECKING";
    }

    public static double getInterestRate() {
        return interestRate;
    }

    public double getAccountBalance() {
        return accountBalance;
    }

    public double getMonthlyAccountBalance() {
        return accountBalance + (getInterestRate() * accountBalance);
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public void withdraw(double amount) {
        accountBalance -= amount;
    }

    public void deposit(double amount) {
        accountBalance += amount;
    }


    public String getDetails() {
        return this.accountNumber + ":" + this.accountBalance + ":" + this.accountType;
    }

    public boolean equals(Object o) {

        if (o instanceof Account) {
            Account a1 = (Account)o;

            if (this.accountNumber == a1.accountNumber) {
                return true;
            }
        }

        return false;

    }

    public String toString() {
        return this.accountNumber + ":" + this.accountBalance;
    }
}

//edu.wbl.basic.Account

//lower case - packages, value types, keywords
//UPPER CASE - constants
// Initcap, Bankaccount
// PascalCase - BankAccount - classes
// camelCase - bankAccountNumber - methods and variables


//entity - class
//attributes - variables
//behaviors or operations - methods