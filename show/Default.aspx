<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul</title>
	<link rel="stylesheet" type="text/css" href="/css/blue.monday/jplayer.blue.monday.css" />
	<%Server.Execute("/includes/head.aspx");%>
</head>
<body title="show">
	<div id="superBar"><div style="padding:12px;">DePaul Media Network <a href="http://dab.depaul.edu/">DePaul Activities Board (DAB)</a><a href="http://www.depauliaonline.com/">The DePaulia</a><a href="http://communication.depaul.edu/Student Work/Good Day DePaul/">Good Day DePaul</a><div style="float:right;">Follow Us <a href="http://facebook.com/radiodepaul/">Facebook</a><a href="http://twitter.com/radiodepauldjs/">Twitter</a></div></div></div>
	<div id="fb-root"></div>
	<div id="categories"></div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		
		<header>
 			<a href="/"><img id="logo" src="https://s3.amazonaws.com/radiodepaul/img/logo.png" alt ="" /></a>
			<h1 id="title">Shows</h1>
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