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
	$.ajax({
		url: "http://radiodepaul.herokuapp.com/podcasts.js",
		dataType: "jsonp",
		type: "GET",
		processData: false,
		contentType: "application/json",
		success: function(data) {
			
			var get_playlist = new Array();
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
				if ( sorted[i]['type'] == 'sports' ) {
					var x = {};
					x['title'] = sorted[i]['title'];
					x['artist'] = sorted[i]['contributors'];
					x['mp3'] = sorted[i]['file_url']
					get_playlist.push(x)
				}
			}
			
			var myPlaylist = new jPlayerPlaylist({
				jPlayer: "#jquery_jplayer_N",
				cssSelectorAncestor: "#jp_container_N"
			}, get_playlist, {
				playlistOptions: {
					enableRemoveControls: false
				},
				swfPath: "js",
				supplied: "mp3"
			});
		}
	});
});
//$(function(){
//	google.load("feeds", "1");
//	function feedLoaded(result) {
//		if (!result.error) {
//			var html = "";
//			for (var i = 0; i < 2; i++) {
//				var item = result.feed.entries[i];
//				html += '<li><a href="' + item.link + '"><p>' + item.title + '</p></a><p>' + item.contentSnippet + '</p></li>';
//			}
//			$(html).appendTo('#athletics_feed');
//		}
//	}
//	function OnLoad() {
//		var feed = new google.feeds.Feed("http://www.depaulbluedemons.com/headline-rss.xml");
//		feed.load(feedLoaded);
//	}
//
//	google.setOnLoadCallback(OnLoad);
//});