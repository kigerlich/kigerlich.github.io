$(document).ready(function() {
	$('.Home').show().addClass('.active');
	$('.Projects').hide().removeClass('.active');
	$('.Contact').hide().removeClass('.active');
	$('.homelink').click(function() {
		$('.Home').show().addClass('.active');
		$('.Projects').hide().removeClass('.active');
		$('.Contact').hide().removeClass('.active');
	})
	$('.projectlink').click(function() {
		$('.Home').hide().removeClass('.active');
		$('.Projects').show().addClass('.active');
		$('.Contact').hide().removeClass('.active');
	})
	$('.contactlink').click(function() {
		$('.Home').hide().removeClass('.active');
		$('.Projects').hide().removeClass('.active');
		$('.Contact').show().addClass('.active');
	})
});
