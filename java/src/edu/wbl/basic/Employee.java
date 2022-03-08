package edu.wbl.basic;

public class Employee {

    public int id;
    public double salary;
    public String name;

    public Employee() {

    }
    public Employee(int id) {
        this.id = id;
        //database
    }

    public String getDetails() {
        return name + ":" + salary;
    }
}

//Employee
//Manager is a Employee
//Director is a Manager
//Officer is a Director, Manager, Employee

//is a relationship
//Manager extends Employee = Sub Class extends Super Class
//Subclassing
//Manager will get everything from Employee except private variables and non default constructors.


//                                          Class               Variable            Method
//public  (Everywhere)                        Yes                   Yes                 Yes
//private (class)                             Yes(Inner class)      Yes                 Yes
//default (pkg)                               Yes                   Yes                 Yes
//protected (pkg + children outside)           No                    Yes                Yes


//public class Tesla {
//
//    private TComputer computer;
//
//    private class TComputer() {
//
//    }
//
//
//}