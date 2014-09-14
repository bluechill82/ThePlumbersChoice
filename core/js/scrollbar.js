$(document).ready(function(){
	$(function()
		{
			$('.scroll-pane').jScrollPane();
			$('.scroll-pane-arrows').jScrollPane(
		{
			showArrows: true,
			horizontalGutter: 10
		}
		);
	});
});