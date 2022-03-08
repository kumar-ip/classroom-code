package edu.wbl.test;

public class Count {

    public int serialNumber;
    public static int counter = 0;

    public Count() {
        counter++;
        serialNumber = counter;
    }

    public static void main(String[] args) {
        Count c1 = new Count();

        Count c2 = new Count();

        Count c3 = new Count();

    }
}
