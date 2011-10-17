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
	$('.day').hide();
}
function navSelect() {
	clearAllNavElements();
	clearAllSections();
    $(this).addClass('selected'); 
	navItem = $(this).attr('title');
	$('#' + navItem).show();
	//rightColumnHeight = $('#' + navItem).outerHeight();
	//$('#wrapper').css("height", rightColumnHeight);
}
function navSelectN(n) {
	clearAllNavElements();
	clearAllSections();
    $('a[title="' + n +'"]').addClass('selected'); 
	$('#' + n).show();
	//rightColumnHeight = $('#' + navItem).outerHeight();
	//$('#wrapper').css("height", rightColumnHeight);
}
function showAllSections() {
	$('.day').show();
}

var d = new Date();
var weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
navSelectN(weekday[d.getDay()]);