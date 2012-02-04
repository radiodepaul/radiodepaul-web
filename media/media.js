$(document).ready(function(){
	app.loadPodcasts('station');
	var params = { allowScriptAccess: "always" };
    var atts = { id: "myytplayer" };
    swfobject.embedSWF("http://www.youtube.com/e/vbbgtoTs-fM?version=3&autohide=1&enablejsapi=1&modestbranding=1&playerapiid=ytplayer&rel=0&showinfo=0&theme=light",
                       "ytapiplayer", "660", "356", "8", null, null, params, atts);
});