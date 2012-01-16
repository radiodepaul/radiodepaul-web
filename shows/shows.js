$(document).ready(function(){
	var html = "";
	$.ajax({
		url: "http://localhost:3000/shows.js",
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
			for (var i = 0; i < sorted.length; i++) {
				html += '<a class="big" href="/show/?id=' + sorted[i]['id'] + '"><div class="smallBar"><img src="' + sorted[i]['photo_thumb'] + '" />  ' + sorted[i]['title'] + '</div></a>';
			}
			$(html).appendTo('#shows');
		}
	});
});