package edu.wbl.test;

public class WrapperClassesExample1 {

    public static void main(String[] args) {

        int i = 10;

        int[] arr = new int[1];

        //arr[0] = i;

        //byte, short, int, long, double, float, boolean, chat

        Integer myInt = new Integer(i);
        arr[0] = myInt.intValue();

        //Integer.MAX_VALUE



    }
}
