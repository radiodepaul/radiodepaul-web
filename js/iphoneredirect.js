var siteRequested = $.url().param('s');
if ( ( navigator.userAgent.indexOf("iPhone") !=-1 || navigator.userAgent.indexOf("iPod") !=-1 ) &&  siteRequested != 'full' ) {
	window.location="/iphone/";
}