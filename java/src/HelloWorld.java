public class HelloWorld {

    public static void main(String[] args) {
        System.out.println("Hello World!!!");

        int i = 1;

        int j = 2;

        i = j;

        System.out.println(i);
        System.out.println(j);

        j = 3;

        System.out.println(i);
        System.out.println(j);

        String s1 = new String("Hello");
        String s2 = null;
        s2 = new String("World!!!");

        s1 = s2;


    }

}
