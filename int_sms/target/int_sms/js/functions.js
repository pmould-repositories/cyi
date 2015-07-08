function escape (str) {                                                  
  return str.replace(/[\n]/g, '\\n').split('NULL').join('""').replace("undefined","");
}
function undf(row){
  $.each(row, function(i, v){
    $.each(v, function(_i, _v){
     // console.log(_v);
      //console.log(typeof _v);  
      v[_i]=(typeof _v=="undefined" || _v=="undefined") ?  "" : _v;
    });
  });            
}
function removeUndf(row){
	    $.each(row, function(i, v){ 
	       // console.log(v);
	       // console.log(typeof v); 
	      row[i]=(v=="undefined" || typeof v=="undefined" ) ?  "" : v;
	      //console.log(v);
	    });          
	}
function printrows(records, tableClass){
  var arr = [];
  $('.'+tableClass+' thead th').each( function(){
    arr[arr.length] = $(this)[0].className;
  });

  $.each(records, function(i, v){
    //  console.log("records"+records);
    var strout = "";
    strout += "<tr id='post-"+i+"'>";
    var i=0;
    $.each(v, function(i_, v_){

      strout += '<td class="'+arr[i]+'">'+v_+'</td>';
      i++;
    });
    strout += '<td class="table-actions"><span class="action edit">Edit</span></td>';  //Edit and button for each row  
    strout += "</tr>";
      //console.log(tableClass+": " +strout);
    $('.'+tableClass+' tbody').append(strout);
    $('.interreq td.sT').text(function(){$(this).text($(this).text().substring(0,5))});
  }); 

}
$.fn.getId = function (){
  return this.attr("id").replace('post-','');
}
$.fn.showRow = function(strout){ 
  this.after(strout);
  this.next().children("td").children(".dropdown").slideDown();
}

$.fn.hideRow = function(){ thistr= this; this.next().children("td").children(".dropdown").slideUp(200,function(){
  thistr.removeClass('active');
  thistr[0].parentNode.removeChild(thistr[0].nextSibling);
});
};
function QueryStringToJSON(qString) {            
  var pairs = qString.slice(1).split('&');

  var result = {};
  pairs.forEach(function(pair) {
    pair = pair.split('=');
    result[pair[0]] = decodeURIComponent(pair[1] || '');
  });

  return JSON.stringify(result);
}

function getFormData(form){
  var unindexed_array = $(form).serializeArray();
  var indexed_array = {};

  $.map(unindexed_array, function(n, i){
    indexed_array[n['name']] = n['value'];
    
    //console.log('name:'+n['name']+'\nvalue:'+n['value']);
  });

  return indexed_array;
}

function ajaxSubmit(options){

  //console.log(options.formData);
  var jsonData = options.formData;
  //console.log(jsonData);
  $.ajax(
      {
        url: options.url,
        type: options.type,
        data: jsonData,
        async: true,
        contentType: 'application/json; charset=utf-8',
        success: function(data, textStatus, jqXHR){
                     
          //console.log('The data was sent');

          //console.log('This is the data sent: '+ data,
              //'textStatus: ',textStatus);
          
          $('.close').triggerHandler("click");
      
                   location.reload();
        },
        error: function( jqXHR,textStatus, errorThrown ){
          alert('Failed to load resource: \n'+'Status: '+textStatus+'\nerrorThrown: '+ errorThrown);
          //console.log('The data failed to send','textStatus: ',textStatus,'errorThrown: ',errorThrown);
        },
      });
   
}

function deleteKey(key, url){
  return url.replace(new RegExp(key + "=\\w+"),"").replace("?&","?")
  .replace("&&","&"); 
}

function UpdateQueryString(key, value, url) {
  if (!url) url = window.location.href;
  var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
  hash;

  if (re.test(url)) {
    if (typeof value !== 'undefined' && value !== null)
      return url.replace(re, '$1' + key + "=" + value + '$2$3');
    else {
      hash = url.split('#');
      url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
      if (typeof hash[1] !== 'undefined' && hash[1] !== null) 
        url += '#' + hash[1];
      return url;
    }
  }
  else {
    if (typeof value !== 'undefined' && value !== null) {
      var separator = url.indexOf('?') !== -1 ? '&' : '?';
      hash = url.split('#');
      url = hash[0] + separator + key + '=' + value;
      if (typeof hash[1] !== 'undefined' && hash[1] !== null) 
        url += '#' + hash[1];
      return url;
    }
    else
      return url;
  }
}

