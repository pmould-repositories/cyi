(function($){
  $(function(){
	    		requestValidate("#editRequestt", "put"); //Validates and Submits Request Forms
	    		interpreterValidate("#editInterpreter", "put"); //Validates and Submits Order Forms
				orderValidate("#editOrder","put"); //Validates and Submits Order Forms
				clientsValidate("#editClient","put"); // Validates and Submits Client Form 
  });
})(jQuery);