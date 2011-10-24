hostId = $.url().param('id');

console.log(hostId);

hostGet = $.ajax( "https://mongolab.com:443/api/1/databases/radiodepaul/collections/people/" + hostId + "?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;

host = $.parseJSON(hostGet);


var html = '<h2 id="name">' + host.fname + ' ' + host.lname + '</h2> \
			<div class="contentLeft">\
				<h3>Photo</h3>\
			</div>\
			<div class="contentRight">\
				<div id="stats"> \
					<div class="bar"><p>Stats</p></div>\
					<p>Major: ' + host.major + '</p>\
					<p>Class: ' + host.class_year + '</p>\
					<p>Age: </p>\
					<p>Email: ' + host.email + '</p>\
				</div>\
				<div id="shows">\
					<div class="bar">Shows</div>\
				</div>\
			</div>\
			<div id="bio">\
				<div class="bar">Bio</div>\
				<p>' + host.bio + '</p>\
			</div>'

$(html).appendTo('#content');