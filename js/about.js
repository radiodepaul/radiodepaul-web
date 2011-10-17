managersGet= $.ajax("https://mongolab.com/api/1/databases/heroku_app1004657/collections/people?q={'is_manager': true}&apiKey=4e71643d737d6347d407d755&q=", {async: false}).responseText;
managersParse= $.parseJSON(managersGet);

$.each(managersParse, function(i, manager) {
	var html = '<div>\
				<li>' + manager.fname + ' ' + manager.lname + '</li>\
				<li>' + manager.manager_position + '</li>\
				<li>' + manager.manager_email + '</li>\
				<li>' + manager.manager_phone + '</li>\
				</div>'
				
	$(html).appendTo('#staff');
	
});
// <li>' + manager.office_hours + '</li>\