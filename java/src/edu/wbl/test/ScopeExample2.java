package edu.wbl.test;

public class ScopeExample2 {

    public int i = 1;

    public void firstMethod() {

        int i = 4, j = 10;
        this.i = i + j;
        secondMethod(10);
    }


    public void secondMethod(int i) {
        int j = 10;
        this.i = i +j;
    }


    public static void main(String[] args) {
        ScopeExample2 x2 = new ScopeExample2();
        x2.firstMethod();

    }

}
