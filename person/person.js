personId = $.url().param('id');

staffGet = $.ajax( "https://mongolab.com:443/api/1/databases/radiodepaul/collections/people/" + personId + "?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;

person = $.parseJSON(staffGet);


var html = '<h2 id="name">' + person.fname + ' ' + person.lname + '</h2> \
					<div class="left contentBox"> \
						<div class="bar">Stats</div>\
						<p>Major: ' + person.major + '</p>\
						<p>Class: ' + person.class_year + '</p>\
						<p>Age: </p>\
						<p>Email: ' + person.email + '</p>\
					</div>\
			</div>\
				<div class="right contentBox">\
				<div class="bar">Bio</div>\
				<p>' + person.bio + '</p>\
				</div>\
			</div>\
			<div class="contentBox clear">\
				<div class="bar">Bio</div>\
				<p>' + person.bio + '</p>\
			</div>';

var name = person.fname + ' ' + person.lname;

$(html).appendTo('#content');
$('#title').prepend(name);
document.title = document.title + ' | ' + name;