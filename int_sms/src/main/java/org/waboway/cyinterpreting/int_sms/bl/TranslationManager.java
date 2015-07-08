/**
 * 
 */
package org.waboway.cyinterpreting.int_sms.bl;

import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONObject;
import org.waboway.cyinterpreting.int_sms.dao.TranslationDAO;

/**
 * @author Paul Mould
 *
 */
public class TranslationManager {
	public JSONArray getDetails() throws Exception {
		// TODO Auto-generated method stub
		JSONArray details= new JSONArray();
		
		try {
			TranslationDAO dao =new TranslationDAO();
			details=dao.getClientsDetails();
			return details;
		} 
		catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			throw new Exception(e.getMessage());
		}
	}

	public JSONObject createTransOrder(JSONObject request) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("Entered TransalationManager in createTransOrder()");
		// TODO Auto-generated method stub
		JSONObject response= new JSONObject();
		int success=0;

		try {

			// insert the data
			TranslationDAO dao =new TranslationDAO();
			success=dao.createTransOrder(request);	

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

	public JSONObject editTransOrder(JSONObject request) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("Entered TransalationManager in createTransOrder()");
		// TODO Auto-generated method stub
		JSONObject response= new JSONObject();
		int success=0;

		try {

			// insert the data
			TranslationDAO dao =new TranslationDAO();
			success=dao.editTransOrder(request);	

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
