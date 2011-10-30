showsGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/shows?s={'name': 1}&apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
showsParse= $.parseJSON(showsGet);

$.each(showsParse, function(i, show) {
	
	var html = '<a href="/show/?id=' + show._id.$oid + '"><div class="smallBar">' + show.name + '</div></a>';
	
	$(html).appendTo('#content');
});