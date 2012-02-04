<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul | About</title>
	<%Server.Execute("/includes/globalCSS.aspx");%>
	<link rel="stylesheet" href="/css/slides.css" type="text/css" media="screen" />
	<meta name="Description" content="Radio DePaul is DePaul University's award-winning student radio station. Featuring a vibrant blend of music, talk, news, and sports, Radio DePaul is Chicago's College Connection!" />
	<script type="text/javascript" src="http://use.typekit.com/kng1gpc.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
</head>
<body title="about">
	<a class="banner" href="https://docs.google.com/spreadsheet/viewform?hl=en_US&formkey=dGFIeFNRMGNkbTRDMjBPX1RyOEQwd0E6MA..#gid=0">
	  <span>Work For Us</span>
	  <span>Apply Now</span>
	</a>
	<div id="categories">
		<a onclick="navSelect()" title="staff"><span>Staff</span></a>
		<a onclick="navSelect()" title="mission_statement"><span>Mission Statement</span></a>
		<a onclick="navSelect()" title="join"><span>Join Radio DePaul</span></a>
		<!--<a onclick="navSelect()" title="awards"><span>Awards &amp; Recognition</span></a>-->
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<div id="superBar"><p><a href="http://communication.depaul.edu/">College of Communication</a> | <a href="http://depaul.edu/">DePaul University</a></p></div>
		<header>
 			<a href="/"><img id="logo" src="/img/logo.png" alt ="" /></a>
			<h1 id="title">About</h1>
			<%Server.Execute("/includes/nav.aspx");%>
		</header>
		<div id="main">
			<div id="content">
				<div class="panel" id="staff">
					<div id="featured">
						<div id="slides">
							<div class="slides_container"></div>
							<a href="#" class="prev"><img src="/img/slides/arrow-prev.png" width="24" height="43" alt="Arrow Prev"></a>
							<a href="#" class="next"><img src="/img/slides/arrow-next.png" width="24" height="43" alt="Arrow Next"></a>
						</div>
						<img src="/img/slides/example-frame.png" alt="Frame" id="frame" />
					</div>
					<div class="contentBox" id="staff_list">
						<div class="bar">Staff</div>
					</div>
				</div>
				<div class="panel contentBox" id="mission_statement">
					<div class="bar">Mission Statement</div>
  	              		<p>Act as an educational and practical training ground for those students who are interested in pursuing radio as a career.</p>
	                	<p>Entertain and Inform our audience through innovative and consistent music and non-music programming.</p>
	                	<p>Serve the DePaul community by promoting University services, events, and activities.</p>
                		<p>Work cooperatively with other campus groups and organizations to promote and support a varied and exciting collegiate experience for students.</p>
				</div>
				<div class="panel contentBox" id="join">
					<div class="bar">Join Radio DePaul</div>
					<div class="smallBar"><span>Eligibility for Participation</span></div>
                		<p>Only full-time students in good academic standing (2.5 GPA or higher) at DePaul are eligible for FULL membership in Radio DePaul.</p>
                	   	<p>University faculty members, staff and members of the community also shall be eligible for ASSOCIATE membership through petition to the Student Advisory Committee.</p>
               	   	    <p>Membership constitutes active participation in the organization.</p>
               	   	    <p>Radio DePaul shall not discriminate against any person on the basis of race, color, sex, sexual preference, disabilities, national origin, religious affiliation, or beliefs.</p>
					<div class="smallBar"><span>Rights and Privileges of Membership</span></div>
               			<p>The number of persons who may be members of Radio DePaul may be limited depending on the availability of on or off-air positions.</p>
               			<p>Only FULL members of the organization shall be eligible to hold management positions.</p>
				</div>
				<div class="panel contentBox" id="awards">
					<div class="bar">Awards &amp; Recognition</div>
					<div id="awards_2011">
						<div class="bar">2011</div>
						<div class="awards_iba smallBar">Illinois Broadcasters Association</div>
						<div class="awards_ibs smallBar">Intercollegiate Broadcasting System</div>
						<div class="awards_cbi smallBar">College Broadcasters, Inc.</div>
						<div class="awards_aeo smallBar">American Eagle Outfitters/Filter Magazine</div>
						<div class="awards_crd smallBar">College Radio Day</div>
					</div>
					<div id="awards_2010">
						<div class="bar">2010</div>
						<div class="awards_ibs smallBar">Intercollegiate Broadcasting System</div>
						<div class="awards_thp smallBar">The Huffington Post</div>
						<div class="awards_cn smallBar">Conversations Newsletter</div>
					</div>
					<div id="awards_2009">
						<div class="bar">2009</div>
						<div class="awards_cbi smallBar">College Broadcasters, Inc</div>
					</div>
					<div id="awards_2008">
						<div class="bar">2008</div>
						<div class="awards_cbi smallBar">College Broadcasters, Inc</div>
					</div>
					<div id="awards_2007">
						<div class="bar">2007</div>
						<div class="awards_cbi smallBar">College Broadcasters, Inc</div>
					</div>
					<div id="awards_2006">
						<div class="bar">2006</div>
						<div class="awards_cbi smallBar">College Broadcasters, Inc</div>
					</div>
					<div class="clear"></div>
				</div>
			</div>
			<%Server.Execute("/includes/sidebar.aspx");%>
		</div>
	</div>
	<%Server.Execute("/includes/footer.aspx");%>
	<%Server.Execute("/includes/googleAnalytics.aspx");%>
<%Server.Execute("/includes/globalJavascript.aspx");%>
<script type="text/javascript" language="javascript" src="/js/flickr.api.grab.slider.js"></script>
<script type="text/javascript" language="javascript" src="http://api.flickr.com/services/rest/?format=json&method=flickr.photosets.getPhotos&photoset_id=72157628024483658&api_key=8ba7f50062d534406009b45aeb73eb90"></script>
<script type="text/javascript" src="/js/jquery.scrollTo-min.js"></script>
<script src="/js/slides.min.jquery.js"></script>
<script type="text/javascript" src="/js/navSwitch.js"></script>
<script src="http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="about.js?v=1.0.0"></script>
</body>
</html>