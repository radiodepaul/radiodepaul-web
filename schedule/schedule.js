showsGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/shows?q={'quarter':'AQ2011'}&s={'start_hour': 1, 'start_minute': 1}&apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
peopleGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/people?apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
showsParse= $.parseJSON(showsGet);
peopleParse= $.parseJSON(peopleGet);

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
	
	if (show.monday === true) { $(html).appendTo('#monday ul'); }
		
	if (show.tuesday === true) { $(html).appendTo('#tuesday ul'); }
		
	if (show.wednesday === true) { $(html).appendTo('#wednesday ul'); }
		
	if (show.thursday === true) { $(html).appendTo('#thursday ul'); }
		
	if (show.friday === true) { $(html).appendTo('#friday ul'); }
		
	if (show.saturday === true) { $(html).appendTo('#saturday ul'); }
		
	if (show.sunday === true) { $(html).appendTo('#sunday ul'); }
});