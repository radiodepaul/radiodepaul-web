showsGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/shows?apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
showsParse= $.parseJSON(showsGet);

$.each(showsParse, function(i, show) {
	
	var html = '<p><a href="/show/?id=' + show._id.$oid + '">' + show.name + '</a></p>';
	
	$(html).appendTo('#content');
});