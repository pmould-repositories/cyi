(function($){
	$.getJSON("http://cyinterpreting.elasticbeanstalk.com/webapi/translation", function(response){

		$(function(){
			response= JSON.stringify(response);
			response= escape(response);
			var data = $.parseJSON(response);
			var row1 = {};
			var row2 = {};
			console.log('');
			$.each(data, function(i, v){
				row1[v.trans_order_id] ={trans_order_id:v.trans_order_id, submit_date:v.timestamp,due_date:v.due_date,lang:v.lang,nbr_of_pages:v.nbr_of_pages,email:v.cust_email,name:v.cust_name};
				row2[v.trans_order_id] ={doc_type:v.doc_type,phone_num:v.cust_phone,fax_num:v.cust_fax,notes:v.notes,rate:v.rate,notoring_rqd:v.notoring_rqd,location:v.location};
			});
			undf(row1);  
			undf(row2);
			var tbC = "transreq"; 
			printrows(row1,tbC);
			$('.transreq tbody tr').click(function(e){
				var thistr = $(this);
				if (!$(this).hasClass('active'))
				{
					$(this).addClass('active');
					var id  = $(this).attr("id").replace('post-','');
					var strout = "";
					strout +="<tr class='trdrp'><td colspan='7'>";
					strout +="<div class='dropdown'>";
					strout +="<fieldset>";
					strout +="<label><span>Document Type </span><span class='add'>"+row2[id].doc_type+"</span></label>";
					strout +="<label><span>Notoring Rqd? (Y/N) </span><span class='add'>"+row2[id].notoring_rqd+"</span></label>";        
					strout +="<label><span>Phone Number </span><span class='add'>"+row2[id].phone_num+"</span></label>";
					strout +="<label><span>Fax Number </span><span class='add'>"+row2[id].fax_num+"</span></label>";
					strout +="</fieldset>";
					strout +="<fieldset>";        
					strout +="<label><span>Rate</span><span class='zc'>"+row2[id].rate+"</span></label>";        
					strout +="<label><span>Notes </span><span class='zc'>"+row2[id].notes+"</span></label>";
					strout +="</fieldset>";
					strout +="</div><td></tr>";
					$(this).showRow(strout);
				}
				else
				{
					$(this).hideRow();
				}
			});


		});
	});

})(jQuery);