$(document).ready(function() {
	$('body').scrollspy({ target: '.nav masthead-nav' })
	$('.nav masthead-nav li').click(function() {
		console.log("click");	
	})
});
