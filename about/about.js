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
							<img style="float:right;height:75px;" src="' + sorted[i]['photo'] + '" />\
							<a href="/person/?id=' + sorted[i]['id'] + '"><p>' + sorted[i]['name'] + '</p></a>\
							<p>' + sorted[i]['position'] + '</p>\
							<p><a href="mailto:"' + sorted[i]['email'] + '">' + sorted[i]['email'] + '</a></p>\
							<p>' + sorted[i]['phone'] + '</p>\
							</div>';
			}
			$(html).appendTo('#staffMembers');
			$('<div class="clear"></div>').appendTo('#staffMembers');
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