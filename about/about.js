managersGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/people?q={'is_manager': true}&apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
managersParse= $.parseJSON(managersGet);

$.each(managersParse, function(i, manager) {
	var html = '<div class="manager">\
				<a href="/person/?id=' + manager._id.$oid + '"><div class="manager_name">' + manager.fname + ' ' + manager.lname + '</div></a>\
				<div class="manager_stat">' + manager.manager_position + '</div>\
				<div class="manager_stat">' + manager.manager_email + '</div>\
				<div class="manager_stat">' + manager.manager_phone + '</div>\
				</div>'
				
	$(html).appendTo('#staff');
	
});
// <li>' + manager.office_hours + '</li>\