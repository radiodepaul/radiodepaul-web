peopleGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/people?apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
peopleParse= $.parseJSON(peopleGet);

$.each(peopleParse, function(i, person) {
	
	var html = '<p><a href="/person/?id=' + person._id.$oid + '">' + person.fname + ' ' + person.lname + '</a></p>'
	
	$(html).appendTo('#content');
});