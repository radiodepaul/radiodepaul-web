$('.panel').css('margin-left','-99999px');
$('#player').css('margin-left','0');
$('nav a:first-child').addClass('selected');
$('nav a').click( navSelect );
function generateWebcam() {
	var webcam_output = '';
	if ((navigator.appName == "Microsoft Internet Explorer") && (navigator.platform != "MacPPC") && (navigator.platform != "Mac68k")) {
	    webcam_output = '<object id="AxisCamControl" classid="CLSID:917623D1-D8E5-11D2-BE8B-00104B06BDE3" CODEBASE="http://140.192.109.189/activex/AxisCamControl.cab#Version=2,23,0,0">\
		<param name=DisplaySoundPanel value=0>\
	    <param name=URL value="http://140.192.109.189/axis-cgi/mjpg/video.cgi?camera=&resolution=640x480">\
	    </object>';
	} else {
	    theDate = new Date();
	    webcam_output = '<img src="http://140.192.109.189/axis-cgi/mjpg/video.cgi?resolution=640x480&' + theDate.getTime() + '" height=270 />';
	}
	return webcam_output;
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
	if (navItem == 'webcam') { 
		output = generateWebcam();
		$('#webcam_embed').html(output);
	}
	//rightColumnHeight = $('#' + navItem).outerHeight();
	//$('#wrapper').css("height", rightColumnHeight);
};
newsPostsGet = $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/news_posts?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;
newsPostsParse = $.parseJSON(newsPostsGet);
for (var i = 0; i < 1; i++) {
	var news_post = newsPostsParse[i];
	var html = '<li>\
	<a href="/station_news/post/?id=' + news_post._id.$oid + '" target="_blank"><p>' + news_post.headline + '</p></a>\
	<p>' + news_post.introduction + '</p>\
	</li>'
	$(html).appendTo('#news');
};