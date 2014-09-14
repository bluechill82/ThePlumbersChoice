$(document).ready(function() {
/*****************Init***********************/
	$("#ruud-owner-manual-page-2").hide();
	$("#ruud-owner-manual-page-3").hide();

 /*********Ruud Water Heaters***************/
/****Ruud Page 1**/
 $(".ra16").click(function(e){
		$("#ruud-owner-manual-page-1").hide();
		$("#ruud-owner-manual-page-2").show();
		e.preventDefault(); 
		window.history.pushState('','','/theplumberschoice.com/water-heater-owner-manuals/ruud-water-heaters/page-2-of-3');	
		$('.scroll-pane').jScrollPane();
   });

   /****Ruud Page 2**/
   
 $(".la17").click(function(e){
		$("#ruud-owner-manual-page-2").hide();
		$("#ruud-owner-manual-page-1").show();
		e.preventDefault(); 
		window.history.pushState('','','/theplumberschoice.com/water-heater-owner-manuals/ruud-water-heaters/page-1-of-3');	
		$('.scroll-pane').jScrollPane();
   });
   
 $(".ra17").click(function(e){
		$("#ruud-owner-manual-page-2").hide();
		$("#ruud-owner-manual-page-3").show();
		e.preventDefault(); 
		window.history.pushState('','','/theplumberschoice.com/water-heater-owner-manuals/ruud-water-heaters/page-3-of-3');	
		$('.scroll-pane').jScrollPane();
   });
   
   /****Ruud Page 3**/
   
 $(".la18").click(function(e){
		$("#ruud-owner-manual-page-3").hide();
		$("#ruud-owner-manual-page-2").show();
		e.preventDefault(); 
		window.history.pushState('','','/theplumberschoice.com/water-heater-owner-manuals/ruud-water-heaters/page-2-of-3');	
		$('.scroll-pane').jScrollPane();
   });
         
   
});
   