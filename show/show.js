$('#content').activity({segments: 8, steps: 4, width: 10, align: 'center', valign: 'top', space: 0, length: 10, color: '#0b0b0b', speed: 1.5, padding: 30});
var disqus_title = "", disqus_url = "", disqus_identifier = "", disqus_shortname = "radiodepaul";
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
					document.title = 'Radio DePaul | ' + data['title'];
				
				/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
				    
					disqus_title = 'Radio DePaul | ' + data['title'];
					disqus_identifier = 'Radio DePaul | ' + data['title'];
					disqus_url = 'http://radio.depaul.edu/show/?id=' + data['id'];
				
					var html = '<div class="contentBox"><div class="bar">Error</div><p>Sorry. The show you requested cannot be found.</p></div>'
					var photo = "", twitter = "", podcasts = "", title = "", facebook = "", email = "", description = "", stats = "", slots = "", social = "", facebook_fanbox = "", genre = "", hosts = "";
					var disqus_embed = '<div id="comments" class="contentBox clear"><div class="bar">Comments</div><div id="disqus_thread" class="dsq-widget"></div></div>'
				
					title = '<h2 id="name">' + data['title'] + '</h2>';
				
					var photo_url = "'" + data['photo_medium'] + "'";
				
					photo = '<div class="left photoBox" style="background: url(' + photo_url + ');"></div>';
				
					stats = '<div class="right contentBox"><div class="bar">Stats</div><ul>';
				
					if (data['genre'] != null) {
						genre = '<li><p>Genre</p><p>' + data['genre'] + '</p></li>';
					}
					
					if (data['hosts'].length > 0) {
						hosts = '<div class="contentBox right"><div class="bar">Hosted By</div><ul>'
						for (var i = 0; i < data['hosts'].length; i++) {
								hosts += '<a href="/person/?id=' + data['hosts'][i]['id'] + '"><li style="height:50px;background: url(' + data['hosts'][i]['photo_thumb'] + ') top right no-repeat;"><p>' + data['hosts'][i]['name'] + '</p></li></a>';
						}
						 hosts += '</ul></div>';
					}
					
					if (data['scheduled_slots'].length > 0) {
						slots = '<li><p>Scheduled At:</p>'
						for (var i = 0; i < data['scheduled_slots'].length; i++) {
								slots += '<p>' + data['scheduled_slots'][i]['slot'] + '</p>';
						}
						 slots += '</li></div>';
					}
					
					stats += genre + slots + '</ul></div>';
					
				if ( data['twitter'] != null ) {
					twitter = '<li class="twitter"><a href="http://twitter.com/' + data['twitter'] + '" target="_blank"><img src="/img/social/twitter.png" /></a></li>';
				} else { twitter = '<li class="twitter"><a href="http://twitter.com/radiodepauldjs" target="_blank"><img src="/img/social/twitter.png" /></a></li>'; }

				if ( data['facebook'] != null ) {
					facebook = '<li class="facebook"><a href="http://facebook.com/' + data['facebook'] + '" target="_blank"></a></li>';
					facebook_fanbox = '<div class="right contentBox" style="height:300px"><div class="bar">Become A Fan!</div><div id="fb-root"></div><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:like-box href="http://www.facebook.com/' + data['facebook'] + '" width="320" height="272" show_faces="true" border_color="#fff" stream="false" header="false"></fb:like-box></div>';
				} else { 
						facebook = '<li class="facebook"><a href="http://facebook.com/radiodepaul" target="_blank"><img src="/img/social/facebook.png" /></a></li>';
						facebook_fanbox = '<div class="right contentBox" style="height:320px"><div class="bar">Become A Fan!</div><div id="fb-root"></div><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:like-box href="http://www.facebook.com/radiodepaul" width="320" height="290" show_faces="true" border_color="#fff" stream="false" header="false"></fb:like-box></div>';
					}

				if ( data['email'] != null ) {
					email = '<li class="email"><a href="mailto:' + data['email'] + '"><img src="/img/social/mail.png" /></a></li>';
				}

				social = '<div class="right contentBox"><div class="bar">Follow ' + data['title'] + '</div><ul id="personshowSocial">' + twitter + facebook + email + '</ul></div>';

				if (data['long_description'] != null) {
					description = '<div class="contentBox left clear"><div class="bar">Description</div><p>' + data['long_description'] + '</p></div>';
				}
				
				if (data['podcasts'].length > 0) {
					podcasts = '<div class="contentBox clear">\
						<div class="bar">Podcasts</div>\
						<div id="jp_container_N" class="jp-audio">\
							<div class="jp-type-playlist">\
								<div id="jquery_jplayer_N" class="jp-jplayer"></div>\
								<div class="jp-gui">\
									<div class="jp-interface">\
										<div class="jp-progress">\
											<div class="jp-seek-bar">\
												<div class="jp-play-bar"></div>\
											</div>\
										</div>\
										<div class="jp-current-time"></div>\
										<div class="jp-duration"></div>\
										<div class="jp-controls-holder">\
											<ul class="jp-controls">\
												<li><a href="javascript:;" class="jp-previous" tabindex="1">previous</a></li>\
												<li><a href="javascript:;" class="jp-play" tabindex="1">play</a></li>\
												<li><a href="javascript:;" class="jp-pause" tabindex="1">pause</a></li>\
												<li><a href="javascript:;" class="jp-next" tabindex="1">next</a></li>\
												<li><a href="javascript:;" class="jp-stop" tabindex="1">stop</a></li>\
												<li><a href="javascript:;" class="jp-mute" tabindex="1" title="mute">mute</a></li>\
												<li><a href="javascript:;" class="jp-unmute" tabindex="1" title="unmute">unmute</a></li>\
												<li><a href="javascript:;" class="jp-volume-max" tabindex="1" title="max volume">max volume</a></li>\
											</ul>\
											<div class="jp-volume-bar">\
												<div class="jp-volume-bar-value"></div>\
											</div>\
											<ul class="jp-toggles">\
												<li><a href="javascript:;" class="jp-full-screen" tabindex="1" title="full screen">full screen</a></li>\
												<li><a href="javascript:;" class="jp-restore-screen" tabindex="1" title="restore screen">restore screen</a></li>\
												<li><a href="javascript:;" class="jp-shuffle" tabindex="1" title="shuffle">shuffle</a></li>\
												<li><a href="javascript:;" class="jp-shuffle-off" tabindex="1" title="shuffle off">shuffle off</a></li>\
												<li><a href="javascript:;" class="jp-repeat" tabindex="1" title="repeat">repeat</a></li>\
												<li><a href="javascript:;" class="jp-repeat-off" tabindex="1" title="repeat off">repeat off</a></li>\
											</ul>\
										</div>\
										<div class="jp-title">\
											<ul>\
												<li></li>\
											</ul>\
										</div>\
									</div>\
								</div>\
								<div class="jp-playlist">\
									<ul>\
										<!-- The method Playlist.displayPlaylist() uses this unordered list -->\
										<li></li>\
									</ul>\
								</div>\
								<div class="jp-no-solution">\
									<span>Update Required</span>\
									To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.\
								</div>\
							</div>\
						</div>\
					</div>'
				}
				
				html = title + photo + social + stats + hosts + description + facebook_fanbox + podcasts + disqus_embed;	
				$(html).appendTo('#content');
				
				var get_playlist = new Array();
				for (var i = 0; i < data['podcasts'].length; i++) {
					var x = {};
					x['title'] = data['podcasts'][i]['title'];
					x['artist'] = data['podcasts'][i]['contributors'];
					x['mp3'] = data['podcasts'][i]['file_url'];
					get_playlist.push(x)
				}
			
				var myPlaylist = new jPlayerPlaylist({
					jPlayer: "#jquery_jplayer_N",
					cssSelectorAncestor: "#jp_container_N"
				}, get_playlist, {
						playlistOptions: {
						enableRemoveControls: false
					},
						swfPath: "js",
						supplied: "mp3"
				});
				$.getScript("http://disqus.com/forums/" + disqus_shortname + "/embed.js")
				$('#content').activity(false);
			}
		}
	});
});