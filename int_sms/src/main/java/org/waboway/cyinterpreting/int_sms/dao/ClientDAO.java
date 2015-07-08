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
public class ClientDAO implements DAOConstant {
	Connection connection=null;
	PreparedStatement ps=null;
	ToJSON converter= new ToJSON();

	public JSONArray getClientsDetails() throws Exception{
		JSONArray details= new JSONArray();
		try{
			// get a connection
			connection=CYIntrepretingDB.getDBConnection();

			//run the query
			ps=connection.prepareStatement(GET_ALL_CLIENTS);
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
				System.out.println(e.getMessage());
				throw new Exception(e.getMessage());
			}
		}
	}

	public JSONArray getClientsNames() throws Exception{
		JSONArray details= new JSONArray();
		try{
			// get a connection
			connection=CYIntrepretingDB.getDBConnection();

			//run the query
			ps=connection.prepareStatement(GET_CLIENTS_NAMES);
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
				System.out.println(e.getMessage());
				throw new Exception(e.getMessage());
			}
		}
	}
	public int createClient(JSONObject data) throws Exception {
		// TODO Auto-generated method stub
		int success;
		try{
			// get a connection
			connection=CYIntrepretingDB.getDBConnection();

			//prepare the query
			ps=connection.prepareStatement(CREATE_CLIENT);
			ps.setString(1, data.getString("adress"));
			ps.setString(2, data.getString("marketer"));
			ps.setString(3, data.getString("website"));
			ps.setString(4, data.getString("phone_num"));
			ps.setString(5, data.getString("cell_num"));
			ps.setString(6, data.getString("fax_num"));
			ps.setString(7, data.getString("other_num"));
			ps.setString(8, data.getString("email"));
			ps.setString(9, data.getString("notes"));
			ps.setInt(10, data.getInt("zipcode"));
			ps.setString(11, data.getString("name"));
			ps.setString(12, data.getString("contact"));
			
			// run the query
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

	public int editClient(JSONObject data) throws Exception {
		// TODO Auto-generated method stub
		int success;
		try{
			// get a connection
			connection=CYIntrepretingDB.getDBConnection();

			//prepare the query
			ps=connection.prepareStatement(EDIT_CLIENT);
			ps.setString(1, data.getString("adress"));
			ps.setString(2, data.getString("marketer"));
			ps.setString(3, data.getString("website"));
			ps.setString(4, data.getString("phone_num"));
			ps.setString(5, data.getString("cell_num"));
			ps.setString(6, data.getString("fax_num"));
			ps.setString(7, data.getString("other_num"));
			ps.setString(8, data.getString("email"));
			ps.setString(9, data.getString("notes"));
			ps.setInt(10, data.getInt("zipcode"));
			ps.setString(11, data.getString("name"));
			ps.setString(12, data.getString("contact"));
			ps.setInt(13, data.getInt("client_id"));

			
			
			// run the query
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
	
	private Exception databaseError(){
		return new Exception("Database Error");
	}

}
