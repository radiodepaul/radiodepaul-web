showId = $.url().param('id');

showsGet = $.ajax( "https://mongolab.com:443/api/1/databases/radiodepaul/collections/shows/" + showId + "?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;

show = $.parseJSON(showsGet);


var html = '<h2 id="name">' + show.name + '</h2>\
			<div class="contentLeft" style="width:475px">\
				<div class="bar">Stats</div>\
				<ul>\
					<li>Genre: ' + show.genre + '</li>\
					<li>Hosts: ' + show.hosts + '</li>\
					<li>Email: <a href="mailto:' + show.show_email + '">' + show.show_email + '</a></li>\
					<li>Twitter: <a href="http://twitter.com/' + show.twitter_username + '">@' + show.twitter_username + '</a></li>\
					<li>Facebook: <a href="' + show.facebook_page_username + '">' + show.facebook_page_username + '</a></li>\
				</ul>\
			</div>\
		<div class="contentRight" style="width:475px">\
			<div class="bar">Description</div><p>' + show.description + '</p></div>\
		</div>'

$(html).appendTo('#content');

//<div class="bar">Photo</div><img src="http://radiodepaulapp.heroku.com/image/shows/' + show._id.$oid  + '/medium/image.jpg"/>