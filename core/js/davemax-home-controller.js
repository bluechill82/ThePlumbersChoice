$(document).ready(function(){
/*      Init    */
  $('#main-slide-two').hide();
  $('#main-slide-three').hide();
  $('#main-slide-four').hide();
  $('#what-is-an-anode-rod-content-window').hide();
  $('#blue-lightning-rod-content-window').hide();
  $('#three-reasons-content-window').hide();
  $('#what-is-an-anode-rod-slide-two').hide();
  $('#what-is-an-anode-rod-slide-three').hide();
  $('#what-is-an-anode-rod-slide-four').hide();
  $('#blue-lightning-rod-slide-two').hide();
  $('#blue-lightning-rod-slide-three').hide();
  $('#blue-lightning-rod-slide-four').hide();  
  $('#three-reasons-slide-two').hide();  
  $('#three-reasons-slide-three').hide();  
  $('#anode-rod-life-cycle-content-window').hide();
  
 /*       Home Slide One           */ 
  $('.ra1').click(function(e) {   
    $('#main-slide-one').hide(); 
    $('#main-slide-two').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/home/blue-lightning-anode-rod/');	
	});
	
	$('.la1').click(function(e) {   
    $('#main-slide-one').hide(); 
    $('#main-slide-four').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/home/blue-lightning-anode-rod/');	
	});

	/*       Home Slide Two          */
  $('.la2').click(function(e) {   
    $('#main-slide-two').hide(); 
    $('#main-slide-one').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/home/');	
	});
	
	$('.ra2').click(function(e) {   
    $('#main-slide-two').hide(); 
    $('#main-slide-three').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/home/anode-rods-increase-sales/');	
	});
	
		/*       Home Slide Three          */
		  $('.ra3').click(function(e) {   
    $('#main-slide-three').hide(); 
    $('#main-slide-four').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/home/working-anode-rod/');	
	});
	
	$('.la3').click(function(e) {   
    $('#main-slide-three').hide(); 
    $('#main-slide-two').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/home/blue-lightning-anode-rod/');	
	});

/*       Home Slide Four         */
    $('.ra4').click(function(e) {   
    $('#main-slide-four').hide(); 
    $('#main-slide-one').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/home/');	
	});
	
	$('.la4').click(function(e) {   
    $('#main-slide-four').hide(); 
    $('#main-slide-three').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/home/anode-rods-increase-sales/');	
	});
	
	
	
/*       What is an Anode Rod Slide One         */
    $('.ra5').click(function(e) {   
    $('#what-is-an-anode-rod-slide-one').hide(); 
    $('#what-is-an-anode-rod-slide-two').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/what-is-an-anode-rod/anode-rod-purpose');	
	});
	
	$('.la5').click(function(e) {   
    $('#what-is-an-anode-rod-slide-one').hide(); 
    $('#what-is-an-anode-rod-slide-four').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/what-is-an-anode-rod/replacing-an-anode-rod');	
	});
	
	
/*       What is an Anode Rod Slide Two         */
    $('.ra6').click(function(e) {   
    $('#what-is-an-anode-rod-slide-two').hide(); 
    $('#what-is-an-anode-rod-slide-three').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/what-is-an-anode-rod/anode-attracts-corrosive-properties');	
	});
	
	$('.la6').click(function(e) {   
    $('#what-is-an-anode-rod-slide-two').hide(); 
    $('#what-is-an-anode-rod-slide-one').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/what-is-an-anode-rod/every-water-heater-has-one/');	
	});



/*       What is an Anode Rod Slide Three         */
    $('.ra7').click(function(e) {   
    $('#what-is-an-anode-rod-slide-three').hide(); 
    $('#what-is-an-anode-rod-slide-four').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com//what-is-an-anode-rod/replacing-an-anode-rod');	
	});

	$('.la7').click(function(e) {   
    $('#what-is-an-anode-rod-slide-three').hide(); 
    $('#what-is-an-anode-rod-slide-two').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/what-is-an-anode-rod/anode-rod-purpose');	
	});
	
	/*       What is an Anode Rod Slide Four        */
    $('.ra8').click(function(e) {   
    $('#what-is-an-anode-rod-slide-four').hide(); 
    $('#what-is-an-anode-rod-slide-one').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com//what-is-an-anode-rod/replacing-an-anode-rod');	
	});

	$('.la8').click(function(e) {   
    $('#what-is-an-anode-rod-slide-four').hide(); 
    $('#what-is-an-anode-rod-slide-three').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/what-is-an-anode-rod/anode-attracts-corrosive-properties');	
	});


	/*       Blue Lightning Rod Slide One        */
    $('.ra9').click(function(e) {   
    $('#blue-lightning-rod-slide-one').hide(); 
    $('#blue-lightning-rod-slide-two').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/blue-lightning-rod/aluminum-or-magnesium-anode/');	
	});

	$('.la9').click(function(e) {   
    $('#blue-lightning-rod-slide-one').hide(); 
    $('#blue-lightning-rod-slide-four').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/blue-lightning-rod/innovative-design-anode');	
	});

	/*       Blue Lightning Rod Slide Two        */
    $('.ra10').click(function(e) {   
    $('#blue-lightning-rod-slide-two').hide(); 
    $('#blue-lightning-rod-slide-three').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/blue-lightning-rod/magnesium-dissolves-eco-friendly');	
	});

	$('.la10').click(function(e) {   
    $('#blue-lightning-rod-slide-two').hide(); 
    $('#blue-lightning-rod-slide-one').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/blue-lightning-rod/');	
	});

	/*       Blue Lightning Rod Slide Three        */
    $('.ra11').click(function(e) {   
    $('#blue-lightning-rod-slide-three').hide(); 
    $('#blue-lightning-rod-slide-four').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/blue-lightning-rod/innovative-design-anode');	
	});

	$('.la11').click(function(e) {   
    $('#blue-lightning-rod-slide-three').hide(); 
    $('#blue-lightning-rod-slide-two').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/blue-lightning-rod/aluminum-or-magnesium-anode/');	
	});
	
/*       Blue Lightning Rod Slide Four       */
    $('.ra12').click(function(e) {   
    $('#blue-lightning-rod-slide-four').hide(); 
    $('#blue-lightning-rod-slide-one').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/blue-lightning-rod/');	
	});

	$('.la12').click(function(e) {   
    $('#blue-lightning-rod-slide-four').hide(); 
    $('#blue-lightning-rod-slide-three').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/blue-lightning-rod/magnesium-dissolves-eco-friendly/');	
	});

	/*       Three Reasons Slide One        */
    $('.ra13').click(function(e) {   
    $('#three-reasons-slide-one').hide(); 
    $('#three-reasons-slide-two').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/three-reasons/sell-water-heaters/');	
	});

	$('.la13').click(function(e) {   
    $('#three-reasons-slide-one').hide(); 
    $('#three-reasons-slide-three').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/three-reasons/extend-water-heater-life/');	
	});
	
/*       Three Reasons Slide Two       */
    $('.ra14').click(function(e) {   
    $('#three-reasons-slide-two').hide(); 
    $('#three-reasons-slide-three').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/three-reasons/extend-water-heater-life/');	
	});

	$('.la14').click(function(e) {   
    $('#three-reasons-slide-two').hide(); 
    $('#three-reasons-slide-one').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/three-reasons/');	
	});

/*       Three Reasons Slide Three       */
    $('.ra15').click(function(e) {   
    $('#three-reasons-slide-three').hide(); 
    $('#three-reasons-slide-one').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/three-reasons/');	
	});

	$('.la15').click(function(e) {   
    $('#three-reasons-slide-three').hide(); 
    $('#three-reasons-slide-two').show();
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/three-reasons/sell-water-heaters');	
	});

});
