managersGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/people?q={'is_manager': true}&apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
managersParse= $.parseJSON(managersGet);

$.each(managersParse, function(i, manager) {
	var html = '<div class="box">\
				<a href="/person/?id=' + manager._id.$oid + '"><div class="manager_name">' + manager.fname + ' ' + manager.lname + '</div></a>\
				<div class="manager_stat">' + manager.manager_position + '</div>\
				<div class="manager_stat">' + manager.manager_email + '</div>\
				<div class="manager_stat">' + manager.manager_phone + '</div>\
				</div>';
				
	$(html).appendTo('#staff');
	
});
// <li>' + manager.office_hours + '</li>\
awardsGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/awards?s={'category' : -1 }&apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
awardsParse= $.parseJSON(awardsGet);

$.each(awardsParse, function(i, award) {
	
	var banner_color = ''
	
	if (award.winner_finalist == 'Winner') {
			banner_color = ' style="background-color:#000;"'
		}
	
	var html = '<div class="box">\
				<div class="box_banner"><span' + banner_color + '>' + award.winner_finalist + '</span></div>\
				<div class="award_category">' + award.category + '</div>\
				<div class="award_prize">' + award.prize + '</div>\
				<div class="award_recipient">' + award.recipient + '</div>\
				</div>';
	console.log('#awards #awards_' + award.year + ' #awards_' + award.association_code);	
	var location = '#awards_' + award.year +' .awards_' + award.association_code;
	$(html).insertAfter(location);
	
});