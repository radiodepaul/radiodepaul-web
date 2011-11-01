$("div#clock").clock({"calendar":"false"});
$.simpleWeather({
    zipcode: '60614',
    unit: 'f',
    success: function(weather) {
        $("#weather").append('<img style="float:left;" width="125px" src="'+weather.image+'">');
		$("#weather").append('<p>'+weather.city+', '+weather.region+' '+weather.temp+'&deg; '+weather.units.temp+'</p>');
    },
    error: function(error) {
        $("#weather").html('<p>'+error+'</p>');
    }
});

function playerPopUp(url){newwindow=window.open(url,'name','height=300,width=360,toolbar=no,scrollbars=no,location=no,status=no,menubar=no,resizeable=no');}
function podcastPlayerPopUp(url) { newwindow = window.open(url, 'name', 'height=340,width=500,toolbar=no,scrollbars=no,location=no,status=no,menubar=no,resizeable=no'); }