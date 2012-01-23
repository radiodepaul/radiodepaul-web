$(document).ready(function(){
	personId = $.url().param('id');
	$.ajax({
		url: "http://radiodepaul.herokuapp.com/people/" + personId + ".js",
		dataType: "jsonp",
		type: "GET",
		processData: false,
		contentType: "application/json",
		success: function(data) {
			if ( data != null ) {

				document.title = document.title + ' | ' + data['name'];
				var html = '<div class="contentBox"><div class="bar">Error</div><p>Sorry. The person you requested cannot be found.</p></div>'
				var twitter = "", name = "", shows = "", photo = "", linkedin = "", facebook = "", email = "", bio = "", hometown = "", major = "", class_year = "", stats = "", social = "", influences = "";

				name = '<h2 id="name">' + data['name'] + '</h2>';
				
				var photo_url = "'" + data['photo_medium'] + "'";
				
				photo = '<div class="left photoBox" style="background: url(' + photo_url + ');"></div>';

				if ( data['major'] && data['hometown'] && data['class_year'] != null ) {
					if (data['major'] != null) {
						major = '<p>Major: ' + data['major'] + '</p>';
					}
					if (data['hometown'] != null) {
						hometown = '<p>Hometown: ' + data['hometown'] + '</p>';
					}
					if (data['class_year'] != null) {
						class_year = '<p>Class Year: ' + data['class_year'] + '</p>';
					}
					stats = '<div class="right contentBox"><div class="bar">Stats</div>' + major + hometown + class_year + '</div>';
				}
				if (data['shows'] != null) {
					shows = '<div class="contentBox right"><div class="bar">Shows Hosted:</div><ul>'
					for (var i = 0; i < data['shows'].length; i++) {
							shows += '<a class="big" href="/show/?id=' + data['shows'][i]['show_id'] + '"><li><img src="' + data['shows'][i]['show_photo_thumb'] + '" />' + data['shows'][i]['show_title'] + '</li></a>';
					}
					 shows += '</div>';
				}
				if (data['influences'] != null) {
					influences = '<div class="right contentBox"><div class="bar">Influences</div><p>' + data['influences'] + '</p></div>';
				}
				if ( data['twitter'] != null ) {
					twitter = '<li class="twitter"><a href="http://twitter.com/' + data['twitter'] + '" target="_blank"></a></li>';
				} else { twitter = '<li class="twitter"><a href="http://twitter.com/radiodepaul" target="_blank"></a></li>'; }

				if ( data['facebook'] != null ) {
					facebook = '<li class="facebook"><a href="http://facebook.com/' + data['facebook'] + '" target="_blank"></a></li>';
				} else { facebook = '<li class="facebook"><a href="http://facebook.com/radiodepaul" target="_blank"></a></li>'; }

				if ( data['linkedin'] != null ) {
					linkedin = '<li class="linkedin"><a href="http://linkedin.com/' + data['linkedin'] + '" target="_blank"></a></li>';
				}

				if ( data['email'] != null ) {
					email = '<li class="email"><a href="mailto:' + data['email'] + '"></a></li>';
				}

				social = '<div class="right contentBox"><div class="bar">Follow ' + data['name'] + '</div><ul id="personshowSocial">' + twitter + facebook + linkedin + email + '</ul></div>';

				if (data['bio'] != null) {
					bio = '<div class="contentBox clear"><div class="bar">Bio</div><p>' + data['bio'] + '</p></div>';
				}

				html = name + photo + social + stats + shows + influences + bio;	
				
				$(html).appendTo('#content');
			}

		}
	});
});


//for (var i=0; i < 6; i++) {
//	var randomNum = Math.ceil( Math.random()* peopleParse.length);
//	html = '<a href="/person/?id=' + peopleParse[randomNum]._id.$oid + '"><span>' + peopleParse[randomNum].fname + ' ' + peopleParse[randomNum].lname + '</span></a>'
//	$(html).appendTo('#categories');
//};