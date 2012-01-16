$('#schedule div.bar').activity({segments: 8, steps: 4, width: 2, align: 'right', valign: 'top', space: 0, length: 3, color: '#0b0b0b', speed: 1.5, padding: 5});
showsGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/shows?q={'quarter':'WQ2012'}&s={'start_hour': 1, 'start_minute': 1}&apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
showsParse= $.parseJSON(showsGet);
var mon_html = '', tue_html = '', wed_html = '', thur_html = '', fri_html = '', sat_html = '', sun_html = '';
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