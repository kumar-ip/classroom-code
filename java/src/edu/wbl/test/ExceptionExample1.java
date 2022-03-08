package edu.wbl.test;

import edu.wbl.basic.DbConnection;

public class ExceptionExample1 {

    public static void main(String[] args) {
        DbConnection connection = null;

        try {

            connection = DbConnection.getConnection();
            //connection.open()
            //stmt

        }
        catch(ArithmeticException ex) {
            ex.getMessage();
            throw ex;

        }
        catch(Exception ex) {

        } finally {

            if(connection != null && connection.isOpen()) {
                connection.close();
            }

        }

    }

    public static double divison(double a, double b) throws ArithmeticException {
        return a/b;
    }
}

//Exception
//ArthimeticException
