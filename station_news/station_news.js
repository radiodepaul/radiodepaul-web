newsPostsGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/news_posts?apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
newsPostsParse= $.parseJSON(newsPostsGet);

$.each(newsPostsParse, function(i, news_post) {
	
	var html = '<a href="/station_news/post/?id=' + news_post._id.$oid + '">' + news_post.headline + '</a>\
				<p>' + news_post.introduction + '</p>'
			
	$(html).appendTo('#content');
});