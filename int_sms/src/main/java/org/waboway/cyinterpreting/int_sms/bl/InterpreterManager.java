/**
 * 
 */
package org.waboway.cyinterpreting.int_sms.bl;

import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONObject;
import org.waboway.cyinterpreting.int_sms.dao.InterpreterDAO;

/**
 * @author Paul Mould, Gauthier INGENDE
 *
 */
public class InterpreterManager {

	public JSONArray getDetails(String lang) throws Exception {
		// TODO Auto-generated method stub
		JSONArray details= new JSONArray();

		try {
			InterpreterDAO dao= new InterpreterDAO();
			
			if (lang==null){
				details=dao.getInterpreterDetails();
			}
			else {
				details=dao.getInterpreterName(lang);
				}
			return details;
		} 
		catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new Exception(e.getMessage());
		}
	}

	public JSONObject createInterpreter(JSONObject data) throws Exception {
		
		System.out.println("Entered InterpreterManager in createInterpreter()");
		// TODO Auto-generated method stub
		JSONObject response= new JSONObject();
		int success=0;

		try {

			// insert the data
			InterpreterDAO dao =new InterpreterDAO();
			success=dao.createInterpreter(data);	

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



	public JSONObject editInterpreter(JSONObject data) throws Exception {
		
		System.out.println("Entered InterpreterManager in editInterpreter()");
		// TODO Auto-generated method stub
		JSONObject response= new JSONObject();
		int success=0;

		try {

			// insert the data
			InterpreterDAO dao =new InterpreterDAO();
			success=dao.editInterpreter(data);	

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
