$(document).ready(function() {

/******79098 text box *************/
 (function () {
  var countone = 1;

  $('.ua-1').click(function () {
    countone -= 1;
	   $("#art-1-text").animate({marginTop:'+=60px'});

	   if (countone == 0) {
			$('#art-1-text').animate({marginTop: '-=60px'});
			countone += 1;
			}
		});
  
  $('.da-1').click(function () {
    countone += 1;
		$("#art-1-text").animate({marginTop:'-=60px'});

		if (countone == 5) {
			$('#art-1-text').animate({marginTop: '+=60px'});
			countone -= 1;
			} 
		});
})();		

/******79099 text box *************/

(function () {
  var counttwo = 1;

  $('.ua-2').click(function () {
	counttwo -= 1;
		$("#art-2-text").animate({marginTop:'+=60px'});

		if (counttwo == 0) {
			$('#art-2-text').animate({marginTop: '-=60px'});
			counttwo += 1;
			}
		});

  $('.da-2').click(function () {
    counttwo += 1;
		$("#art-2-text").animate({marginTop:'-=60px'});

		if (counttwo == 5) {
			$('#art-2-text').animate({marginTop: '+=60px'});
			counttwo -= 1;
			} 
		});	

})();

/******79106 text box *************/

(function () {
  var counttwo = 1;

  $('.ua-3').click(function () {
	counttwo -= 1;
		$("#art-3-text").animate({marginTop:'+=60px'});

		if (counttwo == 0) {
			$('#art-3-text').animate({marginTop: '-=60px'});
			counttwo += 1;
			}
		});

  $('.da-3').click(function () {
    counttwo += 1;
		$("#art-3-text").animate({marginTop:'-=60px'});

		if (counttwo == 10) {
			$('#art-3-text').animate({marginTop: '+=60px'});
			counttwo -= 1;
			} 
		});	

})();

/******79107 text box *************/

(function () {
  var counttwo = 1;

  $('.ua-4').click(function () {
	counttwo -= 1;
		$("#art-4-text").animate({marginTop:'+=60px'});

		if (counttwo == 0) {
			$('#art-4-text').animate({marginTop: '-=60px'});
			counttwo += 1;
			}
		});

  $('.da-4').click(function () {
    counttwo += 1;
		$("#art-4-text").animate({marginTop:'-=60px'});

		if (counttwo == 10) {
			$('#art-4-text').animate({marginTop: '+=60px'});
			counttwo -= 1;
			} 
		});	

})();

/******79093 text box *************/

(function () {
  var countfive = 1;

  $('.ua-5').click(function () {
	countfive -= 1;
		$("#art-5-text").animate({marginTop:'+=60px'});

		if (countfive == 0) {
			$('#art-5-text').animate({marginTop: '-=60px'});
			countfive += 1;
			}
		});

  $('.da-5').click(function () {
    countfive += 1;
		$("#art-5-text").animate({marginTop:'-=60px'});

		if (countfive == 8) {
			$('#art-5-text').animate({marginTop: '+=60px'});
			countfive -= 1;
			}  
		});	

})();

/******79095 text box *************/

(function () {
  var countsix = 1;

  $('.ua-6').click(function () {
	countsix -= 1;
		$("#art-6-text").animate({marginTop:'+=60px'});

		if (countsix == 0) {
			$('#art-6-text').animate({marginTop: '-=60px'});
			countsix += 1;
			}
		});

  $('.da-6').click(function () {
    countsix += 1;
		$("#art-6-text").animate({marginTop:'-=60px'});

		if (countsix == 7) {
			$('#art-6-text').animate({marginTop: '+=60px'});
			countsix -= 1;
			}  
		});	

})();

/******79094 text box *************/

(function () {
  var countseven = 1;

  $('.ua-7').click(function () {
	countseven -= 1;
		$("#art-7-text").animate({marginTop:'+=60px'});

		if (countseven == 0) {
			$('#art-7-text').animate({marginTop: '-=60px'});
			countseven += 1;
			}
		});

  $('.da-7').click(function () {
    countseven += 1;
		$("#art-7-text").animate({marginTop:'-=60px'});

		if (countseven == 7) {
			$('#art-7-text').animate({marginTop: '+=60px'});
			countseven -= 1;
			}  
		});	
})();
/******79096 text box *************/

(function () {
  var counteight = 1;

  $('.ua-8').click(function () {
	counteight -= 1;
		$("#art-8-text").animate({marginTop:'+=60px'});

		if (counteight == 0) {
			$('#art-8-text').animate({marginTop: '-=60px'});
			counteight += 1;
			}
		});

  $('.da-8').click(function () {
    counteight += 1;
		$("#art-8-text").animate({marginTop:'-=60px'});

		if (counteight == 5) {
			$('#art-8-text').animate({marginTop: '+=60px'});
			counteight -= 1;
			}  
		});	

})();

	$("#close-details").click(function(){
		$(".details").hide();
	})
	

});