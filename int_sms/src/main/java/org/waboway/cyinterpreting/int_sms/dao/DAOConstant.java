/**
 * 
 */
package org.waboway.cyinterpreting.int_sms.dao;

/**
 * @author Paul Mould, Gauthier INGENDE
 *
 */
public interface DAOConstant {
	
	public static final int CANCELLED=7;
	
	public static final String GET_ALL_INTERPRETERS=" select "
			+ "`interpreter_id`,`last_name`,`first_name`,`adress`,`zipcode`,`phone`,`cell`,`email`,`prim_lang`,"
			+ "`secnd_lang`,`third_lang`,`cert_one`,`cert_two`,"
			+ "`cert_three`,`avail`,`notes`,`hourly_rate`,`work_auth_vrfd`,`degree`,`license`,`app_type`,`miles_rate`,`rate2`,`rate3`,`rate4`,`fax`,`country`,`fourth_lang`"
			+ " from interpreters";

	public static final String GET_INTERPRETERS_NAMES= "select"
			+ " `interpreter_id`,`last_name`,`first_name`, concat_ws(', ',first_name,last_name) as full_name"
			+ " from interpreters where avail='Y' and (prim_lang=? OR secnd_lang=? OR third_lang=?)"
			+ " union all select `interpreter_id`,`last_name`,`first_name`, last_name as full_name"
			+ " from interpreters where  interpreter_id=7";


	public static final String CREATE_INTERPRETER ="INSERT INTO interpreters"
			+ "(`last_name`,`first_name`,`adress`,`zipcode`,`phone`,`cell`,`email`,`prim_lang`,`secnd_lang`,`third_lang`,`cert_one`,`cert_two`,"
			+ "`cert_three`,`avail`,`notes`,`hourly_rate`,`work_auth_vrfd`,`degree`,`license`,`app_type`,`miles_rate`,`rate2`,`rate3`,`rate4`,`fax`,`country`,`fourth_lang`)"
			+ "VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	
	public static final String EDIT_INTERPRETER ="UPDATE `mydatabase`.interpreters"
			+ " SET last_name=?,first_name=?,adress=?,zipcode=?,phone=?,cell=?,email=?,prim_lang=?,secnd_lang=?,third_lang=?,cert_one=?,cert_two=?,"
			+ "cert_three=?,avail=?,notes=?,hourly_rate=?,work_auth_vrfd=?,degree=?,license=?,app_type=?,miles_rate=?,rate2=?,rate3=?,rate4=?,fax=?,country=?,fourth_lang=?"
			+ " where interpreter_id=?";
	public static final String GET_ALL_CLIENTS="select "
			+ "`client_id`,`adress`,`marketer`,`website`,`phone_num`,`cell_num`,`fax_num`,`other_num`,`email`,`notes`,`zipcode`,`name`,`contact` "
			+ "from clients";
	public static final String GET_CLIENTS_NAMES="select "
			+ "`client_id`,`name` from clients";	

	public static final String CREATE_CLIENT = "INSERT INTO clients("
			+ "`adress`,`marketer`,`website`,`phone_num`,`cell_num`,`fax_num`,`other_num`,`email`,`notes`,`zipcode`,`name`,`contact`)"
			+ "VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";	
	
	public static final String EDIT_CLIENT = "UPDATE `mydatabase`.clients"
			+ " SET adress =?,marketer=?,website=?,phone_num=?,cell_num=?,fax_num=?,other_num=?,email=?,notes=?,zipcode=?,name=?,contact=?"
			+ " where client_id=?";

	public static final String GET_ALL_INTER_REQUEST="SELECT `inter_request`.`inter_request_id`,`inter_request`.`timestamp`,"
			+" `inter_request`.`app_date`,`inter_request`.`start_time`,`inter_request`.`duration`,`inter_request`.`lang`,`inter_request`.`lep_name`,"
			+" `inter_request`.`contact_one`,`inter_request`.`contact_two`, `inter_request`.`contact_three`,"
			+"`inter_request`.`inter_gender`,`inter_request`.`client`,`inter_request`.`location`,`inter_request`.`legal`,"
			+"`inter_request`.`location_notes`,`inter_request`.`request_notes`,`inter_request`.`called`,`inter_request`.`rate`, `inter_request`.`assigned_to`"
			+"FROM `mydatabase`.`inter_request`";


	public static final String CREATE_INTER_REQUEST="INSERT INTO `mydatabase`.`inter_request`"
			+"(`client`,`app_date`,`start_time`,`duration`,"
			+"`legal`,`lang`,`lep_name`,`contact_one`,`contact_two`,`contact_three`,"
			+"`inter_gender`,`rate`,`location`,`called`,`location_notes`,`request_notes`)"
			+"VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	
	public static final String EDIT_INTER_REQUEST="UPDATE `mydatabase`.`inter_request`"
			+"SET client=?,app_date=?,start_time=?,duration=?,legal=?,"
			+"lang=?,lep_name=?,contact_one=?,contact_two=?,contact_three=?,"
			+"inter_gender=?,rate=?,location=?,called=?,location_notes=?,request_notes=?"
			+ " where inter_request_id=?";

	public static final String UPDATE_INTER_REQUEST="UPDATE `mydatabase`.`inter_request`"  
			+"SET assigned_to=( select concat_ws(', ',first_name,last_name) from interpreters where interpreter_id=?) "
			+"where inter_request_id=? ";
	
	public static final String CANCEL_INTER_REQUEST="UPDATE `mydatabase`.`inter_request`"  
			+"SET assigned_to='Cancelled'"
			+"where inter_request_id=? ";

	public static final String GET_LOCATION_DETAILS= "select * from location where location_id=?";

	public static final String GET_ALL_TRANS_ORDERS="SELECT `trans_orders`.`trans_order_id`, `trans_orders`.`doc_type`,"
			+ " `trans_orders`.`client`, `trans_orders`.`lang`,"
			+"`trans_orders`.`timestamp`,`trans_orders`.`due_date`,`trans_orders`.`cust_name`,`trans_orders`.`notes`,"
			+"`trans_orders`.`cust_email`,`trans_orders`.`nbr_of_pages`,`trans_orders`.`cust_phone`,"
			+"`trans_orders`.`cust_fax`,`trans_orders`.`notoring_rqd`, `trans_orders`.`rate`"
			+"FROM `mydatabase`.`trans_orders`";

	
	
	public static final String CREATE_TRANS_ORDERS="INSERT INTO `mydatabase`.`trans_orders`"
			+"(`client`,`doc_type`,`lang`,`due_date`,`cust_name`,`notes`,"
			+ "`cust_email`,`nbr_of_pages`,`cust_phone`,`cust_fax`,`notoring_rqd`,`rate`)"
			+"VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
	
	public static final String EDIT_TRANS_ORDERS="UPDATE `mydatabase`.`trans_orders`"
			+"SET client=?,doc_type=?,lang=?,due_date=?,cust_name=?,notes=?,"
			+ "cust_email=?,nbr_of_pages=?,cust_phone=?,cust_fax=?,notoring_rqd=?,rate=?"
	        + " where trans_order_id=?";
	
}
