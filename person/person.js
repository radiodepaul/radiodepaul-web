personId = $.url().param('id');

staffGet = $.ajax( "https://mongolab.com:443/api/1/databases/radiodepaul/collections/people/" + personId + "?apiKey=4e442bac737dc3fba1ef102c", { async: false } ).responseText;

person = $.parseJSON(staffGet);

var full_name = person.fname + ' ' + person.lname;

var twitter = "", name = "", linkedin = "", facebook = "", email = "", bio = "", hometown = "", major = "", class_year = "", stats = "", social = "", influences = "";

name = '<h2 id="name">' + full_name + '</h2>'

if ( person.major && person.hometown != '' ) {
	if (person.major != '') {
		major = '<p>Major: ' + person.major + '</p>';
	}
	if (person.hometown != '') {
		hometown = '<p>Hometown: ' + person.hometown + '</p>';
	}
	if (person.class_year != '') {
		class_year = '<p>Class Year: ' + person.class_year + '</p>';
	}
	stats = '<div class="left contentBox"><div class="bar">Stats</div>' + major + hometown + class_year + '</div>';
}
if (person.influences != '') {
	influences = '<div class="right contentBox"><div class="bar">Influences</div><p>' + person.influences + '</p></div>';
}
if ( person.twitter_username != '' ) {
	twitter = '<li class="twitter"><a href="http://twitter.com/' + person.twitter_username + '" target="_blank"></a></li>';
} else { twitter = '<li class="twitter"><a href="http://twitter.com/radiodepaul" target="_blank"></a></li>'; }

if ( person.facebook_username != '' ) {
	facebook = '<li class="facebook"><a href="http://facebook.com/' + person.facebook_username + '" target="_blank"></a></li>';
} else { facebook = '<li class="facebook"><a href="http://facebook.com/radiodepaul" target="_blank"></a></li>'; }

if ( person.linkedin_username != '' ) {
	linkedin = '<li class="linkedin"><a href="http://linkedin.com/' + person.linkedin_username + '" target="_blank"></a></li>';
}

if ( person.email != '' ) {
	email = '<li class="email"><a href="mailto:' + person.email + '"></a></li>';
}

social = '<ul id="personshowSocial">' + twitter + facebook + linkedin + email + '</ul>';

if (person.bio != '') {
	bio = '<div class="contentBox clear"><div class="bar">Bio</div><p>' + person.bio + '</p></div>';
}

var html = social + name + stats + influences + bio;	

$(html).appendTo('#content');
document.title = document.title + ' | ' + full_name;

peopleGet= $.ajax("https://mongolab.com:443/api/1/databases/radiodepaul/collections/people?s={'fname' : 1}&apiKey=4e442bac737dc3fba1ef102c", {async: false}).responseText;
peopleParse= $.parseJSON(peopleGet);

for (var i=0; i < 6; i++) {
	var randomNum = Math.ceil( Math.random()* peopleParse.length);
	html = '<a href="/person/?id=' + peopleParse[randomNum]._id.$oid + '"><span>' + peopleParse[randomNum].fname + ' ' + peopleParse[randomNum].lname + '</span></a>'
	$(html).appendTo('#categories');
};