//Fill up time and language dropdowns 
function fillDropDownOpts(){
	  var hourOptions= "",minuteOptions="",langOptions="", countryOptions="";
	  var langlist =['---Select Language---',
	                 'Afrikaans',
	                 'Albanian',
	                 'Amharic',
	                 'Arabic Standard',
	                 'Arabic Maghrebi',
	                 'Arabic Yemeni',
	                 'Armenian',
	                 'Awadhi',
	                 'Azerbaijani',
	                 'Bambara',
	                 'Belarusian',
	                 'Belizean Creole',
	                 'Bengali',
	                 'Bosnian',
	                 'Bulgarian',
	                 'Burmese',
	                 'Cambodian/Khmer',
	                 'Cantonese ',
	                 'Catalan',
	                 'Cape Verdean Creole',
	                 'Cebuano',
	                 'Chinese',
	                 'Chaoshan',
	                 'Chaozhou',
	                 'Chokwe',
	                 'Creole',
	                 'Croatian',
	                 'Czech',
	                 'Danish',
	                 'Dari',
	                 'Dinka',
	                 'Dutch',
	                 'Estonian',
	                 'Ewe',
	                 'Ewondo',
	                 'Farsi',
	                 'Fijian',
	                 'Filipino',
	                 'Finnish',
	                 'Flemish',
	                 'French',
	                 'Fon',
	                 'Fula-Ni',
	                 'Galician',
	                 'Georgian',
	                 'German',
	                 'Greek',
	                 'Gujarati',
	                 'Haitian Creole',
	                 'Hakka',
	                 'Harari',
	                 'Hebrew',
	                 'Hindi',
	                 'Hmong',
	                 'Hungarian',
	                 'Icelandic',
	                 'Ilokano',
	                 'Igbo',
	                 'Indonesian',
	                 'Italian',
	                 'Japanese',
	                 'Javanese',
	                 'Kannada',
	                 'Kapampangan',
	                 'Karenic',
	                 'Kashmiri',
	                 'Kinkongo',
	                 'Kinyarwanda',
	                 'Kirundi',
	                 'Kone',
	                 'Kono',
	                 'Korean',
	                 'Kuki-Chin',
	                 'Krio',
	                 'Kurdish',
	                 'Ladino',
	                 'Laotian',
	                 'Latin',
	                 'Latvian',
	                 'Lingala',
	                 'Lithuanian',
	                 'Macedonian',
	                 'Maithili',
	                 'Malay',
	                 'Malinke',
	                 'Mandarin',
	                 'Mandinka',
	                 'Marathi',
	                 'Matu',
	                 'Moldavian',
	                 'Mossi',
	                 'Nepali',
	                 'Ndebele',
	                 'Norwegian',
	                 'Nouchi',
	                 'Oshiwambo',
	                 'Oromo',
	                 'Pashto',
	                 'Persian/Farsi',
	                 'Polish',
	                 'Portuguese',
	                 'Pulaar',
	                 'Pular',
	                 'Punjabi',
	                 'Ronga',
	                 'Rohingya',
	                 'Romanian',
	                 'Russian',
	                 'Sango',
	                 'Serbian',
	                 'Serbo-Croatian',
	                 'Sign-Language',
	                 'Singhalese',
	                 'Slovak',
	                 'Slovenian',
	                 'Somali',
	                 'Spanish',
	                 'Soninke',
	                 'Susu',
	                 'Swahili',
	                 'Swedish',
	                 'Taiwanese',
	                 'Tamil',
	                 'Tatar',
	                 'Telugu',
	                 'Thai',
	                 'Tigrinya',
	                 'Tonga',
	                 'Tongan',
	                 'Turkish',
	                 'Ciluba',
	                 'Twi/Ashanti',
	                 'Ukrainian',
	                 'Umbundu',
	                 'Urarina',
	                 'Urdu',
	                 'Uzbek',
	                 'Vietnamese',
	                 'Wa',
	                 'Walloon',
	                 'Waray-Waray',
	                 'Wayuu',
	                 'Welsh',
	                 'Wemba Wemba',
	                 'Wolof',
	                 'Xhosa',
	                 'Yiddish',
	                 'Yoruba',
	                 'Zarma',
	                 'Zazaki',
	                 'Zhuang',
	                 'Zulu'
	                 ];
	
	
	
	  for(var i in langlist)
	    langOptions += "<option value='"+((langlist[i]=='---Select Language---')? "":langlist[i])+"'>"+langlist[i]+"</option>";
	  for(var i=0;i<24;i++)
	    hourOptions += "<option value='"+i+"'>"+i+"</option>";
	  for (var i=0;i<60;i+=15)
	    minuteOptions += "<option value='"+i+"'>"+i+"</option>";
	  $('select[name="start_time_hour"],select[name="duration_hour"]').append(hourOptions);
	  $('select[name="start_time_min"],select[name="duration_min"]').append(minuteOptions);
	  $('select[name="lang"],select[name="prim_lang"],select[name="secnd_lang"],select[name="third_lang"],select[name="fourth_lang"]').append(langOptions);
	  
}
// Sets a language option to selected in a select tag
function setLangOption(name, val){
    $('select[name="'+name+'"] option')
    .removeAttr('selected')
    .filter('[value="'+val+'"]')
        .attr('selected', true);
}

