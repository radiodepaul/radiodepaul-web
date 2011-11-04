<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul | Sports</title>
	<%Server.Execute("/includes/globalCSS.aspx");%>
	<link rel="stylesheet" href="/css/slides.css" type="text/css" media="screen" />
	<script type="text/javascript" src="http://use.typekit.com/kng1gpc.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
</head>
<body id="sports">
	<div id="categories">
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<div id="superBar"><p><a href="http://communication.depaul.edu/">College of Communication</a> | <a href="http://depaul.edu/">DePaul University</a></p></div>
		<header>
 			<a href="/"><img id="logo" src="/img/logo.png" alt ="" /></a>
			<ul id="social">
				<li id="twitter"><a href="https://twitter.com/radiodepauldjs" class="twitter-follow-button" data-show-count="false"></a></li>
				<li id="facebook"><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:like href="http://radio.depaul.edu/" send="false" width="390" show_faces="false" font=""></fb:like></li>
				<li id="googleplus"><g:plusone size="medium" href="http://radio.depaul.edu/"></g:plusone></li>
			</ul>
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
<script src="http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js"></script>
<script src="/js/slides.min.jquery.js"></script>
<script src="sports.js"></script>
<script src="https://www.google.com/jsapi?key=ABQIAAAA-HgkQ3h85RC9grgGQsrSnhSP5c0xxhF7kkwus1Uc2hzPhLJBLxTWfP5nbXo7i4gExC2Q7K1TO0kBJg" type="text/javascript"></script>
<script type="text/javascript">
	google.load("feeds", "1");
	function feedLoaded(result) {
		if (!result.error) {
	
			for (var i = 0; i < 2; i++) {
		
				var item = result.feed.entries[i];
				var html = '<li>\
								<a href="' + item.link + '"><p>' + item.title + '</p></a>\
								<p>' + item.contentSnippet + '</p>\
							</li>';
				$(html).appendTo('#athletics_feed');
			}
		}
	}


	function OnLoad() {
		var feed = new google.feeds.Feed("http://www.depaulbluedemons.com/headline-rss.xml");
	
		feed.load(feedLoaded);
	}

	google.setOnLoadCallback(OnLoad);
</script>
<script type="text/javascript" language="javascript">
	$(function(){
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