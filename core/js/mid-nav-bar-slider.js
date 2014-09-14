$(document).ready(function(){

/****************Init*********************/
 $('#nav-dot-home a').addClass('nav-dot-active');

	$(function() {
		var loc = window.location.href; 
		if(/blue-lightning-rod/.test(loc)) {
	    $('#nav-dot-home a').removeClass('nav-dot-active');
		$('#nav-dot-blue-lightning a').addClass('nav-dot-active');
		}
	});
	
	$(function() {
		var loc = window.location.href; 
		if(/three-reasons/.test(loc)) {
	    $('#nav-dot-home a').removeClass('nav-dot-active');
		$('#nav-dot-three-reasons a').addClass('nav-dot-active');
		}
	});
	
	$(function() {
		var loc = window.location.href; 
		if(/anode-rod-life-cycle/.test(loc)) {
	    $('#nav-dot-home a').removeClass('nav-dot-active');
		$('#nav-dot-working-anode a').addClass('nav-dot-active');
		}
	});
	
	$(function() {
		var loc = window.location.href; 
		if(/what-is-an-anode-rod/.test(loc)) {
	    $('#nav-dot-home a').removeClass('nav-dot-active');
		}
	});	
	
 $(function() {
		var loc = window.location.href; 
		if(/about-us/.test(loc)) {
	    $('#nav-dots').hide();
		}
	});

	 $(function() {
		var loc = window.location.href; 
		if(/contact-us/.test(loc)) {
	    $('#nav-dots').hide();
		}
	});
	/**********Home Nav Dot *****************/
 	$('#nav-dot-home').click(function(e) {   
		
		$('#about-us-page').hide();
		$('#home-page').show();

		$('#nav-dot-blue-lightning a').removeClass('nav-dot-active');
	    $('#nav-dot-three-reasons a').removeClass('nav-dot-active');
	    $('#nav-dot-working-anode a').removeClass('nav-dot-active');
		$('#nav-dot-home a').addClass('nav-dot-active');

		
		$('#three-reasons-content-window').hide(); 
		$('#blue-lightning-rod-content-window').hide(); 	
		$('#anode-rod-life-cycle-content-window').hide();
		$('#what-is-an-anode-rod-content-window').hide();
		$('#home-main-content-window').show();
		
		e.preventDefault(); 
		window.history.pushState('','','/');	
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
		
		e.preventDefault(); 
		window.history.pushState('','','/blue-lightning-rod/');	
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

		e.preventDefault(); 
		window.history.pushState('','','/three-reasons/');	
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

		e.preventDefault(); 
		window.history.pushState('','','/anode-rod-life-cycle/');	
	});

});