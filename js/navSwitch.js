$('#categories a:first-child').addClass('selected');
$('#categories a').click( navSelect );
$('#categories a#all').click( showAllSections );
function clearAllNavElements() {
	$('#categories a').each( 
		function() {
			$(this).removeClass('selected');
		});
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
	scroll(0,0);
	//rightColumnHeight = $('#' + navItem).outerHeight();
	//$('#wrapper').css("height", rightColumnHeight);
}
function navSelectN(n) {
	clearAllNavElements();
	clearAllSections();
    $('a[title="' + n +'"]').addClass('selected'); 
	$('#' + n).show();
	scroll(0,0);
	//rightColumnHeight = $('#' + navItem).outerHeight();
	//$('#wrapper').css("height", rightColumnHeight);
}
function showAllSections() {
	$('.panel').show();
}