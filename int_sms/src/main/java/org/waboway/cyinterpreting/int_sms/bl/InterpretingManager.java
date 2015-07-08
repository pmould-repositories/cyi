package org.waboway.cyinterpreting.int_sms.bl;

/**
 * @author Paul Mould
 *
 */
import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONObject;
import org.waboway.cyinterpreting.int_sms.dao.InterpretingDAO;

public class InterpretingManager {
	public JSONArray getDetails(JSONObject request) throws Exception {
		// TODO Auto-generated method stub
		JSONArray details= new JSONArray();

		try {
			InterpretingDAO dao =new InterpretingDAO();
			details=dao.getInterpretingRequestDetails();

			return details;
		} 
		catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new Exception(e.getMessage());
		}
	}

	public JSONObject createInterRequest(JSONObject request) throws Exception {
		System.out.println("Entered InterpretingManager in createInterRequest()");
		// TODO Auto-generated method stub
		JSONObject response= new JSONObject();
		int success=0;

		try {

			// insert the data
			InterpretingDAO dao =new InterpretingDAO();
			success=dao.createInteRequest(request);	

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

	public JSONObject editInterRequest(JSONObject request) throws Exception {
		System.out.println("Entered InterpretingManager in createInterRequest()");
		// TODO Auto-generated method stub
		JSONObject response= new JSONObject();
		int success=0;

		try {

			// insert the data
			InterpretingDAO dao =new InterpretingDAO();
			success=dao.editInteRequest(request);	

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

	public JSONObject UpdateRequest(JSONObject request) throws Exception {
		System.out.println("Entered InterpretingManager in Updtate Request()");
		// TODO Auto-generated method stub
		int success=0;
		JSONObject response= new JSONObject();

		try {

			// update the data
			InterpretingDAO dao =new InterpretingDAO();
			success=dao.UpdateRequest(request);	


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
