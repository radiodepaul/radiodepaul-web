$(document).ready(function(){
	personId = $.url().param('id');
	var html = '<div class="contentBox"><div class="bar">Error</div><p>Sorry. The person you requested cannot be found.</p></div>'
	$.ajax({
		url: "http://localhost:3000/people/" + personId + ".js",
		dataType: "jsonp",
		type: "GET",
		processData: false,
		contentType: "application/json",
		success: function(data) {
			if ( data != null ) {

				document.title = document.title + ' | ' + data['name'];

				var twitter = "", name = "", photo = "", linkedin = "", facebook = "", email = "", bio = "", hometown = "", major = "", class_year = "", stats = "", social = "", influences = "";

				name = '<h2 id="name">' + data['name'] + '</h2>';
				
				photo = '<div class="left contentBox photoBox"><div class="bar">Photo</div><img src = "' + data['photo_medium'] + '" alt = "Photo of ' + data['name'] + '" /></div>';

				if ( data['major'] && data['hometown'] && data['class_year'] != '' ) {
					if (data['major'] != '') {
						major = '<p>Major: ' + data['major'] + '</p>';
					}
					if (data['hometown'] != '') {
						hometown = '<p>Hometown: ' + data['hometown'] + '</p>';
					}
					if (data['class_year'] != '') {
						class_year = '<p>Class Year: ' + data['class_year'] + '</p>';
					}
					stats = '<div class="right contentBox"><div class="bar">Stats</div>' + major + hometown + class_year + '</div>';
				}
				if (data['influences'] != '') {
					influences = '<div class="right contentBox"><div class="bar">Influences</div><p>' + data['influences'] + '</p></div>';
				}
				if ( data['twitter'] != '' ) {
					twitter = '<li class="twitter"><a href="http://twitter.com/' + data['twitter'] + '" target="_blank"></a></li>';
				} else { twitter = '<li class="twitter"><a href="http://twitter.com/radiodepaul" target="_blank"></a></li>'; }

				if ( data['facebook'] != '' ) {
					facebook = '<li class="facebook"><a href="http://facebook.com/' + data['facebook'] + '" target="_blank"></a></li>';
				} else { facebook = '<li class="facebook"><a href="http://facebook.com/radiodepaul" target="_blank"></a></li>'; }

				if ( data['linkedin'] != '' ) {
					linkedin = '<li class="linkedin"><a href="http://linkedin.com/' + data['linkedin'] + '" target="_blank"></a></li>';
				}

				if ( data['email'] != '' ) {
					email = '<li class="email"><a href="mailto:' + data['email'] + '"></a></li>';
				}

				social = '<ul id="personshowSocial">' + twitter + facebook + linkedin + email + '</ul>';

				if (data['bio'] != '') {
					bio = '<div class="contentBox clear"><div class="bar">Bio</div><p>' + data['bio'] + '</p></div>';
				}

				html = social + name + photo + stats + influences + bio;	
			}

			$(html).appendTo('#content');
		}
	});
});


//for (var i=0; i < 6; i++) {
//	var randomNum = Math.ceil( Math.random()* peopleParse.length);
//	html = '<a href="/person/?id=' + peopleParse[randomNum]._id.$oid + '"><span>' + peopleParse[randomNum].fname + ' ' + peopleParse[randomNum].lname + '</span></a>'
//	$(html).appendTo('#categories');
//};