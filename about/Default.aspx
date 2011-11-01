<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul</title>
	<%Server.Execute("/includes/globalCSS.aspx");%>
	<link rel="stylesheet" href="/css/slides.css" type="text/css" media="screen" />
	<script type="text/javascript" src="http://use.typekit.com/kng1gpc.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
	<style>.slides_container img {width:600px; }</style>
</head>
<body>
	<a class="banner" href="http://radio.depaul.edu/">
	  <span>Something Goes Here!</span>
	  <span>Another Thing Goes Here!</span>
	</a>
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
			<%Server.Execute("/includes/nav.aspx");%>
		</header>
		<div id="main">
		<div id="content" style="width:100%;">
			<div id="featured" style="width:700px;">
				<div id="slides">
					<div class="slides_container">
					</div>
					<a href="#" class="prev"><img src="/img/slides/arrow-prev.png" width="24" height="43" alt="Arrow Prev"></a>
					<a href="#" class="next"><img src="/img/slides/arrow-next.png" width="24" height="43" alt="Arrow Next"></a>
				</div>
				<img src="/img/slides/example-frame.png" width="739" height="341" alt="Example Frame" id="frame" />
			</div>
				<div id="staff">
					<div class="bar">Staff</div>
				</div>
				<div id="mission_statment">
					<div class="bar">Mission Statement</div>
                	<p>Act as an educational and practical training ground for those students who are interested in pursuing radio as a career.</p>
                	<p>Entertain and Inform our audience through innovative and consistent music and non-music programming.</p>
                	<p>Serve the DePaul community by promoting University services, events, and activities.</p>
                	<p>Work cooperatively with other campus groups and organizations to promote and support a varied and exciting collegiate experience for students.</p>
				</div>
				<div class="bar">Join Radio DePaul</div>
				<div class="smallBar">Eligibility for Participation</div>
                <p>Only full-time students in good academic standing (2.5 GPA or higher) at DePaul are eligible for FULL membership in Radio DePaul.</p>
                <p>University faculty members, staff and members of the community also shall be eligible for ASSOCIATE membership through petition to the Student Advisory Committee.</p>
                <p>Membership constitutes active participation in the organization.</p>
                <p>Radio DePaul shall not discriminate against any person on the basis of race, color, sex, sexual preference, disabilities, national origin, religious affiliation, or beliefs.</p>
           		<div class="smallBar">Rights and Privileges of Membership</div>
               	<p>The number of persons who may be members of Radio DePaul may be limited depending on the availability of on or off-air positions.</p>
               	<p>Only FULL members of the organization shall be eligible to hold management positions.</p>
				<!--<div class="smallBar">Advertise With Us</div>
				<div class="smallBar">FAQs</div>-->
				<div class="bar">Awards &amp; Recognition</div>
				<div id="awards">
					<div id="awards_2011">
						<div class="bar">2011</div>
							<div class="awards_iba smallBar">Illinois Broadcasters Association</div>
							<div class="awards_ibs smallBar">Intercollegiate Broadcasters System</div>
							<div class="awards_cbi smallBar">College Broadcasters, Inc.</div>
							<div class="awards_aeo smallBar">American Eagle Outfitters/Filter Magazine</div>
							<div class="awards_crd smallBar">College Radio Day</div>
					</div>
					<div id="awards_2010">
						<div class="bar">2010</div>
							<div class="awards_ibs smallBar">Intercollegiate Broadcasters System</div>
							<div class="awards_thp smallBar">The Huffington Post</div>
							<div class="awards_cn smallBar">Conversations Newsletter</div>
					</div>
					<div id="awards_2009">
						<div class="bar">2009</div>
							<div class="awards_cbi smallBar">College Broadcasters, Inc</div>
					</div>
					<div id="awards_2008">
						<div class="bar">2008</div>
							<div class="awards_cbi smallBar">College Broadcasters, Inc</div>
					</div>
					<div id="awards_2007">
						<div class="bar">2007</div>
							<div class="awards_cbi smallBar">College Broadcasters, Inc</div>
					</div>
					<div id="awards_2006">
						<div class="bar">2006</div>
							<div class="awards_cbi smallBar">College Broadcasters, Inc</div>
					</div>
				</div>
		</div>
	</div>
	</div>
	<%Server.Execute("/includes/footer.aspx");%>
<%Server.Execute("/includes/globalJavascript.aspx");%>
<script type="text/javascript" language="javascript" src="/js/flickr.api.grab.slider.js"></script>
<script type="text/javascript" language="javascript" src="http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157628024483658&api_key=8ba7f50062d534406009b45aeb73eb90"></script>
<script type="text/javascript" src="/js/jquery.scrollTo-min.js"></script>
<script type="text/javascript" src="about.js"></script>
<script type="text/javascript" src="/js/navSwitch.js"></script>
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