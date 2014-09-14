$(document).ready(function(){
  
	/*       Home Slide Two          */
  $('.la2').click(function(e) {   
    $('#home-main-content-window').load('core/includes/pages/home/main-slide-one.php #main-slide-one');
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/core/home/');	
	});
	
	$('.ra2').click(function(e) {   
    $('#home-main-content-window').load('core/includes/pages/home/main-slide-three.php #main-slide-three');
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/core/anode-rods-increase-sales/');	
	});

});