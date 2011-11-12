$('.panel').css('margin-left','-99999px');
$('#player').css('margin-left','0');
$('nav a:first-child').addClass('selected');
$('nav a').click( navSelect );
var webcam_output = '';
if ((navigator.appName == "Microsoft Internet Explorer") && (navigator.platform != "MacPPC") && (navigator.platform != "Mac68k")) {
    webcam_output = '<object id="AxisCamControl" classid="CLSID:917623D1-D8E5-11D2-BE8B-00104B06BDE3" CODEBASE="http://140.192.109.189/activex/AxisCamControl.cab#Version=2,23,0,0">\
	<param name=DisplaySoundPanel value=0>\
    <param name=URL value="http://140.192.109.189/axis-cgi/mjpg/video.cgi?camera=&resolution=640x480">\
    </object>';
} else {
    theDate = new Date();
    webcam_output = '<img src="http://140.192.109.189/axis-cgi/mjpg/video.cgi?camera=&resolution=640x480&' + theDate.getTime() + '" height=270 />';
}
function clearAllNavElements() {
	$('nav a').each(function(){$(this).removeClass('selected')});
}
function clearAllSections() {
	$('.panel').css('margin-left','-99999px');
	$('#webcam_embed').empty();
}
function navSelect() {
	clearAllNavElements();
	clearAllSections();
    $(this).addClass('selected'); 
	navItem = $(this).attr('title');
	$('#' + navItem).css('margin-left','0');
	if (navItem == 'webcam') { $('#webcam_embed').html(webcam_output); }
	//rightColumnHeight = $('#' + navItem).outerHeight();
	//$('#wrapper').css("height", rightColumnHeight);
};