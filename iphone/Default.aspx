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
				<li id='liHome' onclick='navSelected()' class='selected'></li>
				<li id='liListen' onclick='goToStreamHigh()'></li>
				<li id='liWatch' onclick='navSelected()'></li>
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
		<section id = "watch">
			<h1>Webcam</h1>
			<div id="webcam"></div>
		</section>
		<section id = "schedule">
			<h1>Today's Schedule:</h1>
			<script type="text/javascript">
			var d = new Date();
			var weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
			showsGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/shows?q={'quarter':'AQ2011','"weekday[d.getDay()]"':true}&s={'start_hour': 1, 'start_minute': 1}&apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
			showsParse= $.parseJSON(showsGet);
			
			$.each(showsParse, function(i, show) {
				var start_ampm, end_ampm = "";

				var end_hour = show.start_hour;
				var end_minute = show.start_minute;

				if (show.start_hour < 12) { start_ampm = "am";} else { start_ampm = "pm";}

				end_minute += show.duration_min;
				while (end_minute >= 60) {
					end_minute -= 60;
					end_hour += 1;
				}

				if (end_hour < 12) { end_ampm = "am";} else { end_ampm = "pm"; }
				if (end_hour > 23) { end_hour -= 23; end_ampm = "am"; }

				if (show.start_hour === 0) { show.start_hour = 12; }
				if (show.start_hour > 12) { show.start_hour -= 12; }
				if (end_hour > 12) { end_hour -= 12; }

				if (show.start_minute === 0) { show.start_minute = "00"; }	
				if (end_minute === 0) { end_minute = "00"; }



				var html = '<li>\
						<li>\
							<p class="time">' + show.start_hour + ':' + show.start_minute + start_ampm + ' - ' + end_hour + ':' + end_minute + end_ampm + '</p>\
						</div>\
						<p class = "title">' + show.name + '</p>\
						<p class="dj">with ' + show.hosts + '</p>\
						<p class="genre">' + show.genre + '</p>\
					</li>'

				$(html).appendTo('#schedule'); }
			});
			
			</script>
		</section>
		<section id = "contact">
			<h1>Contact</h1>
			<ul>
            </ul>
		</section>
	</body>
</html>
<script type="text/javascript" src="bookmark_bubble.js"></script>
<script type="text/javascript" src="bookmark_bubble_control.js"></script>
<script type="text/javascript" charset="utf-8">
	function pageLoaded() {
		switchToSectionWithId('home');
	}
	function goToStreamLow(url) {
		window.location = "/radiodepaul64kbps.m3u";
	}
	function goToStreamHigh(url) {
		window.location = "/radiodepaul128kbps.m3u";
	}
	function getWebcam() {
		document.getElementById('webcam').innerHTML = "<img src='http://140.192.109.189/axis-cgi/mjpg/video.cgi?camera=&resolution=320x240' alt='' />";
	}
	function navSelected() {
		clearAllNavItems();

		var navItem = event.target;
		navItem.setAttribute('class', 'selected');

		switch (navItem.id) {
		    case 'liHome':
		        switchToSectionWithId('home');
		        break;
		    case 'liListen':
		        switchToSectionWithId('listen');
		        break;
		    case 'liWatch':
		        switchToSectionWithId('watch');
		        getWebcam();
		        break;
		    case 'liSchedule':
		        switchToSectionWithId('schedule');
		        break;
		    case 'liContact':
		        switchToSectionWithId('contact');
		        break;
		}
	}
	function clearAllNavItems() {
		var navList = document.getElementById('navList');

		for (var i = 0; i < navList.children.length; i++) {
		    var li = navList.children[i];
		    li.setAttribute('class', '');
		}
	}
	function switchToSectionWithId(sectionId) {
		hideAllSections();
		showSectionWithId(sectionId);
	}
	function hideAllSections() {
		var sections = document.getElementsByTagName('section');
		for (var i = 0; i < sections.length; i++) {
		    var section = sections[i];
		    section.setAttribute('class', '');
		}
	}
	function showSectionWithId(sectionId) {
		var section = document.getElementById(sectionId);
		section.setAttribute('class', 'selected');
	}
</script>