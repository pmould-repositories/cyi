(function($){
  $(function(){
	    		requestValidate("#requestt", "post"); //Validates and Submits Request Forms
	    		interpreterValidate("#interpreter", "post"); //Validates and Submits Order Forms
				orderValidate("#order","post"); //Validates and Submits Order Forms
				clientsValidate("#client","post"); // Validates and Submits Client Form 
  });
})(jQuery);