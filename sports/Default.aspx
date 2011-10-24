<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul</title>
	<link rel="stylesheet" type="text/css" href="/css/reset.css" />
	<link rel="stylesheet" type="text/css" href="/css/styles.css" />
	<link href='http://fonts.googleapis.com/css?family=Stardos+Stencil:400,700|Tenor+Sans&v2' rel='stylesheet' type='text/css' />
	<link rel="stylesheet" href="/css/themes/default/default.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="/css/themes/pascal/pascal.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="/css/themes/orman/orman.css" type="text/css" media="screen" />
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
			<nav>
				<a href="/" >Home</a>
				<a href="/schedule/" >Schedule</a>
				<a href="/shows/" >Shows</a>
				<a href="/staff/" >Staff</a>
				<a class="selected" href="/sports/" >Sports</a>
				<a href="/photos/" >Photos</a>
				<a href="/about/" >About</a>
				<a href="#" onClick="return playerPopUp('/player.aspx')">Listen Now</a>
			</nav>
		</header>
		<div id="main">
		<div id="content" style="width:100%">
			<div id="featured" style="height:450px;">
			<div class="slider-wrapper theme-default">
				<div class="ribbon"></div>
				<div id="slider" class="nivoSlider">
					<img src="/img/slider/sports1_big.jpg" alt="" title="Men's Basketball" />
					<img src="/img/slider/sports2_big.jpg" alt="" />
					<img src="/img/slider/sports3_big.jpg" alt="" title="#htmlcaption" />
				</div>
				<div id="htmlcaption" class="nivo-html-caption">
					<strong>This</strong> is an example of a <em>HTML</em> caption with <a href="#">a link</a>.
				</div>
			</div>
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
	<footer>
		<p>Radio DePaul is the official student-run radio station of DePaul University in the heart of Chicago, IL. We strive to bring experience to our staff and quality music and talk shows to our listeners.</p>
	</footer>
<%Server.Execute("/includes/global_javascripts.aspx")%>
<script type="text/javascript" src="/js/jquery.nivo.slider.pack.js"></script>
<script type="text/javascript">
$(window).load(function() {
    $('#slider').nivoSlider({
	effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
	animSpeed: 500, // Slide transition speed
	pauseTime: 6000, // How long each slide will show
	directionNav: true, // Next & Prev navigation
	directionNavHide: true, // Only show on hover
	keyboardNav: true, // Use left & right arrows
	pauseOnHover: true, // Stop animation while hovering
	captionOpacity: 0.8, // Universal caption opacity
	prevText: 'Prev', // Prev directionNav text
	nextText: 'Next', // Next directionNav text	
	});
});
</script>
</body>
</html>