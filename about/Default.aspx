<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul | About</title>
	<%Server.Execute("/includes/head.aspx");%>
</head>
<body title="about">
	<a class="banner" href="https://docs.google.com/spreadsheet/viewform?hl=en_US&formkey=dGFIeFNRMGNkbTRDMjBPX1RyOEQwd0E6MA..#gid=0">
	  <span>Work For Us</span>
	  <span>Apply Now</span>
	</a>
	<div id="categories">
		<a title="managers"><span>Managers</span></a>
		<a title="mission_statement"><span>Mission Statement</span></a>
		<a title="join"><span>Join Radio DePaul</span></a>
		<!--<a onclick="navSelect()" title="awards"><span>Awards &amp; Recognition</span></a>-->
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<div id="superBar"><p><a href="http://communication.depaul.edu/">College of Communication</a> | <a href="http://depaul.edu/">DePaul University</a></p></div>
		<header>
 			<a href="/"><img id="logo" src="https://s3.amazonaws.com/radiodepaul/img/logo.png" alt ="" /></a>
			<h1 id="title">About</h1>
			<%Server.Execute("/includes/nav.aspx");%>
		</header>
		<div id="main">
			<div id="content">
				<div class="panel" id="managers">
					<div id="featured">
						<div id="slides">
							<div class="slides_container"></div>
							<a href="#" class="prev"><img src="https://s3.amazonaws.com/radiodepaul/css/slides/arrow-prev.png" width="24" height="43" alt="Arrow Prev"></a>
							<a href="#" class="next"><img src="https://s3.amazonaws.com/radiodepaul/css/slides/arrow-next.png" width="24" height="43" alt="Arrow Next"></a>
						</div>
						<img src="https://s3.amazonaws.com/radiodepaul/css/slides/example-frame.png" alt="Frame" id="frame" />
					</div>
					<div class="contentBox" id="managers_list">
						<div class="bar">Managers</div>
					</div>
				</div>
				<div class="panel contentBox" id="mission_statement" style="display:none;">
					<div class="bar">Mission Statement</div>
  	              		<p>Act as an educational and practical training ground for those students who are interested in pursuing radio as a career.</p>
	                	<p>Entertain and Inform our audience through innovative and consistent music and non-music programming.</p>
	                	<p>Serve the DePaul community by promoting University services, events, and activities.</p>
                		<p>Work cooperatively with other campus groups and organizations to promote and support a varied and exciting collegiate experience for students.</p>
				</div>
				<div class="panel contentBox" id="join" style="display:none;">
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
				<!--<div class="panel contentBox" id="awards">
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
				</div>-->
			</div>
			<%Server.Execute("/includes/sidebar.aspx");%>
		</div>
	</div>
	<%Server.Execute("/includes/footer.aspx");%>
</body>
</html>