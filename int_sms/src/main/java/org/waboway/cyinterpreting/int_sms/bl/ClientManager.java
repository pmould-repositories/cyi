/**
 * 
 */
package org.waboway.cyinterpreting.int_sms.bl;

import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONObject;
import org.waboway.cyinterpreting.int_sms.dao.ClientDAO;

/**
 * @author Paul Mould, Gauthier INGENDE
 *
 */
public class ClientManager {

	public JSONArray getDetails() throws Exception {
		// TODO Auto-generated method stub
		JSONArray details= new JSONArray();

		try {
			ClientDAO dao =new ClientDAO();
			details=dao.getClientsDetails();
			return details;
		} 
		catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new Exception(e.getMessage());
		}
	}

	public JSONArray getClientsNames() throws Exception {
		// TODO Auto-generated method stub
		JSONArray details= new JSONArray();

		try {
			ClientDAO dao =new ClientDAO();
			details=dao.getClientsNames();
			return details;
		} 
		catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new Exception(e.getMessage());
		}
	}	
	
	public JSONObject createClient(JSONObject request) throws Exception {
		// TODO Auto-generated method stub
		JSONObject response= new JSONObject();
		int success=0;

		try {
			
			// insert the data
			ClientDAO dao =new ClientDAO();
			success=dao.createClient(request);	
			
			//frame the response
			if (success>0){
				response.put("code", "0");
				response.put("message", "Succes");
				response.put("error", "None");
			}
			else{
				response.put("code", "2");
				response.put("message", "Was not able to insert te data");
				response.put("error", "Database Error");
			}

			//return
			return response;
		} 
		catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new Exception(e.getMessage());
		}
	}

public JSONObject editClient(JSONObject request) throws Exception {
	// TODO Auto-generated method stub
	JSONObject response= new JSONObject();
	int success=0;

	try {
		
		// insert the data
		ClientDAO dao =new ClientDAO();
		success=dao.editClient(request);	
		
		//frame the response
		if (success>0){
			response.put("code", "0");
			response.put("message", "Succes");
			response.put("error", "None");
		}
		else{
			response.put("code", "2");
			response.put("message", "Was not able to insert te data");
			response.put("error", "Database Error");
		}

		//return
		return response;
	} 
	catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
		throw new Exception(e.getMessage());
	}
}
}
