package edu.wbl.test;

import edu.wbl.basic.DbConnection;

public class SingletonExample {

    public static void main(String[] args) {

        DbConnection connection1 = DbConnection.getConnection();

        DbConnection connection2 = DbConnection.getConnection();

    }
}
