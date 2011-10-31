peopleGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/people?s={'fname' : 1}&apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
peopleParse= $.parseJSON(peopleGet);

$.each(peopleParse, function(i, person) {
	
	var html = '<a href="/person/?id=' + person._id.$oid + '"><div class="smallBar">' + person.fname + ' ' + person.lname + '</div></a>'
	
	$(html).appendTo('#staff_list');
});