$(document).ready(function(){
  
   /*       What is An Anode Rod Controller          */ 
  $('#what-is-anode-rod').click(function(e) {  
	$.getScript('core/js/davemax-main-controller.js');
	$('#nav-dot-home a').removeClass('nav-dot-active');
    $('#nav-dot-blue-lightning a').removeClass('nav-dot-active');
    $('#nav-dot-working-anode a').removeClass('nav-dot-active');
	$('#nav-dot-three-reasons a').removeClass('nav-dot-active');
	
	$('#about-us-page').hide();
	$('#contact-us-page').hide();
	$('#home-page').show();
	
    $('#home-main-content-window').hide();
    $('#three-reasons-content-window').hide(); 
    $('#blue-lightning-rod-content-window').hide(); 	
	$('#anode-rod-life-cycle-content-window').hide();
    $('#what-is-an-anode-rod-content-window').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/what-is-an-anode-rod/');	
	});

   /*       Blue Lightning Rod Controller          */ 
  $('#main-slide-two #meat-n-bones').click(function(e) {   

	$('#nav-dot-home a').removeClass('nav-dot-active');
    $('#nav-dot-three-reasons a').removeClass('nav-dot-active');
    $('#nav-dot-working-anode a').removeClass('nav-dot-active');
	$('#nav-dot-blue-lightning a').addClass('nav-dot-active');
	
	$('#home-main-content-window').hide(); 
    $('#three-reasons-content-window').hide(); 
	$('#anode-rod-life-cycle-content-window').hide();    $('#blue-lightning-rod-content-window').show();
    
	e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/blue-lightning-rod/');	
	});
	
	   /*       Three Reasons Controller          */ 
  $('#main-slide-three #meat-n-bones').click(function(e) {   
    	
	$('#nav-dot-home a').removeClass('nav-dot-active');
    $('#nav-dot-blue-lightning a').removeClass('nav-dot-active');
    $('#nav-dot-working-anode a').removeClass('nav-dot-active');
	$('#nav-dot-three-reasons a').addClass('nav-dot-active');

	$('#home-main-content-window').hide(); 
    $('#blue-lightning-rod-content-window').hide(); 
	$('#anode-rod-life-cycle-content-window').hide();
    $('#three-reasons-content-window').show();
	
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/three-reasons/');	
	});

		   /*       Anode Rod Life Cycle Controller          */ 
  $('#main-slide-four #meat-n-bones').click(function(e) {   
 
	$('#nav-dot-home a').removeClass('nav-dot-active');
    $('#nav-dot-blue-lightning a').removeClass('nav-dot-active');
    $('#nav-dot-three-reasons a').removeClass('nav-dot-active');
	$('#nav-dot-working-anode a').addClass('nav-dot-active');

    $('#home-main-content-window').hide(); 
    $('#blue-lightning-rod-content-window').hide(); 
    $('#three-reasons-content-window').hide();
    $('#anode-rod-life-cycle-content-window').show();
   
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/anode-rod-life-cycle/');	
	});



});