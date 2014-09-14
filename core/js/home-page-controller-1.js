$(document).ready(function(){
  
 /*       Home Slide One           */ 
  $('.ra1').click(function(e) {   
    $('#home-main-content-window').load('core/includes/pages/home/main-slide-two.php #main-slide-two'); 
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/core/blue-lightning-anode-rod/');	
	$('#right-arrow').removeClass('ra1').addClass('ra2');
	});
	
	$('.la1').click(function(e) {   
    $('#home-main-content-window').load('core/includes/pages/home/main-slide-four.php #main-slide-four');
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/core/working-anode-rod/');	
	});
	
});