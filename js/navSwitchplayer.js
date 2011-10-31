$('.panel').css('margin-left','-99999px');
$('#player').css('margin-left','0');
$('nav a:first-child').addClass('selected');
$('nav a').click( navSelect );
function clearAllNavElements() {
	$('nav a').each(function(){$(this).removeClass('selected')});
}
function clearAllSections() {
	$('.panel').css('margin-left','-99999px');
}
function navSelect() {
	clearAllNavElements();
	clearAllSections();
    $(this).addClass('selected'); 
	navItem = $(this).attr('title');
	$('#' + navItem).css('margin-left','0');
	//rightColumnHeight = $('#' + navItem).outerHeight();
	//$('#wrapper').css("height", rightColumnHeight);
};