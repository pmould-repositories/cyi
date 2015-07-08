package org.waboway.cyinterpreting.int_sms.rest;

/**
 * @author Paul Mould, Gauthier INGENDE
 *
 */
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONObject;
import org.waboway.cyinterpreting.int_sms.bl.TranslationManager;

@Path("translation")
public class TranslationService {
	/**
	 * This method will be used to retrieve interpreter details
	 *
	 * @return String that will be returned as a text/plain response.
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String getTransDetails(
			@QueryParam("callback") String callback,
			@QueryParam("data") String data) throws Exception{

		//logger

		JSONArray response=new JSONArray();
		String returnString=null;
		try{
			// print the request

			//Convert the request into a object ( Not needed here)

			//validate the request

			//pass to Manager
			TranslationManager manager= new TranslationManager();
			response=manager.getDetails();

			//return the response
			System.out.println(response);	
			returnString=response.toString();
			return returnString;
		}
		catch(Exception e){
		System.out.println(e.getMessage()); 
		JSONObject errorObj = new JSONObject();
		errorObj.put("code", "500");
		errorObj.put("message", "Internal Server Error");
		errorObj.put("error", e.getMessage());
		returnString = errorObj.toString();
		return returnString;
	   }
	}
	
	@POST
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED,MediaType.APPLICATION_JSON})
	@Produces(MediaType.APPLICATION_JSON)
	public String createTransOrder( String data) throws Exception{

		//logger
		System.out.println("Translation service started in createTransOrder()");
		
		JSONObject response= null;
		JSONObject request= null;
		String returnString=null;
		String validation=null;
		
		
		try{
			// print the request
			System.out.println(data);

			//Convert the request into a object
			request= new JSONObject(data);
			System.out.print("JSON created");
			//validate the request
			validation=validateRequest(request);
			if (validation.equals("success")){

				//pass to Manager
				TranslationManager manager= new TranslationManager();
				response=manager.createTransOrder(request);
			}
			else{
				response= new JSONObject();
				response.put("code", "1");
				response.put("message", validation);
				response.put("error", "Validation Error");
			}

			//return the response
			System.out.println(response);	
			returnString=response.toString();
			return returnString;
		}
		catch(Exception e){
			System.out.println(e.getMessage()); 
			response=new JSONObject();
			response.put("code", "500");
			response.put("message", "Internal Server Error");
			response.put("error", e.getMessage());
			returnString = response.toString();
			return returnString;
		}
	}
	
	@PUT
	@Consumes({MediaType.APPLICATION_FORM_URLENCODED,MediaType.APPLICATION_JSON})
	@Produces(MediaType.APPLICATION_JSON)
	public String editTransOrder( String data) throws Exception{

		//logger
		System.out.println("Translation service started in editTransOrder()");
		
		JSONObject response= null;
		JSONObject request= null;
		String returnString=null;
		String validation=null;
		
		
		try{
			// print the request
			System.out.println(data);

			//Convert the request into a object
			request= new JSONObject(data);
			System.out.print("JSON created");
			//validate the request
			validation=validateRequest(request);
			if (validation.equals("success")){

				//pass to Manager
				TranslationManager manager= new TranslationManager();
				response=manager.editTransOrder(request);
			}
			else{
				response= new JSONObject();
				response.put("code", "1");
				response.put("message", validation);
				response.put("error", "Validation Error");
			}

			//return the response
			System.out.println(response);	
			returnString=response.toString();
			return returnString;
		}
		catch(Exception e){
			System.out.println(e.getMessage()); 
			response=new JSONObject();
			response.put("code", "500");
			response.put("message", "Internal Server Error");
			response.put("error", e.getMessage());
			returnString = response.toString();
			return returnString;
		}
	}
	
	private String validateRequest(JSONObject data) {
		// TODO Auto-generated method stub
		return "success";
	}
}
