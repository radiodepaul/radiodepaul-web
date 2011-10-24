showId = $.url().param('id');

showsGet = $.ajax( "https://mongolab.com:443/api/1/databases/radiodepaul/collections/shows/" + showId + "?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;

show = $.parseJSON(showsGet);


var html = '<h2 id="name">' + show.name + '</h2> \
			<div class="contentLeft">\
				<div class="bar">Photo</div>\
				<img src="http://radiodepaulapp.heroku.com/image/shows/' + show._id.$oid  + '/medium/image.jpg"/>\
			</div>\
			<div class="contentRight">\
					<div class="bar">Stats</div>\
					<ul>\
						<li>Genre: ' + show.genre + '</li>\
						<li>Hosts: ' + show.hosts + '</li>\
						<li>Email: ' + show.email + '</li>\
					</ul>\
					<div class="bar">Shows</div>\
			</div>\
			<div id="bio">\
				<div class="bar">Description</div>\
				<p>' + show.description + '</p>\
			</div>'

$(html).appendTo('#content');