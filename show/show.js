showId = $.url().param('id');

showsGet = $.ajax( "https://mongolab.com:443/api/1/databases/radiodepaul/collections/shows/" + showId + "?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;

show = $.parseJSON(showsGet);
var html = '<div class="contentBox"><div class="bar">Error</div><p>Sorry. The show you requested cannot be found.</p></div>'
if ( show != null ) {
	var twitter = "", name = "", facebook = "", show_email = "", description = "", stats = "", social = "", facebook_fanbox = "";

	name = '<h2 id="name">' + show.name + '</h2>'
	document.title =  document.title + ' | ' + show.name;

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
		twitter = '<li class="twitter"><a href="http://twitter.com/' + show.twitter_username + '" target="_blank"><img src="/img/social/twitter.png" /></a></li>';
	} else { twitter = '<li class="twitter"><a href="http://twitter.com/radiodepaul" target="_blank"><img src="/img/social/twitter.png" /></a></li>'; }

	if ( show.facebook_page_username != '' ) {
		facebook = '<li class="facebook"><a href="http://facebook.com/' + show.facebook_page_username + '" target="_blank"></a></li>';
		facebook_fanbox = '<div class="right contentBox"><div class="bar">Become A Fan!</div><div class="fb-like-box" data-href="http://www.facebook.com/' + show.facebook_page_username + '" data-width="460" height="270" data-show-faces="true" data-border-color="#fff" data-stream="false" data-header="false"></div></div>';
	} else { facebook = '<li class="facebook"><a href="http://facebook.com/radiodepaul" target="_blank"><img src="/img/social/facebook.png" /></a></li>'; }

	if ( show.show_email != '' ) {
		show_email = '<li class="email"><a href="mailto:' + show.show_email + '"><img src="/img/social/mail.png" /></a></li>';
	}

	social = '<ul id="personshowSocial">' + twitter + facebook + show_email + '</ul>';

	if (show.description != '') {
		description = '<div class="left contentBox clearLeft"><div class="bar">Description</div><p>' + show.description + '</p></div>';
	}

	var html = social + name + stats + facebook_fanbox + description + '<div id="comments" class="contentBox clear"><div class="bar">Comments</div><div id="disqus_thread" class="dsq-widget"></div></div>';
}
var disqus_title = document.title;
$(html).appendTo('#content');

//<div class="bar">Photo</div><img src="http://radiodepaulapp.heroku.com/image/shows/' + show._id.$oid  + '/medium/image.jpg"/>
showsGet = $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/shows?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;

showsParse = $.parseJSON(showsGet);

for (var i=0; i < 6; i++) {
	var randomNum = Math.ceil( Math.random()* showsParse.length);
	html = '<a href="/show/?id=' + showsParse[randomNum]._id.$oid + '"><span>' + showsParse[randomNum].name + '</span></a>'
	$(html).appendTo('#categories');
};