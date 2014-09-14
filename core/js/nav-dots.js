$(document).ready(function(){

/****************Init*********************/
    $('#nav-dot-home a').addClass('nav-dot-active');

	$(function() {
		var loc = window.location.href; // returns the full URL
		if(/blue-lightning-rod/.test(loc)) {
	    $('#nav-dot-home a').removeClass('nav-dot-active');
		$('#nav-dot-blue-lightning a').addClass('nav-dot-active');
		}
	});
	
	$(function() {
		var loc = window.location.href; // returns the full URL
		if(/three-reasons/.test(loc)) {
	    $('#nav-dot-home a').removeClass('nav-dot-active');
		$('#nav-dot-three-reasons a').addClass('nav-dot-active');
		}
	});
	
	$(function() {
		var loc = window.location.href; // returns the full URL
		if(/anode-rod-life-cycle/.test(loc)) {
	    $('#nav-dot-home a').removeClass('nav-dot-active');
		$('#nav-dot-working-anode a').addClass('nav-dot-active');
		}
	});
	
/**********Home Nav Dot *****************/
 	$('#nav-dot-home').click(function(e) {   
		
		$('#nav-dot-blue-lightning a').removeClass('nav-dot-active');
	    $('#nav-dot-three-reasons a').removeClass('nav-dot-active');
	    $('#nav-dot-working-anode a').removeClass('nav-dot-active');
		$('#nav-dot-home a').addClass('nav-dot-active');
		
		$('#three-reasons-content-window').hide(); 
		$('#blue-lightning-rod-content-window').hide(); 	
		$('#anode-rod-life-cycle-content-window').hide();
		$('#what-is-an-anode-rod-content-window').hide();
		$('#home-main-content-window').show();
		
		e.preventDefault(); // stop the browser from following the link
		window.history.pushState('','','/theplumberschoice.com/');	
	});

/**********Blue Lightning Nav Dot *****************/
 	$('#nav-dot-blue-lightning').click(function(e) {   
	    
		$('#nav-dot-home a').removeClass('nav-dot-active');
	    $('#nav-dot-three-reasons a').removeClass('nav-dot-active');
	    $('#nav-dot-working-anode a').removeClass('nav-dot-active');
		$('#nav-dot-blue-lightning a').addClass('nav-dot-active');
		
		$('#three-reasons-content-window').hide(); 
		$('#home-main-content-window').hide(); 	
		$('#anode-rod-life-cycle-content-window').hide();
		$('#what-is-an-anode-rod-content-window').hide();
		$('#blue-lightning-rod-content-window').show();
		
		e.preventDefault(); // stop the browser from following the link
		window.history.pushState('','','/theplumberschoice.com/blue-lightning-rod/');	
	});

	/**********Three Reasons Nav Dot *****************/
 	$('#nav-dot-three-reasons').click(function(e) {   
	
		$('#nav-dot-home a').removeClass('nav-dot-active');
	    $('#nav-dot-blue-lightning a').removeClass('nav-dot-active');
	    $('#nav-dot-working-anode a').removeClass('nav-dot-active');
		$('#nav-dot-three-reasons a').addClass('nav-dot-active');
	
		$('#blue-lightning-rod-content-window').hide(); 
		$('#home-main-content-window').hide(); 	
		$('#anode-rod-life-cycle-content-window').hide();
		$('#what-is-an-anode-rod-content-window').hide();
		$('#three-reasons-content-window').show();

		e.preventDefault(); // stop the browser from following the link
		window.history.pushState('','','/theplumberschoice.com/three-reasons/');	
	});
	
/**********Working Anode Nav Dot *****************/
 	$('#nav-dot-working-anode').click(function(e) {   
	
		$('#nav-dot-home a').removeClass('nav-dot-active');
	    $('#nav-dot-blue-lightning a').removeClass('nav-dot-active');
	    $('#nav-dot-three-reasons a').removeClass('nav-dot-active');
		$('#nav-dot-working-anode a').addClass('nav-dot-active');
	
		$('#three-reasons-content-window').hide(); 
		$('#home-main-content-window').hide(); 	
		$('#blue-lightning-rod-content-window').hide();
		$('#what-is-an-anode-rod-content-window').hide();
		$('#anode-rod-life-cycle-content-window').show();

		e.preventDefault(); // stop the browser from following the link
		window.history.pushState('','','/theplumberschoice.com/anode-rod-life-cycle/');	
	});
	

});