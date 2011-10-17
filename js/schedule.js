showsGet= $.ajax("https://mongolab.com/api/1/databases/heroku_app1004657/collections/shows?q={'quarter':'AQ2011'}&apiKey=4e71643d737d6347d407d755&q=", {async: false}).responseText;
showsParse= $.parseJSON(showsGet);

$.each(showsParse, function(i, show) {
	var start_ampm, end_ampm = "";

	var end_hour = show.start_hour;
	var end_minute = show.start_minute;
	
	if (show.start_hour < 12) { start_ampm = "am";} else { start_ampm = "pm";}
	
	end_minute += show.duration_min;
	while (end_minute >= 60) {
		end_minute -= 60;
		end_hour += 1;
	}
	
	if (end_hour < 12) { end_ampm = "am";} else { end_ampm = "pm"; }
	if (end_hour > 23) { end_hour -= 23; end_ampm = "am"; }

	if (show.start_hour === 0) { show.start_hour = 12; }
	if (show.start_hour > 12) { show.start_hour -= 12; }
	if (end_hour > 12) { end_hour -= 12; }
	
	if (show.start_minute === 0) { show.start_minute = "00"; }	
	if (end_minute === 0) { end_minute = "00"; }
	
	
	
	var html = '<li>\
			<img src="/img/shows/' + show.image + '" alt="" />\
			<div class="time">\
				<p class="scheduleBar startTime">' + show.start_hour + ':' + show.start_minute + start_ampm + '</p>\
				<p class="scheduleBar endTime">' + end_hour + ':' + end_minute + end_ampm + '</p>\
			</div>\
			<p class="showName">' + show.name + '<span> | </span>' + show.genre + '<a href="">Show Page</a></p>\
			<p class="showDJs">with ' + show.hosts + '</p>\
			<p class="showBio">' + show.description + '</p>\
		</li>'
	
	if (show.monday === true) { $(html).appendTo('#monday ul'); }
		
	if (show.tuesday === true) { $(html).appendTo('#tuesday ul'); }
		
	if (show.wednesday === true) { $(html).appendTo('#wednesday ul'); }
		
	if (show.thursday === true) { $(html).appendTo('#thursday ul'); }
		
	if (show.friday === true) { $(html).appendTo('#friday ul'); }
		
	if (show.saturday === true) { $(html).appendTo('#saturday ul'); }
		
	if (show.sunday === true) { $(html).appendTo('#sunday ul'); }
});