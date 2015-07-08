(function($){
	$(function(){
	var endpts = {
      		url: 'http://localhost:8080/int_sms/webapi/interpreters',
      	}; 	
	$('a[href="#tabs-4"]').one("click",function(){
     $.getJSON(endpts.url, function(response){
            //response ='[{"interpreter_id":8,"last_name":"Garcia","first_name":"Jose","adress":"2300 Walnut Grove Way\nSuwannee, ga","zipcode":30024,"phone":"2147483647","cell":"2147483647","email":"Jose.m.garcia@live.com","prim_lang":"Spanish","secnd_lang":"Italian","avail":"Y"},{"interpreter_id":2,"last_name":"Roland","first_name":"Pierce","adress":"3400 Wayne Lee Way\nAustell, ga","zipcode":30106,"phone":"4046780000","cell":"4046780001","email":"rpPdej@live.com","prim_lang":"Finish","secnd_lang":"Italian","avail":"Y"},{"interpreter_id":3,"last_name":"Dowel","first_name":"Mawuks","adress":"600 Comeland Wayne Ct\nDecatur GA","zipcode":30884,"phone":"404125000","cell":"404684201","email":"dowmaw@gmail.com","prim_lang":"German","secnd_lang":"Italian","avail":"Y"},{"interpreter_id":4,"last_name":"Cerio","first_name":"Matolini","adress":"400 Cobb Galeria Pkwy\nSmyrna GA","zipcode":30339,"phone":"4045484000","cell":"770688601","email":"c_mat@gmail.com","prim_lang":"German","secnd_lang":"Italian","avail":"N"}]';
  
            response= JSON.stringify(response);
            //console.log('Response:\n'+ response);
            response= escape(response);
            var data = $.parseJSON(response);
            var row1 = {};
            var row2 = {};

            $.each(data, function(i, v){
                row1[v.interpreter_id] ={interpreter_id:v.interpreter_id, first_name:v.first_name,last_name:v.last_name,prim_lang:v.prim_lang,secnd_lang:v.secnd_lang,third_lang:v.third_lang,fourth_lang:v.fourth_lang, avail:v.avail,cert_one:v.cert_one};
                row2[v.interpreter_id] ={adress:v.adress,zipcode:v.zipcode,hourly_rate:v.hourly_rate,rate2:v.rate2, rate3:v.rate3, rate4:v.rate4, miles_rate:v.miles_rate,cell:v.cell,phone:v.phone,email:v.email,fax:v.fax,app_type:v.app_type,country:v.country,work_auth_vrfd:v.work_auth_vrfd};
            });  
            undf(row2);  
            undf(row1); 
            var tbC = "intr";
            printrows(row1,tbC);

            $('.intr tbody td:not(.table-actions)').click(function(e){
                var thistr = $(this);
                var tbr = thistr.parent();
                if (!tbr.hasClass('active'))
                {
                    tbr.addClass('active');

                    var id  = tbr.getId();
                    var strout = "";
                    strout +="<tr class='trdrp'><td colspan='12'>";
                    strout +="<div class='dropdown'>";

                    strout +="<fieldset>";
                    strout +="<label><span>Address </span><span class='add'>"+row2[id].adress+"</span></label>";
                    strout +="<label><span>Phone: </span><span class='phone'>"+row2[id].phone+"</span></label>";
                    strout +="<label><span>Cell </span><span class='cell'>"+row2[id].cell+"</span></label>";
                    strout +="<label><span>Email </span><span class='email'>"+row2[id].email+"</span></label>"; 
                    strout +="<label><span>Zipcode </span><span class='zc'>"+row2[id].zipcode+"</span></label>";
                    strout +="<label><span>Fax </span><span class='fax'>"+row2[id].fax+"</span></label>";
                    strout +="</fieldset>";

                    strout +="<fieldset>";
                    strout +="<label><span>Lang 1 Rate:</span><span class='hr'>"+row2[id].hourly_rate+"</span></label>"; 
                    strout +="<label><span>Lang 2 Rate:</span><span class='rate2'>"+row2[id].rate2+"</span></label>";
                    strout +="<label><span>Lang 3 Rate:</span><span class='rate3'>"+row2[id].rate3+"</span></label>"; 
                    strout +="<label><span>Lang 4 Rate:</span><span class='rate4'>"+row2[id].rate4+"</span></label>"; 
                    strout +="</fieldset>";

                    strout +="<fieldset>";
                    strout +="<label><span>Appointment Type:</span><span class='app_type'>"+row2[id].app_type+"</span></label>"; 
                    strout +="<label><span>Miles Rate:</span><span class='miles'>"+row2[id].miles_rate+"</span></label>"; 
                    strout +="<label><span>Work Authorization</span><span class='add'>"+row2[id].work_auth_vrfd+"</span></label>";
                    strout +="<label><span>Native Country: </span><span class='country'>"+row2[id].country+"</span></label>";
                    strout +="</fieldset>";
                    strout +="</div></td></tr>";
                    tbr.showRow(strout);        }
                else
                {
                    tbr.hideRow();
                }
            });

        $('.intr tbody .table-actions .edit').click(function(){
        	$('.editBox').prop('id',"editInterpreter");
        var children = $(this).parent().parent().children(); //return array of child elements of table row
        tbId = $($(this).parent().parent().children()[0]).text();  //get value of first child element(ID table row)

        //iterate through object to find match for id of current table row
        $.each(data, function(i, v){

            if (tbId == v.interpreter_id)
            tr={interpreter_id:v.interpreter_id, first_name:v.first_name,last_name:v.last_name,prim_lang:v.prim_lang,secnd_lang:v.secnd_lang,
                third_lang:v.third_lang,fourth_lang:v.fourth_lang, avail:v.avail,cert_one:v.cert_one,cert_two:v.cert_two,adress:v.adress,zipcode:v.zipcode,
                hourly_rate:v.hourly_rate,rate2:v.rate2, rate3:v.rate3, rate4:v.rate4, miles_rate:v.miles_rate,app_type:v.app_type,license:v.license,degree:v.degree,cell:v.cell,phone:v.phone,
                email:v.email,fax:v.fax,country:v.country,work_auth_vrfd:v.work_auth_vrfd};

        });//console.log(tr.inter_request_id);

        removeUndf(tr); // Set undefined variables to an empty string
        
        //display contents of current table row in edit form
        var formOutput = "<div><input name='interpreter_id' hidden='true' value='"+tr.interpreter_id+"'></div>";
        formOutput += "<div class='ui-front'><label>First Name<label><input name='first_name' type='text' value='"+tr.first_name+"'></div>";
        formOutput += "<div><label>Last Name<label><input name='last_name' value='"+tr.last_name+"'></div>";
        formOutput += "<div><label>Street Address<label><input type='text' name='adress' value='"+tr.adress+"'></div>";
        formOutput += "<div><label>Zipcode<label><input name='zipcode' type='number' value='"+tr.zipcode+"'></div>";
        formOutput += "<div><label>Phone<label><input name='phone' value='"+tr.phone+"'></div>";
        formOutput += "<div><label>Cell<label><input name='cell' value='"+tr.cell+"'></div>";
        formOutput += "<div><label>Fax<label><input name='fax' value='"+tr.fax+"'></div>";
        formOutput += "<div><label>Email<label><input name='email' value='"+tr.email+"'></div>";
        formOutput += "<div><label>Appointment Type<label><select name='app_type'><option value='Medical' selected>Medical</option><option value='Community'>Community</option><option value='Legal'>Legal</option><option value='Court'>Court</option><option value='Conferrence'>Conference</option></select></div>";
        formOutput += "<div><label>Primary Language<label><select class='lang_select' name='prim_lang'></select><input class='rate_select'placeholder='Rate' name='hourly_rate' type='number' value='"+tr.hourly_rate+"'></div>";
        formOutput += "<div><label>Secondary Language<label><select class='lang_select' name='secnd_lang'></select><input class='rate_select'placeholder='Rate' name='rate2' type='number' value='"+tr.rate2+"'></div>";
        formOutput += "<div><label>Third Language<label><select class='lang_select' name='third_lang'></select><input class='rate_select' placeholder='Rate' name='rate3' type='number' value='"+tr.rate3+"'></div>";
        formOutput += "<div><label>Fourth Language<label><select class='lang_select' name='fourth_lang'></select><input class='rate_select' placeholder='Rate' name='rate4' type='number' value='"+tr.rate4+"'></div>";
        formOutput += "<div><label>Native Country<label><select class='country_edit' name='country'></select></div>";
        formOutput += "<div><label>Certification 1<label><input name='cert_one' value='"+tr.cert_one+"'></div>";
        formOutput += "<div><label>Certification 2<label><input name='cert_two' value='"+tr.cert_two+"'></div>";
        formOutput += "<div><label>Availability<label><select name='avail'><option selected value='Y'>Yes</option><option value='N'>No</option></select></div>";
        formOutput += "<div><label>Work Authorization Verified(Y/N)<label><select name='work_auth_vrfd'><option value='N'>No</option><option value='Y' selected>Yes</option></select></div>";
        formOutput += "<div><label>Degree<label><input name='degree' value='"+tr.degree+"'></div>";
        formOutput += "<div><label>License<label><input name='license' value='"+tr.license+"'></div>";
        formOutput += "<div><label>Miles Rate<label><input name='miles_rate' value='"+tr.miles_rate+"'></div>";
        formOutput += "<div><label>Notes<label><textarea name='notes' value='"+tr.notes+"'></textarea></div>";
        formOutput += "<div><input type='button' value='CANCEL' class='request cancel'><input type='submit' value='SUBMIT' class='request'></div>";
        
        // display empty modal box
        $('body').append( $('.modal-holder').css('display','block') );       

        //display edit form
        $('.editBox').css('display','block');
        $('.editBox p').html(formOutput);  
        
        fillDropDownOpts(); //Fills the language and start and end time select tags
        populateCountries("country_edit");   
       // Sets the language option of select tags
        setLangOption("prim_lang", tr.prim_lang);   
        setLangOption("secnd_lang", tr.secnd_lang);
        setLangOption("third_lang", tr.third_lang);
        setLangOption("fourth_lang", tr.fourth_lang);
        setLangOption("work_auth_vrfd", tr.work_auth_vrfd);  // Sets the avaliability option of select tags
        setLangOption("avail", tr.avail);  // Sets the avaliability option of select tags
        setLangOption("app_type", tr.app_type); // Sets the appoitment type option of select tags
        
        
        interpreterValidate("#editInterpreter", "put"); //Validates and submits interpreter Form
    });


        });
    });
	});
})(jQuery);
