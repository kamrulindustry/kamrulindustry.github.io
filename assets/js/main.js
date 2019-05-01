(function ($){
	"use strict";
	jQuery(document).ready(function($) {
		$(".homepage-slider-wrap").owlCarousel({
			items: 1,
			loop: true,
			nav: false,
			dots:true,
			autoplay: true,
			autoplaySpeed:2000,
		});

		new WOW().init();

	});

	jQuery(window).load(function($) {

	});
}(jQuery));