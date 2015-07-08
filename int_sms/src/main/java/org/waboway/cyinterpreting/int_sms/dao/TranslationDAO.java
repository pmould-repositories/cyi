/**
 * 
 */
package org.waboway.cyinterpreting.int_sms.dao;

/**
 * @author Paul Mould, Gauthier INGENDE
 *
 */
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONObject;
import org.waboway.cyinterpreting.util.ToJSON;


public class TranslationDAO implements DAOConstant{
	Connection connection=null;
	PreparedStatement ps=null;
	ToJSON converter= new ToJSON();
	//add logger

	public JSONArray getClientsDetails() throws Exception{
		//loger
		System.out.println("Enterred TransaltionDAO in getClientsDetails");
		JSONArray details= new JSONArray();

		try{
			// get a connection
			connection=CYIntrepretingDB.getDBConnection();

			//run the query
			ps=connection.prepareStatement(GET_ALL_TRANS_ORDERS);
			ResultSet rs= ps.executeQuery();
			System.out.println("query executed!");

			//convert the result set to JSON
			details= converter.toJSONArray(rs);

			//close connection
			ps.close();

			//return the details
			return details;
		}
		catch(SQLException e)	{
			System.out.println(e.getMessage());
			throw databaseError();
		}
		catch(Exception e)	{
			System.out.println(e.getMessage());
			throw new Exception(e.getMessage());
		}

		finally{
			// close the connection and the preparedStatement
			try{
				if (ps!=null) ps.close();
				if (connection!=null) connection.close();
			}
			catch(SQLException e){
				throw new Exception(e.getMessage());
			}
		}
	}

	private Exception databaseError(){
		return new Exception("Database Error");
	}

	public int createTransOrder(JSONObject data) throws Exception {
		// TODO Auto-generated method stub
		int success;

		System.out.println("Enterred InterpreterDAO in createInterpreter()");
		try{
			// get a connection
			connection=CYIntrepretingDB.getDBConnection();

			//prepare the query
			ps=connection.prepareStatement(CREATE_TRANS_ORDERS);
			ps.setString(1, data.getString("client"));
			ps.setString(2, data.getString("doc_type"));
			ps.setString(3, data.getString("lang"));
			ps.setString(4, data.getString("due_date"));
			ps.setString(5, data.getString("cust_name"));
			ps.setString(6, data.getString("notes"));
			ps.setString(7, data.getString("cust_email"));
			ps.setInt(8, data.getInt("nbr_of_pages"));
			ps.setString(9, data.getString("cust_phone"));
			ps.setString(10, data.getString("cust_fax"));
			ps.setString(11, data.getString("notoring_rqd"));
			ps.setDouble(12, data.getDouble("rate"));
			//run the query 
			success= ps.executeUpdate();
			System.out.println("query executed!");

			//convert the result set to JSON( not needed here)

			//close connection
			ps.close();

			//return the result
			return success;

		}
		catch(SQLException e)	{
			System.out.println(e.getMessage());
			throw databaseError();
		}
		catch(Exception e)	{
			System.out.println(e.getMessage());
			throw new Exception(e.getMessage());
		}

		finally{
			// close the connection and the preparedStatement
			try{
				if (ps!=null) ps.close();
				if (connection!=null) connection.close();
			}
			catch(SQLException e){
				System.out.println(e.getMessage());
				throw new Exception(e.getMessage());
			}
		}
	}

	public int editTransOrder(JSONObject data) throws Exception {
		// TODO Auto-generated method stub
		int success;

		System.out.println("Enterred InterpreterDAO in editInterpreter()");
		try{
			// get a connection
			connection=CYIntrepretingDB.getDBConnection();

			//prepare the query
			ps=connection.prepareStatement(EDIT_TRANS_ORDERS);
			ps.setString(1, data.getString("client"));
			ps.setString(2, data.getString("doc_type"));
			ps.setString(3, data.getString("lang"));
			ps.setString(4, data.getString("due_date"));
			ps.setString(5, data.getString("cust_name"));
			ps.setString(6, data.getString("notes"));
			ps.setString(7, data.getString("cust_email"));
			ps.setInt(8, data.getInt("nbr_of_pages"));
			ps.setString(9, data.getString("cust_phone"));
			ps.setString(10, data.getString("cust_fax"));
			ps.setString(11, data.getString("notoring_rqd"));
			ps.setDouble(12, data.getDouble("rate"));
			ps.setInt(13, data.getInt("trans_order_id"));
			//run the query 
			success= ps.executeUpdate();
			System.out.println("query executed!");

			//convert the result set to JSON( not needed here)

			//close connection
			ps.close();

			//return the result
			return success;

		}
		catch(SQLException e)	{
			System.out.println(e.getMessage());
			throw databaseError();
		}
		catch(Exception e)	{
			System.out.println(e.getMessage());
			throw new Exception(e.getMessage());
		}

		finally{
			// close the connection and the preparedStatement
			try{
				if (ps!=null) ps.close();
				if (connection!=null) connection.close();
			}
			catch(SQLException e){
				System.out.println(e.getMessage());
				throw new Exception(e.getMessage());
			}
		}
	}	
}
