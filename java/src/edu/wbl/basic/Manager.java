package edu.wbl.basic;

public class Manager extends Employee {

    public String team;

    public Manager() {
        super(101);
    }

    public String getDetails() {
        return super.getDetails() + ":" + team;
    }
}


