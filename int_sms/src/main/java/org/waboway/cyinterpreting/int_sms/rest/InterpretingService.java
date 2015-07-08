package org.waboway.cyinterpreting.int_sms.rest;
/**
 * @author Paul Mould
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
import org.waboway.cyinterpreting.int_sms.bl.InterpretingManager;

@Path("interpreting")
public class InterpretingService {

	/**
	 * This method will be used to retrieve interpreter details
	 *
	 * @return String that will be returned as a text/plain response.
	 */
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public String getInterepretingRequestDetails(
			@QueryParam("callback") String callback,
			@QueryParam("data") String data) throws Exception{
			
		//logger
		System.out.println("Entered Interpreting Service in  getInterepretingRequestDetails()");
		JSONArray response=new JSONArray();
		String returnString=null;
		JSONObject request=null;
		try{
			// print the request
			//System.out.println(data);

			//Convert the request into a object 
			//request= new JSONObject(data);
			//System.out.print("JSON created");

			//validate the request

			//pass to Manager
			InterpretingManager manager= new InterpretingManager();
			response=manager.getDetails(request);

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
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String createInterRequest( String data) throws Exception{
		//logger
		System.out.println("Interpreting service started in createInterRequest()");
		
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
				InterpretingManager manager= new InterpretingManager();
				response=manager.createInterRequest(request);
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
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public String editInterRequest( String data) throws Exception{

		//logger
		System.out.println("Interpreting service started in editInterRequest()");
		
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
				InterpretingManager manager= new InterpretingManager();
				response=manager.editInterRequest(request);
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
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@Path("assign_to")
	public String UpdateInterRequest( String data) throws Exception{

		//logger
		System.out.println("Interpreting service started in UpdateInterRequest()");
		
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
				InterpretingManager manager= new InterpretingManager();
				response=manager.UpdateRequest(request);
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
}
