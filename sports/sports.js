//sportsScheduleItemsGet = $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/sports_schedule_items?apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
//sportsScheduleItemsParse = $.parseJSON(sportsScheduleItemsGet);
//
//$.each(sportsScheduleItemsParse, function(i, sportsScheduleItem) {
//	var html = '<li>Vs. ' + sportsScheduleItem.opponent + ' - ' + sportsScheduleItem.date + ' @ ' + sportsScheduleItem.time + '</li>'
//				
//				var location = '#' + sportsScheduleItem.team_code;
//				$(html).appendTo(location);
//				
//});
//
//sportsEventsGet = $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/sports_events?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;
//
//sportsEventsParse = $.parseJSON(sportsEventsGet);
//var events_html = "";
//$.each(sportsEventsParse, function(i, event) {
//	
//	events_html += '<li>\
//				<p>' + event.title + '</p>\
//				<p>' + event.start + ' - ' + event.end + '</p>\
//				<p>' + event.location + '</p>\
//				<p>' + event.description + '</p>\
//			</li>'
//});
//$(events_html).appendTo('#events');

$(document).ready(function(){
	app.loadSlides();
	app.setupFancyBox();
	app.loadPodcasts('sports');
});
google.load("feeds", "1");
function feedLoaded(result) {
  if (!result.error) {
		var html = "";
		$.each(result.feed.entries, function(i, item) {
			html += '<li><a href="' + item.link + '"><p>' + item.title + '</p></a><p>' + item.contentSnippet + '</p></li>';
		});
		$(html).appendTo('#athletics_feed');
	}
}
function OnLoad() {
	var feed = new google.feeds.Feed("http://www.depaulbluedemons.com/headline-rss.xml");

	feed.load(feedLoaded);
}
google.setOnLoadCallback(OnLoad);