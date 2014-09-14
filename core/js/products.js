jQuery.noConflict();
jQuery(document).ready(function() {

/******79098 text box *************/
 (function () {
  var countone = 1;

  jQuery('.ua-1').click(function () {
    countone -= 1;
	   jQuery("#art-1-text").animate({marginTop:'+=60px'});

	   if (countone == 0) {
			jQuery('#art-1-text').animate({marginTop: '-=60px'});
			countone += 1;
			}
		});
  
  jQuery('.da-1').click(function () {
    countone += 1;
		jQuery("#art-1-text").animate({marginTop:'-=60px'});

		if (countone == 5) {
			jQuery('#art-1-text').animate({marginTop: '+=60px'});
			countone -= 1;
			} 
		});
})();		

/******79099 text box *************/

(function () {
  var counttwo = 1;

  jQuery('.ua-2').click(function () {
	counttwo -= 1;
		jQuery("#art-2-text").animate({marginTop:'+=60px'});

		if (counttwo == 0) {
			jQuery('#art-2-text').animate({marginTop: '-=60px'});
			counttwo += 1;
			}
		});

  jQuery('.da-2').click(function () {
    counttwo += 1;
		jQuery("#art-2-text").animate({marginTop:'-=60px'});

		if (counttwo == 5) {
			jQuery('#art-2-text').animate({marginTop: '+=60px'});
			counttwo -= 1;
			} 
		});	

})();

/******79106 text box *************/

(function () {
  var countthree = 1;

  jQuery('.ua-3').click(function () {
	countthree -= 1;
		jQuery("#art-3-text").animate({marginTop:'+=60px'});

		if (countthree == 0) {
			jQuery('#art-3-text').animate({marginTop: '-=60px'});
			countthree += 1;
			}
		});

  jQuery('.da-3').click(function () {
    countthree += 1;
		jQuery("#art-3-text").animate({marginTop:'-=60px'});

		if (countthree == 10) {
			jQuery('#art-3-text').animate({marginTop: '+=60px'});
			countthree -= 1;
			} 
		});	

})();

/******79107 text box *************/

(function () {
  var countfour = 1;

  jQuery('.ua-4').click(function () {
	countfour -= 1;
		jQuery("#art-4-text").animate({marginTop:'+=60px'});

		if (countfour == 0) {
			jQuery('#art-4-text').animate({marginTop: '-=60px'});
			countfour += 1;
			}
		});

  jQuery('.da-4').click(function () {
    countfour += 1;
		jQuery("#art-4-text").animate({marginTop:'-=60px'});

		if (countfour == 10) {
			jQuery('#art-4-text').animate({marginTop: '+=60px'});
			countfour -= 1;
			} 
		});	

})();

/******79093 text box *************/

(function () {
  var countfive = 1;

  jQuery('.ua-5').click(function () {
	countfive -= 1;
		jQuery("#art-5-text").animate({marginTop:'+=60px'});

		if (countfive == 0) {
			jQuery('#art-5-text').animate({marginTop: '-=60px'});
			countfive += 1;
			}
		});

  jQuery('.da-5').click(function () {
    countfive += 1;
		jQuery("#art-5-text").animate({marginTop:'-=60px'});

		if (countfive == 8) {
			jQuery('#art-5-text').animate({marginTop: '+=60px'});
			countfive -= 1;
			}  
		});	

})();

/******79095 text box *************/

(function () {
  var countsix = 1;

  jQuery('.ua-6').click(function () {
	countsix -= 1;
		jQuery("#art-6-text").animate({marginTop:'+=60px'});

		if (countsix == 0) {
			jQuery('#art-6-text').animate({marginTop: '-=60px'});
			countsix += 1;
			}
		});

  jQuery('.da-6').click(function () {
    countsix += 1;
		jQuery("#art-6-text").animate({marginTop:'-=60px'});

		if (countsix == 7) {
			jQuery('#art-6-text').animate({marginTop: '+=60px'});
			countsix -= 1;
			}  
		});	

})();

/******79094 text box *************/

(function () {
  var countseven = 1;

  jQuery('.ua-7').click(function () {
	countseven -= 1;
		jQuery("#art-7-text").animate({marginTop:'+=60px'});

		if (countseven == 0) {
			jQuery('#art-7-text').animate({marginTop: '-=60px'});
			countseven += 1;
			}
		});

  jQuery('.da-7').click(function () {
    countseven += 1;
		jQuery("#art-7-text").animate({marginTop:'-=60px'});

		if (countseven == 7) {
			jQuery('#art-7-text').animate({marginTop: '+=60px'});
			countseven -= 1;
			}  
		});	
})();

/******79096 text box *************/

(function () {
  var countseven = 1;

  jQuery('.ua-8').click(function () {
	countseven -= 1;
		jQuery("#art-8-text").animate({marginTop:'+=60px'});

		if (countseven == 0) {
			jQuery('#art-8-text').animate({marginTop: '-=60px'});
			countseven += 1;
			}
		});

  jQuery('.da-8').click(function () {
    countseven += 1;
		jQuery("#art-8-text").animate({marginTop:'-=60px'});

		if (countseven == 4) {
			jQuery('#art-8-text').animate({marginTop: '+=60px'});
			countseven -= 1;
			}  
		});	

})();

//rotating offer
   jQuery("#offer").animate({marginLeft:'0px'},(5000));
   jQuery("#offer").rotate({
	angle: 0,
	animateTo:360,
	duration: 5000
	});
	
		
jQuery("#products").click(function(){
   jQuery("#offer").animate({marginLeft:'200px'},(1));
   jQuery("#offer").animate({marginLeft:'0px'},(5000));
	jQuery("#offer").rotate({
		angle: 0,
		animateTo:360,
		duration: 5000
		});
	})
	

  });