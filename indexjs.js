$(document).ready(function() {
	$('.Home').show();
	$('.Projects').hide();
	$('.Contact').hide();
	$('.homelink').click(function() {
		$('.Home').show();
		$('.Projects').hide();
		$('.Contact').hide();
	})
	$('.projectlink').click(function() {
		$('.Home').toggle();
		$('.Projects').toggle();
		$('.Contact').hide();
	})
	$('.contactlink').click(function() {
		$('.Home').hide();
		$('.Projects').hide();
		$('.Contact').toggle();
	})
});
