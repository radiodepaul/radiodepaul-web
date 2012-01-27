$('#news').closest('div').activity({segments: 8, steps: 4, width: 2, align: 'right', valign: 'top', space: 0, length: 3, color: '#0b0b0b', speed: 1.5, padding: 5});
$('#events').closest('div').activity({segments: 8, steps: 4, width: 2, align: 'right', valign: 'top', space: 0, length: 3, color: '#0b0b0b', speed: 1.5, padding: 5});
$('#depaulia_feed').closest('div').activity({segments: 8, steps: 4, width: 2, align: 'right', valign: 'top', space: 0, length: 3, color: '#0b0b0b', speed: 1.5, padding: 5});

newsPostsGet = $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/news_posts?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;
newsPostsParse = $.parseJSON(newsPostsGet);

$.each(newsPostsParse, function(i, news_post) {
	
	var html = '<li>\
				<a href="/station_news/post/?id=' + news_post._id.$oid + '"><p>' + news_post.headline + '</p></a>\
				<p>' + news_post.introduction + '</p>\
				</li>';
	$(html).appendTo('#news');
});
$('#news').closest('div').activity(false);

stationEventsGet = $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/station_events?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;
stationEventsParse = $.parseJSON(stationEventsGet);

$.each(stationEventsParse, function(i, event) {
	
var html = '<li>\
				<p>' + event.title + '</p>\
				<p>' + event.start + ' - ' + event.end + '</p>\
				<p>' + event.location + '</p>\
				<p>' + event.description + '</p>\
			</li>';
			$(html).appendTo('#events');
});
$('#events').closest('div').activity(false);

$(document).ready(function(){
	$.ajax({
		url: "http://radiodepaul.herokuapp.com/shows/random.js",
		dataType: "jsonp",
		type: "GET",
		processData: false,
		contentType: "application/json",
		success: function(data) {
			var html = "";
			for (var i=0; i < data.length; i++) {
					html += '<a href="/show/?id=' + data[i]['id'] + '"><span>' + data[i]['title'] + '</span></a>';
			}
			$(html).appendTo('#categories');
		}
	});
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