//Validates ad Sumbits Inter Request Forms
function requestValidate(id, type){
    var endpts = {
            request: 'http://localhost:8080/int_sms/webapi/interpreting',      
        }; 
    $(id).validate(
  		  {
  		  	submitHandler: function(form){

  		    var qString = getFormData(form);
  		    //console.log("qString"+qString);
  		    var startH = qString["start_time_hour"];
  		    var startM = qString["start_time_min"];
  		    var durH = qString["duration_hour"];
  		    var durM = qString["duration_min"];
  	        delete qString["start_time_hour"];
  	        delete qString["start_time_min"];
  	        delete qString["duration_hour"];
  	        delete qString["duration_min"];
  	        //console.log("qString"+qString);
  	        //startH = $(form)[0].start_time_hour.value.toString();
  	        //startM = $(form)[0].start_time_min.value.toString();
  	        startH  = startH.length == 1 ? "0".concat(startH): startH;
  	        startM  = startM.length == 1 ? "0".concat(startM): startM;
  	        startM.length == 1 ? "0".concat(startM): "";
  		  	qString["start_time"]=startH+":"+startM+":00";
  	        qString["duration"] = durH+"h"+durM;
  		    qString = JSON.stringify(qString);
  	        console.log(qString);
  		  		var options={
  		  			formData:qString,
  		  			url: endpts.request,
  		  			type: type
  		  		};
  			ajaxSubmit(options);

  		  	},
  		  	rules: {
    		      client: {required: true,
	      },
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
  		      contact_one:{maxlength:10,
  		      	           required: true
  		      },
  		      contact_two:{maxlength:10,
  		    	  		   phoneUS: true
  		      },
  		      contact_three:{maxlength:45,
	    	  		   phoneUS: true
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
  		      legal:{maxlength:1
  		      },        		      
  		      rate:{maxlength:8
  		      }
  		    },
  		    messages:{
  		    contact_two:{phoneUS:  "Please enter a US phone number in the correct format",
  			    	   maxlength: "Please enter a maximum of 10 characters"
  		    },	
  		    contact_three:{phoneUS:  "Please enter a US phone number in the correct format",
		    	  			maxlength: "Please enter a maximum of 10 characters"
	            },
    		      client: {required: "Please enter the Client Name",
	      },
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
}

// Validates and Submits Interpreter Forms
function interpreterValidate(id, type){
	var endpts = {
      		url: 'http://localhost:8080/int_sms/webapi/interpreters',
      	}; 	
	$(id).validate(
    	    {
    	  	submitHandler: function(form){
    	    var qString = getFormData(form);
    	    qString = JSON.stringify(qString);
    	    //console.log("Interpreter Data: \n"+qString);
    	      var options={
    	  			formData:qString,
    	  			url: endpts.url,
    	  			type: type
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
}
// Validates and Submits Translation order Forms
function orderValidate(id,type){
	 var endpts = {
	            translation: 'http://localhost:8080/int_sms/webapi/translation',   
	      	}; 	
    $(id).validate(
  		  {
  		  	submitHandler: function(form){
  		    var qString = getFormData(form);
  		    qString = JSON.stringify(qString);
  		    //console.log("Trans Order: \n:" + qString);
  		      var options={
  		  			formData:qString,
  		  			url: endpts.translation,
  		  			type: type
  		  		};
  			ajaxSubmit(options);
  		  	},
  		  	rules: {
  		      doc_type: {required: true,
  		      			 maxlength: 45,
  		      },
  		      client: {required: true,
	      			 maxlength: 45,
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
}

function clientsValidate(id, type){
    var endpts = {
      		client: 'http://localhost:8080/int_sms/webapi/clients'    
      	}; 	
	  $(id).validate(
			  {
			  	submitHandler: function(form){
			    var qString = getFormData(form);
			    qString = JSON.stringify(qString);
			    //console.log("CLIENT CREATE JSON \n: "+ qString);
			      var options={
			  			formData:qString,
			  			url: endpts.client,
			  			type: type
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
			      phone_num:{maxlength: 10,
			    	         phoneUS: true	         
			      },	      
			      cell_num:{maxlength: 10,
		    	         phoneUS: true	
			      },
			      fax_num:{maxlength:10,
		    	           phoneUS: true	
			      },
			      other_num:{maxlength:10,
		    	             phoneUS: true	
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
}
//Validates Client Input
function clientNamesValidate(){
    var suggestions = [];
	$('.c').autocomplete({
		//source : client,
		autoFocus: true,
		source: function( request, response ) {
			        $.ajax({
			          url: "http://localhost:8080/int_sms/webapi/clients/names",
			          dataType: "json",
			          type: "get",
			          data: {
			            term: request.term
			          },
			          success: function( data ) {
			        	  array = data;
			        	  //console.log("Autocomplete: "+JSON.stringify(data));
			        	    
		                    //process response
		                    $.each(data, function(i, val){                              
		                    suggestions.push(val.name);
		                    //console.log("Suggestions Auto:  "+suggestions);
		                });
		                    //pass array to callback
		                    response(suggestions); 
			          }
			    	});
			    }

	});
	
	
	$('.c').blur(function(){
		//console.log("inArray: "+$.inArray($(this).val(), suggestions));
		if ( $.inArray($(this).val(), suggestions) == -1)
			{
				if ($('#client-error2').length == 0 && $(this).val() != "")
				{
					$(this).after('<label id="client-error2" class="error">Please enter a valid client');
					$('.request').prop('disabled',true);
					$('.request').css('background','#575757');
				}
			}
		else if($('#client-error2').length >= 1)
		{
				$('#client-error2').remove();
				$('.request').prop('disabled',false);
				$('.request').css('background','#96CD36');
		}
	});
	$('.c').keyup(function(){
		//console.log("Yes :/");
		if ( $(this).val() == "" && $('#client-error2').length >= 1 )
		{
			//console.log("Yes");
			$('#client-error2').remove();
			$('.request').prop('disabled',false);
			$('.request').css('background','#96CD36');
		}
	});
}



$(function(){
  //show correct form on click
  $('.admin-controls .option').click(function(){
      var box = "#" + this.className.split(" ")[0];
      $('.modal-holder, .modalBox' + box).show();
      $('.modalBox' + box)[0].reset();
  });
  //close modal when done
    $('.close, .cancel').click(function(){
      $('.modal-holder,.modalBox, .editBox').hide();
    });
  //display calendar
    var toggle = 0;
    $('.cal-close').click(function(){
      if(toggle == 0){
        $('.inner.calendar').css('top',0);
        toggle = 1;
      }else if(toggle == 1){
        $('.inner.calendar').css('top',-400);
        toggle = 0;
      }
    });

    //Always keep admin-control bar in user view
    function stick(){
      var win = $(window).scrollTop();
      var h = $('.header').height();
      win > h ? $('.admin-controls').css({'position':'fixed','top':0}) :
      $('.admin-controls').css({'position':'absolute','top':0});
    }
    $(window).scroll(stick);
    
    //Validate Client Input
    clientNamesValidate();
    
  //Fills the language and start and end time select tags
    fillDropDownOpts();
   
});
