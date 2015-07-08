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

public class InterpreterDAO implements DAOConstant {
	Connection connection=null;
	PreparedStatement ps=null;
	ToJSON converter= new ToJSON();

	//add logger

	public JSONArray getInterpreterDetails() throws Exception{
		JSONArray details= new JSONArray();

		try{
			// get a connection
			connection=CYIntrepretingDB.getDBConnection();

			//run the query
			ps=connection.prepareStatement(GET_ALL_INTERPRETERS);
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

	public int createInterpreter(JSONObject data) throws Exception {
		// TODO Auto-generated method stub
		int success;

		System.out.println("Enterred InterpreterDAO in createInterpreter()");
		try{
			// get a connection
			connection=CYIntrepretingDB.getDBConnection();

			//prepare the query
			ps=connection.prepareStatement(CREATE_INTERPRETER);
			ps.setString(1, data.getString("last_name"));
			ps.setString(2, data.getString("first_name"));
			ps.setString(3, data.getString("adress"));
			ps.setInt(4, data.getInt("zipcode"));
			ps.setString(5, data.getString("phone"));
			ps.setString(6, data.getString("cell"));
			ps.setString(7, data.getString("email"));
			ps.setString(8, data.getString("prim_lang"));
			ps.setString(9, data.getString("secnd_lang"));
			ps.setString(10, data.getString("third_lang"));
			ps.setString(11, data.getString("cert_one"));
			ps.setString(12, data.getString("cert_two"));
			ps.setString(12, data.getString("cert_three"));
			ps.setString(14, data.getString("avail"));
			ps.setString(15, data.getString("notes"));
			ps.setDouble(16, data.getDouble("hourly_rate"));
			ps.setString(17, data.getString("work_auth_vrfd"));
			ps.setString(18, data.getString("degree"));
			ps.setString(19, data.getString("license"));
			ps.setString(20, data.getString("app_type"));
			ps.setDouble(21, data.getDouble("miles_rate"));
			
			try { 
				double rate2=data.getDouble("rate2");
				ps.setDouble(22,rate2);
			}
			catch (Exception e ){
				ps.setDouble(22,0);
			}
		
			
			try { 
				double rate3=data.getDouble("rate3");
				ps.setDouble(23,rate3);
			}
			catch (Exception e ){
				ps.setDouble(23,0);
			}
			try { 
				double rate4=data.getDouble("rate4");
				ps.setDouble(24,rate4);
			}
			catch (Exception e ){
				ps.setDouble(25,0);
			}
			
			ps.setString(24, data.getString("fax"));
			ps.setString(25, data.getString("country"));
			ps.setString(26, data.getString("fourth_lang"));
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

	public JSONArray getInterpreterName(String lang) throws Exception {
		// TODO Auto-generated method stub
		JSONArray details= new JSONArray();
		System.out.println("Enterred InterpreterDAO in getInterpreterName()");
		try{
			// get a connection
			connection=CYIntrepretingDB.getDBConnection();

			//run the query
			ps=connection.prepareStatement(GET_INTERPRETERS_NAMES);
			ps.setString(1, lang);
			ps.setString(2, lang);
			ps.setString(3, lang);
			
			ResultSet rs= ps.executeQuery();
			System.out.println("query executed!");

			//convert the result set to JSON
			details= converter.toJSONArray(rs);

			//close connection
			ps.close();

			//return the result
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

	public int editInterpreter(JSONObject data) throws Exception {
		// TODO Auto-generated method stub
		int success;

		System.out.println("Enterred InterpreterDAO in editInterpreter()");
		try{
			// get a connection
			connection=CYIntrepretingDB.getDBConnection();

			//prepare the query
			ps=connection.prepareStatement(EDIT_INTERPRETER);
			ps.setString(1, data.getString("last_name"));
			ps.setString(2, data.getString("first_name"));
			ps.setString(3, data.getString("adress"));
			ps.setInt(4, data.getInt("zipcode"));
			ps.setString(5, data.getString("phone"));
			ps.setString(6, data.getString("cell"));
			ps.setString(7, data.getString("email"));
			ps.setString(8, data.getString("prim_lang"));
			ps.setString(9, data.getString("secnd_lang"));
			ps.setString(10, data.getString("third_lang"));
			ps.setString(11, data.getString("cert_one"));
			ps.setString(12, data.getString("cert_two"));
			ps.setString(13, "");
			ps.setString(14, data.getString("avail"));
			ps.setString(15, data.getString("notes"));
			ps.setDouble(16, data.getDouble("hourly_rate"));
			ps.setString(17, data.getString("work_auth_vrfd"));
			ps.setString(18, data.getString("degree"));
			ps.setString(19, data.getString("license"));
			ps.setString(20, data.getString("app_type"));
			ps.setDouble(21, data.getDouble("miles_rate"));
			
			try { 
				double rate2=data.getDouble("rate2");
				ps.setDouble(22,rate2);
			}
			catch (Exception e ){
				ps.setDouble(22,0);
			}
		
			
			try { 
				double rate3=data.getDouble("rate3");
				ps.setDouble(23,rate3);
			}
			catch (Exception e ){
				ps.setDouble(23,0);
			}
			try { 
				double rate4=data.getDouble("rate4");
				ps.setDouble(24,rate4);
			}
			catch (Exception e ){
				ps.setDouble(24,0);
			}
			
			ps.setString(25, data.getString("fax"));
			ps.setString(26, data.getString("country"));
			ps.setString(27, data.getString("fourth_lang"));
			ps.setString(28, data.getString("interpreter_id"));
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

}// end of class
