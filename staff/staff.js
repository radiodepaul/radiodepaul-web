$(document).ready(function(){
	var html = "";
	$.ajax({
		url: "http://localhost:3000/people.js",
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
				html += '<a class="big" href="/person/?id=' + sorted[i]['id'] + '"><div class="smallBar"><img src="' + sorted[i]['photo_thumb'] + '" />  ' + sorted[i]['name'] + '</div></a>';
			}
			$(html).appendTo('#staff_list');
		}
	});
});