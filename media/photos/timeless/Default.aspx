<!DOCTYPE html><%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul</title>
	<%Server.Execute("/includes/globalCSS.aspx");%>
	<meta name="Description" content="Radio DePaul is DePaul University's award-winning student radio station. Featuring a vibrant blend of music, talk, news, and sports, Radio DePaul is Chicago's College Connection!" />
	
	<script type="text/javascript" src="http://use.typekit.com/kng1gpc.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
</head>
<body title="media">
	<div id="categories">
		<!--<a href="" ><span>All Albums</span></a>-->
		<a href="../radiodepaul_2010_2011/"><span>Radio DePaul 2010-2011</span></a>
		<a href="../visiting_dignitaries/"><span>Visiting Dignitaries</span></a>
		<a href="../awards_recognition/"><span>Awards &amp; Recognition</span></a>
		<a href="../radiodepaul_2009_2010/"><span>Radio DePaul 2009-2010</span></a>
		<a href="../timeless/"><span>Timeless</span></a>
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<div id="superBar"><p><a href="http://communication.depaul.edu/">College of Communication</a> | <a href="http://depaul.edu/">DePaul University</a></p></div>
		<header>
 			<a href="/"><img id="logo" src="/img/logo.png" alt ="" /></a>
			
			<h1 id="title">Station Photos</h1>
			<%Server.Execute("/includes/nav.aspx");%>
		</header>
		<div id="main">
			<div id="content">
				<div class="contentBox">
					<div class="bar">Timeless</div>
					<ul id="gallery">
						<script type="text/javascript" language="javascript" src="/js/flickr.api.grab.js"></script>
					</ul>
					<div class="clear"></div>
				</div>
			</div>
			<%Server.Execute("/includes/sidebar.aspx");%>
		</div>
	</div>
<%Server.Execute("/includes/footer.aspx");%>
<%Server.Execute("/includes/googleAnalytics.aspx");%>
<%Server.Execute("/includes/globalJavascript.aspx");%>	
<script type="text/javascript" language="javascript" src="http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157627555308552&api_key=8ba7f50062d534406009b45aeb73eb90"></script>
</body>
</html>