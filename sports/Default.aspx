<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul | Sports</title>
	<%Server.Execute("/includes/globalCSS.aspx");%>
	<link rel="stylesheet" type="text/css" href="/css/blue.monday/jplayer.blue.monday.css" />
	<link rel="stylesheet" href="/css/slides.css" type="text/css" media="screen" />
	<meta name="Description" content="Radio DePaul is DePaul University's award-winning student radio station. Featuring a vibrant blend of music, talk, news, and sports, Radio DePaul is Chicago's College Connection!" />
	
	<script type="text/javascript" src="http://use.typekit.com/kng1gpc.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
</head>
<body title="sports">
	<div id="categories">
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<div id="superBar"><p><a href="http://communication.depaul.edu/">College of Communication</a> | <a href="http://depaul.edu/">DePaul University</a></p></div>
		<header>
 			<a href="/"><img id="logo" src="/img/logo.png" alt ="" /></a>
			
			<h1 id="title">The Student Voice</h1>
			<%Server.Execute("/includes/nav.aspx");%>
		</header>
		<div id="main">
		<div id="content">
			<div id="featured">
				<div id="slides">
					<div class="slides_container">
					</div>
					<a href="#" class="prev"><img src="/img/slides/arrow-prev.png" width="24" height="43" alt="Arrow Prev"></a>
					<a href="#" class="next"><img src="/img/slides/arrow-next.png" width="24" height="43" alt="Arrow Next"></a>
				</div>
				<img src="/img/slides/example-frame.png" alt="Frame" id="frame" />
			</div>
			<div class="contentBox">
				<div class="bar">Podcasts</div>
				<div id="jp_container_N" class="jp-audio">
					<div class="jp-type-playlist">
						<div id="jquery_jplayer_N" class="jp-jplayer"></div>
						<div class="jp-gui">
							<div class="jp-interface">
								<div class="jp-progress">
									<div class="jp-seek-bar">
										<div class="jp-play-bar"></div>
									</div>
								</div>
								<div class="jp-current-time"></div>
								<div class="jp-duration"></div>
								<div class="jp-controls-holder">
									<ul class="jp-controls">
										<li><a href="javascript:;" class="jp-previous" tabindex="1">previous</a></li>
										<li><a href="javascript:;" class="jp-play" tabindex="1">play</a></li>
										<li><a href="javascript:;" class="jp-pause" tabindex="1">pause</a></li>
										<li><a href="javascript:;" class="jp-next" tabindex="1">next</a></li>
										<li><a href="javascript:;" class="jp-stop" tabindex="1">stop</a></li>
										<li><a href="javascript:;" class="jp-mute" tabindex="1" title="mute">mute</a></li>
										<li><a href="javascript:;" class="jp-unmute" tabindex="1" title="unmute">unmute</a></li>
										<li><a href="javascript:;" class="jp-volume-max" tabindex="1" title="max volume">max volume</a></li>
									</ul>
									<div class="jp-volume-bar">
										<div class="jp-volume-bar-value"></div>
									</div>
									<ul class="jp-toggles">
										<li><a href="javascript:;" class="jp-full-screen" tabindex="1" title="full screen">full screen</a></li>
										<li><a href="javascript:;" class="jp-restore-screen" tabindex="1" title="restore screen">restore screen</a></li>
										<li><a href="javascript:;" class="jp-shuffle" tabindex="1" title="shuffle">shuffle</a></li>
										<li><a href="javascript:;" class="jp-shuffle-off" tabindex="1" title="shuffle off">shuffle off</a></li>
										<li><a href="javascript:;" class="jp-repeat" tabindex="1" title="repeat">repeat</a></li>
										<li><a href="javascript:;" class="jp-repeat-off" tabindex="1" title="repeat off">repeat off</a></li>
									</ul>
								</div>
								<div class="jp-title">
									<ul>
										<li></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="jp-playlist">
							<ul>
								<!-- The method Playlist.displayPlaylist() uses this unordered list -->
								<li></li>
							</ul>
						</div>
						<div class="jp-no-solution">
							<span>Update Required</span>
							To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
						</div>
					</div>
				</div>
			</div>
			<div class="left contentBox">
				<div class="bar">DePaul Athletics Feed</div>
				<ul id="athletics_feed"></ul>
			</div>
			<div class="right contentBox">
				<div class="bar">Events</div>
				<ul id="events">
				</ul>
			</div>
			<div class="left contentBox clear">
				<div class="bar">Men's Basketball</div>
				<ul id="mbasketball">
				</ul>
			</div>
			<div class="right contentBox">
				<div class="bar">Women's Basketball</div>
				<ul id="wbasketball">
				</ul>
			</div>
			<div class="left contentBox clear">
				<div class="bar">Men's Soccer</div>
				<ul id="msoccer">
				</ul>
			</div>
			<div class="right contentBox">
				<div class="bar">Women's Soccer</div>
				<ul id="wsoccer">
				</ul>
			</div>
			<div class="left contentBox clear">
				<div class="bar">Volleyball</div>
				<ul id="volleyball">
				</ul>
			</div>
			<div class="right contentBox">
				<div class="bar">Softball</div>
				<ul id="softball">
				</ul>
			</div>
		</div>
		<%Server.Execute("/includes/sidebar.aspx");%>
	</div>
	</div>
	<%Server.Execute("/includes/footer.aspx");%>
	<%Server.Execute("/includes/googleAnalytics.aspx");%>
<%Server.Execute("/includes/globalJavascript.aspx");%>
<script type="text/javascript" language="javascript" src="/js/flickr.api.grab.slider.js"></script>
<script type="text/javascript" language="javascript" src="http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157627899861179&api_key=8ba7f50062d534406009b45aeb73eb90"></script>
<script type="text/javascript" src="/js/jquery.jplayer.min.js"></script>
<script type="text/javascript" src="/js/jplayer.playlist.min.js"></script
<script src="http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js"></script>
<script src="/js/slides.min.jquery.js"></script>
<script src="https://www.google.com/jsapi?key=ABQIAAAA-HgkQ3h85RC9grgGQsrSnhSP5c0xxhF7kkwus1Uc2hzPhLJBLxTWfP5nbXo7i4gExC2Q7K1TO0kBJg" type="text/javascript"></script>
<script src="sports.js"></script>
<script type="text/javascript" language="javascript">
	$(function(){
		$('#slides').slides({
			preload: true,
			play: 5000,
			pause: 2500,
			hoverPause: true,
			animationStart: function(current){
								$('.caption').animate({
									bottom:-35
								},100);
								if (window.console && console.log) {
									// example return of current slide number
									console.log('animationStart on slide: ', current);
								};
							},
							animationComplete: function(current){
								$('.caption').animate({
									bottom:0
								},200);
								if (window.console && console.log) {
									// example return of current slide number
									console.log('animationComplete on slide: ', current);
								};
							},
							slidesLoaded: function() {
								$('.caption').animate({
									bottom:0
								},200);
							},
		});
		$("a.fancybox").fancybox({
				'transitionIn'	:	'elastic',
				'transitionOut'	:	'fade',
				'speedIn'		:	600, 
				'speedOut'		:	400, 
				'hideOnContentClick' : true,
				'titlePosition' : 'inside',
			});
			$('div.caption p').append(' | Courtesy of DePaul Athletics');
	});
</script>
</body>
</html>