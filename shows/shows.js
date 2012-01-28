$('#shows').activity({segments: 8, steps: 4, width: 10, align: 'center', valign: 'top', space: 0, length: 10, color: '#0b0b0b', speed: 1.5, padding: 30});
$(document).ready(function(){
	$.ajax({
		url: "http://radiodepaul.herokuapp.com/shows.js",
		dataType: "jsonp",
		type: "GET",
		processData: false,
		contentType: "application/json",
		success: function(data) {
			
			$.fn.sort = function() {  
	    		return this.pushStack( [].sort.apply( this, arguments ), []);  
			};  
			function sortTitle(a,b) {  
	     		if (a.title == b.title) {
	       			return 0;
	     		}
	     		return a.title> b.title ? 1 : -1;  
	 		};  
	  		function sortTitleDesc(a,b) {  
	     		return sortTitle(b,a) * -1;  
	 		};
			var sorted = $(data).sort(sortTitleDesc);
			var html = "";
			for (var i = 0; i < sorted.length; i++) {
				var hosts = "";
	            for (var j = 0; j < sorted[i]['hosts'].length; j++) {
	                if (j != sorted[i]['hosts'].length - 1) {
	                    hosts += " with " + sorted[i]['hosts'][j]['name'] + ', ';
	                } else if ( sorted[i]['hosts'].length == 1) {
	                    hosts += " with " + sorted[i]['hosts'][j]['name'];
	                } else { hosts += 'and ' + sorted[i]['hosts'][j]['name']; }
	            }
				html += '<a class="big" href="/show/?id=' + sorted[i]['id'] + '"><div class="smallBar"><img src="' + sorted[i]['photo_thumb'] + '" />  <span>' + sorted[i]['title'] + '</span>' + hosts + '</div></a>';
			}
			$(html).appendTo('#shows');
			$('#shows').activity(false);
		}
	});
});