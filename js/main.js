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
$("ul#gallery li a").fancybox({
	'transitionIn'	:	'elastic',
	'transitionOut'	:	'elastic',
	'speedIn'		:	200, 
	'speedOut'		:	200, 
	'overlayShow'	:	false,
	'hideOnContentClick': true
});
$(function() {

	/* This is basic - uses default settings */
	
	//$("a#single_image").fancybox();
	
	/* Using custom settings */
	
	/*$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	*/
	
	/* Apply fancybox to multiple items */
	
	$("ul#gallery li a").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	200, 
		'speedOut'		:	200, 
		'overlayShow'	:	false,
		'hideOnContentClick': true
	});
	$("body#portfolio_item div#left_column a").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	200, 
		'speedOut'		:	200, 
		'overlayShow'	:	false,
		'hideOnContentClick': true
	});
});

function playerPopUp(url){newwindow=window.open(url,'name','height=300,width=360,toolbar=no,scrollbars=no,location=no,status=no,menubar=no,resizeable=no');}
function podcastPlayerPopUp(url) { newwindow = window.open(url, 'name', 'height=340,width=500,toolbar=no,scrollbars=no,location=no,status=no,menubar=no,resizeable=no'); }