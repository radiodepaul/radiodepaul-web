var domain = 'http://radiodepaul.herokuapp.com';
//var domain = 'http://127.0.0.1:4002';
var people = {
    loadPerson: function() {
	    $('#content').append('<div id="person" style="display:none;"></div>');
	    $('#person').fadeIn();
	    var personId = $.url().param('id');
	    $.ajax({
	        url: domain + "/api/people/getPerson.js?id=" + personId,
	        dataType: "jsonp",
	        type: "GET",
	        processData: false,
	        contentType: "application/json",
	        success: function(data) {
	            if ( data != '' ) {
	                document.title = 'Radio DePaul | ' + data['name'];
	                var html = '<div class="contentBox"><div class="bar">Error</div><p>Sorry. The person you requested cannot be found.</p></div>', twitter = "", tweet = "", name = "", shows = "", photo = "", linkedin = "", facebook = "", email = "", bio = "", hometown = "", major = "", class_year = "", stats = "", social = "", influences = "", disqus_embed = '<div id="comments" class="contentBox clear"><div class="bar">Posts</div><div id="disqus_thread" class="dsq-widget"></div></div>', photo_url = "'" + data['photo_medium'] + "'";
					window.disqus_title = 'Radio DePaul | ' + data['name'], window.disqus_identifier = 'Radio DePaul | ' + data['name'], window.disqus_url = 'http://radio.depaul.edu/person/?id=' + data['id'], window.disqus_shortname = 'radiodepaul';
	                name = '<h2 id="name">' + data['name'] + '</h2>';

	                photo = '<div class="left photoBox" style="background: url(' + photo_url + ');"></div>';

	                if ( data['major'] && data['hometown'] && data['class_year'] != '' ) {
	                    if (data['major'] != '') {
	                        major = '<li><p>Major</p><p>' + data['major'] + '</p></li>';
	                    }
	                    if (data['hometown'] != '') {
	                        hometown = '<li><p>Hometown</p><p>' + data['hometown'] + '</p></li>';
	                    }
	                    if (data['class_year'] != '') {
	                        class_year = '<li><p>Class Year</p><p>' + data['class_year'] + '</p></li>';
	                    }
	                    stats = '<div class="right contentBox"><ul>' + major + hometown + class_year + '<ul></div>';
	                }
	                if (data['shows'].length > 0) {
	                    shows = '<div class="contentBox right clear"><div class="bar">Shows Hosted:</div><ul>';
	                    for (var i = 0; i < data['shows'].length; i++) {
	                            shows += '<a href="/show/?id=' + data['shows'][i]['show_id'] + '"><li style="height:50px;background: url(' + data['shows'][i]['show_photo_thumb'] + ') top right no-repeat;"><p>' + data['shows'][i]['show_title'] + '</p></li></a>';
	                    }
	                     shows += '</div>';
	                }
	                if (data['influences'] != '') {
	                    influences = '<div class="clear contentBox"><div class="bar">Influences</div><p>' + data['influences'] + '</p></div>';
	                }
	                if ( data['twitter'] != '' ) {
	                    twitter = '<li class="twitter"><a href="http://twitter.com/' + data['twitter'] + '" target="_blank"></a></li>';
						tweet = '<div id="showPersonTweet" class="contentBox right"><p>Loading tweet...</p></div>';
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

	                social = '<div class="right contentBox"><div class="bar">Follow ' + data['name'] + '</div><ul id="personshowSocial">' + twitter + facebook + linkedin + email + '</ul></div>';

	                if (data['bio'] != '') {
	                    bio = '<div class="contentBox clear"><div class="bar">Bio</div><p>' + data['bio'] + '</p></div>';
	                }

	                html = name + photo + social + stats + tweet + shows + influences + bio + disqus_embed;    

	                $(html).prependTo('#content');
	                $.getScript("http://disqus.com/forums/" + disqus_shortname + "/embed.js");
					app.loadTweets(data['twitter'],'showPersonTweet');
	            }
	        }
	    });
	},
    displayRandomPeople: function() {
        $.ajax({
            url: domain + "/api/people/getRandom.js",
            dataType: "jsonp",
            type: "GET",
            processData: false,
            contentType: "application/json",
            success: function(data) {
                var html = "";
                for (var i=0; i < data.length; i++) {
                    html += '<a href="/person/?id=' + data[i]['id'] + '"><span><p>' + data[i]['name'] + '</p></span></a>';
                }
                $(html).appendTo('#categories');
            }
        });
    },
    loadManagers: function() {
        $.ajax({
            url: domain + "/api/people/getManagers.js",
            dataType: "jsonp",
            type: "GET",
            processData: false,
            contentType: "application/json",
            success: function(data) {
                var html = '<div class="contentBox"><div class="bar">Managers</div>';
                for (var i = 0; i < data.length; i++) {
                    html += '<div class="box">\
                                <a href="/person/?id=' + data[i]['id'] + '"><p>' + data[i]['name'] + '</p></a>\
                                <p>' + data[i]['position'] + '</p>';
                    if ( data[i]['email'] != '' ) {
                        html += '<p><a href="mailto:' + data[i]['email'] + '">' + data[i]['email'] + '</a></p>'
                    }
                    html += '<p>' + data[i]['phone'] + '</p>\
                                <img src="' + data[i]['photo'] + '" />\
                                </div>';
                }
				html += '</div>';
                $(html).appendTo('#managers');
                $('<div class="clear"></div>').appendTo('#managers div.contentBox');
            }
        });
		$('#staff').fadeIn();
		
    },
    loadStaff: function() {
        $('#content').append('<div id="staff" class="contentBox" style="display:none;"><div class="bar">Radio DePaul Staff</div></div>');
        $.ajax({
            url: domain + "/api/people/getList.js",
            dataType: "jsonp",
            type: "GET",
            processData: false,
            contentType: "application/json",
            success: function(data) {
                var html = "";
                for (var i = 0; i < data.length; i++) {
                    var shows = "";
                    if (data[i]['shows'].length > 0) {
                        shows += " of "
                    }
                    for (var j = 0; j < data[i]['shows'].length; j++) {
                        if (j != data[i]['shows'].length - 1) {
                            if (data[i]['shows'].length > 2) {
                                shows += " " + data[i]['shows'][j]['show_title'] + ',';
                            } else { shows += data[i]['shows'][j]['show_title']; }
                        } else if ( data[i]['shows'].length == 1) {
                            shows += data[i]['shows'][j]['show_title'];
                        } else { shows += ' and ' + data[i]['shows'][j]['show_title']; }
                    }
                    html += '<a class="big" href="/person/?id=' + data[i]['id'] + '"><div class="smallBar"><img src="' + data[i]['photo_thumb'] + '" />  <span>' + data[i]['name'] + '</span>' + shows + '</div></a>';
                }
                $(html).appendTo('#staff');
				$("#staff a:odd div").css("background-color", "#F7FCFF");
				$("#staff a:odd div").hover(function() {$(this).css("background-color", "#5e87a8").css("color", "#fff")}, function() {$(this).css("background-color", "#F7FCFF").css("color", "#272123")});
				$('#staff').fadeIn();
            }
        });
    }
};
var awards = {
  loadAwards: function() {
    $.ajax({
      url: domain + "/api/awards/getList.js",
      dataType: "jsonp",
      type: "GET",
      processData: false,
      contentType: "application/json",
      success: function(data) {
        var html = "";
        for (var i = 0; i < data.length; i++) {
          html += '<div class="awards_iba smallBar">';
          html += data[i].year + ' :: ' + data[i].name + " for " + data[i]['for'] + " from " + data[i].award_organization.name;
          html += '</div>';
        }
        $('#awards').append(html);
      }
    });

  }

};
var player = {
	setupPlayer: function(attribute){
		$('.panel').css('margin-left','-99999px');
		$('#player').css('margin-left','0');
		$('nav a:first-child').addClass('selected');
		$('nav a').click(function() {
		  player.navSelect($(this).attr('title'))
		});
	},
	generateWebcam: function() {
                jwplayer('webcam_embed').setup({
                'id': 'webcam_embed',
                'width': '578',
                'height': '270',
                'provider': 'rtmp',
                'streamer': 'rtmp://ec2-67-202-3-106.compute-1.amazonaws.com/rtplive',
                'file': 'mp4:camera.stream',
                'modes': [
                    {type: 'flash', src: 'https://s3.amazonaws.com/radiodepaul/js/player.swf'},
                    {type: 'html5', config:
                            {
                            'file': "http://ec2-67-202-3-106.compute-1.amazonaws.com/rtplive/mp4:camera.stream/playlist.m3u8",
                            provider: 'video'
                            }
                    }
                ]
              });
	},
	clearAllNavElements: function() {
		$('nav a').each(function(){$(this).removeClass('selected')});
	},
	clearAllSections: function() {
		$('.panel').css('margin-left','-99999px');
		$('#webcam_embed').empty();
	},
	navSelect: function(item) {
		player.clearAllNavElements();
		player.clearAllSections();
		$('#' + item).css('margin-left','0');
		if (item == 'webcam') { 
			player.generateWebcam();
		}
	},
	loadNowPlaying: function() {
		$.ajax({
	        url: domain + "/api/getOnAir.js",
	        dataType: "jsonp",
	        type: "GET",
	        processData: false,
	        contentType: "application/json",
	        success: function(data) {		
                  console.log(data);
				var html = '';
	            if ( data !== null ) {
	                var player = '<iframe src="http://p1.radiocdn.com/files/html/70f3d50f0e6f1273fab48fe82d29d7d24f7a91bc.html" frameborder="0" scrolling="no" height="40px" width="100px;"></iframe>', name = '<a href="/show/?id=' + data['id'] + '" target="_blank">' + data['title'] + '</a>', hosts = "", logo = '<img src="https://s3.amazonaws.com/radiodepaul/img/logo.png" />', photo = '<a href="/show/?id=' + data['id'] + '" target="_blank"><img src="' + data['photo'] + '" /></a>';
	                if (data['genres'] != '') {
	                    genres = '<p>Genre<p>' + data['genres'] + '</p>	';
	                }
	                if (data['hosts'].length > 0) {
	                    hosts = "<p>Hosts</p>"
	                }
	                for (var j = 0; j < data['hosts'].length; j++) {
	                    if (j != data['hosts'].length - 1) {
	                        if (data['hosts'].length > 2) {
	                            hosts += " " + '<a href="/person/?id=' + data['hosts'][j]['id'] + '">' + data['hosts'][j]['name'] + '</a>,';
	                        } else { hosts += '<a href="/person/?id=' + data['hosts'][j]['id'] + '">' + data['hosts'][j]['name'] + '</a>'; }
	                    } else if ( data['hosts'].length == 1) {
	                        hosts += '<a href="/person/?id=' + data['hosts'][j]['id'] + '">' + data['hosts'][j]['name'] + '</a>';
	                    } else { hosts += ' and ' + '<a href="/person/?id=' + data['hosts'][j]['id'] + '">' + data['hosts'][j]['name'] + '</a>'; }
	                }
					html += '<div id="player_control" class="contentBox"><div class="bar">You&#39;re Listening to ' + name + ' on Radio DePaul</div>';
	                html += photo + logo + player + '<div id="stats">' + genres + hosts + '</div></div>';
	                $(html).prependTo('#player');
	            }
	            else { 
	                $("<p>Data Unavailable</p>").prependTo('#player'); 
	            }
	        }
	    });
		
	}
};
var shows = {
    loadShows: function() {
        $('#content').append('<div id="shows" class="contentBox" style="display:none;"><div class="bar">Active Shows</div></div>');
        $.ajax({
            url: domain + "/api/shows/getList.js",
            dataType: "jsonp",
            type: "GET",
            processData: false,
            contentType: "application/json",
            success: function(data) {
                var html = "";
                for (var i = 0; i < data.length; i++) {
                    var hosts = "";
                    if (data[i]['hosts'].length > 0) {
                        hosts += " with "
                    }
                    for (var j = 0; j < data[i]['hosts'].length; j++) {
                        if (j != data[i]['hosts'].length - 1) {
                            if (data[i]['hosts'].length > 2) {
                                hosts += " " + data[i]['hosts'][j]['name'] + ',';
                            } else { hosts += data[i]['hosts'][j]['name']; }
                        } else if ( data[i]['hosts'].length == 1) {
                            hosts += data[i]['hosts'][j]['name'];
                        } else { hosts += ' and ' + data[i]['hosts'][j]['name']; }
                    }
                    html += '<a class="big" href="/show/?id=' + data[i]['id'] + '"><div class="smallBar"><img src="' + data[i]['photo_thumb'] + '" />  <span>' + data[i]['title'] + '</span>' + hosts + '</div></a>';
                }
                $(html).appendTo('#shows');
				$("#shows a:odd div").css("background-color", "#F7FCFF");
				$("#shows a:odd div").hover(function() {$(this).css("background-color", "#5e87a8").css("color", "#fff")}, function() {$(this).css("background-color", "#F7FCFF").css("color", "#272123")});
                $('#shows').fadeIn();
				
            }
        });
    },
    loadShow: function() {
	    $('#content').append('<div id="show" style="display:none;"></div>');
	    $('#show').fadeIn();
	    var showId = $.url().param('id');
	    $.ajax({
	        url: domain + "/api/shows/getShow.js?id=" + showId,
	        dataType: "jsonp",
	        type: "GET",
	        processData: false,
	        contentType: "application/json",
	        success: function(data) {
	            if ( data != null ) {
	                    document.title = 'Radio DePaul | ' + data['title'];
	                    var html = '<div class="contentBox"><div class="bar">Error</div><p>Sorry. The show you requested cannot be found.</p></div>', photo = "", tweet = "", twitter = "", podcasts = "", title = "", facebook = "", email = "", description = "", stats = "", slots = "", social = "", facebook_fanbox = "", genres = "", hosts = "", disqus_embed = '<div id="comments" class="contentBox clear"><div class="bar">Posts</div><div id="disqus_thread" class="dsq-widget"></div></div>', photo_url = "'" + data['photo_medium'] + "'";
						window.disqus_title = 'Radio DePaul | ' + data['title'], window.disqus_identifier = 'Radio DePaul | ' + data['title'], window.disqus_url = 'http://radio.depaul.edu/show/?id=' + data['id'], window.disqus_shortname = 'radiodepaul';
						title = '<h2 id="name">' + data['title'] + '</h2>';

	                    photo = '<div class="left photoBox" style="background: url(' + photo_url + ');"></div>';

	                    stats = '<div class="right contentBox"><ul>';

	                    if (data['genres'] != '') {
	                        genres = '<li><p>Genre</p><p>' + data['genres'] + '</p></li>';
	                    }

	                    if (data['hosts'].length > 0) {
	                        hosts = '<div class="contentBox right clear"><div class="bar">Hosted By</div><ul>';
	                        for (var i = 0; i < data['hosts'].length; i++) {
	                                hosts += '<a href="/person/?id=' + data['hosts'][i]['id'] + '"><li style="height:50px;background: url(' + data['hosts'][i]['photo_thumb'] + ') top right no-repeat;"><p>' + data['hosts'][i]['name'] + '</p></li></a>';
	                        }
	                         hosts += '</ul></div>';
	                    }

	                    if (data['scheduled_slots'].length > 0) {
	                        slots = '<li><p>Scheduled At</p>'
	                        for (var i = 0; i < data['scheduled_slots'].length; i++) {
	                                slots += '<p>' + data['scheduled_slots'][i]['slot'] + '</p>';
	                        }
	                         slots += '</li>';
	                    }
	                    stats += genres + slots + '</ul></div>';

	                if ( data['twitter'] != '' ) {
	                    twitter = '<li class="twitter"><a href="http://twitter.com/' + data['twitter'] + '" target="_blank"></a></li>';
						tweet = '<div id="showPersonTweet" class="contentBox right"><p>Loading tweet...</p></div>';
	                } else { twitter = '<li class="twitter"><a href="http://twitter.com/radiodepauldjs" target="_blank"></a></li>'; }

	                if ( data['facebook'] != '' ) {
	                    facebook = '<li class="facebook"><a href="http://facebook.com/' + data['facebook'] + '" target="_blank"></a></li>';
	                    facebook_fanbox = '<div class="right contentBox clear"><div id="fb-root"></div><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:like-box href="http://www.facebook.com/' + data['facebook'] + '" width="340" height="272" show_faces="true" border_color="#F6F2F5" stream="true" header="false"></fb:like-box></div>';
	                } else { 
	                        facebook = '<li class="facebook"><a href="http://facebook.com/radiodepaul" target="_blank"><img src="/img/social/facebook.png" /></a></li>';
	                        facebook_fanbox = '<div class="right contentBox clear" style="height:320px"><div id="fb-root"></div><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:like-box href="http://www.facebook.com/radiodepaul" width="330" height="290" show_faces="true" border_color="#F6F2F5" stream="false" header="false"></fb:like-box></div>';
	                    }

	                if ( data['email'] != '' ) {
	                    email = '<li class="email"><a href="mailto:' + data['email'] + '" target="_blank"></a></li>';
	                }

	                social = '<div class="right contentBox"><div class="bar">Follow ' + data['title'] + '</div><ul id="personshowSocial">' + twitter + facebook + email + '</ul></div>';

	                if (data['long_description'] != '') {
	                    description = '<div class="contentBox clear"><div class="bar">Description</div><p>' + data['long_description'] + '</p></div>';
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

	                //html = title + photo + social + stats + tweet + hosts + description + facebook_fanbox + podcasts + disqus_embed;
	                html = title + photo + social + stats + tweet + hosts + description + podcasts + disqus_embed;        
	                $(html).appendTo('#content');
					app.loadTweets(data['twitter'],'showPersonTweet');
	                var get_playlist = new Array();
	                for (var i = 0; i < data['podcasts'].length; i++) {
	                    var x = {};
	                    x['title'] = data['podcasts'][i]['title'];
	                    x['artist'] = data['podcasts'][i]['contributors'];
	                    x['mp3'] = data['podcasts'][i]['file_url'];
	                    get_playlist.push(x);
	                }

	                var myPlaylist = new jPlayerPlaylist({
	                    jPlayer: "#jquery_jplayer_N",
	                    cssSelectorAncestor: "#jp_container_N"
	                }, get_playlist, {
	                        playlistOptions: {
	                        enableRemoveControls: false
	                    },
	                        swfPath: "/js",
		                    supplied: "mp3"
	                });
	                $.getScript("http://disqus.com/forums/" + disqus_shortname + "/embed.js");

	            }
	        }
	    });
	},
    displayRandomShows: function() {
        $.ajax({
            url: domain + "/api/shows/getRandom.js",
            dataType: "jsonp",
            type: "GET",
            processData: false,
            contentType: "application/json",
            success: function(data) {
                var html = "";
                for (var i=0; i < data.length; i++) {
                    html += '<a href="/show/?id=' + data[i]['id'] + '"><span><p>' + data[i]['title'] + '</p></span></a>';
                }
                $(html).appendTo('#categories');
            }
        });
    },
    loadSchedule: function() {
        $('#content').append('<div id="schedule" class="contentBox" style="display:none;"><div class="bar">Current Schedule</div></div>');
        $('#schedule').fadeIn();
        $.ajax({
            url: domain + "/api/getSchedule.js",
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
                                    <a href="/show/?id=' + data[i]['show']['id'] + '"><img src="' + data[i]['show']['photo_small'] + '" /></a>\
                                    <p class="showName"><a href="/show/?id=' + data[i]['show']['id'] + '">' + data[i]['show']['title'] + '</a><span> | ' + data[i]['show']['genres'] + '</span></p>\
                                    <p class="showDJs">' + hosts + '</p>';
                        if ( data[i]['show']['short_description'] != '' ) {
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
                $('.' + weekday[d.getDay()]).show();
                app.panelNav.navSelectN(weekday[d.getDay()]);
				
            }
        });
    }
};
var app = {
    loadTypeKit: function() {
        $.ajaxSetup({async: false, cache: true});
        $.getScript('http://use.typekit.com/kng1gpc.js');
        $.ajaxSetup({async: true, cache: false});
        try { Typekit.load(); } catch(e) { }
    },
    loadPageContent : function() {
        var currentPage = $('body').attr('title'), w = window, d = document, e = d.documentElement, g = d.getElementsByTagName('body')[0], x = w.innerWidth || e.clientWidth || g.clientWidth, y = w.innerHeight || e.clientHeight || g.clientHeight, padding = $('header').height();
        $('nav a[title="' + currentPage + '"]').addClass('selected');
		$('#categories a').click(app.panelNav.navSelect);
		app.setupLaunchPlayer();
        switch (currentPage) {
            case "home":
				var siteRequested = $.url().param('s');
				if ( ( navigator.userAgent.indexOf("iPhone") !=-1 || navigator.userAgent.indexOf("iPod") !=-1 ) &&  siteRequested != 'full' ) {
					window.location="/iphone/";
				}
				
				
				if ($.browser.msie  && parseInt($.browser.version, 10) === 8) {
				} else { app.loadStationEvents();app.loadStationNews(); }
				shows.displayRandomShows();

				//app.loadDePauliaFeed();
				$('#recentcomments').fadeIn();
            	break;
            case "schedule":
				shows.loadSchedule();
            	break;
            case "shows":
                shows.loadShows();
                shows.displayRandomShows();
            	break;
            case "staff":
                people.loadStaff();
                people.displayRandomPeople();
            	break;
            case "sports":
					$.ajaxSetup({async: false, cache: true});
	                $.ajaxSetup({async: true, cache: false});
					var html = '<div id="featured">\
						<div id="slides">\
							<div class="slides_container">\
							</div>\
							<a href="#" class="prev"><img src="https://s3.amazonaws.com/radiodepaul/css/slides/arrow-prev.png" width="24" height="43" alt="Arrow Prev"></a>\
							<a href="#" class="next"><img src="https://s3.amazonaws.com/radiodepaul/css/slides/arrow-next.png" width="24" height="43" alt="Arrow Next"></a>\
						</div>\
						<img src="https://s3.amazonaws.com/radiodepaul/css/slides/example-frame.png" alt="Frame" id="frame" />\
					</div>';
					$(html).appendTo('#content');
					app.loadFlickrPhotoset('72157627899861179', 'slider');
                    app.loadPodcasts('sports');
					app.loadSportsFeed();
            		break;
            case "media":
				var video = '<div class="contentBox">\
					<div class="bar">On-Air with Radio DePaul</div>\
					<div id="ytapiplayer">\
						You need Flash player 8+ and JavaScript enabled to view this video.\
					</div>\
				</div>';
				$(video).appendTo('#content');
                app.loadPodcasts('station');
				var params = { allowScriptAccess: "always" };
				var atts = { id: "myytplayer" };
				swfobject.embedSWF("http://www.youtube.com/e/YbU0H7bIPHg?version=3&autohide=1&enablejsapi=1&modestbranding=1&playerapiid=ytplayer&rel=0&showinfo=0&theme=light","ytapiplayer", "660", "356", "8", null, null, params, atts);
				var html = '<div id="gallery" class="contentBox">\
								<div class="bar">Station Photos</div>\
								<ul>\
									<li><a href="/media/gallery/?id=72157627638190531"><img src="http://farm7.staticflickr.com/6168/6187721464_1e3b131dfb_t.jpg" alt=""></a><p>Radio DePaul 2011-2012</p></li>\
									<li><a href="/media/gallery/?id=72157627556017792"><img src="http://farm7.static.flickr.com/6150/6096993191_c886d0821d_t.jpg" alt=""></a><p>Radio DePaul 2010-2011</p></li>\
									<li><a href="/media/gallery/?id=72157627431049317"><img src="http://farm7.static.flickr.com/6067/6096777373_b5dc43a73b_t.jpg" alt="Hosts of the Curious Sophisticate"></a><p>Radio DePaul 2009-2010</p></li>\
									<li><a href="/media/gallery/?id=72157627555308552"><img src="http://farm7.static.flickr.com/6066/6097222036_070b4e2e38_t.jpg" alt="Radio DePaul Mural Photo"></a><p>Timeless</p></li>\
									<li><a href="/media/gallery/?id=72157627431314949"><img src="http://farm7.static.flickr.com/6011/6096893241_5e817a2cbe_t.jpg" alt="Rapper Twista visited Radio DePaul in 2007"></a><p>Visiting Dignitaries</p></li>\
									<li><a href="/media/gallery/?id=72157627431238035"><img src="http://farm7.static.flickr.com/6018/6097399962_f9bfccc4e1_t.jpg" alt="Best Station in the Nation Award"></a><p>Awards &amp; Recognition</p></li>\
									<div class="clear"></div>\
								</ul>\
							</div>';
				$(html).appendTo('#content');
            break;
			case "gallery":
				var photoset_id = $.url().param('id');
                app.loadFlickrPhotoset(photoset_id, 'gallery');
				$('nav a[title="media"]').addClass('selected');
			break;
            case "about":
				people.loadManagers();
                                awards.loadAwards();
				app.loadFlickrPhotoset('72157628024483658', 'slider');
				app.panelNav.navSelectN('managers');
            break;
            case "show":
                $('nav a[title="shows"]').addClass('selected');
                shows.loadShow();
                shows.displayRandomShows();
            break;
			case "person":
				$('nav a[title="staff"]').addClass('selected');
				people.loadPerson();
				people.displayRandomPeople();
			break;
			case "station_news":
	        	$.ajax({
		            url: domain + "/api/news_posts/getList.js",
		            dataType: "jsonp",
		            type: "GET",
		            processData: false,
		            contentType: "application/json",
		            success: function(data) {
		                var html = '<div class="contentBox" id="news_posts"><div class="bar">News Posts</div><ul>';
		                $.each(data, function(i, news_post) {
		            			html += '<li>\
		                        <a class="news_headline" href="/station_news/post/?id=' + news_post.id + '"><p>' + news_post.headline + '<span class="news_time">' + news_post.published_at + '</span></p></a>\
		                        <div class="post_content">' + news_post.snippet + '</div>\
		                        <a class="read_more" href="/station_news/post/?id=' + news_post.id + '">Read more ...</a></li>';
		        		});
		                html += '</ul></div>';
						$(html).appendTo('#content');
	            	}
        		});
			break;
			case "station_news_post":
				var postId = $.url().param('id');
				$.ajax({
		            url: domain + "/api/news_posts/getPost.js?id=" + postId,
		            dataType: "jsonp",
		            type: "GET",
		            processData: false,
		            contentType: "application/json",
		            success: function(data) {
		                var html = '<div class="contentBox" id="news_post"><a class="news_headline" href="/station_news/post/?id=' + data.id + '"><p>' + data.headline + '<span class="news_time">' + data.published_at + '</span><br/>by ' + data.author.name + '</p></a>';
		            			html += '<div class="post_content">' + data.content + '</div>';
		                html += '</div>';
						$(html).appendTo('#content');
	            	}
        		});
			break;
			case "player":
				player.setupPlayer();
			break;
            default:
        }
    },
    setupLaunchPlayer : function() {
		$('nav #launchPlayer').click(function() { $.popupWindow('/player/', { height: 500,width: 800,toolbar: false,scrollbars: false,status: false,resizable: false,left: 100,top: 100,center: false,createNew: true,location: false,menubar: false });});
    },
    loadGlobalScripts: function() {
        $.ajaxSetup({async: false, cache: false});
        $.getScript('https://s3.amazonaws.com/radiodepaul/js/activity-indicator.js').done(function() {
			app.startActivityIndicator('#content');
			$.getScript('https://s3.amazonaws.com/radiodepaul/js/jquery.url.js').done(function() {
				$.getScript('https://s3.amazonaws.com/radiodepaul/js/jquery.popupwindow.js').done(function() {
					$.getScript('https://s3.amazonaws.com/radiodepaul/js/slides.min.jquery.js').done(function() {
						$.getScript('https://s3.amazonaws.com/radiodepaul/js/jquery.easing-1.3.pack.js').done(function() {
							$.getScript('https://s3.amazonaws.com/radiodepaul/js/jquery.jplayer.min.js').done(function() {
								$.getScript('https://s3.amazonaws.com/radiodepaul/js/jplayer.playlist.min.js').done(function() {
				               	 	$.getScript('https://s3.amazonaws.com/radiodepaul/js/jquery.simpleWeather-1.8.min.js').done(function() {
										$.getScript('http://twitterjs.googlecode.com/svn/trunk/src/twitter.min.js').done(function() {
											$.getScript('https://s3.amazonaws.com/radiodepaul/js/jquery.fancybox-1.3.4.pack.js').done(function() {
								                $.getScript('https://s3.amazonaws.com/radiodepaul/js/jquery.ga.js').done(function() {
													$.getScript('https://s3.amazonaws.com/radiodepaul/js/jqclock_201.js').done(function() {
														app.setupAjaxCallbacks();
														app.loadPageContent();
														app.loadNowPlaying();
														app.loadClockAndWeather();
														app.loadTweets('radiodepauldjs','tweet');
														app.loadGoogleAnalytics();
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
		
        $.ajaxSetup({async: true, cache: false});
    },
	loadDePauliaFeed: function() {
		function feedLoaded(result) {
			if (!result.error) {
				var feed = '<div class="contentBox"><div class="bar">The DePaulia Feed</div><ul>';
				$.each(result.feed.entries, function(i, item) {
					feed += '<li>\
					<a href="' + item.link + '" target="_blank"><p>' + item.title + '</p></a>\
					<p>' + item.contentSnippet + '</p>\
					</li>';
				});
				feed += '</ul></div>';
				$(feed).appendTo('#content');
			}
		}
		var feed = new google.feeds.Feed("http://www.depauliaonline.com/se/the-depaulia-rss-1.2124399");
		feed.load(feedLoaded);
	},
	loadSportsFeed: function() {
		function feedLoaded(result) {
			if (!result.error) {
				var feed = '<div class="contentBox"><div class="bar">DePaul Athletics Feed</div><ul>';
				$.each(result.feed.entries, function(i, item) {
					feed += '<li>\
					<a href="' + item.link + '" target="_blank"><p>' + item.title + '</p></a>\
					<p>' + item.contentSnippet + '</p>\
					</li>';
				});
				feed += '</ul></div>';
				$(feed).appendTo('#content');
			}
		}
		var feed = new google.feeds.Feed("http://www.depaulbluedemons.com/headline-rss.xml");
		feed.load(feedLoaded);
	},
	panelNav: {
		clearAllNavElements: function() {
			$('#categories a').each( 
				function() {
					$(this).removeClass('selected');
				});
		},
		clearAllSections: function() {
			$('.panel').hide();
			$('#schedule li').hide();
		},
		navSelect: function() {
			app.panelNav.clearAllNavElements();
			app.panelNav.clearAllSections();
		    $(this).addClass('selected'); 
			navItem = $(this).attr('title');
			$('#' + navItem).show();
			$('.' + navItem).show();
			$('#content div h1:first').text(navItem);
			scroll(0,0);
			//rightColumnHeight = $('#' + navItem).outerHeight();
			//$('#wrapper').css("height", rightColumnHeight);
		},
		navSelectN: function(n) {
			app.panelNav.clearAllNavElements();
			app.panelNav.clearAllSections();
		    $('div#categories a[title="' + n +'"]').addClass('selected'); 
			$('#' + n).show();
			$('.' + n).show();
			$('#content div h1:first').text(n);
			scroll(0,0);
			//rightColumnHeight = $('#' + navItem).outerHeight();
			//$('#wrapper').css("height", rightColumnHeight);
		}
	},
    loadGoogleAnalytics: function(){
        $.ga.load("UA-10532851-1");
    },
    setupAjaxCallbacks: function () {
        $('body').ajaxStart(function () {
            $('#ajax-status').show().text("Loading...");
          });
          $('body').ajaxStop(function () {
            $('#ajax-status').fadeOut();
          });
          $('body').ajaxError(function (event, xhr, ajaxOptions, thrownError) {
            if (xhr.status === 401) {
              alert("Sorry, " + xhr.responseText.toLowerCase());
            }
          });
    },
    startActivityIndicator: function(location){
        $('#content').activity({segments: 12, steps: 3, width: 10, align: 'center', valign: 'top', space: 6, length: 30, color: '#5E87A8', speed: 1.5, padding: 50});
    },
    stopActivityIndicator: function(location){
        $(location).activity(false);
    },
    loadClockAndWeather: function() {
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
                transitionIn    :    'fade',
                transitionOut    :    'fade',
                speedIn        :    600, 
                speedOut        :    600, 
                overlayShow    :    true,
                hideOnContentClick : true,
                titlePosition : 'inside',
                height : '95%',
                width : 800
        });
    },
    loadNowPlaying: function() {
        app.startActivityIndicator('#now_playing');
        $.ajax({
            url: domain + "/api/getOnAir.js",
            dataType: "jsonp",
            type: "GET",
            processData: false,
            contentType: "application/json",
            success: function(data) {
				var html = '<div id="now_playing" class="contentBox"><div class="bar" id="on_air_bar">On Air Now</div><ul>';
                if ( data != null ) {
                    var name = '<a href="/show/?id=' + data['show']['id'] + '"><p style="text-align:center;">' + data['show']['title'] + '</p>';
                    var photo = '<img style="margin-left:50px" src="' + data['show']['photo_small'] + '" /></a>';
                    if (data['show']['genres'] != '') {
                        genres = '<p>' + data['show']['genres'] + '</p>';
                    }
                    var hosts = "<ul>";
                    for (var i = 0; i < data['show']['hosts'].length; i++) {
						hosts += '<a href="/person/?id=' + data['show']['hosts'][i]['id'] + '"><li style="height:50px;background: url(' + data['show']['hosts'][i]['photo_thumb'] + ') top right no-repeat;"><p>' + data['show']['hosts'][i]['name'] + '</p></li></a>';
                    }
                    hosts += '</ul>';

                    html += name + photo + genres + hosts + '</ul></div>';    
                    $(html).prependTo('#sidebar');
                }
                else { 
                    $("<p>Data Unavailable</p>").appendTo('#sidebar #now_playing'); 
                }
                app.stopActivityIndicator('div');
            }
        });
    },
    loadStationNews: function() {
    	$('#content').append('<div id="shows" class="contentBox" style="display:none;"><div class="bar">Latest News</div></div>');
        $.ajax({
            url: domain + "/api/news_posts/getList.js",
            dataType: "jsonp",
            type: "GET",
            processData: false,
            contentType: "application/json",
            success: function(data) {
                var html = '<div id="news_widget" class="left2 contentBox"><div class="bar"><a href="/station_news/">Radio DePaul News</a></div><ul>';
                $.each(data, function(i, news_post) {
            			html += '<li>\
                        <a class="news_headline" href="/station_news/post/?id=' + news_post.id + '"><p>' + news_post.headline + '<span class="news_time">' + news_post.published_at + '</span></p></a>\
                        <div class="post_content">' + news_post.snippet + '</div><a class="read_more" href="/station_news/post/?id=' + news_post.id + '">Read more ..</a>\
                        </li>';
        		});
                html += '</ul></div>';
				$(html).prependTo('#content');
				
            }
        });
    },
    loadStationEvents: function() {
        $.ajax({
            url: domain + "/api/events/getList.js",
            dataType: "jsonp",
            type: "GET",
            processData: false,
            contentType: "application/json",
            success: function(data) {
              console.log(data);
		var html = '<div id="events" class="right2 contentBox"><div class="bar">Coming Up</div><ul>';
                for (var i=0;i<data.length;i++)
                {
                  html += '<li class="comingup-list">' +
                            '<p class="comingup-title">' + data[i].title + '</p>' +
                            '<p>' + data[i].first_line + ' - ' + data[i].second_line + '</p>' +
                            '<p>' + data[i].location + '</p>' +
                            '<p>' + data[i].description + '</p></li>';
                }
		html += '</ul></div>';
                $(html).prependTo('#content');
				
            }
        });
    },
	loadTweets: function(username,id){
		getTwitters(id, { 
			id: username, 
			enableLinks: true, 
			ignoreReplies: true, 
			clearContents: true,
			newwindow: true,
			template: '<p>"%text%"</p><a class="tweetTime" href="http://twitter.com/%user_screen_name%/statuses/%id_str%/">%time%</a>'
		});
	},
    loadSlides: function(){
        $('#slides').slides({
            preload: true,
            preloadImage: 'https://s3.amazonaws.com/radiodepaul/css/slides/loading.gif',
            play: 5000,
            pause: 2500,
            hoverPause: true,
            animationStart: function(current){
                $('.caption').animate({
                    bottom:-35
                },100);
            },
            animationComplete: function(current){
                $('.caption').animate({
                    bottom:0
                },200);
            },
            slidesLoaded: function() {
                $('.caption').animate({
                    bottom:0
                },200);
            }
        });
    },
    loadPodcasts: function(type){
        $.ajax({
            url: domain + "/api/getPodcasts.js",
            dataType: "jsonp",
            type: "GET",
            processData: false,
            contentType: "application/json",
            success: function(data) {
				if (data.length > 0) {
					var html = '<div class="contentBox clear">\
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
					$(html).appendTo('#content');
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
	                var data = $(data).sort(sortTitleDesc);
	                for (var i = 0; i < data.length; i++) {
	                    if ( data[i]['type'] == type ) {
	                        var x = {};
	                        x['title'] = data[i]['title'];
	                        x['artist'] = data[i]['contributors'];
	                        x['mp3'] = data[i]['file_url']
	                        get_playlist.push(x);
	                    }
	                }
	                var myPlaylist = new jPlayerPlaylist({
	                    jPlayer: "#jquery_jplayer_N",
	                    cssSelectorAncestor: "#jp_container_N"
	                }, get_playlist, {
	                    playlistOptions: {
	                        enableRemoveControls: false
	                    },
	                    swfPath: "/js",
	                    supplied: "mp3"
	                });
				}
            }
        });
    },
	loadFlickrPhotoset: function(photoset_id, type) {
		$.ajaxSetup({async: false, cache: false});
		if (type == 'slider') {
        	$.getScript('https://s3.amazonaws.com/radiodepaul/js/flickr.api.grab.slider.js').done(function(){
				$.getScript('http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=' + photoset_id + '&api_key=8ba7f50062d534406009b45aeb73eb90').done(function() { app.loadSlides();app.setupFancyBox(); });
			});
        	
		} else if (type == 'gallery') {
			$.getScript('https://s3.amazonaws.com/radiodepaul/js/flickr.api.grab.js').done(function(){
				$.getScript('http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=' + photoset_id + '&api_key=8ba7f50062d534406009b45aeb73eb90').done(function() { app.setupFancyBox(); });
			});
		}
		$.ajaxSetup({async: true, cache: false});
	}
};
function googleAPIsLoaded() {
    $(document).ready(function() {
        app.loadTypeKit();
        app.loadGlobalScripts();
    });
}
function loadGoogleAPIs() {
    google.load("jquery", "1", {uncompressed:true} );
	google.load("swfobject", "2");
	google.load("feeds", "1");
    google.setOnLoadCallback(googleAPIsLoaded);
}
