<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul | Schedule</title>
	<%Server.Execute("/includes/head.aspx");%>
</head>
<body title="schedule">
	<div id="superBar"><div style="padding:12px;">DePaul Media Network <a href="http://communication.depaul.edu/">College of Communication</a><a href="http://depaul.edu/">DePaul University</a><div style="float:right;">Follow Us <a href="http://facebook.com/radiodepaul/">Facebook</a><a href="http://twitter.com/radiodepauldjs/">Twitter</a></div></div></div>
	<div id="categories">
		<a title="monday"><span>Monday</span></a>
		<a title="tuesday"><span>Tuesday</span></a>
		<a title="wednesday"><span>Wednesday</span></a>
		<a title="thursday"><span>Thursday</span></a>
		<a title="friday"><span>Friday</span></a>
		<a title="saturday"><span>Saturday</span></a>
		<a title="sunday"><span>Sunday</span></a>
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<header>
 			<a href="/"><img id="logo" src="https://s3.amazonaws.com/radiodepaul/img/logo.png" alt ="" /></a>
			<h1 id="title">Schedule</h1>
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