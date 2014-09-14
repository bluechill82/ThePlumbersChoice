jQuery.noConflict();
jQuery(document).ready(function() {

  jQuery("#art-2").addClass('product-hide');
  jQuery("#art-3").addClass('product-hide'); 
  jQuery("#art-4").addClass('product-hide');
  jQuery("#art-5").addClass('product-hide');
  jQuery("#art-6").addClass('product-hide');
  jQuery("#art-7").addClass('product-hide');
  jQuery("#art-8").addClass('product-hide');
  
/**********fade effects for menu*************/  
/******79098**********/
 jQuery("#blh").click(function(e){
   jQuery("#art-8").fadeOut(800).delay(1200);
   jQuery("#art-7").fadeOut(800).delay(1200);
   jQuery("#art-6").fadeOut(800).delay(1200);
   jQuery("#art-5").fadeOut(800).delay(1200);
   jQuery("#art-3").fadeOut(800).delay(1200);
   jQuery("#art-2").fadeOut(1000);
   jQuery("#art-4").fadeOut(800).delay(1200);
   jQuery("#art-1").delay(800).fadeIn(2000).removeClass("product-hide");
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/products/79098/');	
   })

/*****79099**********/ 
 jQuery("#blo").click(function(e){
   jQuery("#art-8").fadeOut(800).delay(1200);
   jQuery("#art-7").fadeOut(800).delay(1200);
   jQuery("#art-6").fadeOut(800).delay(1200);
   jQuery("#art-5").fadeOut(800).delay(1200);
   jQuery("#art-1").fadeOut(800).delay(1200);
   jQuery("#art-3").fadeOut(800).delay(1200);
   jQuery("#art-4").fadeOut(800).delay(1200);
   jQuery("#art-2").fadeIn(2000).removeClass("product-hide");
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/products/79099/');
   })

/**********79106****/
 jQuery("#bldh").click(function(e){
   jQuery("#art-8").fadeOut(800).delay(1200);
   jQuery("#art-7").fadeOut(800).delay(1200);
   jQuery("#art-6").fadeOut(800).delay(1200);
   jQuery("#art-5").fadeOut(800).delay(1200);
   jQuery("#art-4").fadeOut(800).delay(1200);
   jQuery("#art-2").fadeOut(800).delay(1200);
   jQuery("#art-1").fadeOut(800).delay(1200);
   jQuery("#art-3").fadeIn(2000).removeClass("product-hide");
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/products/79106/');	
   })
   
   /*********79107*****/
 jQuery("#bldo").click(function(e){
   jQuery("#art-8").fadeOut(800).delay(1200);
   jQuery("#art-7").fadeOut(800).delay(1200);
   jQuery("#art-6").fadeOut(800).delay(1200);
   jQuery("#art-5").fadeOut(800).delay(1200);
   jQuery("#art-3").fadeOut(800).delay(1200);
   jQuery("#art-2").fadeOut(800).delay(1200);
   jQuery("#art-1").fadeOut(800).delay(1200);
   jQuery("#art-4").fadeIn(2000).removeClass("product-hide");
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/products/79107/');	
   })
   
   /********79093******/ 
 jQuery("#afh").click(function(e){
   jQuery("#art-8").fadeOut(800).delay(1200);
   jQuery("#art-7").fadeOut(800).delay(1200);
   jQuery("#art-6").fadeOut(800).delay(1200);
   jQuery("#art-4").fadeOut(800).delay(1200);
   jQuery("#art-3").fadeOut(800).delay(1200);
   jQuery("#art-2").fadeOut(800).delay(1200);
   jQuery("#art-1").fadeOut(800).delay(1200);
   jQuery("#art-5").fadeIn(2000).removeClass("product-hide");
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/products/79093/');	
   })
   
   /********79095******/ 
 jQuery("#ash").click(function(e){
   jQuery("#art-8").fadeOut(800).delay(1200);
   jQuery("#art-7").fadeOut(800).delay(1200);
   jQuery("#art-5").fadeOut(800).delay(1200);
   jQuery("#art-4").fadeOut(800).delay(1200);
   jQuery("#art-3").fadeOut(800).delay(1200);
   jQuery("#art-2").fadeOut(800).delay(1200);
   jQuery("#art-1").fadeOut(800).delay(1200);
   jQuery("#art-6").fadeIn(2000).removeClass("product-hide");
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/products/79095/');	
   
   })

      
   /********79094******/ 
 jQuery("#aso").click(function(e){
   jQuery("#art-8").fadeOut(800).delay(1200);
   jQuery("#art-6").fadeOut(800).delay(1200);
   jQuery("#art-5").fadeOut(800).delay(1200);
   jQuery("#art-4").fadeOut(800).delay(1200);
   jQuery("#art-3").fadeOut(800).delay(1200);
   jQuery("#art-2").fadeOut(800).delay(1200);
   jQuery("#art-1").fadeOut(800).delay(1200);
   jQuery("#art-7").fadeIn(2000).removeClass("product-hide");
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/products/79094/');	
   })
   
   /********79096******/ 
 jQuery("#blch").click(function(e){
   jQuery("#art-7").fadeOut(800).delay(1200);
   jQuery("#art-6").fadeOut(800).delay(1200);
   jQuery("#art-5").fadeOut(800).delay(1200);
   jQuery("#art-4").fadeOut(800).delay(1200);
   jQuery("#art-3").fadeOut(800).delay(1200);
   jQuery("#art-2").fadeOut(800).delay(1200);
   jQuery("#art-1").fadeOut(800).delay(1200);
   jQuery("#art-8").fadeIn(2000).removeClass("product-hide");
    e.preventDefault(); // stop the browser from following the link
	window.history.pushState('','','/theplumberschoice.com/products/79096/');	
   })

/************Aluminum Sliding Text************************/
 jQuery("#afh").click(function(){
   jQuery("#line1-slider").delay(500).animate({marginLeft:'0px'},(2000));
   jQuery("#line2-slider").delay(3000).animate({marginLeft:'0px'},(2000));
   jQuery("#line3-slider").delay(6000).animate({marginLeft:'0px'},(2000));
   })
   
 jQuery("#ash, #aso, #blh, #blo, #bldh, #bldo").click(function(){
   jQuery("#line1-slider").animate({marginLeft:'-1200px'},(2000));
   jQuery("#line2-slider").animate({marginLeft:'-1200px'},(2000));
   jQuery("#line3-slider").animate({marginLeft:'-1400px'},(2000));
   })
   
 jQuery("#ash").click(function(){
   jQuery("#line1-slider-2").delay(500).animate({marginLeft:'0px'},(2000));
   jQuery("#line2-slider-2").delay(3000).animate({marginLeft:'0px'},(2000));
   jQuery("#line3-slider-2").delay(6000).animate({marginLeft:'0px'},(2000));
   })
   
 jQuery("#afh, #aso, #blh, #blo, #bldh, #bldo").click(function(){
   jQuery("#line1-slider-2").animate({marginLeft:'-1200px'},(2000));
   jQuery("#line2-slider-2").animate({marginLeft:'-1200px'},(2000));
   jQuery("#line3-slider-2").animate({marginLeft:'-1400px'},(2000));
   })
   
 jQuery("#aso").click(function(){
   jQuery("#line1-slider-3").delay(500).animate({marginLeft:'0px'},(2000));
   jQuery("#line2-slider-3").delay(3000).animate({marginLeft:'0px'},(2000));
   jQuery("#line3-slider-3").delay(6000).animate({marginLeft:'0px'},(2000));
   })
   
 jQuery("#afh, #ash, #blh, #blo, #bldh, #bldo").click(function(){
   jQuery("#line1-slider-3").animate({marginLeft:'-1200px'},(2000));
   jQuery("#line2-slider-3").animate({marginLeft:'-1200px'},(2000));
   jQuery("#line3-slider-3").animate({marginLeft:'-1400px'},(2000));
   })

//rotating offer
   jQuery("#offer").animate({marginLeft:'0px'},(5000));
   jQuery("#offer").rotate({
	angle: 0,
	animateTo:360,
	duration: 5000
	});
	
		
jQuery("#products").click(function(){
	jQuery("#offer").rotate({
		angle: 0,
		animateTo:360,
		duration: 5000
		});
	})

  });