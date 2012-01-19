<!DOCTYPE html><%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul | Media</title>
	<%Server.Execute("/includes/globalCSS.aspx");%>
	<meta name="Description" content="Radio DePaul is DePaul University's award-winning student radio station. Featuring a vibrant blend of music, talk, news, and sports, Radio DePaul is Chicago's College Connection!" />
	<script type="text/javascript" src="http://use.typekit.com/kng1gpc.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
</head>
<body title="media">
	<div id="categories">
		<!--<a href="" ><span>All Albums</span></a>-->
		<a href="photos/radiodepaul_2010_2011/" ><span>Radio DePaul 2010-2011</span></a>
		<a href="photos/visiting_dignitaries/" ><span>Visiting Dignitaries</span></a>
		<a href="photos/awards_recognition/" ><span>Awards &amp; Recognition</span></a>
		<a href="photos/radiodepaul_2009_2010/" ><span>Radio DePaul 2009-2010</span></a>
		<a href="photos/timeless/" ><span>Timeless</span></a>
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<div id="superBar"><p><a href="http://communication.depaul.edu/">College of Communication</a> | <a href="http://depaul.edu/">DePaul University</a></p></div>
		<header>
 			<a href="/"><img id="logo" src="/img/logo.png" alt ="" /></a>
			<ul id="social">
				<li id="twitter"><a href="https://twitter.com/radiodepauldjs" class="twitter-follow-button" data-show-count="false"></a></li>
				<li id="facebook"><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:like href="http://radio.depaul.edu/" send="false" width="390" show_faces="false" font=""></fb:like></li>
				<li id="googleplus"><g:plusone size="medium" href="http://radio.depaul.edu/"></g:plusone></li>
			</ul>
			<h1 id="title">Media</h1>
			<%Server.Execute("/includes/nav.aspx");%>
		</header>
		<div id="main">
			<div id="content">  
				<div class="contentBox">
					<div class="bar">On-Air with Radio DePaul</div>
					<div id="ytapiplayer">
						You need Flash player 8+ and JavaScript enabled to view this video.
					</div>
				</div>
				<div class="contentBox">
					<div class="bar">Station Photos</div>
					<ul id="gallery">
						<li><a href="photos/radiodepaul_2010_2011/"><img src="http://farm7.static.flickr.com/6150/6096993191_c886d0821d_t.jpg" alt=""></a><p>Radio DePaul 2010-2011</p></li>
						<li><a href="photos/radiodepaul_2009_2010/"><img src="http://farm7.static.flickr.com/6067/6096777373_b5dc43a73b_t.jpg" alt="Hosts of the Curious Sophisticate"></a><p>Radio DePaul 2009-2010</p></li>
						<li><a href="photos/timeless/"><img src="http://farm7.static.flickr.com/6066/6097222036_070b4e2e38_t.jpg" alt="Radio DePaul Mural Photo"></a><p>Timeless</p></li>
						<li><a href="photos/visiting_dignitaries/"><img src="http://farm7.static.flickr.com/6011/6096893241_5e817a2cbe_t.jpg" alt="Rapper Twista visited Radio DePaul in 2007"></a><p>Visiting Dignitaries</p></li>
						<li><a href="photos/awards_recognition/"><img src="http://farm7.static.flickr.com/6018/6097399962_f9bfccc4e1_t.jpg" alt="Best Station in the Nation Award"></a><p>Awards &amp; Recognition</p></li>
						<div class="clear"></div>
					</ul>
				</div>
			</div>
			<%Server.Execute("/includes/sidebar.aspx");%>
		</div>
	</div>
	<%Server.Execute("/includes/footer.aspx");%>
	<%Server.Execute("/includes/googleAnalytics.aspx");%>
<%Server.Execute("/includes/globalJavascript.aspx");%>
<script type="text/javascript" src="/js/swfobject.js"></script>
<script type="text/javascript">
    var params = { allowScriptAccess: "always" };
    var atts = { id: "myytplayer" };
    swfobject.embedSWF("http://www.youtube.com/e/vbbgtoTs-fM?version=3&autohide=1&enablejsapi=1&modestbranding=1&playerapiid=ytplayer&rel=0&showinfo=0&theme=light",
                       "ytapiplayer", "660", "356", "8", null, null, params, atts);
  </script>
</body>
</html>