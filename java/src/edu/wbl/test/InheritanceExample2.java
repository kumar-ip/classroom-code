package edu.wbl.test;

import edu.wbl.basic.*;

public class InheritanceExample2 {


    public static void main(String[] args) {

        int i = 10;
        //long l = 43265786786L; //implicit casting
        long l = i;
        int k = (int)l; //explicit casting
        System.out.println(k);


        Manager m1 = new Manager();
        m1.id = 101;
        m1.salary = 1000.0;
        m1.team = "QA";
        m1.name = "WBL";

        Employee e1 = m1;
        System.out.println(e1.getDetails());


    }


}
