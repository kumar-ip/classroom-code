package edu.wbl.basic;

public class Account {

    private int accountId;
    private double accountBalance;
    private String accountType;

    public Account() {
        //accountBalance = 100;
    }

    public int getAccountId() {
        return accountId;
    }

    public void setAccountId(int accountId) {
        this.accountId = accountId;
    }

    public double getAccountBalance() {
        return accountBalance;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public double getMonthlyBalance() {
        return accountBalance + (accountBalance * 0.02);
    }

    public void withdraw(double amount) {
        accountBalance -= amount;
    }

    public void deposit(double amount) {
        accountBalance += amount;
    }


}
