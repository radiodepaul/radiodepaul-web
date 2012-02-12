<!DOCTYPE html><%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul | Gallery</title>
	<%Server.Execute("/includes/head.aspx");%>
</head>
<body title="gallery">
	<div id="categories">
		<a title="Radio DePaul 2011-2012" href="/media/gallery/?id=72157627638190531"><span>Radio DePaul 2011-2012</span></a>
		<a title="Radio DePaul 2010-2011" href="/media/gallery/?id=72157627556017792"><span>Radio DePaul 2010-2011</span></a>
		<a title="Radio DePaul 2009-2010" href="/media/gallery/?id=72157627431049317"><span>Radio DePaul 2009-2010</span></a>
		<a title="Timeless" href="/media/gallery/?id=72157627555308552"><span>Timeless</span></a>
		<a title="Visiting Dignitaries" href="/media/gallery/?id=72157627431314949"><span>Visiting Dignitaries</span></a>
		<a title="Awards &amp; Recognition" href="/media/gallery/?id=72157627431238035"><span>Awards &amp; Recognition</span></a>
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<div id="superBar"><p><a href="http://communication.depaul.edu/">College of Communication</a> | <a href="http://depaul.edu/">DePaul University</a></p></div>
		<header>
 			<a href="/"><img id="logo" src="https://s3.amazonaws.com/radiodepaul/img/logo.png" alt ="" /></a>
			<h1 id="title">Station Photos</h1>
			<%Server.Execute("/includes/nav.aspx");%>
		</header>
		<div id="main">
			<div id="content">
			</div>
			<%Server.Execute("/includes/sidebar.aspx");%>
		</div>
	</div>
<%Server.Execute("/includes/footer.aspx");%>
</body>
</html>