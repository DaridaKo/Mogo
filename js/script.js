$(document).ready(function(){
	$(".do__titleblock").click(function(event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});

	$('.slide__body').slick();
	$('.sliders__body').slick();

	$('.header__burger').click(function(){
		$('.header__burger, .header__menuicons').toggleClass('active');
	});
});