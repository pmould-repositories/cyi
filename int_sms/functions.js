
function escape (str) {                                                  
	return str.replace(/[\n]/g, '\\n').split('NULL').join('""').replace("undefined","");
}
function undf(row){
	$.each(row, function(i, v){
		$.each(v, function(_i, _v){
			//console.log(_v);
			//console.log(typeof _v);  
			v[_i]=(typeof _v=="undefined") ?  "" : _v;
		});
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

		strout += "</tr>";
		//         console.log(tableClass+": " +strout);
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
				type: "post",
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
$(function(){
	var pick;
	$('.admin-controls p').click(function(){
		pick = "#" + $(this).attr('class');
		$('.modal').css('display','block');
		$(pick).css('display','block');
		$(pick)[0].reset();
	});
	$('.close, #cancel').click(function(){$('.modal').hide();$(pick).hide();});
	var hourOptions= "",minuteOptions="";
	for(var i=0;i<24;i++)
		hourOptions += "<option value='"+i+"'>"+i+"</option>";
	for (var i=0;i<60;i++)
		minuteOptions += "<option value='"+i+"'>"+i+"</option>";
	$('select[name="start_time_hour"]').append(hourOptions);
	$('select[name="start_time_min"]').append(minuteOptions);

});

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

$(function(){
	var pick;
	$('.admin-controls p').click(function(){
		pick = "#" + $(this).attr('class');
		$('.modal').css('display','block');
		$(pick).css('display','block');
		$(pick)[0].reset();
	});
	$('.close, #cancel').click(function(){$('.modal').hide();$(pick).hide();});
	var hourOptions= "",minuteOptions="",langOptions="", countryOptions="";
	var langlist =['',
	               'Afrikaans',
	               'Albanian',
	               'Amharic',
	               'Arabic Standard ',
	               'Arabic Maghrebi ',
	               'Arabic Yemeni',
	               'Armenian',
	               'Awadhi',
	               'Azerbaijani',
	               'Bambara',
	               'Belarusian',
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
	               'Kuki-Chin',
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
	               'Korean',
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
	               'Yiddish',
	               'Yoruba',
	               'Zarma',
	               'Zazaki',
	               'Zhuang',
	               'Zulu'
	               ];



	for(var i in langlist)
		langOptions += "<option value='"+langlist[i]+"'>"+langlist[i]+"</option>";
	for(var i=0;i<24;i++)
		hourOptions += "<option value='"+i+"'>"+i+"</option>";
	for (var i=0;i<60;i++)
		minuteOptions += "<option value='"+i+"'>"+i+"</option>";
	$('select[name="start_time_hour"]').append(hourOptions);
	$('select[name="start_time_min"]').append(minuteOptions);
	$('select[name="lang"],select[name="prim_lang"],select[name="secnd_lang"],select[name="third_lang"],select[name="fourth_lang"]').append(langOptions);

});
