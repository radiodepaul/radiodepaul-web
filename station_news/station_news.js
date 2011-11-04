newsPostsGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/news_posts?apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
newsPostsParse= $.parseJSON(newsPostsGet);

$.each(newsPostsParse, function(i, news_post) {
	
	var html = '<li>\
					<a href="/station_news/post/?id=' + news_post._id.$oid + '"><p>' + news_post.headline + '</p></a>\
					<p>' + news_post.introduction + '</p>\
				</li>';
			
	$(html).appendTo('#news_posts');
});