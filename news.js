newsPostsGet = $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/news_posts?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;

newsPostsParse = $.parseJSON(newsPostsGet);

$.each(newsPostsParse, function(i, news_post) {
	
var html = '<li>\
				<p>' + news_post.headline + '</p>\
				<p>' + news_post.introduction + '</p>\
				<a href="/station_news/post/?id=' + news_post._id.$oid + '">Read more &rarr;</a>\
			</li>'
			$(html).appendTo('#news');
});



//<div class="bar">Photo</div><img src="http://radiodepaulapp.heroku.com/image/shows/' + show._id.$oid  + '/medium/image.jpg"/>