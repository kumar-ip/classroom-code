package edu.wbl.test;

import edu.wbl.basic.*;

public class InheritanceExample3 {

    public static void main(String[] args) {


        Employee e1 = new Employee();
        e1.name = "IP";
        e1.id = 101;
        e1.salary = 1000.0;
        //System.out.println(e1.getDetails());
        calculateBonus(e1);
        //Manager m3 = (Manager)e1;

        Manager m1 = new Manager();
        m1.name = "WBL";
        m1.team = "QA";
        m1.id = 102;
        m1.salary = 1500.0;
        System.out.println(m1.getDetails());
        calculateBonus(m1);

        Employee e2 = m1;

        calculateBonus(e2);

        Manager m2 = (Manager)e2;
        System.out.println(e2.getDetails());
        //System.out.println(m2.getDetails());


    }

    public static void calculateBonus(Employee e) {

        double bonus = 0.0;

        if (e instanceof Manager) {
            bonus = e.salary + (e.salary * 0.06);
        } else {
            bonus = e.salary + (e.salary * 0.05);
        }

       System.out.println(bonus);
       System.out.println(e.getDetails());
    }
}
