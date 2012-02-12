// Devon Blandin | 2011
// http://devonblandin.com

function jsonFlickrApi(rsp) {
 if (rsp.stat != "ok"){
  return;
 }
 
 var s = "";
 
 for (var i=0; i < rsp.photoset.photo.length; i++) {
  photo = rsp.photoset.photo[ i ];
  
  t_url = "http://farm" + photo.farm + 
  ".static.flickr.com/" + photo.server + "/" + 
  photo.id + "_" + photo.secret + "_" + "t.jpg";

  z_url = "http://farm" + photo.farm + 
  ".static.flickr.com/" + photo.server + "/" + 
  photo.id + "_" + photo.secret + "_" + "z.jpg";
	
  b_url = "http://farm" + photo.farm + 
  ".static.flickr.com/" + photo.server + "/" + 
  photo.id + "_" + photo.secret + "_" + "b.jpg";

  p_url = "http://www.flickr.com/photos/" + 
  rsp.photoset.owner + "/" + photo.id;
  
  //s +=  '<li><a href="' + p_url + '">' + '<img alt="'+ photo.title + '"src="' + t_url + '"/>' + '</a><p>Untitled</p><p>2007</p></li>';
  $('div.slides_container').append('<div class="slide"><a title="' + photo.title + '" href="' + b_url + '" class="fancybox" rel="gallery" ><img src="' + z_url + '" alt="' + photo.title + '" title="' + photo.title + '" width="600px "/></a><div class="caption"><p>' + photo.title + '</p></div></div>');

 }
}