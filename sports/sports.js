sportsScheduleItemsGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/sports_schedule_items?q={'quarter': 'AQ2011'}&apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
sportsScheduleItemsParse= $.parseJSON(sportsScheduleItemsGet);

$.each(sportsScheduleItemsParse, function(i, sportsScheduleItem) {
	var html = '<li>Vs. ' + sportsScheduleItem.opponent + ' - ' + sportsScheduleItem.date + ' @ ' + sportsScheduleItem.time + '</li>'
				
				var location = '#' + sportsScheduleItem.team_code;
				$(html).appendTo(location);
				
});

// <li>Vs. Georgetown - Sunday 9/25 @ 2:00pm</li>

sportsEventsGet = $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/sports_events?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;

sportsEventsParse = $.parseJSON(sportsEventsGet);

$.each(sportsEventsParse, function(i, event) {
	
var html = '<li>\
				<p>' + event.title + '</p>\
				<p>' + event.start + ' - ' + event.end + '</p>\
				<p>' + event.location + '</p>\
				<p>' + event.description + '</p>\
			</li>'
			$(html).appendTo('#events');
});