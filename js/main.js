function playerPopUp(url){
	newwindow = window.open(url,'name','height=371,width=600,toolbar=no,scrollbars=no,location=no,status=no,menubar=no,resizeable=no');
}
function podcastPlayerPopUp(url) {
	newwindow = window.open(url, 'name', 'height=340,width=500,toolbar=no,scrollbars=no,location=no,status=no,menubar=no,resizeable=no');
}
$('#sidebar #now_playing').closest('div').activity({segments: 8, steps: 4, width: 2, align: 'right', valign: 'top', space: 0, length: 3, color: '#0b0b0b', speed: 1.5, padding: 5});

var app = {
	setupAjaxCallbacks: function () {
		$('body').ajaxStart(function () {
			console.log('Ajax started');
	        $('#ajax-status').show().text("Loading...");
	      });
	      $('body').ajaxStop(function () {
	        $('#ajax-status').fadeOut();
			console.log('Ajax stopped');
	      });
	      $('body').ajaxError(function (event, xhr, ajaxOptions, thrownError) {
	        if (xhr.status === 401) {
	          alert("Sorry, " + xhr.responseText.toLowerCase());
	        }
	        console.log("XHR Response: " + JSON.stringify(xhr));
	      });
	},
	startActivityIndicator: function(){
		$('#content div:first').activity({segments: 8, steps: 4, width: 10, align: 'center', valign: 'top', space: 0, length: 10, color: '#0b0b0b', speed: 1.5, padding: 30});
	},
	stopActivityIndicator: function(){
		$('#content div:first').activity(false);
	},
	setupClockAndWeather: function() {
		$("div#clock").clock({"calendar":"false"});
		$.simpleWeather({
		    zipcode: '60614',
		    unit: 'f',
		    success: function(weather) {
		        $("#weather").append('<img style="float:left;" width="125px" src="'+weather.image+'">');
				$("#weather").append('<p>'+weather.city+', '+weather.region+' '+weather.temp+'&deg; '+weather.units.temp+'</p>');
		    },
		    error: function(error) {
		        $("#weather").html('<p>'+error+'</p>');
		    }
		});
	},
	setupFancyBox: function() {
		$("a.fancybox").fancybox({
				'transitionIn'	:	'fade',
				'transitionOut'	:	'fade',
				'speedIn'		:	600, 
				'speedOut'		:	600, 
				'overlayShow'	:	true,
				'hideOnContentClick' : true,
				'titlePosition' : 'inside',
				'height' : '95%',
		});
	},
	loadNowPlaying: function() {
		$.ajax({
			url: "http://radiodepaul.herokuapp.com/slots/now_playing.js",
			dataType: "jsonp",
			type: "GET",
			processData: false,
			contentType: "application/json",
			success: function(data) {
				if ( data.length > 0 ) {
					var html = '<ul>'
					var name = '<li><a href="/show/?id=' + data[0]['show']['id'] + '"><p>' + data[0]['show']['title'] + '</p></a></li>';
					var photo = '<li><a href="/show/?id=' + data[0]['show']['id'] + '"><img style="margin-left:50px" src="' + data[0]['show']['photo'] + '" /></a></li>';
					if (data[0]['show']['genre'] != null) {
						genre = '<li><p>Genre<p>' + data[0]['show']['genre'] + '</p></li>';
					}
					var hosts = "";
	                if (data[0]['show']['hosts'].length > 0) {
						hosts = "<li><p>Hosts</p><p>"
	                }
	                for (var j = 0; j < data[0]['show']['hosts'].length; j++) {
	                    if (j != data[0]['show']['hosts'].length - 1) {
	                        if (data[0]['show']['hosts'].length > 2) {
	                            hosts += " " + '<a href="/person/?id=' + data[0]['show']['hosts'][j]['id'] + '">' + data[0]['show']['hosts'][j]['name'] + '</a>,';
	                        } else { hosts += '<a href="/person/?id=' + data[0]['show']['hosts'][j]['id'] + '">' + data[0]['show']['hosts'][j]['name'] + '</a>'; }
	                    } else if ( data[0]['show']['hosts'].length == 1) {
	                        hosts += '<a href="/person/?id=' + data[0]['show']['hosts'][j]['id'] + '">' + data[0]['show']['hosts'][j]['name'] + '</a>';
	                    } else { hosts += ' and ' + '<a href="/person/?id=' + data[0]['show']['hosts'][j]['id'] + '">' + data[0]['show']['hosts'][j]['name'] + '</a>'; }
	                }
					hosts += '</p></li>';

					html += name + photo + genre + hosts + '</ul>';	
					$('#sidebar #now_playing').activity(false);
					$(html).appendTo('#sidebar #now_playing');
				}
				else { 
					$('#sidebar #now_playing').activity(false);
					$("<p>Data Unavailable</p>").appendTo('#sidebar #now_playing'); 
				}
			}
		});
	},
	loadStationNews: function() {
		$('#news').closest('div').activity({segments: 8, steps: 4, width: 2, align: 'right', valign: 'top', space: 0, length: 3, color: '#0b0b0b', speed: 1.5, padding: 5});
		newsPostsGet = $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/news_posts?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;
		newsPostsParse = $.parseJSON(newsPostsGet);

		$.each(newsPostsParse, function(i, news_post) {
			var html = '<li>\
						<a href="/station_news/post/?id=' + news_post._id.$oid + '"><p>' + news_post.headline + '</p></a>\
						<p>' + news_post.introduction + '</p>\
						</li>';
			$(html).appendTo('#news');
		});
		$('#news').closest('div').activity(false);
	},
	loadStationEvents: function(){
		$('#events').closest('div').activity({segments: 8, steps: 4, width: 2, align: 'right', valign: 'top', space: 0, length: 3, color: '#0b0b0b', speed: 1.5, padding: 5});
		stationEventsGet = $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/station_events?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;
		stationEventsParse = $.parseJSON(stationEventsGet);

		$.each(stationEventsParse, function(i, event) {
			var html = '<li>\
							<p>' + event.title + '</p>\
							<p>' + event.start + ' - ' + event.end + '</p>\
							<p>' + event.location + '</p>\
							<p>' + event.description + '</p>\
						</li>';
			$(html).appendTo('#events');
		});
		$('#events').closest('div').activity(false);
	},
	loadSlides: function(){
		$('#slides').slides({
			preload: true,
			preloadImage: '/img/slides/loading.gif',
			play: 5000,
			pause: 2500,
			hoverPause: true,
			animationStart: function(current){
				$('.caption').animate({
					bottom:-35
				},100);
				if (window.console && console.log) {
					// example return of current slide number
					// console.log('animationStart on slide: ', current);
				};
			},
			animationComplete: function(current){
				$('.caption').animate({
					bottom:0
				},200);
				if (window.console && console.log) {
					// example return of current slide number
					// console.log('animationComplete on slide: ', current);
				};
			},
			slidesLoaded: function() {
				$('.caption').animate({
					bottom:0
				},200);
			},
		});
	},
	loadPodcasts: function(type){
		$.ajax({
			url: "http://radiodepaul.herokuapp.com/podcasts.js",
			dataType: "jsonp",
			type: "GET",
			processData: false,
			contentType: "application/json",
			success: function(data) {

				var get_playlist = new Array();
				$.fn.sort = function() {  
		    		return this.pushStack( [].sort.apply( this, arguments ), []);  
				};  
				function sortTitle(a,b) {  
		     		if (a.title == b.title) {
		       			return 0;
		     		}
		     		return a.title> b.title ? 1 : -1;  
		 		};  
		  		function sortTitleDesc(a,b) {  
		     		return sortTitle(b,a) * -1;  
		 		};
				var sorted = $(data).sort(sortTitleDesc);
				for (var i = 0; i < sorted.length; i++) {
					if ( sorted[i]['type'] == type ) {
						var x = {};
						x['title'] = sorted[i]['title'];
						x['artist'] = sorted[i]['contributors'];
						x['mp3'] = sorted[i]['file_url']
						get_playlist.push(x)
					}
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
			}
		});
	}
};
var people = {
	loadPerson: function() {
		$('#content').append('<div id="show" style="display:none;"></div>');
		$('#show').fadeIn();
		app.startActivityIndicator();
		personId = $.url().param('id');
		$.ajax({
			url: "http://radiodepaul.herokuapp.com/people/" + personId + ".js",
			dataType: "jsonp",
			type: "GET",
			processData: false,
			contentType: "application/json",
			success: function(data) {
				if ( data != null ) {
					document.title = 'Radio DePaul | ' + data['name'], disqus_title = 'Radio DePaul | ' + data['name'], disqus_identifier = 'Radio DePaul | ' + data['name'], disqus_url = 'http://radio.depaul.edu/person/?id=' + data['id'], disqus_shortname = 'radiodepaul';

					var html = '<div class="contentBox"><div class="bar">Error</div><p>Sorry. The person you requested cannot be found.</p></div>'
					var twitter = "", name = "", shows = "", photo = "", linkedin = "", facebook = "", email = "", bio = "", hometown = "", major = "", class_year = "", stats = "", social = "", influences = "";
					var disqus_embed = '<div id="comments" class="contentBox clear"><div class="bar">Posts</div><div id="disqus_thread" class="dsq-widget"></div></div>'

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
					if (data['shows'].length > 0) {
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
					$.getScript("http://disqus.com/forums/" + disqus_shortname + "/embed.js");
				}
			}
		});
		app.stopActivityIndicator();
	},
	displayRandomPeople: function(){
		$.ajax({
			url: "http://radiodepaul.herokuapp.com/people/random.js",
			dataType: "jsonp",
			type: "GET",
			processData: false,
			contentType: "application/json",
			success: function(data) {
				var html = "";
				for (var i=0; i < data.length; i++) {
					html += '<a href="/person/?id=' + data[i]['id'] + '"><span>' + data[i]['name'] + '</span></a>';
				}
				$(html).appendTo('#categories');
			}
		});
	},
	loadManagers: function(attribute){
		$.ajax({
			url: "http://radiodepaul.herokuapp.com/managers.js",
			dataType: "jsonp",
			type: "GET",
			processData: false,
			contentType: "application/json",
			success: function(data) {
				var html = "";
				$.fn.sort = function() {  
		    		return this.pushStack( [].sort.apply( this, arguments ), []);  
				};  
				function sortName(a,b) {  
		     		if (a.name == b.name) {
		       			return 0;
		     		}
		     		return a.name> b.name ? 1 : -1;  
		 		};  
		  		function sortNameDesc(a,b) {  
		     		return sortName(b,a) * -1;  
		 		};
				var sorted = $(data).sort(sortNameDesc);
				for (var i = 0; i < sorted.length; i++) {
					html += '<div class="box">\
								<a href="/person/?id=' + sorted[i]['id'] + '"><p>' + sorted[i]['name'] + '</p></a>\
								<p>' + sorted[i]['position'] + '</p>';
					if ( sorted[i]['email'] != null ) {
						html += '<p><a href="mailto:' + sorted[i]['email'] + '">' + sorted[i]['email'] + '</a></p>'
					}
					html += '<p>' + sorted[i]['phone'] + '</p>\
								<img style="width:290px;" src="' + sorted[i]['photo'] + '" />\
								</div>';
				}
				$(html).appendTo('#staff_list');
				$('<div class="clear"></div>').appendTo('#staff_list');
			}
		});
	}
};
var shows = {
	loadShows: function(){
		app.startActivityIndicator();
		$.ajax({
			url: "http://radiodepaul.herokuapp.com/shows.js",
			dataType: "jsonp",
			type: "GET",
			processData: false,
			contentType: "application/json",
			success: function(data) {
				$.fn.sort = function() {  
	                return this.pushStack( [].sort.apply( this, arguments ), []);  
	            };  
	            function sortTitle(a,b) {  
	                 if (a.title == b.title) {
	                       return 0;
	                 }
	                 return a.title> b.title ? 1 : -1;  
	             };  
	              function sortTitleDesc(a,b) {  
	                 return sortTitle(b,a) * -1;  
	             };
	            var sorted = $(data).sort(sortTitleDesc);
	            var html = "";
	            for (var i = 0; i < sorted.length; i++) {
	                var hosts = "";
	                if (sorted[i]['hosts'].length > 0) {
	                    hosts += " with "
	                }
	                for (var j = 0; j < sorted[i]['hosts'].length; j++) {
	                    if (j != sorted[i]['hosts'].length - 1) {
	                        if (sorted[i]['hosts'].length > 2) {
	                            hosts += " " + sorted[i]['hosts'][j]['name'] + ',';
	                        } else { hosts += sorted[i]['hosts'][j]['name']; }
	                    } else if ( sorted[i]['hosts'].length == 1) {
	                        hosts += sorted[i]['hosts'][j]['name'];
	                    } else { hosts += ' and ' + sorted[i]['hosts'][j]['name']; }
	                }
					html += '<a class="big" href="/show/?id=' + sorted[i]['id'] + '"><div class="smallBar"><img src="' + sorted[i]['photo_thumb'] + '" />  <span>' + sorted[i]['title'] + '</span>' + hosts + '</div></a>';
				}
				$(html).appendTo('#shows');
			}
		});
		app.stopActivityIndicator();
	},
	loadShow: function(){
		$('#content').append('<div id="person" style="display:none;"></div>');
		$('#person').fadeIn();
		app.startActivityIndicator();
		var showId = $.url().param('id');
		$.ajax({
			url: "http://radiodepaul.herokuapp.com/shows/" + showId + ".js",
			dataType: "jsonp",
			type: "GET",
			processData: false,
			contentType: "application/json",
			success: function(data) {
				if ( data != null ) {
						document.title = 'Radio DePaul | ' + data['title'], disqus_title = 'Radio DePaul | ' + data['title'], disqus_identifier = 'Radio DePaul | ' + data['title'], disqus_url = 'http://radio.depaul.edu/show/?id=' + data['id'];

						var html = '<div class="contentBox"><div class="bar">Error</div><p>Sorry. The show you requested cannot be found.</p></div>'
						var photo = "", twitter = "", podcasts = "", title = "", facebook = "", email = "", description = "", stats = "", slots = "", social = "", facebook_fanbox = "", genre = "", hosts = "";
						var disqus_embed = '<div id="comments" class="contentBox clear"><div class="bar">Posts</div><div id="disqus_thread" class="dsq-widget"></div></div>'

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
						</div>';
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
				}
			}
		});
		app.stopActivityIndicator();
	},
	displayRandomShows: function(){
		$.ajax({
			url: "http://radiodepaul.herokuapp.com/shows/random.js",
			dataType: "jsonp",
			type: "GET",
			processData: false,
			contentType: "application/json",
			success: function(data) {
				var html = "";
				for (var i=0; i < data.length; i++) {
					html += '<a href="/show/?id=' + data[i]['id'] + '"><span>' + data[i]['title'] + '</span></a>';
				}
				$(html).appendTo('#categories');
			}
		});
	},
	loadSchedule: function(){
		$('#content').append('<div id="schedule" style="display:none;"><div class="bar">Winter 2012</div></div>');
		$('#schedule').fadeIn();
		app.startActivityIndicator();
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
									<a href="/show/?id=' + data[i]['show']['id'] + '"><img src="' + data[i]['show']['photo'] + '" /></a>\
		                            <p class="showName"><a href="/show/?id=' + data[i]['show']['id'] + '">' + data[i]['show']['title'] + '</a><span> | ' + data[i]['show']['genre'] + '</span></p>\
		                            <p class="showDJs">' + hosts + '</p>';
						if ( data[i]['show']['short_description'] != null ) {
							html += '<p class="showBio">' + data[i]['show']['short_description'] + '</p>';
						}
						html += '</li>';
		            }
		        }
				html += "</ul>";
				var d = new Date();
				var weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
				$('#schedule').append('<h1>' + weekday[d.getDay()] + '</h1>');
				$('#schedule').append(html);
				app.stopActivityIndicator();
				$('.' + weekday[d.getDay()]).show();
				navSelectN(weekday[d.getDay()]);
			}
		});
	}
};

$(document).ready(function(){
	var current = $('body').attr('title');
	$('a[title="' + current + '"]').addClass('selected');
	var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], x = w.innerWidth || e.clientWidth || g.clientWidth, y = w.innerHeight || e.clientHeight || g.clientHeight;
	var padding = $('header').height();
	$('#main').css('min-height', y - padding);
	$('html').css('html', 'background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#e9e9e3), to(#dadad0));background: -webkit-linear-gradient(top, #e9e9e3, #dadad0);background: -moz-linear-gradient(top, #e9e9e3, #dadad0);background: -ms-linear-gradient(top, #e9e9e3, #dadad0);background: -o-linear-gradient(top, #e9e9e3, #dadad0);');
	
	app.loadNowPlaying();
	app.setupFancyBox();
	app.setupClockAndWeather();
});