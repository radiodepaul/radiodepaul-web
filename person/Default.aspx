<%@ Page Language="C#" AutoEventWireup="true"  CodeFile="/Default.aspx.cs" Inherits="_Default" %>
<%@ Import Namespace="System.IO" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Radio DePaul</title>
	<%Server.Execute("/includes/globalCSS.aspx");%>
	<meta name="Description" content="Radio DePaul is DePaul University's award-winning student radio station. Featuring a vibrant blend of music, talk, news, and sports, Radio DePaul is Chicago's College Connection!" />
	
	<script type="text/javascript" src="http://use.typekit.com/kng1gpc.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
</head>
<body title="staff">
	<div id="categories">
	</div>
	<div id="page">
		<div id="clock"></div>
		<div id="weather"></div>
		<div id="superBar"><p><a href="http://communication.depaul.edu/">College of Communication</a> | <a href="http://depaul.edu/">DePaul University</a></p></div>
		<header>
 			<a href="/"><img id="logo" src="/img/logo.png" alt ="" /></a>
			<h1 id="title">Staff</h1>
			<%Server.Execute("/includes/nav.aspx");%>
		</header>
		<div id="main">
			<div id="content">	
			</div>
			<%Server.Execute("/includes/sidebar.aspx");%>
		</div>
	</div>
	<%Server.Execute("/includes/footer.aspx");%>
	<%Server.Execute("/includes/googleAnalytics.aspx");%>
<%Server.Execute("/includes/globalJavascript.aspx");%>
<script type="text/javascript" src="/js/jquery.url.js"></script>
<script type="text/javascript" src="person.js"></script>
<script type="text/javascript">
    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
    var disqus_shortname = 'radiodepaul'; // required: replace example with your forum shortname

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
</script>
<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
</body>
</html>