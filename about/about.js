$('#staff_list').activity({segments: 8, steps: 4, width: 10, align: 'center', valign: 'top', space: 0, length: 10, color: '#0b0b0b', speed: 1.5, padding: 30});
$(document).ready(function(){
	var html = "";
	$.ajax({
		url: "http://radiodepaul.herokuapp.com/managers.js",
		dataType: "jsonp",
		type: "GET",
		processData: false,
		contentType: "application/json",
		success: function(data) {
			$.fn.sort = function() {  
	    		return this.pushStack( [].sort.apply( this, arguments ), []);  
			};  
			function sortName(a,b) {  
	     		if (a.name == b.name) {
	       			return 0;
	     		}
	     		return a.name> b.name ? 1 : -1;  
	 		};  
	  		function sortNameDesc(a,b) {  
	     		return sortName(b,a) * -1;  
	 		};
			var sorted = $(data).sort(sortNameDesc);
			for (var i = 0; i < sorted.length; i++) {
				html += '<div class="box">\
							<a href="/person/?id=' + sorted[i]['id'] + '"><p>' + sorted[i]['name'] + '</p></a>\
							<p>' + sorted[i]['position'] + '</p>\
							<p><a href="mailto:' + sorted[i]['email'] + '">' + sorted[i]['email'] + '</a></p>\
							<p>' + sorted[i]['phone'] + '</p>\
							<img style="width:290px;" src="' + sorted[i]['photo'] + '" />\
							</div>';
			}
			$(html).appendTo('#staff_list');
			$('<div class="clear"></div>').appendTo('#staff_list');
			$('#staff_list').activity(false);
		}
	});
});
// <li>' + manager.office_hours + '</li>\

//$.each(awardsParse, function(i, award) {
//	var banner_color = '';
//	if ( award.winner_finalist == 'Winner' ) { banner_color = ' style="background-color:#000;"' };
	
//	var html = '<div class="box">\
//					<p>' + award.category + '</p>\
//					<p>' + award.prize + '</p>\
//					<p>' + award.recipient + '</p>\
//					<div class="box_banner"><span' + banner_color + '>' + award.winner_finalist + '</span></div>\
//				</div>';
//	var location = '#awards_' + award.year +' .awards_' + award.association_code;
//	$(html).insertAfter(location);
//});