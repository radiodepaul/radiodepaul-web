<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>My Google API Application</title>
    <script src="https://www.google.com/jsapi?key=ABQIAAAAAXA4G1GiQWKcMQHKrU3q2BRFhQfDf-azs6UHSomr7pQ8redAkBTMxNqv6hiWMlD-9kDSv0otlJamSA" type="text/javascript"></script>
    <script language="Javascript" type="text/javascript">
    //<![CDATA[

    google.load("search", "1" {style: google.loader.themes.MINIMALIST});

    function OnLoad() {
      // Create a search control
      var searchControl = new google.search.SearchControl();

      // Add in a full set of searchers
      var localSearch = new google.search.LocalSearch();
      searchControl.addSearcher(new google.search.WebSearch());

      // Set the Local Search center point
      localSearch.setCenterPoint("New York, NY");

      // Tell the searcher to draw itself and tell it where to attach
      searchControl.draw(document.getElementById("searchcontrol"));

      // Execute an inital search
      searchControl.execute("Google");
    }
    google.setOnLoadCallback(OnLoad);

    //]]>
    </script>
  </head>
  <body>
    <div id="searchcontrol">Loading...</div>
<script type="text/javascript" src="https://www.google.com/jsapi?key=ABQIAAAA-HgkQ3h85RC9grgGQsrSnhR-EnhHLF3hzeP_zC0f88vxrVBDJxQ5trNtm-WIavFyDmaveoDjiQ2JeQ"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script>
<script src="http://platform.twitter.com/widgets.js" type="text/javascript"></script>
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
<script type="text/javascript" src="/js/jqclock_201.js"></script>
<script type="text/javascript" src="/js/jquery.simpleWeather-1.8.min.js"></script>
<script type="text/javascript" src="/js/main.js"></script>
  </body>
</html>