<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul</title>
	<%Server.Execute("/includes/globalCSS.aspx");%>
	<link rel="stylesheet" href="/css/slides.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="/css/jquery.fancybox-1.3.4.css" type="text/css" media="screen" />
	<script type="text/javascript" src="http://use.typekit.com/kng1gpc.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
</head>
<body title="home">
	<a class="banner fancybox iframe" href="https://docs.google.com/spreadsheet/viewform?hl=en_US&formkey=dGFIeFNRMGNkbTRDMjBPX1RyOEQwd0E6MA..#gid=0">
	  <span>Work For Us</span>
	  <span>Apply Now</span>
	</a>
	<div id="categories">
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<div id="superBar"><a href="http://communication.depaul.edu/">College of Communication</a> | <a href="http://depaul.edu/">DePaul University</a></div>
		<header>
 			<a href="/"><img id="logo" src="/img/logo.png" alt ="" /></a>
			<ul id="social">
				<li id="twitter"><a href="https://twitter.com/radiodepauldjs" class="twitter-follow-button" data-show-count="false"></a></li>
				<li id="facebook"><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:like href="http://radio.depaul.edu/" send="false" width="390" show_faces="false" font=""></fb:like></li>
				<li id="googleplus"><g:plusone size="medium" href="http://radio.depaul.edu/"></g:plusone></li>
			</ul>
			<h1 class="tk-futura-pt" id="title">Home</h1>
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
				<div class="bar"><a href="/station_news/">Radio DePaul News</a></div>
				<ul id="news">
				<!-- NEWS_POSTS GO HERE -->
				</ul>
			</div>
			<div class="right contentBox">
				<div class="bar">Coming Up</div>
				<ul id="events">
				</ul>
			</div>
			<div class="contentBox clear">
				<div class="bar"><a href="http://www.depauliaonline.com/">The DePaulia</a> Feed</div>
					<div id="depaulia_feed"></div>
			</div>
		</div>
			<%Server.Execute("/includes/sidebar.aspx");%>
		</div>
	</div>
	<%Server.Execute("/includes/footer.aspx");%>
	<%Server.Execute("/includes/googleAnalytics.aspx");%>
	<%Server.Execute("/includes/globalJavascript.aspx");%>
<script type="text/javascript" src="news.js"></script>
<script src="/js/slides.min.jquery.js"></script>
<script src="https://www.google.com/jsapi?key=ABQIAAAA-HgkQ3h85RC9grgGQsrSnhSP5c0xxhF7kkwus1Uc2hzPhLJBLxTWfP5nbXo7i4gExC2Q7K1TO0kBJg" type="text/javascript"></script>
<script type="text/javascript">
	google.load("feeds", "1");
	function feedLoaded(result) {
	  if (!result.error) {
	
		$.each(result.feed.entries, function(i, item) {

		var html = '<li>\
						<a href="' + item.link + '"><p>' + item.title + '</p></a>\
						<p>' + item.contentSnippet + '</p>\
					</li>'
					$(html).appendTo('#depaulia_feed');
		});
		
		}
	}


	function OnLoad() {
		// Create a feed instance that will grab Digg's feed.
		var feed = new google.feeds.Feed("http://www.depauliaonline.com/se/the-depaulia-rss-1.2124399");
	

		// Calling load sends the request off.  It requires a callback function.
		feed.load(feedLoaded);
	}

	google.setOnLoadCallback(OnLoad);
</script>
<script type="text/javascript" language="javascript" src="/js/flickr.api.grab.slider.js"></script>
<script type="text/javascript" language="javascript" src="http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157627533487017&api_key=8ba7f50062d534406009b45aeb73eb90"></script>
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
				'transitionIn'	:	'fade',
				'transitionOut'	:	'fade',
				'speedIn'		:	600, 
				'speedOut'		:	600, 
				'overlayShow'	:	true,
				'hideOnContentClick' : true,
				'titlePosition' : 'inside',
				'height' : '95%',
			});
	});
</script>
</body>
</html>