$(document).ready(function() {
/*****************Init***********************/
	$("#ruud-anode-rods").hide();
	$("#rheem-anode-rods").hide();
	$("#reliance-anode-rods").hide(); 
	$("#ao-smith-anode-rods").hide();
	$("#american-anode-rods").hide();
	$("#bradford-white-anode-rods").hide();
	$("#state-anode-rods").hide();

 /*********Ruud Water Heaters****************/
	$("#ruud-water-heaters").click(function(e){
		$("#manuals-intro").hide();
		$("#rheem-anode-rods").hide();
		$("#reliance-anode-rods").hide(); 
		$("#ao-smith-anode-rods").hide();
		$("#american-anode-rods").hide();
		$("#bradford-white-anode-rods").hide();
		$("#state-anode-rods").hide();
		$("#ruud-anode-rods").show();
		$('.scroll-pane').jScrollPane();
		e.preventDefault(); // stop the browser from following the link
		window.history.pushState('','','/theplumberschoice.com/water-heater-owner-manuals/ruud-water-heaters/page-1-of-3/');	
   });

 /*********Rheem Water Heaters****************/
	$("#rheem-water-heaters").click(function(e){
		$("#manuals-intro").hide();
		$("#ruud-anode-rods").hide();
		$("#reliance-anode-rods").hide(); 
		$("#ao-smith-anode-rods").hide();
		$("#american-anode-rods").hide();
		$("#bradford-white-anode-rods").hide();
		$("#state-anode-rods").hide();
		$("#rheem-anode-rods").show();
		e.preventDefault(); // stop the browser from following the link
		window.history.pushState('','','/theplumberschoice.com/water-heater-owner-manuals/rheem-water-heaters/');	
   });

 /*********Reliance Water Heaters****************/
	$("#reliance-water-heaters").click(function(e){
		$("#manuals-intro").hide();
		$("#ruud-anode-rods").hide();
		$("#rheem-anode-rods").hide(); 
		$("#ao-smith-anode-rods").hide();
		$("#american-anode-rods").hide();
		$("#bradford-white-anode-rods").hide();
		$("#state-anode-rods").hide();
		$("#reliance-anode-rods").show();
		$('.scroll-pane').jScrollPane();
		e.preventDefault(); // stop the browser from following the link
		window.history.pushState('','','/theplumberschoice.com/water-heater-owner-manuals/reliance-water-heaters/');	
   });

 /*********AO Smith Water Heaters****************/
	$("#ao-smith-water-heaters").click(function(e){
		$("#manuals-intro").hide();
		$("#ruud-anode-rods").hide();
		$("#rheem-anode-rods").hide(); 
		$("#reliance-anode-rods").hide();
		$("#american-anode-rods").hide();
		$("#bradford-white-anode-rods").hide();
		$("#state-anode-rods").hide();
		$("#ao-smith-anode-rods").show();
		$('.scroll-pane').jScrollPane();
		e.preventDefault(); // stop the browser from following the link
		window.history.pushState('','','/theplumberschoice.com/water-heater-owner-manuals/ao-smith-water-heaters/');	
   });

 /*********American Water Heaters****************/
	$("#american-water-heaters").click(function(e){
		$("#manuals-intro").hide();
		$("#ruud-anode-rods").hide();
		$("#rheem-anode-rods").hide(); 
		$("#reliance-anode-rods").hide();
		$("#ao-smith-anode-rods").hide();
		$("#bradford-white-anode-rods").hide();
		$("#state-anode-rods").hide();
		$("#american-anode-rods").show();
		e.preventDefault(); // stop the browser from following the link
		window.history.pushState('','','/theplumberschoice.com/water-heater-owner-manuals/american-water-heaters/');	
   });
  
 /*********Bradford White Water Heaters****************/
	$("#bradford-white-water-heaters").click(function(e){
		$("#manuals-intro").hide();
		$("#ruud-anode-rods").hide();
		$("#rheem-anode-rods").hide(); 
		$("#reliance-anode-rods").hide();
		$("#ao-smith-anode-rods").hide();
		$("#american-anode-rods").hide();
		$("#state-anode-rods").hide();
		$("#bradford-white-anode-rods").show();
		e.preventDefault(); // stop the browser from following the link
		window.history.pushState('','','/theplumberschoice.com/water-heater-owner-manuals/bradford-white-water-heaters/');	
   });
  
 /*********State Water Heaters****************/
	$("#state-water-heaters").click(function(e){
		$("#manuals-intro").hide();
		$("#ruud-anode-rods").hide();
		$("#rheem-anode-rods").hide(); 
		$("#reliance-anode-rods").hide();
		$("#ao-smith-anode-rods").hide();
		$("#american-anode-rods").hide();
		$("#bradford-white-anode-rods").hide();
		$("#state-anode-rods").show();
		$('.scroll-pane').jScrollPane();
		e.preventDefault(); // stop the browser from following the link
		window.history.pushState('','','/theplumberschoice.com/water-heater-owner-manuals/state-water-heaters/');	
   });


	
});