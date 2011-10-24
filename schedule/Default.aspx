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
<body>
	<div id="categories">
		<a class="selected" id="all" onclick="showAllSections()"><span>Full Schedule</span></a>
		<a onclick="navSelect()" title="monday"><span>Monday</span></a>
		<a onclick="navSelect()" title="tuesday"><span>Tuesday</span></a>
		<a onclick="navSelect()" title="wednesday"><span>Wednesday</span></a>
		<a onclick="navSelect()" title="thursday"><span>Thursday</span></a>
		<a onclick="navSelect()" title="friday"><span>Friday</span></a>
		<a onclick="navSelect()" title="saturday"><span>Saturday</span></a>
		<a onclick="navSelect()" title="sunday"><span>Sunday</span></a>
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
			<h1 id="title">Schedule</h1>
			<nav>
				<a href="/" >Home</a>
				<a class="selected" href="/schedule/" >Schedule</a>
				<a href="/shows/" >Shows</a>
				<a href="/staff/" >Staff</a>
				<a href="/sports/" >Sports</a>
				<a href="/photos/" >Photos</a>
				<a href="/about/" >About</a>
				<a href="#" onClick="return playerPopUp('/player.aspx')">Listen Now</a>
			</nav>
		</header>
		<div id="main">
		<div id="content">
			<div id="schedule">
				<div class="smallBar"><p>Fall 2011</p></div>
				<div class="day" id="monday">
					<h1>Monday</h1>
					<ul>
					</ul>
				</div>
				<div class="day" id="tuesday">
					<h1>Tuesday</h1>
					<ul>

					</ul>
				</div>
				<div class="day" id="wednesday">
					<h1>Wednesday</h1>
					<ul>

					</ul>
				</div>
				<div class="day" id="thursday">
					<h1>Thursday</h1>
					<ul>

					</ul>
				</div>
				<div class="day" id="friday">
					<h1>Friday</h1>
					<ul>

					</ul>
				</div>
				<div class="day" id="saturday">
					<h1>Saturday</h1>
					<ul>

					</ul>
				</div>
				<div class="day" id="sunday">
					<h1>Sunday</h1>
					<ul>

					</ul>
				</div>
			</div>
		</div>
		<div id="sidebar">
			<div id="nowPlaying" class="sidebarBox">
				<div class="bar"><p>Now Playing</p></div>
				<img src="/img/djs/chris.jpg" />
				<div class="showInfo">
					<p class="showName">Mondays with Madison</p>
					<p class="showDJs">with Dan Peterson</p>
					<a href="">Show Page</a>
					<p class="showGenre">Digital/Rock/Rap</p>
				</div>
			</div>
				<div class="sidebarBox">
					<div class="bar"><p>Contact Us</p></div>
					<div class="smallBar"><p>Station Phone</p></div>
					<p>(773) 325-7308</p>
					<div class="smallBar"><p>Station Fax</p></div>
					<p>(773) 325-4133</p>
					<div class="smallBar"><p>Mailing Address</p></div>
					<p>Radio DePaul<br/>2250 N. Sheffield Avenue Suite 317<br/>Box #640 <br/>Chicago, IL 60614</p>
				</div>
			<div class="sidebarBox">
				<div class="bar"><p>Coming Up Next</p></div>
				<ul>
					<li><p>6:30pm - Monday's with Madison</p></li>
					<li><p>9:00pm - DJ PWhelbs</p></li>
					<li><p>11:00pm - Campus Connection</p></li>
				</ul>
			</div>
			<div class="sidebarBox">
				<div class="bar"><p>Friends Of The Station</p></div>
				<img class="bannerAd" src="/img/schubas.png" alt="" />
			</div>
			<div class="sidebarBox">
				<div class="bar"><p>Do You Like Us?</p></div>
				<div id="fb-root"></div><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:like-box href="http://www.facebook.com/radiodepaul" width="300" show_faces="true" border_color="#e9e9e3" stream="false" header="false"></fb:like-box>
			</div>
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
    $('#slider').nivoSlider();
});
</script>
<script type="text/javascript" src="/js/navSwitch.js"></script>
<script type="text/javascript" src="/js/schedule.js"></script>
</body>
</html>