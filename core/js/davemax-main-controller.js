 $(document).ready(function(){
//Init
  $('#products-page').hide(); 
  $('#about-us-page').hide();
  $('#water-heater-owner-manuals-page').hide();
  $('#contact-us-page').hide();
  $('#order-now-page').hide();
	
//home button 
 $('#f-home, #home').click(function(e) {  
 //nav dots
    $('#nav-dot-blue-lightning a').show();
	$('#nav-dot-three-reasons a').show();
	$('#nav-dot-working-anode a').show();
	$('#nav-dot-home a').show();
	
    $('#products-page').hide(); 
    $('#about-us-page').hide();
    $('#water-heater-owner-manuals-page').hide();
    $('#contact-us-page').hide();
    $('#order-now-page').hide();
    $('#home-page').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/');	
	});
	
//products button
 $('#f-products, #products').click(function(e) {   
    $('#home-page').hide(); 
    $('#about-us-page').hide();
    $('#water-heater-owner-manuals-page').hide();
    $('#contact-us-page').hide();
    $('#order-now-page').hide();
    $('#products-page').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/products');	
	});
	
//about us button
 $('#f-about, #about').click(function(e) {   
//nav dots
    $('#nav-dot-blue-lightning a').hide();
	$('#nav-dot-three-reasons a').hide();
	$('#nav-dot-working-anode a').hide();
	$('#nav-dot-home a').hide();
//nav options
    $('#home-page').hide(); 
    $('#products-page').hide();
    $('#water-heater-owner-manuals-page').hide();
    $('#contact-us-page').hide();
    $('#order-now-page').hide();
    $('#about-us-page').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/about-us');	
	});
	
//water heater manuals
 $('#f-water-heater-owner-manuals, #water-heater-owner-manuals').click(function(e) {   
    $('#home-page').hide(); 
    $('#about-us-page').hide();
    $('#products-page').hide();
    $('#contact-us-page').hide();
    $('#order-now-page').hide();
    $('#water-heater-owner-manuals-page').show();
		$("#ruud-anode-rods").hide();
		$("#rheem-anode-rods").hide(); 
		$("#reliance-anode-rods").hide();
		$("#ao-smith-anode-rods").hide();
		$("#bradford-white-anode-rods").hide();
		$("#state-anode-rods").hide();
		$("#american-anode-rods").hide();
		$("#manuals-intro").show();
	$('.scroll-pane').jScrollPane();
	e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/water-heater-owner-manuals');	
	});
	
//contact us button
 $('#f-contact, #contact').click(function(e) {   
 //nav dots
    $('#nav-dot-blue-lightning a').hide();
	$('#nav-dot-three-reasons a').hide();
	$('#nav-dot-working-anode a').hide();
	$('#nav-dot-home a').hide();
    $('#home-page').hide(); 
    $('#about-us-page').hide();
    $('#products-page').hide();
    $('#water-heater-owner-manuals-page').hide();
    $('#order-now-page').hide();
    $('#contact-us-page').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/contact-us');
	$('.map_canvas').load("core/includes/pages/contact-us/google-map.php")
	});

//Order Now button
 $('#f-order-tab, #order-tab').click(function(e) {   
    $('#home-page').hide(); 
    $('#about-us-page').hide();
    $('#products-page').hide();
    $('#water-heater-owner-manuals-page').hide();
    $('#contact-us-page').hide();
    $('#order-now-page').show();
	$('.scroll-pane').jScrollPane();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/order-now');	

	});
	
});