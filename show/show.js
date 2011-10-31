showId = $.url().param('id');

showsGet = $.ajax( "https://mongolab.com:443/api/1/databases/radiodepaul/collections/shows/" + showId + "?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;

show = $.parseJSON(showsGet);


var html = '<div class="contentLeft" style="width:475px">\
				<div class="bar">Stats</div>\
				<ul>\
					<li>Genre: ' + show.genre + '</li>\
					<li>Hosts: ' + show.hosts + '</li>\
					<li>Email: <a href="mailto:' + show.show_email + '">' + show.show_email + '</a></li>\
					<li><a href="http://twitter.com/' + show.twitter_username + '">Twitter</a></li>\
					<li><a href="' + show.facebook_page_username + '">Facebook</a></li>\
				</ul>\
			</div>\
		<div class="contentRight" style="width:475px">\
			<div class="bar">Description</div><p>' + show.description + '</p></div>\
			<div class="bar">Facebook</div>\
			<div class="fb-like-box" data-href="http://www.facebook.com/' + show.facebook_page_username + '" data-width="292" data-show-faces="true" data-border-color="#999" data-stream="false" data-header="false"></div>\
		</div>';

$(html).appendTo('#content');
$('#title').prepend(show.name);

//<div class="bar">Photo</div><img src="http://radiodepaulapp.heroku.com/image/shows/' + show._id.$oid  + '/medium/image.jpg"/>