<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul | Schedule</title>
	<%Server.Execute("/includes/globalCSS.aspx");%>
	<meta name="Description" content="Radio DePaul is DePaul University's award-winning student radio station. Featuring a vibrant blend of music, talk, news, and sports, Radio DePaul is Chicago's College Connection!" />
	
	<script type="text/javascript" src="http://use.typekit.com/kng1gpc.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
</head>
<body title="schedule">
	<div id="categories">
		<a id="all" onclick="showAllSections()"><span>Full Schedule</span></a>
		<a onclick="navSelect()" title="monday"><span>Monday</span></a>
		<a onclick="navSelect()" title="tuesday"><span>Tuesday</span></a>
		<a onclick="navSelect()" title="wednesday"><span>Wednesday</span></a>
		<a onclick="navSelect()" title="thursday"><span>Thursday</span></a>
		<a onclick="navSelect()" title="friday"><span>Friday</span></a>
		<a onclick="navSelect()" title="saturday"><span>Saturday</span></a>
		<a onclick="navSelect()" title="sunday"><span>Sunday</span></a>
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<div id="superBar"><p><a href="http://communication.depaul.edu/">College of Communication</a> | <a href="http://depaul.edu/">DePaul University</a></p></div>
		<header>
 			<a href="/"><img id="logo" src="/img/logo.png" alt ="" /></a>

			<h1 id="title">Schedule</h1>
			<%Server.Execute("/includes/nav.aspx");%>
		</header>
		<div id="main">
		<div id="content">
			<div id="schedule">
				<div class="bar">Winter 2012</div>
				<div class="panel" id="monday">
					<h1>Monday</h1>
					<ul>
					</ul>
				</div>
				<div class="panel" id="tuesday">
					<h1>Tuesday</h1>
					<ul>

					</ul>
				</div>
				<div class="panel" id="wednesday">
					<h1>Wednesday</h1>
					<ul>

					</ul>
				</div>
				<div class="panel" id="thursday">
					<h1>Thursday</h1>
					<ul>

					</ul>
				</div>
				<div class="panel" id="friday">
					<h1>Friday</h1>
					<ul>

					</ul>
				</div>
				<div class="panel" id="saturday">
					<h1>Saturday</h1>
					<ul>

					</ul>
				</div>
				<div class="panel" id="sunday">
					<h1>Sunday</h1>
					<ul>

					</ul>
				</div>
			</div>
		</div>
		<%Server.Execute("/includes/sidebar.aspx");%>
		</div>
	</div>
	<%Server.Execute("/includes/footer.aspx");%>
	<%Server.Execute("/includes/googleAnalytics.aspx");%>
<%Server.Execute("/includes/globalJavascript.aspx");%>
<script type="text/javascript" src="/js/navSwitch.js"></script>
<script type="text/javascript" src="schedule.js"></script>
<script>
	var d = new Date();
	var weekday = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
	navSelectN(weekday[d.getDay()]);
</script>
</body>
</html>