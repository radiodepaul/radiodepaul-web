$('#content').activity({segments: 8, steps: 4, width: 10, align: 'center', valign: 'top', space: 0, length: 10, color: '#0b0b0b', speed: 1.5, padding: 30});
$(document).ready(function(){
	var showId = $.url().param('id');
	$.ajax({
		url: "http://radiodepaul.herokuapp.com/shows/" + showId + ".js",
		dataType: "jsonp",
		type: "GET",
		processData: false,
		contentType: "application/json",
		success: function(data) {
			if ( data != null ) {
				var html = '<div class="contentBox"><div class="bar">Error</div><p>Sorry. The show you requested cannot be found.</p></div>'
				var photo = "", twitter = "", name = "", facebook = "", email = "", description = "", stats = "", slots = "", social = "", facebook_fanbox = "", genre = "", hosts = "";
				var disqus_embed = '<div id="comments" class="contentBox clear"><div class="bar">Comments</div><div id="disqus_thread" class="dsq-widget"></div></div>'
				
				name = '<h2 id="name">' + data['title'] + '</h2>';
				
				photo = '<div class="left contentBox photoBox"><div class="bar">Photo</div><img src = "' + data['photo_medium'] + '" alt = "Photo for ' + data['title'] + '" /></div>';
				
				if ( data['genre'] != null ) {
					if (data['genre'] != '') {
						genre = '<p>Genre: ' + data['genre'] + '</p>';
					}
					if (data['hosts'] != '') {
						hosts = '<div class="contentBox right"><div class="bar">Hosted By:</div><ul>'
						for (var i = 0; i < data['hosts'].length; i++) {
								hosts += '<a class="big" href="/person/?id=' + data['hosts'][i]['id'] + '"><li><img src="' + data['hosts'][i]['photo_thumb'] + '" />' + data['hosts'][i]['name'] + '</li></a>';
						}
						 hosts += '</ul></div>';
					}
					if (data['scheduled_slots'] != '') {
						slots = '<div class="contentBox left"><div class="bar">Scheduled At:</div><ul>'
						for (var i = 0; i < data['scheduled_slots'].length; i++) {
								slots += '<li>' + data['scheduled_slots'][i]['slot'] + '</li>';
						}
						 slots += '</ul></div>';
					}
					stats = '<div class="right contentBox"><div class="bar">Stats</div>' + genre + '</div>';
				}
				if ( data['twitter'] != '' ) {
					twitter = '<li class="twitter"><a href="http://twitter.com/' + data['twitter'] + '" target="_blank"><img src="/img/social/twitter.png" /></a></li>';
				} else { twitter = '<li class="twitter"><a href="http://twitter.com/radiodepaul" target="_blank"><img src="/img/social/twitter.png" /></a></li>'; }

				if ( data['facebook'] != '' ) {
					facebook = '<li class="facebook"><a href="http://facebook.com/' + data['facebook'] + '" target="_blank"></a></li>';
					facebook_fanbox = '<div class="right contentBox" style="height:300px"><div class="bar">Become A Fan!</div><div id="fb-root"></div><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:like-box href="http://www.facebook.com/' + data['facebook'] + '" width="460" height="262" show_faces="true" border_color="#fff" stream="false" header="false"></fb:like-box></div>';
				} else { facebook = '<li class="facebook"><a href="http://facebook.com/radiodepaul" target="_blank"><img src="/img/social/facebook.png" /></a></li>'; }

				if ( data['email'] != '' ) {
					email = '<li class="email"><a href="mailto:' + data['email'] + '"><img src="/img/social/mail.png" /></a></li>';
				}

				social = '<div class="right contentBox"><div class="bar">Follow ' + data['title'] + '</div><ul id="personshowSocial">' + twitter + facebook + email + '</ul></div>';

				if (data['long_description'] != '') {
					description = '<div class="contentBox left"><div class="bar">Description</div><p>' + data['long_description'] + '</p></div>';
				}

				html = name + photo + social + stats + hosts + facebook_fanbox +  slots + description + disqus_embed;	
				$(html).appendTo('#content');
				$('#content').activity(false);
			}
		}
		
	});
	var disqus_title = document.title;
});


//<div class="bar">Photo</div><img src="http://radiodepaulapp.heroku.com/image/shows/' + show._id.$oid  + '/medium/image.jpg"/>
//showsGet = $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/shows?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;

//showsParse = $.parseJSON(showsGet);

//for (var i=0; i < 6; i++) {
//	var randomNum = Math.ceil( Math.random()* showsParse.length);
//	html = '<a href="/show/?id=' + showsParse[randomNum]._id.$oid + '"><span>' + showsParse[randomNum].name + '</span></a>'
//	$(html).appendTo('#categories');
//};