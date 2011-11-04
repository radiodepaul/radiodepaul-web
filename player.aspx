<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Radio DePaul | Player</title> 
<link rel="stylesheet" type="text/css" href="/css/player.css" media="screen" /> <%-- MAIN CSS --%>
    <meta name="description" content="Desktop Player for Radio DePaul" />
    <meta http-equiv="Content-Script-Type" content="text/javascript">
    <script type="text/javascript" src="/js/iphoneredirect.js"></script>
	<script type="text/javascript" src="http://use.typekit.com/kng1gpc.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
</head>
<body>
		<header>
			<nav>                                     
				<a title="player" href="#">Player</a>
				<a title="webcam" href="#">Webcam</a>
				<a title="chat" href="#" >Chat</a>
			</nav>     
		</header>                    
<div id="content">
        <div class="panel" id="player">
			<div class="contentBox">
				<div class="bar">You're Listing to Radio DePaul</div>
				<img src="/img/logo.png" />   
				<script src="http://player.wavepanel.net/embed/basic/64c829446c484becd92959d9b08a8fab7c2f9c67"></script>                     	
			</div>
			<div class="right contentBox bottom">
				<div class="bar">Contact Us</div>
				<ul><li><p>Station Phone</p><p>(773) 325-7308</p></li></ul>
			</div>
			<div class="left contentBox bottom">
				<div class="bar">Radio DePaul News</div>
				<ul id="news"></ul>
			</div>
		</div>
          <div class="panel" id="webcam">
				<div class="contentBox">
					<div class="bar">Radio DePaul Webcam</div>
					<div style="text-align:center;">
					<script language="javascript">
					if ((navigator.appName == "Microsoft Internet Explorer") && (navigator.platform != "MacPPC") && (navigator.platform != "Mac68k")) {
					document.write("<OBJECT ID=\"AxisCamControl\" CLASSID=\"CLSID:917623D1-D8E5-11D2-BE8B-00104B06BDE3\" CODEBASE=\"http://140.192.109.189/activex/AxisCamControl.cab#Version=2,23,0,0\">");
					document.write("<PARAM NAME=DisplaySoundPanel VALUE=0>");
					document.write("<PARAM NAME=URL VALUE=\"http://140.192.109.189/axis-cgi/mjpg/video.cgi?camera=&resolution=320x240\">");
					document.write("</OBJECT>");
					} else {
					theDate = new Date();
					var output = "<img style='text-align:center;' src=\"http://140.192.109.189/axis-cgi/mjpg/video.cgi?camera=&resolution=320x240&";
					output += theDate.getTime();
					output += "\" width=240 height=270 />";
					document.write(output);
					}
					</script>
					</div>
				</div>
          </div>
           <div class="panel" id="chat">
				<div class="contentBox">
					<div class="bar">Radio DePaul Chat</div>
					<object width="578" height="270">
					<param name="movie" value="somefilename.swf">
					<embed src="http://widget.meebo.com/mm.swf?hSrJxxCkSb" type="application/x-shockwave-flash" wmode="transparent" width="580" height="301">
					</embed></object>
				</div>
           </div>

</div>
<%--Google Analytics--%>
<%Server.Execute("/includes/googleAnalytics.aspx");%>
<%--Google Analytics END--%>
<script type="text/javascript" src="https://www.google.com/jsapi?key=ABQIAAAA-HgkQ3h85RC9grgGQsrSnhR-EnhHLF3hzeP_zC0f88vxrVBDJxQ5trNtm-WIavFyDmaveoDjiQ2JeQ"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
<script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
<script type="text/javascript" src="/js/jqclock_201.js"></script>
<script type="text/javascript" src="/js/jquery.simpleWeather-1.8.min.js"></script>
<script type="text/javascript" src="/js/main.js"></script>
<script type="text/javascript" src="/js/navSwitchplayer.js"></script>	
<script type="text/javascript">
newsPostsGet = $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/news_posts?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;
newsPostsParse = $.parseJSON(newsPostsGet);
for (var i = 0; i < 1; i++) {
	var news_post = newsPostsParse[i];
	var html = '<li>\
	<a href="/station_news/post/?id=' + news_post._id.$oid + '" target="_blank"><p>' + news_post.headline + '</p></a>\
	<p>' + news_post.introduction + '</p>\
	</li>'
	$(html).appendTo('#news');
};
</script>
</body>
</html>
