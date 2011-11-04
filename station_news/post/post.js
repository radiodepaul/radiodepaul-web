newsPostId = $.url().param('id');

newsPostGet = $.ajax( "https://mongolab.com:443/api/1/databases/radiodepaul/collections/news_posts/" + newsPostId + "?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;

news_post = $.parseJSON(newsPostGet);

date = news_post.created_at.$date;
var parts = date.match(/(\d+)/g);
// new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
date = new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
date = date.toDateString();


var html = '<div class="bar">' + news_post.headline + ' by ' + news_post.author + ' // ' + date + '</div>\
				<p>' + news_post.content + '</p>\
			</div>'

$(html).appendTo('#post');
document.title =  document.title + ' | ' + news_post.headline;