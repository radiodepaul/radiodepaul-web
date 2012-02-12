<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul | Home</title>
	<%Server.Execute("/includes/head.aspx");%>
</head>
<body title="home">
	<a class="banner fancybox iframe" href="https://docs.google.com/spreadsheet/viewform?hl=en_US&formkey=dGFIeFNRMGNkbTRDMjBPX1RyOEQwd0E6MA..#gid=0">
	  <span>Work For Us</span>
	  <span>Apply Now</span>
	</a>
	<div id="categories">
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<div id="superBar"><p><a href="http://communication.depaul.edu/">College of Communication</a> | <a href="http://depaul.edu/">DePaul University</a></p></div>
		<header>
 			<a href="/"><img id="logo" src="https://s3.amazonaws.com/radiodepaul/img/logo.png" alt ="" /></a>
			<h1 class="tk-futura-pt" id="title">Chicago's College Connection</h1>
			<%Server.Execute("/includes/nav.aspx");%>
		</header>
		<div id="main">
		<div id="content">
			<div id="recentcomments" style="display:none;" class="contentBox clear">
				<div class="bar">Recent Posts</div>
				<div class="dsq-widget"><script type="text/javascript" src="http://radiodepaul.disqus.com/recent_comments_widget.js?num_items=3&hide_avatars=0&avatar_size=32&excerpt_length=100"></script></div>
			</div>
		</div>
			<%Server.Execute("/includes/sidebar.aspx");%>
		</div>
	</div>
	<%Server.Execute("/includes/footer.aspx");%>
</body>
</html>