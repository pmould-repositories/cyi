/**
 * 
 */
package org.waboway.cyinterpreting.int_sms.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONObject;
import org.waboway.cyinterpreting.util.ToJSON;
/**
 * @author Paul Mould
 *
 */
public class InterpretingDAO implements DAOConstant{
	Connection connection=null;
	PreparedStatement ps=null;
	JSONArray details= new JSONArray();
	ToJSON converter= new ToJSON();

	public JSONArray getInterpretingRequestDetails() throws Exception{
		try{
			// get a connection
			connection=CYIntrepretingDB.getDBConnection();

			//run the query
			ps=connection.prepareStatement(GET_ALL_INTER_REQUEST);
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

	public int createInteRequest(JSONObject data) throws Exception {
		// TODO Auto-generated method stub
		int success;

		System.out.println("Enterred InterpreterDAO in createInterpreter()");
		try{
			// get a connection
			connection=CYIntrepretingDB.getDBConnection();

			//prepare the query
			ps=connection.prepareStatement(CREATE_INTER_REQUEST);
			ps.setString(1, data.getString("client"));
			ps.setString(2, data.getString("app_date"));
			ps.setString(3, data.getString("start_time"));
			ps.setString(4, data.getString("duration"));
			ps.setString(5, data.getString("legal"));
			ps.setString(6, data.getString("lang"));
			ps.setString(7, data.getString("lep_name"));
			ps.setString(8, data.getString("contact_one"));
			ps.setString(9, data.getString("contact_two"));
			ps.setString(10, data.getString("contact_three"));
			ps.setString(11, data.getString("inter_gender"));
			ps.setDouble(12, data.getDouble("rate"));
			ps.setString(13, data.getString("location"));
			ps.setString(14, data.getString("called"));
			ps.setString(15, data.getString("location_notes"));
			ps.setString(16, data.getString("request_notes"));
		
			
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

	public int editInteRequest(JSONObject data) throws Exception {
		// TODO Auto-generated method stub
		int success;

		System.out.println("Enterred InterpreterDAO in editInterpreter()");
		try{
			// get a connection
			connection=CYIntrepretingDB.getDBConnection();

			//prepare the query
			ps=connection.prepareStatement(EDIT_INTER_REQUEST);
			ps.setString(1, data.getString("client"));
			ps.setString(2, data.getString("app_date"));
			ps.setString(3, data.getString("start_time"));
			ps.setString(4, data.getString("duration"));
			ps.setString(5, data.getString("legal"));
			ps.setString(6, data.getString("lang"));
			ps.setString(7, data.getString("lep_name"));
			ps.setString(8, data.getString("contact_one"));
			ps.setString(9, data.getString("contact_two"));
			ps.setString(10, data.getString("contact_three"));
			ps.setString(11, data.getString("inter_gender"));
			ps.setDouble(12, data.getDouble("rate"));
			ps.setString(13, data.getString("location"));
			ps.setString(14, data.getString("called"));
			ps.setString(15, data.getString("location_notes"));
			ps.setString(16, data.getString("request_notes"));
			ps.setInt(17, data.getInt("inter_request_id"));
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
	
	public int UpdateRequest(JSONObject data) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("Enterred InterpreterDAO in getInterpreterName()");
		int success=0;

		try{
			// get a connection
			connection=CYIntrepretingDB.getDBConnection();

			//run the query
			int id=data.getInt("interpreter_id");

			if (id==CANCELLED){
				ps=connection.prepareStatement(CANCEL_INTER_REQUEST);
				ps.setInt(1, data.getInt("inter_request_id"));

			}
			else{
				ps=connection.prepareStatement(UPDATE_INTER_REQUEST);
				ps.setInt(1, data.getInt("interpreter_id"));
				ps.setInt(2, data.getInt("inter_request_id"));
			}	
			success= ps.executeUpdate();
			System.out.println("query executed! " +success +" row(s) affected");

			//convert the result set to JSON
			// not needed

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
				throw new Exception(e.getMessage());
			}
		}
	}


}
