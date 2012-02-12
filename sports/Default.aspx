<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul | Sports</title>
	<link rel="stylesheet" href="/css/slides.css" type="text/css" media="screen" />
	<link rel="stylesheet" type="text/css" href="/css/blue.monday/jplayer.blue.monday.css" />
	<%Server.Execute("/includes/head.aspx");%>
</head>
<body title="sports">
	<div id="categories">
		<a href="" class="selected"><span>Main</span></a>
		<a href="/show/?id=19"><span>Blue Demon Weekly</span></a>
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<div id="superBar"><p><a href="http://communication.depaul.edu/">College of Communication</a> | <a href="http://depaul.edu/">DePaul University</a></p></div>
		<header>
 			<a href="/"><img id="logo" src="https://s3.amazonaws.com/radiodepaul/img/logo.png" alt ="" /></a>
			
			<h1 id="title">The Student Voice</h1>
			<%Server.Execute("/includes/nav.aspx");%>
		</header>
		<div id="main">
		<div id="content">
			<!--<div class="right contentBox">
				<div class="bar">Events</div>
				<ul id="events">
				</ul>
			</div>
			<div class="left contentBox clear">
				<div class="bar">Men's Basketball</div>
				<ul id="mbasketball">
				</ul>
			</div>
			<div class="right contentBox">
				<div class="bar">Women's Basketball</div>
				<ul id="wbasketball">
				</ul>
			</div>
			<div class="left contentBox clear">
				<div class="bar">Men's Soccer</div>
				<ul id="msoccer">
				</ul>
			</div>
			<div class="right contentBox">
				<div class="bar">Women's Soccer</div>
				<ul id="wsoccer">
				</ul>
			</div>
			<div class="left contentBox clear">
				<div class="bar">Volleyball</div>
				<ul id="volleyball">
				</ul>
			</div>
			<div class="right contentBox">
				<div class="bar">Softball</div>
				<ul id="softball">
				</ul>
			</div>-->
		</div>
		<%Server.Execute("/includes/sidebar.aspx");%>
	</div>
	</div>
	<%Server.Execute("/includes/footer.aspx");%>
</body>
</html>