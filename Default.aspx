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
		<a href="" ><span>HAL 2010</span></a>
		<a href="" ><span>Mondays with Madison</span></a>
		<a href="" ><span>Live News at Noon</span></a>
		<a href="" ><span>Husllen</span></a>
		<a href="" ><span>Dannibal Lector</span></a>
		<a href="" ><span>The K &amp; T Show</span></a>
		<a href="" ><span>The Campus Curmudgeon</span></a>
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<div id="superBar"><a href="">College of Communication</a> | <a href="http://depaul.edu/">DePaul University</a></div>
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
			<h1 class="tk-futura-pt" id="title">Home</h1>
			<nav>
				<a class="selected" href="/" >Home</a>
				<a href="/schedule/" >Schedule</a>
				<a href="/shows/" >Shows</a>
				<a href="/djs/" >DJs</a>
				<a href="/sports/" >Sports</a>
				<a href="/photos/" >Photos</a>
				<a href="/about/" >About</a>
				<a href="#" onClick="return playerPopUp('/player.aspx')">Listen Now</a>
			</nav>
		</header>
		<div id="main">
		<div id="content">
			<div id="featured">
				<div class="slider-wrapper theme-default">
					<div class="ribbon"></div>
					<div id="slider" class="nivoSlider">
					</div>
				</div>
			</div>
			<div class="contentLeft">
				<div id="news">
				<div class="bar"><p>Radio DePaul News</p></div>
					<ul>
						<li>
							<p>5 New DJs Hired!</p>
							<p>Radio DePaul welcomes Matt, Sean, Jennifer, Sarah, and Chris to the Radio DePaul team!</p>
							<a href="">Read more &rarr;</a>
						</li>
						<li>
							<p>Radio DePaul Featured in USA Today</p>
							<p>Radio DePaul was featured in a recently USA Today article featuring college radio stations across the nation.</p>
							<a href="">Read more &rarr;</a>
						</li>
						<li>
							<p>New Metal Show Thursday Nights</p>
							<p>One of our veteran DJs, Sean Penn, will be hosting a new metal show Thursday nights at 10pm!</p>
							<a href="">Read more &rarr;</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="contentRight">
				<div id="events">
					<div class="bar"><p>Events Coming Up</p></div>
					<ul>
						<li>
							<p>Involvement Fair</p>
							<p class="eventDate">Sat | 9/17 &amp; Sun | 9/18</p>
							<p class="eventTime">10am - 6pm</p>
						</li>
						<li>
							<p>Campus Connection in the Student Center</p>
							<p class="eventDate">Saturday &amp; Sunday</p>
							<p class="eventTime">10am - 6pm</p>
						</li>
						<li>
							<p>Home Coming Dance</p>
							<p class="eventDate">Saturday &amp; Sunday</p>
							<p class="eventTime">10am - 6pm</p>
						</li>
						<li>
							<p>Hip Hop Showcase</p>
							<p class="eventDate">Saturday &amp; Sunday</p>
							<p class="eventTime">10am - 6pm</p>
						</li>
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
<%Server.Execute("/includes/global_javascripts.aspx");%>
<script type="text/javascript" language="javascript" src="/js/flickr.api.grab.slider.js"></script>
<script type="text/javascript" language="javascript" src="http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157627533487017&api_key=8ba7f50062d534406009b45aeb73eb90"></script>
<script type="text/javascript" src="/js/jquery.nivo.slider.pack.js"></script>
<script type="text/javascript">
$(window).load(function() {
    $('#slider').nivoSlider({
	effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
	animSpeed: 500, // Slide transition speed
	pauseTime: 6000, // How long each slide will show
	directionNav: true, // Next & Prev navigation
	controlNavThumbs: true, // Use thumbnails for Control Nav
	controlNavThumbsFromRel: true, // Use image rel for thumbs
	pauseOnHover: true, // Stop animation while hovering
	captionOpacity: 0.0, // Universal caption opacity
	prevText: 'Prev', // Prev directionNav text
	nextText: 'Next', // Next directionNav text	
	});
});
</script>
</body>
</html>