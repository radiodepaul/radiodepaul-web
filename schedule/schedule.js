$('#categories a').click( navSelect );
function clearAllNavElements() {
	$('#categories a').each( 
		function() {
			$(this).removeClass('selected');
		});
}
function clearAllShows() {
	$('#schedule ul li').hide();
}
function navSelect() {
	clearAllNavElements();
	clearAllShows();
    $(this).addClass('selected'); 
	navItem = $(this).attr('title');
	$('#schedule li.' + navItem).show();
	scroll(0,0);
	$('#schedule h1').html(navItem);
	//rightColumnHeight = $('#' + navItem).outerHeight();
	//$('#wrapper').css("height", rightColumnHeight);
}
function navSelectN(n) {
	clearAllNavElements();
	clearAllShows();
    $('a[title="' + n +'"]').addClass('selected'); 
	$('.' + n).show();
	scroll(0,0);
	//rightColumnHeight = $('#' + navItem).outerHeight();
	//$('#wrapper').css("height", rightColumnHeight);
}
$(document).ready(function(){
	shows.loadSchedule();
});