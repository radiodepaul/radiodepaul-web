$('#schedule').activity({segments: 8, steps: 4, width: 10, align: 'center', valign: 'top', space: 0, length: 10, color: '#0b0b0b', speed: 1.5, padding: 30});
var d = new Date();
var weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
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
	$.ajax({
		url: "http://radiodepaul.herokuapp.com/slots/current.js",
		dataType: "jsonp",
		type: "GET",
		processData: false,
		contentType: "application/json",
		success: function(data) {
			var html = "<ul>";
	        for (var i = 0; i < data.length; i++) {
	            var hosts = "";
	            if (data[i]['show']['hosts'].length != 0) {
	                hosts = " with "
	            }
	            for (var j = 0; j < data[i]['show']['hosts'].length; j++) {
	                if (j != data[i]['show']['hosts'].length - 1) {
	                    hosts += '<a href="/person/?id=' + data[i]['show']['hosts'][j]['id'] + '">' + data[i]['show']['hosts'][j]['name'] + '</a>, ';
	                } else {
	                    hosts += '<a href="/person/?id=' + data[i]['show']['hosts'][j]['id'] + '">' + data[i]['show']['hosts'][j]['name'] + '</a>';
	                }
	            }
	            for (var k = 0; k < data[i]['days'].length; k++) {
	                html += '<li class="' + data[i]['days'][k] + '" style="display:none;">\
	                            <div class="time">\
	                                <p class="scheduleBar startTime">' + data[i]['start_time'] + '</p>\
	                                <p class="scheduleBar endTime">' + data[i]['end_time'] + '</p>\
	                            </div>\
								<img src="' + data[i]['show']['photo'] + '" />\
	                            <p class="showName"><a href="/show/?id=' + data[i]['show']['id'] + '">' + data[i]['show']['title'] + '</a><span> | ' + data[i]['show']['genre'] + '</span></p>\
	                            <p class="showDJs">' + hosts + '</p>';
					if ( data[i]['show']['short_description'] != null ) {
						html += '<p class="showBio">' + data[i]['show']['short_description'] + '</p>';
					}
					html += '</li>';
	            }
	        }
			html += "</ul>";
			$('#schedule').append('<h1>' + weekday[d.getDay()] + '</h1>');
			$('#schedule').append(html);
			$('#schedule').activity(false);
			$('.' + weekday[d.getDay()]).show();
			navSelectN(weekday[d.getDay()]);
		}
	});
});