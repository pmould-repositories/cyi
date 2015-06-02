(function($){
  $(function(){
    var endpts = {
  		interpreting: 'http://cyinterpreting.elasticbeanstalk.com/webapi/interpreting',
  		interpreter: 'http://cyinterpreting.elasticbeanstalk.com/webapi/interpreters',
        translation: 'http://cyinterpreting.elasticbeanstalk.com/webapi/translation',
  		client: 'http://cyinterpreting.elasticbeanstalk.com/webapi/clients'    
  	}; 	
	  $("#requestt").validate(
	  {
	  	submitHandler: function(form){

	    var qString = getFormData(form);
	    console.log("qString"+qString);
        delete qString["start_time_hour"];
        delete qString["start_time_min"];
        console.log("qString"+qString);
        startH = $(form)[0].start_time_hour.value.toString();
        startM = $(form)[0].start_time_min.value.toString();
        startH  = startH.length == 1 ? "0".concat(startH): startH;
        startM  = startM.length == 1 ? "0".concat(startM): startM;
        startM.length == 1 ? "0".concat(startM): "";
        start_time = startH+":"+startM+":00";
	  	qString["start_time"]=start_time;
	    qString = JSON.stringify(qString);
       console.log(qString);
       console.log(qString);
	  		var options={
	  			formData:qString,
	  			url: endpts.interpreting
	  		};
		ajaxSubmit(options);

	  	},
	  	rules: {
	      app_date: {required: true,
	      			 date: true,
	      },
	      duration:{required: true,
	      			 maxlength: 11
	      },
	      start_time_hour:{required:true,
	      	              max: 23,
	      	              min: 0
	      },
	      start_time_min:{required:true,
	      	              max: 60,
	      	              min: 0
	      },
	      lang:{required: true,
	      	     maxlength: 15
	      },
	      lep_name:{required: true,
	      			 maxlength: 45
	      },	      
	      lep_phone:{required: true,
	      			 phoneUS: true,
	      			 maxlength:45
	      },
	      contact_one:{maxlength:45,
	      	           required: true
	      },
	      contact_two:{maxlength:45
	      },
	      contact_three:{maxlength:45
	      },
	      inter_gender: {maxlength:1
	      },
	      client_name:{required:true,
	      	           maxlength:100
	      },
	      location: {required: true,
	                 maxlength:100
	      }, /* UPDATE */
	      location_notes:{maxlength:150
	      },
	      request_notes:{maxlength:150
	      },
	      called:{maxlength:1
	      },
	      rate:{maxlength:8
	      }
	    },
	    messages:{
	      app_date: {required: "Please enter the Appointment Date",
	      			 date: "Please enter the date in the correct format"
	      },
	      duration:{required:"Please enter a duration",
	                maxlength: "Please enter a maximum of 11 characters"
	      },
	      start_time_hour:{required:"Please enter the hour",
	      	              max: "Please enter a vaild hour(0-12)",
	      	              min: "Please enter a vaild minute(0-12)"
	      },
	      start_time_min:{required:"Please enter the minute",
	      	              max: "Please enter a vaild hour(0-59)",
	      	              min: "Please enter a vaild minute(0-59)"
	      },
	      lang:{required:"Please enter a Language",
	      	    maxlength: "Please enter a maximum of 15 characters"
	      },
	      lep_name:{required: "Please enter a Client Name",
	      			 maxlength: "Please enter a maximum of 45 characters"
	      },
	      lep_phone:{required: "Please enter a Phone Number",
	      	         phoneUS: "Please enter a US phone number in the correct format"
	      },
	      contact_one:{maxlength:"Please enter a maximum of 45 characters",
	      	           required:"Please enter the First Contact Name"
	      },
	      contact_two:{maxlength:"Please enter a maximum of 45 characters"
	      },
	      contact_three:{maxlength:"Please enter a maximum of 45 characters"
	      },
	      inter_gender:{required:"Please enter a Translator Gender",
	      	             maxlength:"Please enter a maximum of 1 character"
	      },
	      location: { required:"Please enter a Location",
	      	          maxlength:"Please enter a maximum of 100 characters"
	      }, /* UPDATE */
	      location_notes:{maxlength:"Please enter a maximum of 150 characters"
	      },
	      request_notes:{maxlength:"Please enter a maximum of 150 characters",
	      	             required:"Please enter request notes"
	      },
	      called:{maxlength:"Please enter a maximum of 1 character",
	      	      required:"Please enter either 'Y' or 'N'"
	      },
	      rate:{maxlength:"Please enter a maximum of 8 characters",
	      	    required: "Please enter a Rate"
	      }
	    }   	
	   });
	    $("#interpreter").validate(
	    {
	  	submitHandler: function(form){
	    var qString = getFormData(form);
	    qString = JSON.stringify(qString);
	      var options={
	  			formData:qString,
	  			url: endpts.interpreter
	  		};
		ajaxSubmit(options);
	  	},
	  	rules: {
	      first_name: {maxlength: 45
	      },
	      last_name:{required: true,
	      	         maxlength: 45
	      },
	      adress:{ required:true,
	      	       maxlength:100
	      },
	      zipcode:{required:true,
	      	       minlength:5,
	      	       maxlength: 11
	      },
	      phone:{phoneUS: true,
	    	  maxlength: 10
	    	  	
	      },
	      cell:{phoneUS: true,
	    	  maxlength: 10
	      },
	      fax:{phoneUS: true,
	    	  maxlength: 10
	      },
	      email:{required:true,
	      	     email:true,
	      	     maxlength:45
	      },
	      prim_lang:{maxlength:25
	      },
	      secnd_lang: {maxlength:25
	      },
	      third_lang: {maxlength:25
	      },	      
	      cert_one: { maxlength:45
	      }, 
	      cert_two: { maxlength:45
	      }, 
	      cert_three: { maxlength:45
	      }, 
	      avail:{required:true,
	      		 maxlength:1
	      },	
	      notes:{maxlength:150
	      },      
	      hourly_rate:{required:true,
	      	           maxlength:8
	      },
	      degree:{maxlength:45
	      },
	      license:{maxlength:1
	      },
	      miles_rate:{required: true,
	      	          maxlength:8
	      }
	    },
	  	messages: {
	      first_name: {maxlength: "Please enter a maximum of 45 characters"
	      },
	      last_name:{required: "Please enter Last Name",
	      	         maxlength: "Please enter a maximum of 45 characters"
	      },
	      adress:{ required:"Please enter an Address",
	      	       maxlength:"Please enter a maximum of 100 characters"
	      },
	      zipcode:{required:"Please enter a Zip Code",
	      	       maxlength: "Please enter a maximum of 11 characters"
	      },
	      phone:{phoneUS:  "Please enter a US phone number in the correct format",
	    	  maxlength: "Please enter a maximum of 10 characters"
	      },
	      cell:{phoneUS:  "Please enter a US phone number in the correct format",
	    	  maxlength: "Please enter a maximum of 10 characters"
	      },
	      fax:{phoneUS:  "Please enter a US phone number in the correct format",
	    	  maxlength: "Please enter a maximum of 10 characters"
	      },
	      email:{required:"Please enter an Email",
	      	     email:"Please enter the email in a valid format",
	      	     maxlength:"Please enter a maximum of 45 characters"
	      },
	      prim_lang:{maxlength:"Please enter a maximum of 15 characters"
	      },
	      secnd_lang: {maxlength:"Please enter a maximum of 15 characters"
	      },
	      third_lang: {maxlength:"Please enter a maximum of 15 characters"
	      },	      
	      cert_one: { maxlength:"Please enter a maximum of 45 characters"
	      }, 
	      cert_two: { maxlength:"Please enter a maximum of 45 characters"
	      }, 
	      cert_three: { maxlength:"Please enter a maximum of 45 characters"
	      }, 
	      avail:{required:"Please enter a enter either 'Y' or 'N'",
	      		 maxlength:"Please enter either 'Y' or 'N'"
	      },	
	      notes:{maxlength:"Please enter a maximum of 150 characters"
	      },      
	      hourly_rate:{required:"Please enter an Hourly Rate",
	      	           maxlength:"Please enter a maximum of 8 characters"
	      },
	      degree:{maxlength:"Please enter a maximum of 45 characters"
	      },
	      license:{maxlength:"Please enter either 'Y' or 'N'"
	      },
	      miles_rate:{required: "Please enter a Mile Rate",
	      	          maxlength:"Please enter a maximum of 8 digits"
	      }
	    }
	  });
	  $("#order").validate(
	  {
	  	submitHandler: function(form){
	    var qString = getFormData(form);
	    qString = JSON.stringify(qString);
	      var options={
	  			formData:qString,
	  			url: endpts.translation
	  		};
		ajaxSubmit(options);
	  	},
	  	rules: {
	      doc_type: {required: true,
	      			 maxlength: 45,
	      },
	      client_name:{maxlength: 100
	      },
	      lang:{required: true,
	      	     maxlength: 15
	      },
	      due_date:{required: true,
	      			 date: true
	      },	      
	      cust_name:{required: true,
	      			 maxlength:25
	      },
	      notes:{maxlength:150
	      },
	      cust_email:{maxlength:45
	      },
	      nbr_of_pages:{maxlength:11
	      },
	      cust_phone: {required:true,
	      	             phoneUS:true
	      },
	      cust_fax:{maxlength:10,
	      	        phoneUS:true
	      },
	      notoring_rqd: { required: true,
	      	              maxlength:1
	      }
	    },
	  	messages: {
	      doc_type: {required: "Please enter a Document Type",
	      			 maxlength: "Please enter a maximum of 45 characters"
	      },
	      client_name:{maxlength: "Please enter a maximum of 100 characters"
	      },
	      lang:{required: "Please enter a Language",
	      	     maxlength: "Please enter a maximum of 15 characters"
	      },
	      due_date:{required: "Please enter a Due Date",
	      			 date: "Please enter a valid date" 
	      },	      
	      cust_name:{required: "Please enter a Customer Name",
	      			 maxlength:"Please enter a maximum of 25 characters"
	      },
	      notes:{maxlength:"Please enter a maximum of 15 characters"
	      },
	      cust_email:{email: "Please enter an Email",
	      	          maxlength:"Please enter a maximum of 45 characters"
	      },
	      nbr_of_pages:{maxlength:"Please enter a maximum of 11 characters"
	      },
	      cust_phone: {required:"Please enter Customer Phone Number",
	      	             phoneUS:"Please enter a US phone number in the correct format"
	      },
	      cust_fax:{maxlength:"Please enter a maximum of 10 characters",
	                phoneUS:"Enter Fax Number in the correct format"
	      },
	      notoring_rqd: { required: "Please enter either 'Y' or 'N'",
	      	              maxlength: "Please enter either 'Y' or 'N'"
	      }
	    }   	
	   });
	  $("#client").validate(
	  {
	  	submitHandler: function(form){
	    var qString = getFormData(form);
	    qString = JSON.stringify(qString);
	      var options={
	  			formData:qString,
	  			url: endpts.client
	  		};
		ajaxSubmit(options);
	  	},
	  	rules: {
	      adress: {maxlength: 50,
	      },
	      marketer:{maxlength: 25
	      },
	      website:{maxlength: 30
	      },
	      phone_num:{maxlength: 10
	      },	      
	      cell_num:{maxlength: 10
	      },
	      fax_num:{maxlength:10
	      },
	      other_num:{maxlength:10
	      },
	      email:{email:true,
	      	     maxlength:35
	      },
	      notes: {maxlength:150
	      },
	      zipcode:{required:true,
	        minlength:5,
	      	maxlength:11
	      },
	      name: {required: true,
	      	     maxlength:45
	      }
	    },
	  	messages: {
	      adress: {maxlength: "Please enter a maximum of 50 characters",
	      },
	      marketer:{maxlength: "Please enter a maximum of 25 characters"
	      },
	      website:{maxlength: "Please enter a maximum of 30 characters"
	      },
	      phone_num:{maxlength: "Please enter a maximum of 10 digits"
	      },	      
	      cell_num:{maxlength: "Please enter a maximum of 10 digits"
	      },
	      fax_num:{maxlength: "Please enter a maximum of 10 digits"
	      },
	      other_num:{maxlength: "Please enter a maximum of 10 digits"
	      },
	      email:{email: "Please enter the email in a valid format",
	      	     maxlength: "Please enter a maximum of 35 characters"
	      },
	      notes: {maxlength: "Please enter a maximum of 150 characters"
	      },
   		  zipcode:{required:"Please enter a Zip Code",
   		    minlength: "Please enter a valid Zip Code",
	      	maxlength: "Please enter a maximum of 11 characters"
	      },
	      name: {required: "Please enter the Client Name",
	      	     maxlength: "Please enter a maximum of 45 characters"
	      }
	    }   	
	   });

  });
})(jQuery);