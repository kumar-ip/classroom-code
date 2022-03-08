package edu.wbl.basic;

public class Customer {

    public int id;
    public String name = "WBL";
    public String email;
    public Account[] accounts;
    public final String SSN;

    public Customer() {
        this(101);
    }

    public Customer(int id) {
        if (id == 100) {
            this.id = 100;
            this.name = "Kumar";
            this.email = "kumar@wbl.com";
            this.accounts = new Account[2];
            this.accounts[0] = new Account();
            this.accounts[0].accountNumber = 101;
            this.accounts[0].setAccountType("CHECKING");

            this.accounts[1] = new Account();
            this.accounts[1].accountNumber = 102;
            this.accounts[1].setAccountType("SAVING");
            this.accounts[1].deposit(1000);
        }
        this.SSN = "000-00-0000";
    }


    public void openAccount(String accountType) {

    }

    public boolean isPremimumCustomer() {
        return true;
    }


    public String getDetails() {
        return name + ":" + email;
    }



}



//class - blueprint
//object - instance

//entity -
//real time - attributes and behaviors
//Pen, Car,
//attributes
//behaviors


//Persistence - Table, Columns
//row - real entity, table - definition of the entity
//XML - XML Schema
//JSON
//class = definition, object,
//attributes - variables
//behaviors - methods

