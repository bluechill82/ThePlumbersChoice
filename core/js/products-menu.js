$(document).ready(function() {

/****** Product Select Menu Arrows *************/
 (function () {
  var countone = 1;

  $('#product-select-up-arrow').click(function () {
    countone -= 1;
	   $('#menu-slider').animate({marginTop:'+=126px'}).delay(1000);

	   if (countone == 0) {
			$('#menu-slider').animate({marginTop: '-=126px'});
			countone += 1;
			}
		});
  
  $('#product-select-down-arrow').click(function () {
    countone += 1;
		$("#menu-slider").animate({marginTop:'-=126px'}).delay(500);

		if (countone == 3) {
			$('#menu-slider').animate({marginTop: '+=126px'});
			countone -= 1;
			} 
		});
})();	

/************Aluminum Sliding Text************************/
 //79093
   $("#line1-slider").delay(500).animate({marginLeft:'0px'},(2000));
   $("#line2-slider").delay(3000).animate({marginLeft:'0px'},(2000));
   $("#line3-slider").delay(5000).animate({marginLeft:'0px'},(2000));

   $("#ash, #aso, #blh, #blo, #bldh, #bldo").click(function(){
   $("#line1-slider").animate({marginLeft:'-1200px'},(2000));
   $("#line2-slider").animate({marginLeft:'-1200px'},(2000));
   $("#line3-slider").animate({marginLeft:'-1400px'},(2000));
   })
   
 //79095 
   $("#line1-slider-2").delay(500).animate({marginLeft:'0px'},(2000));
   $("#line2-slider-2").delay(3000).animate({marginLeft:'0px'},(2000));
   $("#line3-slider-2").delay(5000).animate({marginLeft:'0px'},(2000));

 $("#afh, #aso, #blh, #blo, #bldh, #bldo").click(function(){
   $("#line1-slider-2").animate({marginLeft:'-1200px'},(2000));
   $("#line2-slider-2").animate({marginLeft:'-1200px'},(2000));
   $("#line3-slider-2").animate({marginLeft:'-1400px'},(2000));
   })

 //79094
   $("#line1-slider-3").delay(500).animate({marginLeft:'0px'},(2000));
   $("#line2-slider-3").delay(3000).animate({marginLeft:'0px'},(2000));
   $("#line3-slider-3").delay(5000).animate({marginLeft:'0px'},(2000));
   
 $("#afh, #ash, #blh, #blo, #bldh, #bldo").click(function(){
   $("#line1-slider-3").animate({marginLeft:'-1200px'},(2000));
   $("#line2-slider-3").animate({marginLeft:'-1200px'},(2000));
   $("#line3-slider-3").animate({marginLeft:'-1400px'},(2000));
   })

  
/***Classic Blue Lighting Model*****/
	$('#bl').mouseenter(function(){
	 $('#blh, #blo').animate({width:'110px'}, {queue: false});
	 
	 $('#blh').mouseenter(function(){
	 $(this).addClass("blh-active");
	 $(this).toggleClass("level-2 level-3"), {queue: false};
	}) 
	
	$('#blh').mouseleave(function(){
	 $(this).removeClass("blh-active");
	 $(this).toggleClass("level-3 level-2"), {queue: false};
	 }) 
	 
	 /***79099***/
	
	$('#blo').mouseenter(function(){
	 $(this).addClass("blo-active");
	 $(this).animate("level-2 level-3"), {queue: false};
	}) 
	
	$('#blo').mouseleave(function(){
	 $(this).removeClass("blo-active");
	 $(this).toggleClass("level-3 level-2"), {queue: false};
	 }) 
	})
	$('#bl').mouseleave(function(){
     $('#blh, #blo').animate({width:'0px'}, {queue: false});
	}) 

/***Blue Lightning with Drainage Model*****/
	$('#bld').mouseenter(function(){
	 $('#bldh, #bldo').animate({width:'110px'}, {queue: false});

	 /**********79026****************/
	 
	 $('#bldh').mouseenter(function(){
	 $(this).addClass("bldh-active");
	 $(this).toggleClass("level-2 level-3"), {queue: false};
	}) 
	
	$('#bldh').mouseleave(function(){
	 $(this).removeClass("bldh-active");
	 $(this).toggleClass("level-3 level-2"), {queue: false};
	 }) 
	 
	 /***79029***/
	
	$('#bldo').mouseenter(function(){
	 $(this).addClass("bldo-active");
	 $(this).animate("level-2 level-3"), {queue: false};
	}) 
	
	$('#bldo').mouseleave(function(){
     $(this).removeClass("bldo-active");
	 $(this).toggleClass("level-3 level-2"), {queue: false};
	 }) 
	})
	
	$('#bld').mouseleave(function(){
     $('#bldh, #bldo').animate({width:'0px'}, {queue: false});
	})

/***Aluminum Blue Lighting Model*****/
	$('#bla').mouseenter(function(){
	 $('#blah, #blao').animate({width:'110px'}, {queue: false});
	 
	 $('#blah').mouseenter(function(){
	 $(this).addClass("blah-active");
	 $(this).toggleClass("level-2 level-3"), {queue: false};
	}) 
	
	$('#blah').mouseleave(function(){
	 $(this).removeClass("blah-active");
	 $(this).toggleClass("level-3 level-2"), {queue: false};
	 }) 
	 
	 /***79099***/
	
	$('#blao').mouseenter(function(){
	 $(this).addClass("blao-active");
	 $(this).animate("level-2 level-3"), {queue: false};
	}) 
	
	$('#blao').mouseleave(function(){
	 $(this).removeClass("blao-active");
	 $(this).toggleClass("level-3 level-2"), {queue: false};
	 }) 
	})
	$('#bla').mouseleave(function(){
     $('#blah, #blao').animate({width:'0px'}, {queue: false});
	}) 
	
	/***Commercial Blue Lightning Rods*****/
	
	$('#blc').mouseenter(function(){
	 $('#blch').animate({width:'110px'}, {queue: false});
	 $(this).addClass("blch-active");
	}) 

	$('#blc').mouseleave(function(){
	 $('#blch').animate({width:'0px'}, {queue: false});
	}) 

	/***Aluminum Flexible Model*****/
	
	$('#af').mouseenter(function(){
	 $('#afh').animate({width:'110px'}, {queue: false});
	 $(this).addClass("afh-active");
	}) 

	$('#af').mouseleave(function(){
	 $('#afh').animate({width:'0px'}, {queue: false});
	}) 

	/***Aluminum Traditional Model*****/
	$('#as').mouseenter(function(){
	 $('#ash, #aso').animate({width:'110px'}, {queue: false});

	 /**********79095****************/
	 
	 $('#ash').mouseenter(function(){
	 $(this).addClass("ash-active");
	 $(this).toggleClass("level-2 level-3"), {queue: false};
	}) 
	
	$('#ash').mouseleave(function(){
	 $(this).removeClass("ash-active");
	 $(this).toggleClass("level-3 level-2"), {queue: false};
	 }) 
	 
	 /***79094***/
	
	$('#aso').mouseenter(function(){
	 $(this).addClass("aso-active");
	 $(this).animate("level-2 level-3"), {queue: false};
	}) 
	
	$('#aso').mouseleave(function(){
     $(this).removeClass("aso-active");
	 $(this).toggleClass("level-3 level-2"), {queue: false};
	 }) 
	})
	
	$('#as').mouseleave(function(){
     $('#ash, #aso').animate({width:'0px'}, {queue: false});
	})
	
  
  });