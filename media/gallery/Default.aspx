<!DOCTYPE html><%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul | Gallery</title>
	<%Server.Execute("/includes/head.aspx");%>
</head>
<body title="gallery">
	<div id="superBar"><div style="padding:12px;">DePaul Media Network <a href="http://dab.depaul.edu/">DePaul Activities Board (DAB)</a><a href="http://www.depauliaonline.com/">The DePaulia</a><a href="http://communication.depaul.edu/Student Work/Good Day DePaul/">Good Day DePaul</a><div style="float:right;">Follow Us <a href="http://facebook.com/radiodepaul/">Facebook</a><a href="http://twitter.com/radiodepauldjs/">Twitter</a></div></div></div>
	<div id="categories">
		<a title="Radio DePaul 2011-2012" href="/media/gallery/?id=72157627638190531"><span><p>Radio DePaul 2011-2012</p></span></a>
		<a title="Radio DePaul 2010-2011" href="/media/gallery/?id=72157627556017792"><span><p>Radio DePaul 2010-2011</p></span></a>
		<a title="Radio DePaul 2009-2010" href="/media/gallery/?id=72157627431049317"><span><p>Radio DePaul 2009-2010</p></span></a>
		<a title="Timeless" href="/media/gallery/?id=72157627555308552"><span><p>Timeless</p></span></a>
		<a title="Visiting Dignitaries" href="/media/gallery/?id=72157627431314949"><span><p>Visiting Dignitaries</p></span></a>
		<a title="Awards &amp; Recognition" href="/media/gallery/?id=72157627431238035"><span><p>Awards &amp; Recognition</p></span></a>
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<header>
 			<a href="/"><img id="logo" src="https://s3.amazonaws.com/radiodepaul/img/logo.png" alt ="" /></a>
			<h1 id="title">Station Photos</h1>
			<%Server.Execute("/includes/nav.aspx");%>
		</header>
		<div id="main">
			<%Server.Execute("/includes/sidebar.aspx");%>
			<div id="content"></div>
		</div>
	</div>
<%Server.Execute("/includes/footer.aspx");%>
</body>
</html>