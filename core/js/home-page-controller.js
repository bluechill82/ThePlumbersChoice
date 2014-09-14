$(document).ready(function(){
  
 /*       Home Slide One           */ 
  $('.ra1').click(function(e) {   
    $('#home-main-content-window').load('core/includes/pages/home/main-slide-two.php #main-slide-two'); 
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/core/blue-lightning-anode-rod/');
	$(this).removeClass('ra1').addClass('ra2');
	});
	
	$('.la1').click(function(e) {   
    $('#home-main-content-window').load('core/includes/pages/home/main-slide-four.php #main-slide-four');
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/core/working-anode-rod/');	
	});

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
	

	/*       Home Slide Three          */
	$('.ra3').click(function(e) {   
    $('#home-main-content-window').load('core/includes/pages/home/main-slide-four.php #main-slide-four');
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/core/working-anode-rod/');	
	});
	
	$('.la3').click(function(e) {   
    $('#home-main-content-window').load('core/includes/pages/home/main-slide-two.php #main-slide-two'); 
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/core/blue-lightning-anode-rod/');	
	});

	/*       Home Slide Four         */
    $('.ra4').click(function(e) {   
    $('#home-main-content-window').load('core/includes/pages/home/main-slide-one.php #main-slide-one');
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/core/home/');	
	});
	
	$('.la4').click(function(e) {   
    $('#home-main-content-window').load('core/includes/pages/home/main-slide-three.php #main-slide-three');
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/core/anode-rods-increase-sales/');	
	});
	
});