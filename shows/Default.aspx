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
<body>
	<div id="categories">
		<a href="" ><span>All Shows</span></a>
		<a href="" ><span>News</span></a>
		<a href="" ><span>Sports</span></a>
		<a href="" ><span>Music</span></a>
		<a href="" ><span>Talk</span></a>
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
			<h1 id="title">Shows</h1>
			<% Server.Execute("/includes/nav.aspx"); %>
		</header>
		<div id="main">
			<div id="content">
			</div>
		<div id="sidebar">
			<div id="nowPlaying" class="sidebarBox">
				<div class="bar">On-Air Now</div>
				<img src="/img/djs/chris.jpg" />
				<div class="showInfo">
					<p class="showName">Mondays with Madison</p>
					<p class="showDJs">with Dan Peterson</p>
					<a href="">Show Page</a>
					<p class="showGenre">Digital/Rock/Rap</p>
				</div>
			</div>
				<div class="sidebarBox">
					<div class="bar">Contact Us</div>
					<div class="smallBar">Station Phone</div>
					<p>(773) 325-7308</p>
					<div class="smallBar">Station Fax</div>
					<p>(773) 325-4133</p>
					<div class="smallBar">Mailing Address</div>
					<p>Radio DePaul<br/>2250 N. Sheffield Avenue Suite 317<br/>Box #640 <br/>Chicago, IL 60614</p>
				</div>
			<div class="sidebarBox">
				<div class="bar">Coming Up Next</div>
				<ul>
					<li><p>6:30pm - Monday's with Madison</p></li>
					<li><p>9:00pm - DJ PWhelbs</p></li>
					<li><p>11:00pm - Campus Connection</p></li>
				</ul>
			</div>
			<div class="sidebarBox">
				<div class="bar">Friends Of The Station</div>
				<img class="bannerAd" src="/img/schubas.png" alt="" />
			</div>
			<div class="sidebarBox">
				<div class="bar">Do You Like Us?</div>
				<div id="fb-root"></div><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:like-box href="http://www.facebook.com/radiodepaul" width="300" show_faces="true" border_color="#e9e9e3" stream="false" header="false"></fb:like-box>
			</div>
		</div>
		</div>
	</div>
	<footer>
		<p>Radio DePaul is the official student-run radio station of DePaul University in the heart of Chicago, IL. We strive to bring experience to our staff and quality music and talk shows to our listeners.</p>
	</footer>
<script type="text/javascript" src="https://www.google.com/jsapi?key=ABQIAAAA-HgkQ3h85RC9grgGQsrSnhR-EnhHLF3hzeP_zC0f88vxrVBDJxQ5trNtm-WIavFyDmaveoDjiQ2JeQ"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
<script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
<script type="text/javascript" src="/js/jqclock_201.js"></script>
<script type="text/javascript" src="/js/jquery.simpleWeather-1.8.min.js"></script>
<script type="text/javascript" src="/js/main.js"></script>
<script type="text/javascript" src="/js/jquery.nivo.slider.pack.js"></script>
<script type="text/javascript" src="shows.js"></script>
<script type="text/javascript">
$(window).load(function() {
    $('#slider').nivoSlider();
});
</script>
</body>
</html>