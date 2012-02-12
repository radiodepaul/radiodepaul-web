// Devon Blandin | 2011
// http://devonblandin.com

function jsonFlickrApi(rsp) {
	if (rsp.stat != "ok"){
		return;
	}

	var html = "";
	$('#content').append('<div id="gallery" class="contentBox" style="display:none;"><div class="bar"></div><ul></ul></div>');
	for (var i=0; i < rsp.photoset.photo.length; i++) {
		photo = rsp.photoset.photo[i]
		t_url = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "t.jpg"
		b_url = "http://farm" + photo.farm + ".static.flickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + "b.jpg"
		p_url = "http://www.flickr.com/photos/" + rsp.photoset.owner + "/" + photo.id;
		//s +=  '<li><a href="' + p_url + '">' + '<img alt="'+ photo.title + '"src="' + t_url + '"/>' + '</a><p>Untitled</p><p>2007</p></li>';
		html += '<li><a class="fancybox" rel="station_photos" href="' + b_url + '">' + '<image alt="' + photo.title + '" src=' + t_url + ' />' + '</a><p>' + photo.title + '</p></li>'
	}
	$('div#gallery ul').append(html + '<div class="clear"></div>');
	$('div#gallery').fadeIn();
	
}