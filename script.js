$(function() {


	$( window ).resize(function() {
		var windowWidth = $(window).width();
		$('div.head div.cell, div.body div.cell').each(function() {
			$(this).css( 'width', '20%');
		});
	}).trigger('resize');


	$('.menubutton').click(function(){
		$('nav').slideToggle();
	});
});