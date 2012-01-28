$('#staff_list').activity({segments: 8, steps: 4, width: 10, align: 'center', valign: 'top', space: 0, length: 10, color: '#0b0b0b', speed: 1.5, padding: 30});
$(document).ready(function(){
	var html = "";
	$.ajax({
		url: "http://radiodepaul.herokuapp.com/people.js",
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
				var shows = "";
                if (sorted[i]['shows'].length > 0) {
                    shows += " of "
                }
                for (var j = 0; j < sorted[i]['shows'].length; j++) {
                    if (j != sorted[i]['shows'].length - 1) {
                        if (sorted[i]['shows'].length > 2) {
                            shows += " " + sorted[i]['shows'][j]['show_title'] + ',';
                        } else { shows += sorted[i]['shows'][j]['show_title']; }
                    } else if ( sorted[i]['shows'].length == 1) {
                        shows += sorted[i]['shows'][j]['show_title'];
                    } else { shows += ' and ' + sorted[i]['shows'][j]['show_title']; }
                }
				html += '<a class="big" href="/person/?id=' + sorted[i]['id'] + '"><div class="smallBar"><img src="' + sorted[i]['photo_thumb'] + '" />  <span>' + sorted[i]['name'] + '</span>' + shows + '</div></a>';
			}
			$(html).appendTo('#staff_list');
			$('#staff_list').activity(false);
		}
	});
});