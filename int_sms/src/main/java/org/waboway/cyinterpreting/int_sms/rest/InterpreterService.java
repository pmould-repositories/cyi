/**
 * 
 */
package org.waboway.cyinterpreting.int_sms.rest;

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
import org.waboway.cyinterpreting.int_sms.bl.InterpreterManager;

//import com.mysql.jdbc.Connection;

/**
 * @author Paul Mould, Gauthier INGENDE
 *
 */
@Path("interpreters")
public class InterpreterService {

	/**
	 * This method will be used to retrieve interpreter details
	 *
	 * @return String that will be returned as a text/plain response.
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String getInterpreterDetails(
			@QueryParam("callback") String callback,
			@QueryParam("lang") String lang) throws Exception{

		//logger
		System.out.println("Started Interpreter Service in getInterperterDetails()");
		JSONArray response=new JSONArray();
		String returnString=null;
		try{
			// print the request
			System.out.println("Printing request: "+lang);
			//Convert the request into a object ( Not needed here)

			//validate the request ( Not needed here)

			//pass to Manager
			InterpreterManager manager= new InterpreterManager();
			response=manager.getDetails(lang);

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
	public String createInterpreter( String data) throws Exception{

		//logger
		System.out.println("Interpreter service started in createInterpreter()");
		
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
				InterpreterManager manager= new InterpreterManager();
				response=manager.createInterpreter(request);
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
	public String editInterpreter( String data) throws Exception{

		//logger
		System.out.println("Interpreter service started in editInterpreter()");
		
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
				InterpreterManager manager= new InterpreterManager();
				response=manager.editInterpreter(request);
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
