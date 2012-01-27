<%@ Language="C#" AutoEventWireup="true"  CodeFile="../Default.aspx.cs" Inherits="_Default" %>
<div id="sidebar">
		<div class="contentBox">
			<div class="bar">Contact Us</div>
			<ul>
				<li><p>Station Phone</p><p>(773) 325-7308</p></li>
				<li><p>Station Fax</p><p>(773) 325-4133</p></li>
				<li><p>Mailing Address</p><p>Radio DePaul<br />2250 N. Sheffield Avenue Suite 317<br />Chicago, IL 60614</p></li>
			</ul>
		</div>
	<div class="contentBox">
		<div class="bar">Friends Of The Station</div>
		<% Hashtable imgAndPromoUrlHash = chooseImage(); %>
	    <a href="
	      <% Response.Write(imgAndPromoUrlHash["promoUrl"]); %>">
	      <img id="friend" src="
	      <% Response.Write(imgAndPromoUrlHash["imagePath"]); %>" alt="promo" />
	    </a>
	</div>
	<div class="contentBox">
		<div class="bar">Become A Fan!</div>
		<div id="fb-root"></div><script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script><fb:like-box href="http://www.facebook.com/radiodepaul" width="240" height="228" show_faces="true" border_color="#fff" stream="false" header="false"></fb:like-box>
	</div>
</div>