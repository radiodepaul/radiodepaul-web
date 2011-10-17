$('.panel').hide();
$('#player').show();
$('nav a:first-child').addClass('selected');
$('nav a').click( navSelect );
function clearAllNavElements() {
	$('nav a').each(function(){$(this).removeClass('selected')});
}
function clearAllSections() {
	$('.panel').hide();
}
function navSelect() {
	clearAllNavElements();
	clearAllSections();
    $(this).addClass('selected'); 
	navItem = $(this).attr('title');
	$('#' + navItem).show();
	//rightColumnHeight = $('#' + navItem).outerHeight();
	//$('#wrapper').css("height", rightColumnHeight);
};