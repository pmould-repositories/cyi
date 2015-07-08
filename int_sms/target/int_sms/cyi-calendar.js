(function($) {

	$(function() {

		/***********************************************************************
		 * Calender Request
		 **********************************************************************/
		var eventSrc = [];
		// $("a[href='#tabs-5']").click(function(e){
		$
				.getJSON(
						"http://cyinterpreting.elasticbeanstalk.com/webapi/interpreting",
						function(response) {
							console.log('Inside function Inside Tab-5');
							response = JSON.stringify(response);
							response = escape(response);
							var data = $.parseJSON(response);
							var eventSrc = [];
							$.each(data, function(i, v) {
								var st = v.start_time.substring(0, 8);
								var sd = v.app_date;
								var start = sd + "T" + st;
								var endDate = new Date(start);
								endDate.setHours(endDate.getHours()
										+ v.duration);
								end = endDate.toISOString();
								eventSrc[i] = {
									id : v.inter_request_id,
									inter_id : v.inter_request_id,
									title : v.contact_one,
									start : start,
									end : end,
									assigned_to : v.assigned_to,
									lang : v.lang,
									app_date : v.app_date,
									start_time : v.start_time,
									duration : v.duration,
									lang : v.lang,
									assigned_to : v.assigned_to,
									called : v.called,
									timestamp : v.timestamp,
									lep_name : v.lep_name,
									onsite_phone : v.onsite_phone,
									contact_two : v.contact_two,
									inter_gender : v.inter_gender,
									location_notes : v.location_notes,
									request_notes : v.request_notes,
									rate : v.rate,
									adress : v.location
								};
							});
							// });

							// alert(JSON.stringify(eventSrc[1]));
							/* Impliment FullCalender.io */

							$('#calendar')
									.fullCalendar(
											{
												minTime:"06:00:00",
												maxTime:"21:00:00",
												events : eventSrc,
												defaultView : "agendaWeek",
												header : {
													left : 'title',
													center : '',
													right : 'today prev,next'
												},
												eventAfterAllRender : function() {
													document
															.querySelector('#calendar h2').innerText = document
															.querySelector('#calendar h2').innerText
															.replace("â€”", "-");
												},
												eventRender : function(event,
														element) {
													element
															.find('.fc-title')
															.prepend("Client: ");
													element
															.find('.fc-title')
															.append(
																	"<br/>"
																			+ "Assignee: "
																			+ event.assigned_to
																			+ "<br/>"
																			+ "Language: "
																			+ event.lang);
													element
															.qtip({ // Grab all
																// elements
																// with a
																// non-blank
																// data-tooltip
																// attr.
																title : {
																	text : 'About Me',
																},
																position : {
																	target : 'mouse', // Position
																	// it
																	// where
																	// the
																	// click
																	// was...
																	adjust : {
																		mouse : false
																	}
																// ...but don't
																// follow the
																// mouse
																},
																style : {
																	classes : 'qtip-light qtip-bootstrap',
																	def : false,
																},
																content : {
																	text : '<div class="">'
																			+ '<div class="item"><span class="name">ID:</span><span class="value">'
																			+ event.id
																			+ '</span></div>'
																			+'<div class="item"><span class="name">Assigned To: </span><span class="value">' +event.assigned_to+'</span></div>' 
																			+ '<div class="item"><span class="name">Onsite Contact: </span><span class="value">'
																			+ event.title
																			+ '</span></div>'
																			+ '<div class="item"><span class="name">Follow Up Call: </span>'
																			+ event.called
																			+ '</div>'
																			+ '<div class="item"><span class="name">Onsite Number: </span><span class="value">'
																			+ event.onsite_phone
																			+ '</span></div>'
																			+ '<div class="item"><span class="name">Contact 2: </span><span class="value">'
																			+ event.contact_two
																			+ '</span></div>'
																			+ '<div class="item"><span class="name">Request Date/Time: </span><span class="value">'
																			+ event.timestamp
																			+ '</span></div>'
																			+ '<div class="item"><span class="name">Location: </span><span class="value">'
																			+ event.adress
																			+ '</span></div>'
																			+ '<div class="item"><span class="name">Location Notes: </span><span class="value">'
																			+ event.location_notes
																			+ '</span></div>'
																			+ '<div class="item"><span class="name">Request Notes: </span><span class="value">'
																			+ event.request_notes
																			+ '</span></div>'
																			+ '</div>',
																	title : 'Request Details',
																	button : 'Close'

																},
																events : {
																	shown : function(
																			event,
																			api) {
																	}
																},
																hide : {
																	event : false
																}
															})// End of q-tip
													// function-->
												}
											});
							function custom_sort(a, b) {
								return new Date(a.start).getTime()
										- new Date(b.start).getTime();
							}

							eventSrc.sort(custom_sort);

							$('#calendar').fullCalendar('gotoDate',
									eventSrc[0].start);
						});
		
					});
})(jQuery);