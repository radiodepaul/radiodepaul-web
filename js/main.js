$(document).ready(function(){
	$("div#clock").clock({"calendar":"false"});
	$.simpleWeather({
	    zipcode: '60614',
	    unit: 'f',
	    success: function(weather) {
	        $("#weather").append('<img style="float:left;" width="125px" src="'+weather.image+'">');
			$("#weather").append('<p>'+weather.city+', '+weather.region+' '+weather.temp+'&deg; '+weather.units.temp+'</p>');
	    },
	    error: function(error) {
	        $("#weather").html('<p>'+error+'</p>');
	    }
	});
	function playerPopUp(url){
		newwindow=window.open(url,'name','height=371,width=600,toolbar=no,scrollbars=no,location=no,status=no,menubar=no,resizeable=no');
	}
	function podcastPlayerPopUp(url) {
		newwindow = window.open(url, 'name', 'height=340,width=500,toolbar=no,scrollbars=no,location=no,status=no,menubar=no,resizeable=no');
	}
	var current = $('body').attr('title');
	$('a[title="' + current + '"]').addClass('selected');
	var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], x = w.innerWidth || e.clientWidth || g.clientWidth, y = w.innerHeight || e.clientHeight || g.clientHeight;
	var padding = $('header').height();
	$('#main').css('min-height', y - padding);
	$('html').css('html', 'background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#e9e9e3), to(#dadad0));background: -webkit-linear-gradient(top, #e9e9e3, #dadad0);background: -moz-linear-gradient(top, #e9e9e3, #dadad0);background: -ms-linear-gradient(top, #e9e9e3, #dadad0);background: -o-linear-gradient(top, #e9e9e3, #dadad0);');
	$("a.fancybox").fancybox({
			'transitionIn'	:	'fade',
			'transitionOut'	:	'fade',
			'speedIn'		:	600, 
			'speedOut'		:	600, 
			'overlayShow'	:	true,
			'hideOnContentClick' : true,
			'titlePosition' : 'inside',
			'height' : '95%',
		});
		$.ajax({
			url: "http://radiodepaul.herokuapp.com/slots/now_playing.js",
			dataType: "jsonp",
			type: "GET",
			processData: false,
			contentType: "application/json",
			success: function(data) {
				if ( data != null ) {
					var html = '<div class="contentBox"><div class="bar">Now Playing</div><ul>'
					var name = '<li><a href="/show/?id="' + data[0]['show']['id'] + '"><p>' + data[0]['show']['title'] + '</p></a></li>';
					var photo = '<li><a href=/show/?id="' + data[0]['show']['id'] + '"><img style="margin-left:50px" src="' + data[0]['show']['photo'] + '" /></a></li>';
					if (data[0]['show']['genre'] != null) {
						genre = '<li><p>Genre<p>' + data[0]['show']['genre'] + '</p></li>';
					}
					var hosts = "";
		            if (data[0]['show']['hosts'].length != 0) {
		                hosts = "<li><p>Hosts</p><p>"
		            }
		            for (var j = 0; j < data[0]['show']['hosts'].length; j++) {
		                if (j != data[0]['show']['hosts'].length - 1) {
		                    hosts += '<a href="/person/?id=' + data[0]['show']['hosts'][j]['id'] + '">' + data[0]['show']['hosts'][j]['name'] + '</a>, ';
		                } else {
		                    hosts += 'and <a href="/person/?id=' + data[0]['show']['hosts'][j]['id'] + '">' + data[0]['show']['hosts'][j]['name'] + '</a>';
		                }
		            }
					hosts += '</p>'

					html += name + photo + genre + hosts + '</ul></div>';	
					$(html).prependTo('#sidebar');
				}
			}
		});
});
<div class="contentBox">
	<div class="bar">Now Playing</div>
</div>