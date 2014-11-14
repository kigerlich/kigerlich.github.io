$(document).ready(function() {
	$('body').scrollspy({ target: '.nav masthead-nav' })
	$('.homelink').click(function() {
		$('.inner cover').show();
		$('.Projects').hide();
		$('.Contact').hide();
	})
	$('.projectlink').click(function() {
		$('.inner cover').hide();
		$('.Projects').show();
		$('.Contact').hide();
	})
	$('.contactlink').click(function() {
		$('.inner cover').hide();
		$('.Projects').hide();
		$('.Contact').show();
	})
});
