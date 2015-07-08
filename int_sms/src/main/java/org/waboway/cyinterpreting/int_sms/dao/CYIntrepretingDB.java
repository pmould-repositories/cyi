/**
 * 
 */
package org.waboway.cyinterpreting.int_sms.dao;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


/**
 * @author Paul Mould, Gauthier INGENDE
 *
 */
public class CYIntrepretingDB {

	protected static Connection getDBConnection() throws Exception{
		Connection conn = null;
		String jdbcUrl = "DATABASE-URL";

		// Load the JDBC Driver
		try {
			Class.forName("com.mysql.jdbc.Driver");
			System.out.println("Driver loaded!");
		} 
		catch (ClassNotFoundException e) {
			throw new RuntimeException("Cannot find the driver in the classpath!", e);
		}
		
		// Create connection to RDS instance
		try {
			conn = DriverManager.getConnection(jdbcUrl);
			System.out.println("Got the connection"); 		
		} 
		catch (SQLException ex) {
			// handle any errors
			System.out.println("SQLException: " + ex.getMessage());
			System.out.println("SQLState: " + ex.getSQLState());
			System.out.println("VendorError: " + ex.getErrorCode());
		}
		return conn;
	}
}// end of class
