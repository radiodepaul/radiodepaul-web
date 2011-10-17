$(document).ready(function() {

	/* This is basic - uses default settings */
	
	//$("a#single_image").fancybox();
	
	/* Using custom settings */
	
	/*$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	*/
	
	/* Apply fancybox to multiple items */
	
	$("ul.fancybox li a").fancybox({
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