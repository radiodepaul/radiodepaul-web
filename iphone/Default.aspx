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
		<link rel="stylesheet" href="style.css?v=001" type="text/css" media="screen" charset="utf-8" />
		<script type="text/javascript" src="http://use.typekit.com/kng1gpc.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
                <script type="text/javascript" src="https://s3.amazonaws.com/radiodepaul/js/jwplayer.js"></script>
                <script src="http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js"></script>

	</head>
	<body onload='pageLoaded()'>
		<header>
			Radio DePaul
		</header>
		<nav>
			<ul id='navList'>
				<li id='liHome' onclick='navSelected()' class='selected'></li>
				<li id='liListen' onclick='goToStreamHigh()'></li>
				<li id='liWatch' onclick='navSelected()'></li>
				<!--<li id='liSchedule' onclick='navSelected()'></li>-->
				<!--<li id='liContact' onclick='navSelected()'></li>-->
			</ul>
		</nav>
		<section id="home">
			<h1>Chicago's College Connection</h1>
            <div id="logo" onclick="goToStreamHigh()"><img src="https://s3.amazonaws.com/radiodepaul/img/logo.png" alt="" /><p>Click the logo to listen!</p></div>
		</section>
        <section id="listen">
            <h1>Listen Live!</h1>
                <ul>
                    <li onclick="goToStreamHigh()"><p>High Quality Stream</p><img src="shared/images/up_arrow.jpg" alt=""/></li>
                </ul>
        </section>
		<section id="watch">
			<h1>Webcam</h1>
			<div id="webcam_embed"></div>
		</section>
		<section id="schedule">
			<div id="schedule_list">
				<div id="monday">
					<h1>Monday</h1>
					<ul>
					</ul>
				</div>
				<div id="tuesday">
					<h1>Tuesday</h1>
					<ul>
					</ul>
				</div>
				<div id="wednesday">
					<h1>Wednesday</h1>
					<ul>
					</ul>
				</div>
				<div id="thursday">
					<h1>Thursday</h1>
					<ul>
					</ul>
				</div>
				<div id="friday">
					<h1>Friday</h1>
					<ul>
					</ul>
				</div>
				<div id="saturday">
					<h1>Saturday</h1>
					<ul>

					</ul>
				</div>
				<div id="sunday">
					<h1>Sunday</h1>
					<ul>
					</ul>
				</div>
			</div>
		</section>
		<section id="contact">
			<h1>Contact</h1>
			<ul>
            </ul>
		</section>
		<footer><a href="/?s=full">Switch to Full Site</a></footer>
<script type="text/javascript" src="nav.js?v=1.0.4"></script>
<script type="text/javascript" src="bookmark_bubble.js"></script>
<script type="text/javascript" src="bookmark_bubble_control.js"></script>
</body>
</html>
