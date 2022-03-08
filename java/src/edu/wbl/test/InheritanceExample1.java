package edu.wbl.test;

import edu.wbl.basic.Employee;
import edu.wbl.basic.Manager;

public class InheritanceExample1 {

    public static void main(String[] args) {

        Manager m1 = new Manager();
        m1.id = 101;
        m1.name = "IP";
        m1.salary = 1000.0;
        m1.team = "QA";

        System.out.println(m1.getDetails());
        System.out.println(m1.getDetails());

        Employee e1 = new Employee();
        e1.id = 101;
        e1.name = "IP";
        e1.salary = 1000.0;
        System.out.println(e1.getDetails());
    }
}
