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
		$('.Home').hide();
		$('.Projects').show();
		$('.Contact').hide();
	})
	$('.contactlink').click(function() {
		$('.Home').hide();
		$('.Projects').hide();
		$('.Contact').show();
	})
});
