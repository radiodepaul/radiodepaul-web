newsPostId = $.url().param('id');

newsPostGet = $.ajax( "https://mongolab.com:443/api/1/databases/radiodepaul/collections/news_posts/" + newsPostId + "?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;

news_post = $.parseJSON(newsPostGet);

var html = '<div class="bar">' + news_post.headline + ' by ' + news_post.author + ' // ' + news_post.created_at.$date + '</div>\
				<p>' + news_post.content + '</p>\
			</div>'

$(html).appendTo('#content');