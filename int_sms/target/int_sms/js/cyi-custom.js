(function($){
	$(function() {
		$("#admin-tabs").tabs();
 
/*		var client = [
			      "Aadvark",
			      "Applebees",
			      "Aspersian",
			      "BASIC TRANSLATION",
			      "Clinic of Sorts",
			      "Cracka-lackin",
			      "Clover Ministries",
			      "COBOLO",
			      "ColdMan Sachs",
			      "Downy & Sons",
			      "Erthing",
			      "Foo",
			      "Georgia Tech",
			      "Haskell",
			      "Jasper Corp",
			      "Liwinsky Business Agency",
			      "Prada",
			      "Police Academy",
			      "Monty Python Pirate Translations",
			      "Ruby",
			      "Scalar Translations",
			      "Tullow Book Services",
			      "United Nations"
			    ];*/
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
					        	  console.log("Autocomplete: "+JSON.stringify(data));
					        	    
				                    //process response
				                    $.each(data, function(i, val){                              
				                    suggestions.push(val.name);
				                    console.log("Suggestions Auto:  "+suggestions);
				                });
				                    //pass array to callback
				                    response(suggestions); 
					          }
					    	});
					    }

			});
			

			$('.c').blur(function(){
				console.log("inArray: "+$.inArray($(this).val(), suggestions));
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
				console.log("Yes :/");
				if ( $(this).val() == "" && $('#client-error2').length >= 1 )
				{
					console.log("Yes");
					$('#client-error2').remove();
					$('.request').prop('disabled',false);
					$('.request').css('background','#96CD36');
				}
			});
	
	});
})(jQuery);