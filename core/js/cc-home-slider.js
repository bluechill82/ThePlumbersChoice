jQuery.noConflict();
jQuery(document).ready(function() {

  /*****************max & min height for Side Bar*********************/
   (function () {
  var count = 23;
  var numbers = 1;

  jQuery('#up').click(function () {
    count -= 1;

    if (count == 0) {
      jQuery('#side-panel').animate({marginTop: '-=30px'});
  //    jQuery('#highlighter').animate({marginTop: '-=30px'});
	  count += 1;
    }
  });
  
  jQuery('#down').click(function () {
    count += 1;

    if (count == 24) {
      jQuery('#side-panel').animate({marginTop: '+=30px'});
 //     jQuery('#highlighter').animate({marginTop: '+=30px'});
	  count -= 1;
    }
  });

	 jQuery('.bb17, .bb18, .bb19, .bb20, .bb21, .bb22, .bb23, .bb24, .bb25, .bb26, .bb27, .bb28, .bb29, .bb30, .bb31, .bb32, .bb33, .bb34, .bb35, .bb36, .bb37, .bb38').click(function(){
	  count -= 1;
	  })
  
	 jQuery('.fb17').click(function(){
	  count = 3;
	  })

	  jQuery('.fb18').click(function(){
	  count = 4;
	  })

	  jQuery('.fb19').click(function(){
	  count = 5;
	  })

	  jQuery('.fb20').click(function(){
	  count = 6;
	  })

	  jQuery('.fb21').click(function(){
	  count = 7;
	  })

	  jQuery('.fb22').click(function(){
	  count = 8;
	  })

	  jQuery('.fb23').click(function(){
	  count = 9;
	  })
	  
	  jQuery('.fb24').click(function(){
	  count = 10;
	  })

	  
	  jQuery('.fb25').click(function(){
	  count = 11;
	  })
	  
	  
	  jQuery('.fb26').click(function(){
	  count = 12;
	  })
	  	
      jQuery('.fb27').click(function(){
	  count = 13;
	  })
	  	  	
      jQuery('.fb28').click(function(){
	  count = 14;
	  })
	  	  	
      jQuery('.fb29').click(function(){
	  count = 15;
	  })
	  	  	
      jQuery('.fb30').click(function(){
	  count = 16;
	  })
	  	  	
      jQuery('.fb31').click(function(){
	  count = 17;
	  })
	  
      jQuery('.fb32').click(function(){
	  count = 18;
	  })
	  
      jQuery('.fb33').click(function(){
	  count = 19;
	  })
	  
      jQuery('.fb34').click(function(){
	  count = 20;
	  })
	  
      jQuery('.fb35').click(function(){
	  count = 21;
	  })
	  	  
	  
      jQuery('.fb36').click(function(){
	  count = 22;
	  })
	  	  
	  
      jQuery('.fb37').click(function(){
	  count = 23;
	  })
	  
      jQuery('.fb38').click(function(){
	  count = 24;
	  })	  	  
	  	  
	  	  
	  
/*************Side Slide Bar*********************/
    
	jQuery('#up').click(function(){
	 jQuery('#side-panel').animate({marginTop:'+=30px'},(200));
	// jQuery('#highlighter').animate({marginTop:'-=30px'},(200));
	})   
	
    jQuery('#down').click(function(){
	 jQuery('#side-panel').animate({marginTop:'-=30px'},(200));
	// jQuery('#highlighter').animate({marginTop:'+=30px'},(200));
	})   
 
  
  
    jQuery('#d1').click(function(){
	 jQuery('#view').animate({marginLeft:'0px'},(2000));
	 jQuery('#side-panel').animate({marginTop:'20px'},(2000));
	 jQuery('#highlighter').animate({marginTop:'0px'},(200));
	 })  
   
  jQuery('#d2').click(function(){
	 jQuery('#view').animate({marginLeft:'-700px'},(2000));
	 jQuery('#highlighter').animate({marginTop:'30px'},(200));
	 jQuery('#side-panel').animate({marginTop:'20px'},(2000));
	 })   

    jQuery('#d3').click(function(){
	 jQuery('#view').animate({marginLeft:'-1400px'},(2000));
	 jQuery('#highlighter').animate({marginTop:'60px'},(200));
	 jQuery('#side-panel').animate({marginTop:'20px'},(2000));
	}) 
	
    jQuery('#d4').click(function(){
	 jQuery('#view').animate({marginLeft:'-2100px'},(2000));
	 jQuery('#highlighter').animate({marginTop:'90px'},(200));
	 jQuery('#side-panel').animate({marginTop:'20px'},(2000));
	 })  
	
    jQuery('#d5').click(function(){
	 jQuery('#view').animate({marginLeft:'-2800px'},(2000));
	 jQuery('#highlighter').animate({marginTop:'120px'},(200));
	 jQuery('#side-panel').animate({marginTop:'20px'},(2000));
	})  
	
    jQuery('#d6').click(function(){
	 jQuery('#highlighter').animate({marginTop:'150px'},(200));
	 jQuery('#view').animate({marginLeft:'-3500px'},(2000));
	 jQuery('#side-panel').animate({marginTop:'20px'},(2000));
	})  
	
    jQuery('#d7').click(function(){
	 jQuery('#view').animate({marginLeft:'-4200px'},(2000));
	 jQuery('#highlighter').animate({marginTop:'180px'},(200));
	 jQuery('#side-panel').animate({marginTop:'20px'},(2000));
	}) 
		 	
    jQuery('#d8').click(function(){
	 jQuery('#highlighter').animate({marginTop:'210px'},(200));
	 jQuery('#view').animate({marginLeft:'-4900px'},(2000));
	 jQuery('#side-panel').animate({marginTop:'20px'},(2000));
	}) 
	
    jQuery('#d9').click(function(){
	 jQuery('#highlighter').animate({marginTop:'240px'},(200));
	 jQuery('#view').animate({marginLeft:'-5600px'},(2000));
	 jQuery('#side-panel').animate({marginTop:'20px'},(2000));
	})  
	
    jQuery('#d10').click(function(){
	 jQuery('#highlighter').animate({marginTop:'270px'},(200));
	 jQuery('#view').animate({marginLeft:'-6300px'},(2000));
	 jQuery('#side-panel').animate({marginTop:'20px'},(2000));
	}) 
	
    jQuery('#d11').click(function(){
	 jQuery('#highlighter').animate({marginTop:'300px'},(200));
	 jQuery('#view').animate({marginLeft:'-7000px'},(2000));
	// jQuery('#side-panel').animate({marginTop:'-220px'},(2000));
	}) 
		
    jQuery('#d12').click(function(){
	 jQuery('#highlighter').animate({marginTop:'330px'},(200));
	 jQuery('#view').animate({marginLeft:'-7700px'},(2000));
	 //jQuery('#side-panel').animate({marginTop:'-220px'},(2000));
	}) 
		
    jQuery('#d13').click(function(){
	 jQuery('#highlighter').animate({marginTop:'360px'},(200));
	 jQuery('#view').animate({marginLeft:'-8400px'},(2000));
	// jQuery('#side-panel').animate({marginTop:'-220px'},(2000));
	}) 	
    
	jQuery('#d14').click(function(){
	 jQuery('#highlighter').animate({marginTop:'390px'},(200));
	 jQuery('#view').animate({marginLeft:'-9100px'},(2000));
//	 jQuery('#side-panel').animate({marginTop:'-220px'},(2000));
	}) 
		
    jQuery('#d15').click(function(){
	 jQuery('#highlighter').animate({marginTop:'420px'},(200));
	 jQuery('#view').animate({marginLeft:'-9800px'},(2000));
//	 jQuery('#side-panel').animate({marginTop:'-220px'},(2000));
	}) 
	
	jQuery('#d16').click(function(){
	 jQuery('#view').animate({marginLeft:'-10500px'},(2000));
	 jQuery('#highlighter').animate({marginTop:'450px'},(200));
//	 jQuery('#side-panel').animate({marginTop:'-220px'},(2000));
	 }) 
	
    jQuery('#d17').click(function(){
	 jQuery('#highlighter').animate({marginTop:'480px'},(200));
	 jQuery('#view').animate({marginLeft:'-11200px'},(2000));
//	 jQuery('#side-panel').animate({marginTop:'-220px'},(2000));
	  }) 
		
    jQuery('#d18').click(function(){
	 jQuery('#highlighter').animate({marginTop:'510px'},(200));
	 jQuery('#view').animate({marginLeft:'-11900px'},(2000));
//	 jQuery('#side-panel').animate({marginTop:'-220px'},(2000));
	  }) 
		
    jQuery('#d19').click(function(){
	 jQuery('#highlighter').animate({marginTop:'540px'},(200));
	 jQuery('#view').animate({marginLeft:'-12600px'},(2000));
//	 jQuery('#side-panel').animate({marginTop:'-220px'},(2000));
	  }) 	
    
	jQuery('#d20').click(function(){
	 jQuery('#highlighter').animate({marginTop:'570px'},(200));
	 jQuery('#view').animate({marginLeft:'-13300px'},(2000));
//	 jQuery('#side-panel').animate({marginTop:'-220px'},(2000));
	  }) 
		
    jQuery('#d21').click(function(){
	 jQuery('#highlighter').animate({marginTop:'600px'},(200));
	 jQuery('#view').animate({marginLeft:'-14000px'},(2000));
//	 jQuery('#side-panel').animate({marginTop:'-220px'},(2000));
	  })
		
    jQuery('#d22').click(function(){
	 jQuery('#highlighter').animate({marginTop:'630px'},(200));
	 jQuery('#view').animate({marginLeft:'-14700px'},(2000));
	  })
	  		
    jQuery('#d23').click(function(){
	 jQuery('#highlighter').animate({marginTop:'660px'},(200));
	 jQuery('#view').animate({marginLeft:'-15400px'},(2000));
	  })
	  
    jQuery('#d24').click(function(){
	 jQuery('#highlighter').animate({marginTop:'690px'},(200));
	 jQuery('#view').animate({marginLeft:'-16100px'},(2000));
	  })
	  
    jQuery('#d25').click(function(){
	 jQuery('#highlighter').animate({marginTop:'720px'},(200));
	 jQuery('#view').animate({marginLeft:'-16800px'},(2000));
	  })
	  
    jQuery('#d26').click(function(){
	 jQuery('#highlighter').animate({marginTop:'750px'},(200));
	 jQuery('#view').animate({marginLeft:'-17500px'},(2000));
	  })
	  
	jQuery('#d27').click(function(){
	 jQuery('#highlighter').animate({marginTop:'780px'},(200));
	 jQuery('#view').animate({marginLeft:'-18200px'},(2000));
	  })
	  	  
	jQuery('#d28').click(function(){
	 jQuery('#highlighter').animate({marginTop:'810px'},(200));
	 jQuery('#view').animate({marginLeft:'-18900px'},(2000));
	  })
	  
	jQuery('#d29').click(function(){
	 jQuery('#highlighter').animate({marginTop:'840px'},(200));
	 jQuery('#view').animate({marginLeft:'-19600px'},(2000));
	  })
	  	  
	jQuery('#d30').click(function(){
	 jQuery('#highlighter').animate({marginTop:'870px'},(200));
	 jQuery('#view').animate({marginLeft:'-20300px'},(2000));
	  })

	jQuery('#d31').click(function(){
	 jQuery('#highlighter').animate({marginTop:'900px'},(200));
	 jQuery('#view').animate({marginLeft:'-21000px'},(2000));
	  })

	jQuery('#d32').click(function(){
	 jQuery('#highlighter').animate({marginTop:'930px'},(200));
	 jQuery('#view').animate({marginLeft:'-21700px'},(2000));
	  })
	  
	jQuery('#d33').click(function(){
	 jQuery('#highlighter').animate({marginTop:'960px'},(200));
	 jQuery('#view').animate({marginLeft:'-22400px'},(2000));
	  })
	  
	jQuery('#d34').click(function(){
	 jQuery('#highlighter').animate({marginTop:'990px'},(200));
	 jQuery('#view').animate({marginLeft:'-23100px'},(2000));
	  })
	  
	jQuery('#d35').click(function(){
	 jQuery('#highlighter').animate({marginTop:'1020px'},(200));
	 jQuery('#view').animate({marginLeft:'-23800px'},(2000));
	  })
	  
	jQuery('#d36').click(function(){
	 jQuery('#highlighter').animate({marginTop:'1050px'},(200));
	 jQuery('#view').animate({marginLeft:'-24500px'},(2000));
	  })
	  
	jQuery('#d37').click(function(){
	 jQuery('#highlighter').animate({marginTop:'1080px'},(200));
	 jQuery('#view').animate({marginLeft:'-25200px'},(2000));
	  })
	  
	jQuery('#d38').click(function(){
	 jQuery('#highlighter').animate({marginTop:'1110px'},(200));
	 jQuery('#view').animate({marginLeft:'-25900px'},(2000));
	  })
    
  //forward button
    jQuery('.fb1, .fb2, .fb3, .fb4, .fb5, .fb6, .fb7, .fb8, .fb9, .fb10,.fb11, .fb12, .fb13, .fb14, .fb15').click(function(){
    jQuery('#view').animate({marginLeft: '-=700px'});
	jQuery('#highlighter').animate({marginTop:'+=30px'},(200));
	 })

    jQuery('.fb16, .fb17, .fb18, .fb19, .fb20, .fb21, .fb22, .fb23, .fb24, .fb25, .fb26, .fb27, .fb28, .fb29, .fb30, .fb31, .fb32, .fb33, .fb34, .fb35, .fb36, .fb37, .fb38').click(function(){
    jQuery('#view').animate({marginLeft: '-=700px'});
//	jQuery('#side-panel').animate({marginTop:'-=30px'},(200));
	jQuery('#highlighter').animate({marginTop:'+=30px'},(200));
	 })

    jQuery('.fb16, .fb17, .fb18, .fb19, .fb20, .fb21, .fb22, .fb23, .fb24, .fb25, .fb26, .fb27, .fb28').click(function(){
		jQuery('#side-panel').animate({marginTop:'-=30px'},(200));
	 })
 

  //back button
 
	jQuery('.bb1,.bb2,.bb3,.bb4,.bb5,.bb6,.bb7,.bb8, .bb9, .bb10, .bb11, .bb12, .bb13, .bb14, .bb15, .bb16').click(function(){
    jQuery('#view').animate({marginLeft: '+=700px'});
	 jQuery('#highlighter').animate({marginTop:'-=30px'},(200));
  })
    
	jQuery('.bb17, .bb18, .bb19, .bb20, .bb21, .bb22, .bb23, .bb24, .bb25, .bb26, .bb27, .bb28, .bb29, .bb30, .bb31, .bb32, .bb33, .bb34, .bb35, .bb36, .bb37, .bb38').click(function(){
    jQuery('#view').animate({marginLeft: '+=700px'});
	jQuery('#highlighter').animate({marginTop:'-=30px'},(200));
  })
  
  jQuery('.bb17, .bb18, .bb19, .bb20, .bb21, .bb22, .bb23, .bb24, .bb25, .bb26, .bb27, .bb28').click(function(){
	 jQuery('#side-panel').animate({marginTop:'+=30px'},(200));
  })

  /*********Teacher's Log**************/
     jQuery('.fb12, .bb12').click(function(){
	 jQuery('.p10-text').stop();
	})

	jQuery('.fb11, .bb13, #d12').click(function(){
	 jQuery('.p10-text').animate({marginTop:'-2150px'},(120000));
	})
	
	
	
	

})();	
  });
  