public class DataTypes {

    public static void main(String[] args) {


        //value types
        //byte, short, int, long, float, double, boolean, char

        int i = 10;
        int j = 20;
        i = j;
        System.out.println(i + ":" + j);
        j = 100;
        System.out.println(i + ":" + j);

        Integer myInt1 = new Integer(10);

        Integer myInt2 = new Integer(20);

        myInt1 = myInt2;

        System.out.println(myInt1.intValue() + ":" + myInt2.intValue());

        Integer myInt3 = null;






    }

}
