package edu.wbl.basic;

public class DbConnection {

    private static DbConnection connection = null;

    private String connectionString;


    private DbConnection() {

    }

    public static DbConnection getConnection() {
        if (connection == null) {
            connection = new DbConnection();
        }

        return connection;
    }


}
