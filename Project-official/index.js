<!-- jQuery call to the accordion() method. -->
  $(document).ready(function() {
    $( "#accordion" ).accordion({ active: false, collapsible: true, heightStyle: "content"});
  } );

$(document).ready(function() {
    $("#slider").bxSlider({
    	randomStart: true,
        auto: true,
        minSlides: 2,
        maxSlides: 2,
        slideWidth: 300,
        slideMargin: 20,

		minSlides: 1,
		maxSlides: 1,
        slideWidth: 500,
		captions: true,
        speed: 300,

        autoControls: true,
        stopAutoOnClick: true,

        pager: true,
        pagerType: 'short',
        pagerShortSeparator: '/',
    });
});

