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
		<a href="javascript:$.scrollTo($('#staff'))"><span>Staff</span></a>
		<a href="" ><span>Mission Statement</span></a>
		<a href="" ><span>Join Radio DePaul</span></a>
		<a href="" ><span>Advertise With Us</span></a>
		<a href="" ><span>Awards &amp; Recognition</span></a>
		<a href="" ><span>FAQs</span></a>
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
			<h1 id="title">About</h1>
			<nav>
				<a href="/" >Home</a>
				<a href="/schedule/" >Schedule</a>
				<a href="/shows/" >Shows</a>
				<a href="/staff/" >Staff</a>
				<a href="/sports/" >Sports</a>
				<a href="/photos/" >Photos</a>
				<a class="selected" href="/about/" >About</a>
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
				<div id="staff">
					<h2>Staff</h2>
				</div>
				<h2>Mission Statement</h2>
                <p>Act as an educational and practical training ground for those students who are interested in pursuing radio as a career.</p>
                <p>Entertain and Inform our audience through innovative and consistent music and non-music programming.</p>
                <p>Serve the DePaul community by promoting University services, events, and activities.</p>
                <p>Work cooperatively with other campus groups and organizations to promote and support a varied and exciting collegiate experience for students.</p>
				<h2>Join Radio DePaul</h2>
				<h3>Eligibility for Participation</h3>
                <p>Only full-time students in good academic standing (2.5 GPA or higher) at DePaul are eligible for FULL membership in Radio DePaul.</p>
                <p>University faculty members, staff and members of the community also shall be eligible for ASSOCIATE membership through petition to the Student Advisory Committee.</p>
                <p>Membership constitutes active participation in the organization.</p>
                <p>Radio DePaul shall not discriminate against any person on the basis of race, color, sex, sexual preference, disabilities, national origin, religious affiliation, or beliefs.</p>
           		<h3>Rights and Privileges of Membership</h3>
               	<p>The number of persons who may be members of Radio DePaul may be limited depending on the availability of on or off-air positions.</p>
               	<p>Only FULL members of the organization shall be eligible to hold management positions.</p>
				<h2>Advertise With Us</h2>
				<h2>FAQs</h2>
				<h2>Awards &amp; Recognition</h2>
		</div>
	</div>
	</div>
	<footer>
		<p>Radio DePaul is the official student-run radio station of DePaul University in the heart of Chicago, IL. We strive to bring experience to our staff and quality music and talk shows to our listeners.</p>
	</footer>
<%Server.Execute("/includes/global_javascripts.aspx")%>
<script type="text/javascript" src="/js/jquery.nivo.slider.pack.js"></script>
<script type="text/javascript" src="/js/jquery.scrollTo-min.js"></script>
<script type="text/javascript" src="/js/about.js"></script>
<script type="text/javascript">
$(window).load(function() {
    $('#slider').nivoSlider();
});
</script>
</body>
</html>