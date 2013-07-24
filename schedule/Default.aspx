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
	<div id="categories">
		<a title="monday"><span><p>Monday</p></span></a>
		<a title="tuesday"><span><p>Tuesday</p></span></a>
		<a title="wednesday"><span><p>Wednesday</p></span></a>
		<a title="thursday"><span><p>Thursday</p></span></a>
		<a title="friday"><span><p>Friday</p></span></a>
		<a title="saturday"><span><p>Saturday</p></span></a>
		<a title="sunday"><span><p>Sunday</p></span></a>
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