function pageLoaded() {
	switchToSectionWithId('home');
}
function goToStreamLow(url) {
	window.location = "/radiodepaul64kbps.m3u";
}
function goToStreamHigh(url) {
	window.location = "/radiodepaul128kbps.m3u";
}
function getWebcam() {
	document.getElementById('webcam').innerHTML = '<img name="webcam_img" src="http://dblandin-web.dyndns.org/readImage.asp" width     =320 height=240 />';
        window.theTimer = setTimeout("refreshWebcam()", 1);
}
function refreshWebcam() {
        window.theTimer = setTimeout("refreshWebcam()", 1000);
        theDate = new Date();
        current = document.webcam_img.src;
        document.webcam_img.src = current + '?dummy=' + theDate.getTime().toString(10);
 
}
function navSelected() {
	clearAllNavItems();

	var navItem = event.target;
	navItem.setAttribute('class', 'selected');

	switch (navItem.id) {
	    case 'liHome':
	        switchToSectionWithId('home');
	        break;
	    case 'liListen':
	        switchToSectionWithId('listen');
	        break;
	    case 'liWatch':
	        switchToSectionWithId('watch');
	        getWebcam();
	        break;
	    case 'liSchedule':
	        switchToSectionWithId('schedule');
	        break;
	    case 'liContact':
	        switchToSectionWithId('contact');
	        break;
	}
	var output = $('section#watch').height();
	console.log(output);
}
function clearAllNavItems() {
	var navList = document.getElementById('navList');

	for (var i = 0; i < navList.children.length; i++) {
	    var li = navList.children[i];
	    li.setAttribute('class', '');
	}
        window.clearTimeout(window.theTimer);
}
function switchToSectionWithId(sectionId) {
	hideAllSections();
	showSectionWithId(sectionId);
}
function hideAllSections() {
	var sections = document.getElementsByTagName('section');
	for (var i = 0; i < sections.length; i++) {
	    var section = sections[i];
	    section.setAttribute('class', '');
	}
}
function showSectionWithId(sectionId) {
	var section = document.getElementById(sectionId);
	section.setAttribute('class', 'selected');
}
