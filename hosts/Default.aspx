<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul</title>
	<%Server.Execute("/includes/global_stylesheets.aspx");%>
	<link rel="stylesheet" href="/css/themes/default/default.css" type="text/css" media="screen" />
  	<link rel="stylesheet" href="/css/themes/pascal/pascal.css" type="text/css" media="screen" />
  	<link rel="stylesheet" href="/css/themes/orman/orman.css" type="text/css" media="screen" />
  	<link rel="stylesheet" href="/css/nivo-slider.css" type="text/css" media="screen" />
	<%Server.Execute("/includes/global_typekit.aspx");%>
</head>
<body>
	<div id="categories">
		<a href="" ><span>Jim Sandherr</span></a>
		<a href="" ><span>Jake Padilla</span></a>
		<a href="" ><span>Esmeralda Leon</span></a>
		<a href="/djs/cking/" ><span>Courtney King</span></a>
		<a href="" ><span>Jon Schatz</span></a>
		<a href="" ><span>Eddie Sayago</span></a>
		<a href="" ><span>Chris Dubiel</span></a>
		<a href="" ><span>Andrew Rodriguez</span></a>
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
			<h1 id="title">DJs</h1>
			<nav>
				<a href="/" >Home</a>
				<a href="/schedule/" >Schedule</a>
				<a href="/shows/" >Shows</a>
				<a class="selected" href="/djs/" >DJs</a>
				<a href="/sports/" >Sports</a>
				<a href="/photos/" >Photos</a>
				<a href="/about/" >About</a>
				<a href="/" >Listen Now</a>
			</nav>
		</header>
		<div id="main">
			<div id="content">
				<p>Show Name:</p>
				<p></p>
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
<%Server.Execute("/includes/global_javascripts.aspx");%>
<script type="text/javascript" src="/js/jquery.nivo.slider.pack.js"></script>
<script type="text/javascript">
$(window).load(function() {
    $('#slider').nivoSlider();
});
</script>
</body>
</html>