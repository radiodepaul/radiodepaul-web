<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html lang="en">
	<head>
        <title>Radio DePaul</title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="Content-Language" content="en"/>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.0a1/jquery.mobile-1.0a1.min.css" />
		<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon-precomposed" href="/apple-touch-icon.png" />
		<link rel="stylesheet" href="html5reset.css" type="text/css" media="screen" charset="utf-8" />
		<link rel="stylesheet" href="style.css" type="text/css" media="screen" charset="utf-8" />
		<script type="text/javascript" src="http://use.typekit.com/kng1gpc.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
	</head>
	<body onload='pageLoaded()'>
		<header>
			Radio DePaul
		</header>
		<nav>
			<ul id='navList'>
				<li href="" id='liHome' onclick='navSelected()' class='selected'></li>
				<li href="" id='liListen' onclick='goToStreamHigh()'></li>
				<li href="" id='liWatch' onclick='navSelected()'></li>
				<!--<li id='liSchedule' onclick='navSelected()'></li>-->
				<!--<li id='liContact' onclick='navSelected()'></li>-->
			</ul>
		</nav>
		<section id="home">
			<h1>Chicago's College Connection</h1>
            <div id="logo" onclick="goToStreamHigh()"><img src="../img/logo.png" alt="" /><p>Click the logo to listen!</p></div>
		</section>
        <section id="listen">
            <h1>Listen Live!</h1>
                <ul>
                    <li onclick="goToStreamHigh()"><p>High Quality Stream</p><img src="shared/images/up_arrow.jpg" alt=""/></li>
                </ul>
        </section>
		<section id="watch">
			<h1>Webcam</h1>
			<div id="webcam"></div>
		</section>
		<section id="schedule">
			<h1>Today's Schedule:</h1>
		</section>
		<section id="contact">
			<h1>Contact</h1>
			<ul>
            </ul>
		</section>
		<footer><a href="/?s=full">Switch to Full Site</a></footer>
		
<%Server.Execute("/includes/googleAnalytics.aspx");%>
<script type="text/javascript" src="/js/jquery-1.6.4.min.js"></script>
<script type="text/javascript" src="nav.js"></script>
<script type="text/javascript" src="bookmark_bubble.js"></script>
<script type="text/javascript" src="bookmark_bubble_control.js"></script>
</body>
</html>