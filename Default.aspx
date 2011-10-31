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
</head>
<body>
	<a class="banner" href="http://radio.depaul.edu/">
	  <span>Something Goes Here!</span>
	  <span>Another Thing Goes Here!</span>
	</a>
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
			<%Server.Execute("/includes/nav.aspx");%>
		</header>
		<div id="main">
		<div id="content">
			<div id="featured">
				<div id="slides">
					<div class="slides_container">
						<a href="http://www.flickr.com/photos/aftab/3152515428/" title="Save my love for loneliness | Flickr - Photo Sharing!" target="_blank"><img src="http://slidesjs.com/examples/standard/img/slide-7.jpg" width="600" height="300" alt="Slide 7"></a>
					</div>
					<a href="#" class="prev"><img src="/img/slides/arrow-prev.png" width="24" height="43" alt="Arrow Prev"></a>
					<a href="#" class="next"><img src="/img/slides/arrow-next.png" width="24" height="43" alt="Arrow Next"></a>
				</div>
				<img src="/img/slides/example-frame.png" width="739" height="341" alt="Example Frame" id="frame" />
			</div>
			<div class="contentLeft">
				<div class="bar">Radio DePaul News</div>
				<div>
					<ul id="news">
						<!-- NEWS_POSTS GO HERE -->
					</ul>
				</div>
			</div>
			<div class="contentRight">
				<div id="events">
					<div class="bar">Coming Up</div>
					<ul id="events">
					
					</ul>
				</div>
			</div>
		</div>
			<%Server.Execute("/includes/sidebar.aspx");%>
		</div>
	</div>
	<%Server.Execute("/includes/footer.aspx");%>
	<%Server.Execute("/includes/globalJavascript.aspx");%>
<script type="text/javascript" src="news.js"></script>
<script src="http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js"></script>
<script src="/js/slides.min.jquery.js"></script>
<script type="text/javascript" language="javascript" src="/js/flickr.api.grab.slider.js"></script>
<script type="text/javascript" language="javascript" src="http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157627533487017&api_key=8ba7f50062d534406009b45aeb73eb90"></script>
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