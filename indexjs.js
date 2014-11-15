$(document).ready(function() {
	$('.homelink').addClass('active');
	$('#Home').show();
	$('#Projects').hide();
	$('#Contact').hide();
	$('.homelink').click(function() {
		$(this).addClass('active');
		$('.projectlink').removeClass('active');
		$('.contactlink').removeClass('active');
		$('#Home').show();
		$('#Projects').hide();
		$('#Contact').hide();
	})
	$('.projectlink').click(function() {
		$(this).addClass('active');
		$('.homelink').removeClass('active');
		$('.contactlink').removeClass('active');
		$('#Home').hide();
		$('#Projects').show();
		$('#Contact').hide();
	})
	$('.contactlink').click(function() {
		$(this).addClass('active');
		$('.homelink').removeClass('active');
		$('.projectlink').removeClass('active');
		$('#Home').hide();
		$('#Projects').hide();
		$('#Contact').show();
	})
});
