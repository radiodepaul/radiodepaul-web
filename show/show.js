showId = $.url().param('id');

showsGet = $.ajax( "https://mongolab.com:443/api/1/databases/radiodepaul/collections/shows/" + showId + "?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;

show = $.parseJSON(showsGet);

var twitter = "", name = "", facebook = "", show_email = "", description = "", stats = "", social = "", facebook_fanbox = "";

name = '<h2 id="name">' + show.name + '</h2>'

if ( show.genre && show.host != '' ) {
	if (show.genre != '') {
		genre = '<p>Genre: ' + show.genre + '</p>';
	}
	if (show.host != '') {
		host = '<p>Host(s): ' + show.host + '</p>';
	}
	stats = '<div class="left contentBox"><div class="bar">Stats</div>' + genre + host + '</div>';
}
if ( show.twitter_username != '' ) {
	twitter = '<a href="http://twitter.com/' + show.twitter_username + '" target="_blank"><img src="/img/social/twitter.png" /></a>';
} else { twitter = '<a href="http://twitter.com/radiodepaul" target="_blank"><img src="/img/social/twitter.png" /></a>'; }

if ( show.facebook_page_username != '' ) {
	facebook = '<a href="http://facebook.com/' + show.facebook_page_username + '" target="_blank"><img src="/img/social/facebook.png" /></a>';
	facebook_fanbox = '<div class="right contentBox"><div class="bar">Become A Fan!</div><div class="fb-like-box" data-href="http://www.facebook.com/' + show.facebook_page_username + '" data-width="460" height="270" data-show-faces="true" data-border-color="#fff" data-stream="false" data-header="false"></div></div>';
} else { facebook = '<a href="http://facebook.com/radiodepaul" target="_blank"><img src="/img/social/facebook.png" /></a>'; }

if ( show.show_email != '' ) {
	show_email = '<a href="mailto:' + show.show_email + '"><img src="/img/social/mail.png" /></a>';
}

social = '<span id="personshowSocial">' + twitter + facebook + show_email + '</span>';

if (show.description != '') {
	description = '<div class="left contentBox"><div class="bar">Description</div><p>' + show.description + '</p></div>';
}

var html = social + name + stats + facebook_fanbox + description + '<div class="contentBox clear"><div id="disqus_thread"></div></div>';

$(html).appendTo('#content');
document.title =  document.title + ' | ' + show.name;
//<div class="bar">Photo</div><img src="http://radiodepaulapp.heroku.com/image/shows/' + show._id.$oid  + '/medium/image.jpg"/>