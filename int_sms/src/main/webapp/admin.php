<?php include('header.php') ?>
  <div class="inner calendar">
  	<div id="calendar"><i class="fa fa-close cal-close"></i></div>
  </div>
  <div class="modal-holder">
	<div class="modal">
		<div class="close"><i class="fa fa-close"></i></div>
		<form id="requestt" class="modalBox clearfix">
			<h2><i class="fa fa-plus-circle"></i>Create Request</h2>
			<div>
				<input name="client" type="text" placeholder="Client"
					class="required">
			</div>
			<div>
				<label class="required">Appointment Date</label><input
					name="app_date" type="date">
			</div>
			<div>
				<label>Appointment Type</label>
				<select name="app_type" type="text">
					<option value='Med' selected>Medical</option>
					<option value='Cpmm'>Community</option>
					<option value='Leg'>Legal</option>
					<option value='Co'>Court</option>
					<option value='Conf'>Conference</option>
				</select>
			</div>
			<div>
				<label class="required">Start Time</label> <select
					name="start_time_hour" type="number"></select> :<select
					name="start_time_min" type="number"></select>
			</div>
			<div>
				<input name="duration" type="number" placeholder="Duration (in hrs)"
					class="required">
			</div>
			<div>
				<label class="required">Language</label><select name="lang"
					type="text" placeholder="Language" class="required"></select>
			</div>
			<div>
				<input name="lep_name" type="text" placeholder="LEP Name"
					class="required">
			</div>
			<div>
				<input name="contact_one" type="text" placeholder="Onsite Contact Name"
					class="required">
			</div>
			<div>
				<input name="contact_two" type="text" placeholder="Onsite Number">
			</div>
			<div>
				<input name="contact_three" type="text" placeholder="Onsite Contact 2">
			</div>
			<div>
				<label>Gender</label> <select name="inter_gender" type="text">
					<option value='N'>Male</option>
					<option value='Y' selected>Female</option>
				</select>
			</div>
			<div>
				<input name="rate" type="number" placeholder="Rate">
			</div>
			<div>
				<input name="adress" type="text" placeholder="Location">
			</div>
			<div>
				<textarea name="location_notes" placeholder="Location Notes"></textarea>
			</div>
			<div>
				<textarea name="request_notes" placeholder="Request Notes"></textarea>
			</div>
			<div>
				<input id="cancel" type="button" value="CANCEL" class="request">
				<input type="submit" value="SUBMIT" class="request">
			</div>
		</form>

		<form id="order" class="modalBox clearfix">
			<h2><i class="fa fa-cart-plus"></i>Create Order</h2>
			<div>
				<input name="client_name" type="text" placeholder="Client Name"
					class="required">
			</div>
			<div>
				<label class="required">Date Due</label><input name="due_date"
					type="date">
			</div>
			<div>
				<input name="doc_type" type="text" placeholder="Document Type"
					class="required">
			</div>
			<div>
				<input name="nbr_of_pages" type="number"
					placeholder="Number Of Pages" class="required">
			</div>
			<div>
				<input name="cust_name" type="text" placeholder="Contact Name"
					class="required">
			</div>
			<div>
				<input name="cust_phone" type="number" placeholder="Phone Number"
					class="required">
			</div>
			<div>
				<input name="cust_fax" type="number" placeholder="Fax Number">
			</div>
			<div>
				<input name="cust_email" type="text" placeholder="Email">
			</div>
			<div>
				<label class="required">Language </label><select name="lang"
					type="text" placeholder="Language" class="required"></select>
			</div>
			<div>
				<label class="required">Notoring Required</label><select
					name="notoring_rqd" type="text">
					<option selected value='N'>No</option>
					<option value='Y'>Yes</option>
				</select>
			</div>
			<div>
				<input name="rate" type="number" placeholder="Price"
					class="required">
			</div>

			<div>
				<label>Notes</label>
				<textarea name="notes"></textarea>
			</div>


			<div>
				<input type="submit" value="SUBMIT" class="request"> <input
					id="cancel" type="button" value="CANCEL" class="request">
			</div>
		</form>

		<form id="client" class="modalBox clearfix">
			<h2><i class="fa fa-bank"></i>Create New Client</h2>
			<div>
				<input name="name" type="text" placeholder="Client Name"
					class="required">
			</div>
			<div>
				<input name="contact_name" type="text" placeholder="Contact Name"
					class="required">
			</div>
			<div>
				<input name="marketer" type="text" placeholder="Marketer">
			</div>
			<div>
				<input name="adress" type="text" placeholder="Address">
			</div>
			<div>
				<input name="zipcode" type="number" placeholder="Zip Code"
					class="required">
			</div>
			<div>
				<input name="email" type="text" placeholder="Email">
			</div>
			<div>
				<input name="phone_num" type="number" placeholder="Phone Number">
			</div>
			<div>
				<input name="cell_num" type="number" placeholder="Cell Number">
			</div>
			<div>
				<input name="other_num" type="number" placeholder="Alternate Number">
			</div>
			<div>
				<input name="fax_num" type="number" placeholder="Fax Number">
			</div>
			<div>
				<input placeholder="Website URL" name="website" type="text">
			</div>
			<div>
				<textarea name="notes" placeholder="Notes"></textarea>
			</div>

			<div>
				<input id="cancel" type="button" value="CANCEL" class="request">
				<input type="submit" value="SUBMIT" class="request">
			</div>
		</form>
		<form id="interpreter" class="modalBox clearfix">
			<h2><i class="fa fa-user-plus"></i>Create New Interpreter</h2>
			<div>
				<input name="first_name" type="text" placeholder="First Name"
					class="required">
			</div>
			<div>
				<input name="last_name" type="text" placeholder="Last Name"
					class="required">
			</div>
			<div>
				<input name="adress" type="text" placeholder="Street Address"
					class="required">
			</div>
			<div>
				<input name="zipcode" type="number" placeholder="Zip Code"
					class="required">
			</div>
			<div>
				<input name="phone" type="text" placeholder="Home Phone Number">
			</div>
			<div>
				<input name="cell" type="text" placeholder="Cell Phone Number"
					class="required">
			</div>
			<div>
				<input name="fax" type="text" placeholder="Fax Number">
			</div>
			<div>
				<input name="email" type="email" placeholder="Email"
					class="required">
			</div>
			<div>
				<label class="required" style="display:block">Primary Language </label>
				<select style="display:inline-block" name="prim_lang" type="text" placeholder="Primary Language" class="required"></select>
				<input style="display:inline-block;width: 25%" name="hourly_rate" type="number" placeholder="Hourly Rate"
					class="required">
			</div>
			<div>
				<label style="display:block">Secondary Language </label><select style="display:inline-block" 
					name="secnd_lang" type="text" placeholder="Secondary Language"
					></select>
				<input style="display:inline-block;width: 25%" name="rate2" type="number" placeholder="Hourly Rate">
			</div>
			<div>
				<label style="display:block">Third Language </label><select style="display:inline-block" 
					name="third_lang" type="text" placeholder="Third Language"
				    ></select>
				<input style="display:inline-block;width: 25%" name="rate3" type="number" placeholder="Hourly Rate">
			</div>
			<div>
				<label style="display:block">Fourth Language </label><select style="display:inline-block" 
					name="fourth_lang" type="text" placeholder="Fourth Language"
				    ></select>
				<input style="display:inline-block;width: 25%" name="rate4" type="number" placeholder="Hourly Rate">
			</div>
			<div>
				<label>Native Country </label><select id="country"
					name="country" type="text" placeholder="Native Country"
				    ></select>
				    <script type="text/plain">
					populateCountries("country");
 					</script>
			</div>
			   
			<div>
				<input name="cert_one" type="text" placeholder="Certification 1">
			</div>
			<div>
				<input name="cert_two" type="text" placeholder="Certification 2">
			</div>
			<div>
				<label class="required">Availability</label><select name="avail"
					type="text">
					<option selected value="Y">Yes</option>
					<option value="N">No</option>
				</select>
			</div>
			<div>
				<label>Work Authorization Verified?</label> <select
					name="work_auth_vrfd" type="text"
					placeholder="Work Authorization Verified?">
					<option value='N'>No</option>
					<option value='Y' selected>Yes</option>
				</select>
			</div>
			<div>
				<input name="degree" type="text" placeholder="Degree">
			</div>
			<div>
				<input name="license" type="text" placeholder="Licence">
			</div>
			<div>
				<input name="miles_rate" type="number" placeholder="Miles Rate"
					class="required">
			</div>
			<div>
				<textarea name="notes" placeholder="Notes"></textarea>
			</div>

			<div>
				<input id="cancel" type="button" value="CANCEL" class="request">
				<input type="submit" value="SUBMIT" class="request">
			</div>
		</form>
	</div>
  </div>
	<!--end modal-->

	<div class="header">
		<div class="inner-fluid clearfix">
			<div class="logo">
				<a href="#"><img
					src="http://static.wixstatic.com/media/9631ca_65b15fb5857947f6a5449e82d9e60b1b.jpg_256"></a>
			</div>
			<h1 class="slogan">
				<p>Culturally</p>
				<p>Yours</p>
				<p>Interpreting</p>
			</h1>
		</div>
	</div>
	<div id="admin-con" class="container clearfix">
		<div class="admin-controls">
			<div class="admin-controls-nav">
				<p class="requestt option"><i class="fa fa-plus-circle"></i>Create Request</p>
				<p class="order option"><i class="fa fa-cart-plus"></i>Create Order</p>
				<p class="client option"><i class="fa fa-bank"></i>Create Client</p>
				<p class="interpreter option"><i class="fa fa-user-plus"></i>Create Interpreter</p>
			</div>
			<div class="footer">
				<p>Copyright &copy; 2014-2015 Culturally Yours Interpreting,Inc-All Rights Reserved.</p>
			</div>
		</div><!--end of admin-controls nav-->

		<div class="cal-icon cal-close">
			<i class="fa fa-calendar"></i>
			<p>View Calendar</p>
		</div>

		<div id="admin-tabs" class="floated admin-tabs">
			<ul>
				<li><a href="#tabs-5">QuickBooks</a></li>
				<li><a href="#tabs-1">Requests</a></li>
				<li><a href="#tabs-2">Orders</a></li>
				<li><a href="#tabs-3">Clients</a></li>
				<li><a href="#tabs-4">Interpreters</a></li>
			</ul>
			<div id="tabs-5" class="requestcal">
				
			</div>
			<div id="tabs-1" class="interreq">
				<table sortable>
					<thead>
						<tr>
							<th class="iD">ID</th>
							<th class="aSS">Assign</th>
							<th class="">Client</th>
							<th class="aDU">App. Date</th>
							<th class="sT">Start Time</th>
							<th class="dU">Duration</th>
							<th class="La">Language</th>
							<th class="aDM">Assigned To</th>
							<th class="cN">Onsite Contact</th>
							<th class="fU">Follow Up Call</th>
							<th class=""></th>
							<th class=""></th>
						</tr>
					</thead>
					<tbody>
					</tbody>
					<tfoot>
						<tr>
							<th class="iD">ID</th>
							<th class="Ass">Assign</th>
							<th class="">Client</th>
							<th class="aDU">App. Date</th>
							<th class="sT">Start Time</th>
							<th class="dU">Duration</th>
							<th class="La">Language</th>
							<th class="aDM">Assigned To</th>
							<th class="cN">Onsite Contact</th>
							<th class="fU">Follow Up Call</th>
							<th class=""></th>
							<th class=""></th>
						</tr>
					</tfoot>
				
				</table>
			</div>
			<div id="tabs-2" class="transreq">
				<table sortable>
					<thead>
						<tr>
							<th class="iD">ID</th>
							<th class="">Client</th>
							<th class="oD">Order Date</th>
							<th class="dD">Date Due</th>
							<th class="lA">Language</th>
							<th class="nP">Nbr of Pages</th>
							<th class="eM">Email</th>
							<th class="nA">Contact Name</th>
							<th class=""></th>
							<th class=""></th>
						</tr>
					</thead>
					<tbody>
					</tbody>
					<tfoot>
						<tr>
							<th class="iD">ID</th>
							<th class="">Client</th>
							<th class="oD">Order Date</th>
							<th class="dD">Date Due</th>
							<th class="lA">Language</th>
							<th class="nP">Nbr of Pages</th>
							<th class="eM">Email</th>
							<th class="nA">Contact Name</th>
							<th class=""></th>
							<th class=""></th>
						</tr>
					</tfoot>
				
				</table>
			</div>
			<!--//End of Tab 2-->
			<div id="tabs-3" class="clients">
				<table sortable>
					<thead>
						<tr>
							<th class="iD">ID</th>
							<th class="nA">Name</th>
							<!--<th class="cO">Contact</th>-->
							<th class="pH">Phone</th>
							<th class="cE">Cell</th>
							<th class="Fa">Fax</th>
							<th class=""></th>
							<th class=""></th>
						</tr>
					</thead>
					<tbody>
					</tbody>
					<tfoot>
						<tr>
							<th class="iD">ID</th>
							<th class="nA">Name</th>
							<!--<th class="cO">Contact</th>-->
							<th class="pH">Phone</th>
							<th class="cE">Cell</th>
							<th class="Fa">Fax</th>
							<th class=""></th>
							<th class=""></th>
						</tr>
					</tfoot>
					
				</table>
			</div>
			<!--//End of Tab 3-->
			<div id="tabs-4" class="intr">
				<table id="intr" sortable>
					<thead>
						<tr>
							<th class="iD">ID</th>
							<th class="fN">First Name</th>
							<th class="lN">Last Name</th>
							<th class="lA1">Lang1</th>
							<th class="lA2">Lang2</th>
							<th class="lA3">Lang3</th>
							<th class="lA4">Lang4</th>
							<th class="aV">Avail</th>
							<th class="cE">Certif</th>
							<th class=""></th>
							<th class=""></th>
						</tr>
					</thead>
					<tfoot>
						<tr>
							<th class="iD">ID</th>
							<th class="fN">First Name</th>
							<th class="lN">Last Name</th>
							<th class="lA1">Lang1</th>
							<th class="lA2">Lang2</th>
							<th class="lA3">Lang3</th>
							<th class="lA4">Lang4</th>
							<th class="aV">Avail</th>
							<th class="cE">Certif</th>
							<th class=""></th>
							<th class=""></th>
						</tr>
					</tfoot>
					<tbody>
					</tbody>
				</table>
			</div>
			<!--//End of Tab 4-->
		</div>
	</div>
</body>
