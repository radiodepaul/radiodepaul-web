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

function playerPopUp(url){newwindow=window.open(url,'name','height=371,width=600,toolbar=no,scrollbars=no,location=no,status=no,menubar=no,resizeable=no');}
function podcastPlayerPopUp(url) { newwindow = window.open(url, 'name', 'height=340,width=500,toolbar=no,scrollbars=no,location=no,status=no,menubar=no,resizeable=no'); }
current = $('body').attr('title');
$('a[title="' + current + '"]').addClass('selected');
var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
var padding = $('header').height();
$('#main').css('min-height', y-padding);
$('html').css('html', 'background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#e9e9e3), to(#dadad0));background: -webkit-linear-gradient(top, #e9e9e3, #dadad0);background: -moz-linear-gradient(top, #e9e9e3, #dadad0);background: -ms-linear-gradient(top, #e9e9e3, #dadad0);background: -o-linear-gradient(top, #e9e9e3, #dadad0);');