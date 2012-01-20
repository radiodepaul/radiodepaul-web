$('#schedule').activity({segments: 8, steps: 4, width: 10, align: 'center', valign: 'top', space: 0, length: 10, color: '#0b0b0b', speed: 1.5, padding: 30});
$(document).ready(function(){
	$.ajax({
		url: "http://radiodepaul.herokuapp.com/shows.js",
		dataType: "jsonp",
		type: "GET",
		processData: false,
		contentType: "application/json",
		success: function(data) {
			var mon_html = '', tue_html = '', wed_html = '', thur_html = '', fri_html = '', sat_html = '', sun_html = '';
			
			$.fn.sort = function() {  
	    		return this.pushStack( [].sort.apply( this, arguments ), []);  
			};  
			function sortTitle(a,b) {  
	     		if (a.title == b.title) {
	       			return 0;
	     		}
	     		return a.title> b.title ? 1 : -1;  
	 		};  
	  		function sortTitleDesc(a,b) {  
	     		return sortTitle(b,a) * -1;  
	 		};
			var sorted = $(data).sort(sortTitleDesc);
			
			for (var i = 0; i < sorted.length; i++) {
				var hosts = "";
				if ( sorted[i]['hosts'].length != 0 ) {
					hosts = " with "
				}
				for (var j = 0; j < sorted[i]['hosts'].length; j++) {
					if ( j != sorted[i]['hosts'].length - 1 ) {
						hosts += sorted[i]['hosts'][j]['name'] + ', ';
					} else { hosts += sorted[i]['hosts'][j]['name']; }
				}
				
				var html = '<li>\
						<div class="time">\
							<p class="scheduleBar startTime">' + sorted[i]['start_time'] + '</p>\
							<p class="scheduleBar endTime">' + sorted[i]['end_time'] + '</p>\
						</div>\
						<p class="showName"><a href="/show/?id=' + sorted[i]['id'] + '">' + sorted[i]['title'] + '</a><span> | ' + sorted[i]['genre'] + '</span></p>\
						<p class="showDJs">with ' + hosts + '</p>\
						<p class="showBio">' + sorted[i]['short_description'] + '</p>\
					</li>'
				$(html).appendTo('#monday ul');
			}
			$(html).appendTo('#shows');
			$('#shows').activity(false);
		}
	});
});

var mon_html = '', tue_html = '', wed_html = '', thur_html = '', fri_html = '', sat_html = '', sun_html = '';
$(document).ready(function(){
	var html = "";
	$.ajax({
		url: "http://localhost:3000/shows.js",
		dataType: "jsonp",
		type: "GET",
		processData: false,
		contentType: "application/json",
		success: function(data) {
			$.fn.sort = function() {  
	    		return this.pushStack( [].sort.apply( this, arguments ), []);  
			};  
			function sortHour(a,b) {  
	     		if (a.title == b.title) {
	       			return 0;
	     		}
	     		return a.title> b.title ? 1 : -1;  
	 		};  
	  		function sortHourDesc(a,b) {  
	     		return sortHour(b,a) * -1;  
	 		};
			var sorted = $(data).sort(sortHourDesc);
			for (var i = 0; i < sorted.length; i++) {
				html += '<a class="big" href="/show/?id=' + sorted[i]['id'] + '"><div class="smallBar"><img src="' + sorted[i]['photo_thumb'] + '" />  ' + sorted[i]['title'] + '</div></a>';
			}
			$(html).appendTo('#shows');
		}
	});
});


$.each(showsParse, function(i, show) {
	var start_ampm = "", end_ampm = "";
	var start_hour = show.start_hour, start_minute = show.start_minute, end_hour = show.end_hour, end_minute = show.end_minute;
	
	if (start_hour < 12) { start_ampm = "am";} else { start_ampm = "pm";}
	if (end_hour < 12) { end_ampm = "am";} else { end_ampm = "pm"; }

	if (start_hour == 0) { start_hour = 12; }
	if (end_hour == 0) { end_hour = 12; }
	
	if (start_hour > 12) { start_hour -= 12; }
	if (end_hour > 12) { end_hour -= 12; }
	
	if (start_minute === 0) { start_minute = "00"; }	
	if (end_minute === 0) { end_minute = "00"; }	
	
	var html = '<li>\
			<div class="time">\
				<p class="scheduleBar startTime">' + start_hour + ':' + start_minute + start_ampm + '</p>\
				<p class="scheduleBar endTime">' + end_hour + ':' + end_minute + end_ampm + '</p>\
			</div>\
			<p class="showName"><a href="/show/?id=' + show._id.$oid + '">' + show.name + '</a><span> | ' + show.genre + '</span></p>\
			<p class="showDJs">with ' + show.host + '</p>\
			<p class="showBio">' + show.short_description + '</p>\
		</li>'
	
	if (show.monday === true) { mon_html += html; }
		
	if (show.tuesday === true) { tue_html += html; }
		
	if (show.wednesday === true) { wed_html += html; }
		
	if (show.thursday === true) { thur_html += html; }
		
	if (show.friday === true) { fri_html += html; }
		
	if (show.saturday === true) { sat_html += html; }
		
	if (show.sunday === true) { sun_html += html; }
});
$(mon_html).appendTo('#monday ul');
$(tue_html).appendTo('#tuesday ul');
$(wed_html).appendTo('#wednesday ul');
$(thur_html).appendTo('#thursday ul');
$(fri_html).appendTo('#friday ul');
$(sat_html).appendTo('#saturday ul');
$(sun_html).appendTo('#sunday ul');
$('#schedule div.bar').activity(false);