$('#staff_list').activity({segments: 8, steps: 4, width: 10, align: 'center', valign: 'top', space: 0, length: 10, color: '#0b0b0b', speed: 1.5, padding: 30});
$(document).ready(function(){
	$.ajax({
		url: "http://radiodepaul.herokuapp.com/podcasts.js",
		dataType: "jsonp",
		type: "GET",
		processData: false,
		contentType: "application/json",
		success: function(data) {
			
			var get_playlist = new Array();
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
				if ( sorted[i]['type'] == 'station' ) {
					var x = {};
					x['title'] = sorted[i]['title'];
					x['artist'] = sorted[i]['contributors'];
					x['mp3'] = sorted[i]['file_url']
					get_playlist.push(x)
				}
			}
			
			var myPlaylist = new jPlayerPlaylist({
				jPlayer: "#jquery_jplayer_N",
				cssSelectorAncestor: "#jp_container_N"
			}, get_playlist, {
				playlistOptions: {
					enableRemoveControls: false
				},
				swfPath: "js",
				supplied: "mp3"
			});
		}
	});
});