<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul</title>
	<%Server.Execute("/includes/head.aspx");%>
</head>
<body title="404">
	<div id="categories">
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<div id="superBar"><p><a href="http://communication.depaul.edu/">College of Communication</a> | <a href="http://depaul.edu/">DePaul University</a></p></div>
		<header>
 			<a href="/"><img id="logo" src="https://s3.amazonaws.com/radiodepaul/img/logo.png" alt ="" /></a>
			
			<h1 class="tk-futura-pt" id="title">Home</h1>
			<%Server.Execute("/includes/nav.aspx");%>
		</header>
		<div id="main">
		<div id="content">
			<p>Sorry. The page you requested cannot be found.</p>
		</div>
			<%Server.Execute("/includes/sidebar.aspx");%>
		</div>
	</div>
	<%Server.Execute("/includes/footer.aspx");%>
</body>
</html>