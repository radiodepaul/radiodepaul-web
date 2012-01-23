$('#content').activity({segments: 8, steps: 4, width: 10, align: 'center', valign: 'top', space: 0, length: 10, color: '#0b0b0b', speed: 1.5, padding: 30});
var disqus_title = "", disqus_url = "", disqus_identifier = "", disqus_shortname = "radiodepaul";
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
				
				document.title = 'Radio DePaul | ' + data['name'];
			
			/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
			    
				disqus_title = 'Radio DePaul | ' + data['name'];
				disqus_url = 'http://radio.depaul.edu/person/?id=' + data['id'];
				disqus_identifier = disqus_title;
				var disqus_developer = 1; // developer mode is on

				var html = '<div class="contentBox"><div class="bar">Error</div><p>Sorry. The person you requested cannot be found.</p></div>'
				var twitter = "", name = "", shows = "", photo = "", linkedin = "", facebook = "", email = "", bio = "", hometown = "", major = "", class_year = "", stats = "", social = "", influences = "";
				var disqus_embed = '<div id="comments" class="contentBox clear"><div class="bar">Comments</div><div id="disqus_thread" class="dsq-widget"></div></div>'

				name = '<h2 id="name">' + data['name'] + '</h2>';
				
				var photo_url = "'" + data['photo_medium'] + "'";
				
				photo = '<div class="left photoBox" style="background: url(' + photo_url + ');"></div>';

				if ( data['major'] && data['hometown'] && data['class_year'] != null ) {
					if (data['major'] != null) {
						major = '<li><p>Major</p><p>' + data['major'] + '</p></li>';
					}
					if (data['hometown'] != null) {
						hometown = '<li><p>Hometown</p><p>' + data['hometown'] + '</p></li>';
					}
					if (data['class_year'] != null) {
						class_year = '<li><p>Class Year</p><p>' + data['class_year'] + '</p></li>';
					}
					stats = '<div class="right contentBox"><div class="bar">Stats</div><ul>' + major + hometown + class_year + '<ul></div>';
				}
				if (data['shows'] != null) {
					shows = '<div class="contentBox right"><div class="bar">Shows Hosted:</div><ul>'
					for (var i = 0; i < data['shows'].length; i++) {
							shows += '<a href="/show/?id=' + data['shows'][i]['show_id'] + '"><li style="height:50px;background: url(' + data['shows'][i]['show_photo_thumb'] + ') top right no-repeat;"><p>' + data['shows'][i]['show_title'] + '</p></li></a>';
					}
					 shows += '</div>';
				}
				if (data['influences'] != null) {
					influences = '<div class="clear contentBox"><div class="bar">Influences</div><p>' + data['influences'] + '</p></div>';
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

				html = name + photo + social + stats + shows + influences + bio + disqus_embed;	
				
				$(html).appendTo('#content');
				$('#content').activity(false);
			}

		}
	});
});


//for (var i=0; i < 6; i++) {
//	var randomNum = Math.ceil( Math.random()* peopleParse.length);
//	html = '<a href="/person/?id=' + peopleParse[randomNum]._id.$oid + '"><span>' + peopleParse[randomNum].fname + ' ' + peopleParse[randomNum].lname + '</span></a>'
//	$(html).appendTo('#categories');
//};