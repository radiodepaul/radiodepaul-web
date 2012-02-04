$(document).ready(function(){
	app.loadStationNews();
	app.loadStationEvents();
	shows.displayRandomShows();
	app.loadSlides();
	app.setupFancyBox();
});
google.load("feeds", "1");
function feedLoaded(result) {
  if (!result.error) {
		var html = "";
		$.each(result.feed.entries, function(i, item) {
			html += '<li>\
					<a href="' + item.link + '" target="_blank"><p>' + item.title + '</p></a>\
					<p>' + item.contentSnippet + '</p>\
					</li>'
		});
		$(html).appendTo('#depaulia_feed');
		$('#depaulia_feed').closest('div').activity(false);
	}
}
function OnLoad() {
	var feed = new google.feeds.Feed("http://www.depauliaonline.com/se/the-depaulia-rss-1.2124399");

	feed.load(feedLoaded);
}
google.setOnLoadCallback(OnLoad);