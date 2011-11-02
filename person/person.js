personId = $.url().param('id');

staffGet = $.ajax( "https://mongolab.com:443/api/1/databases/radiodepaul/collections/people/" + personId + "?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;

person = $.parseJSON(staffGet);

var full_name = person.fname + ' ' + person.lname;

var twitter = "", linkedin = "", facebook = "", email = "", bio = "", hometown = "", major = "", stats = '', social = '';
if (person.major && person.hometown != '') {
	if (person.major != '') {
		major = '<p>Major: ' + person.major + '</p>';
	}
	if (person.hometown != '') {
		hometown = '<p>Major: ' + person.hometown + '</p>';
	}
	stats = '<div class="left contentBox"><div class="bar">Stats</div>' + major + hometown + '</div>';
}
if (person.twitter_username && person.facebook_username && person.linkin_username && person.email != '') {
	if (person.twitter_username != '') {
		twitter = '<a href="http://twitter.com/' + person.twitter_username + '"><img src="/img/social/twitter.png" /></a>';
	} else { twitter = '<a href="http://twitter.com/radiodepaul"><img src="/img/social/twitter.png" /></a>'; }

	if (person.facebook_username != '') {
		facebook = '<a href="http://facebook.com/' + person.facebook_username + '"><img src="/img/social/facebook.png" /></a>';
	} else { facebook = '<a href="http://facebook.com/radiodepaul"><img src="/img/social/facebook.png" /></a>'; }

	if (person.linkedin_username != '') {
		linkedin = '<a href="http://linkedin.com/in/' + person.linkedin_username + '"><img src="/img/social/linkedin.png" /></a>';
	}

	if (person.email != '') {
		email = '<a href="mailto:' + person.email + '"><img src="/img/social/mail.png" /></a>';
	}
	social = twitter + facebook + linkedin + email
}
if (person.bio != '') {
	bio = '<div class="contentBox clear"><div class="bar">Bio</div><p>' + person.bio + '</p></div>';
}
var html = '<span id="personSocial">' + social + '</span>\
			<h2 id="personName">' + full_name + '</h2>' + stats + bio;

$(html).appendTo('#content');
$('#title').prepend(name);
document.title = document.title + ' | ' + full_name;