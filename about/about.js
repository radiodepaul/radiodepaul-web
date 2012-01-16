managersGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/people?q={'is_manager': true}&apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
managersParse= $.parseJSON(managersGet);

$.each(managersParse, function(i, manager) {
	var html = '<div class="box">\
					<a href="/person/?id=' + manager._id.$oid + '"><p>' + manager.fname + ' ' + manager.lname + '</p></a>\
					<p>' + manager.manager_position + '</p>\
					<p><a href="mailto:"' + manager.manager_email + '">' + manager.manager_email + '</a></p>\
					<p>' + manager.manager_phone + '</p>\
				</div>';
				
	$(html).appendTo('#staffMembers');
});
$('<div class="clear"></div>').appendTo('#staffMembers');
// <li>' + manager.office_hours + '</li>\
awardsGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/awards?s={'category' : -1 }&apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
awardsParse= $.parseJSON(awardsGet);

$.each(awardsParse, function(i, award) {
	var banner_color = '';
	if ( award.winner_finalist == 'Winner' ) { banner_color = ' style="background-color:#000;"' };
	
	var html = '<div class="box">\
					<p>' + award.category + '</p>\
					<p>' + award.prize + '</p>\
					<p>' + award.recipient + '</p>\
					<div class="box_banner"><span' + banner_color + '>' + award.winner_finalist + '</span></div>\
				</div>';
	var location = '#awards_' + award.year +' .awards_' + award.association_code;
	$(html).insertAfter(location);
});