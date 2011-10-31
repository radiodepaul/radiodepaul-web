<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul</title>
	<%Server.Execute("/includes/globalCSS.aspx");%>
	<link rel="stylesheet" href="/css/slides.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="/css/themes/default/default.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="/css/nivo-slider.css" type="text/css" media="screen" />
	<script type="text/javascript" src="http://use.typekit.com/kng1gpc.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
</head>
<body id="sports">
	<div id="categories">
		<a class="selected" href="" ><span>Broadcast Schedule</span></a>
		<a href="" ><span>Recordings</span></a>
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<div id="superBar"><p><a href="">College of Communication</a> | <a href="">DePaul University</a></p></div>
		<div id="search">
			<form id="search" method="post" action="">
				<fieldset>
					<input type="text" name="search" placeholder="Search" class="required">
				</fieldset>
			</form>
		</div>
		<header>
 			<a href="/"><img id="logo" src="/img/logo.png" alt ="" /></a>
			<ul id="social">
				<li id="twitter"><a href="https://twitter.com/radiodepauldjs" class="twitter-follow-button" data-show-count="false"></a></li>
				<li id="facebook"><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:like href="http://radio.depaul.edu/" send="false" width="390" show_faces="false" font=""></fb:like></li>
				<li id="googleplus"><g:plusone size="medium" href="http://radio.depaul.edu/"></g:plusone></li>

			</ul>
			<h1 id="title" style="font-size:36px">The Student Voice of the Blue Demons</h1>
			<%Server.Execute("/includes/nav.aspx");%>
		</header>
		<div id="main">
		<div id="content" style="width:100%">
			<div id="featured" style="width:700px;">
				<div id="slides">
					<div class="slides_container">
					</div>
					<a href="#" class="prev"><img src="/img/slides/arrow-prev.png" width="24" height="43" alt="Arrow Prev"></a>
					<a href="#" class="next"><img src="/img/slides/arrow-next.png" width="24" height="43" alt="Arrow Next"></a>
				</div>
				<img src="/img/slides/example-frame.png" width="739" height="341" alt="Example Frame" id="frame" />
			</div>
			<div class="contentLeft">
				<div class="bar"><p>Men's Soccer</p></div>
				<ul>
					<li>MS- at Loyola - Wednesday 9/14 (7P)</li>
					<li>MS- vs. Seton Hall - Saturday 9/24 (1P)</li>
					<li>MS- vs. Rutgers - Saturday 10/15 (1P)</li>
					<li>MS- vs. Syracuse - Saturday 10/29 (1P)</li>
				</ul>
				<div class="bar"><p>Volleyball</p></div>
				<ul>
					<li>V-  vs. Georgetown - Sunday 9/25 (2P)</li>
					<li>V-  vs. Notre Dame - Friday 10/14 (7P)</li>
					<li>V-  vs. Rutgers - Saturday 11/5 (2P)</li>
					<li>V-  vs. Seton Hall - Sunday 11/6 (2P)</li>
				</ul>
			</div>
			<div class="contentRight">
				<div class="bar"><p>Women's Soccer</p></div>
				<ul>
					<li>WS- vs. Minnesota - Sunday 9/11 (Noon)</li>
					<li>WS- vs. Cincinnati - Friday 9/16 (4P)</li>
					<li>WS- vs. UCONN - Sunday 10/2 (1P)</li>
					<li>WS- vs. Georgetown - Sunday 10/16 (1P)</li>
				</ul>
			</div>
		</div>
	</div>
	</div>
	<%Server.Execute("/includes/footer.aspx");%>
<%Server.Execute("/includes/globalJavascript.aspx");%>
<script type="text/javascript" language="javascript" src="/js/flickr.api.grab.slider.js"></script>
<script type="text/javascript" language="javascript" src="http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157627533487017&api_key=8ba7f50062d534406009b45aeb73eb90"></script>
<script src="http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js"></script>
<script src="/js/slides.min.jquery.js"></script>
<script type="text/javascript" language="javascript">
	$(function(){
		$('#slides').slides({
			preload: true,
			preloadImage: '/slides/img/loading.gif',
			play: 5000,
			pause: 2500,
			hoverPause: true,
		});
	});
</script>
</body>
</html>