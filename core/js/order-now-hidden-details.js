$(document).ready(function() {
	$("#art-1").hide;
	$("#art-2").hide;
	$("#art-3").hide; 
	$("#art-4").hide;
	$("#art-5").hide;
	$("#art-6").hide;
	$("#art-7").hide;
	$("#art-8").hide;

	$('#79098-product-details').click(function(e){
		e.preventDefault();
		$("#art-1").show;	
		$('#close-details').fadeIn();
	});
	
});