

document.addEventListener('DOMContentLoaded', function() {

	var fileInputs = document.querySelectorAll( '.input__file' );


	Array.prototype.forEach.call( fileInputs, function( input ) {
		var label    = input.nextElementSibling,
		labelVal = label.innerHTML;

		input.addEventListener('change', function(e) {
			var fileName = '',
			nextElem = label.nextElementSibling;

			if(nextElem.classList.contains('active')) {
				nextElem.classList.remove('active');
			}

			if( this.files && this.files.length > 1 ) {
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			}
			else {
				fileName = e.target.value.split( '\\' ).pop();
			}

			if( fileName ) {	
				nextElem.innerHTML = fileName;
				nextElem.classList.add('is-active');
			} else {

				label.innerHTML = labelVal;
			}
		});
	});

});


$(document).ready(function() {
	//  ========= Variables =========
	var body = $('body'),
			html = body.width(),
			timer; // for disable scroll
	// ========= =========== =========== ===========

	// Disable hover effect when client scrolles the page
	$(window).on('scroll',function() {
		clearTimeout(timer);
		if(!body.hasClass('disable-hover')) {
			body.addClass('disable-hover');
		}

		timer = setTimeout(function() {
			body.removeClass('disable-hover');
		}, 200);
	});


	$('.js-open-mobile-menu-btn').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('is-active');

		$('.js-nav').stop().slideToggle(150);
	});

	// Sliders
	var portfolioDesktopSlider = new Swiper('.js-portfolio-desktop-slider', {
		speed: 500,
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
		pagination: {
			el: '.js-portfolio-desktop-slider-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.js-portfolio-desktop-slider-btn-next',
			prevEl: '.js-portfolio-desktop-slider-btn-prev',
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
	});

	var portfolioMobileSlider = new Swiper('.js-portfolio-mobile-slider', {
		slidesPerView: 'auto',
		speed: 500,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false
		},
		spaceBetween: 0,
		navigation: {
			nextEl: '.js-portfolio-mobile-slider-btn-next',
			prevEl: '.js-portfolio-mobile-slider-btn-prev',
			disabledClass: 'is-disabled'
		},
		
	});

	var licensesSlider = new Swiper('.js-licenses-slider', {
		slidesPerView: 'auto',
		touchRatio: 1,
		speed: 500,
		spaceBetween: 0,
		touchRatio: 0,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: '.js-licenses-slider-btn-next',
			prevEl: '.js-licenses-slider-btn-prev',
			disabledClass: 'is-disabled'
		},
		breakpoints: {
			620: {
				slidesPerView: 3,
				touchRatio: 0,
				autoplay: {
					delay: 4000,
					disableOnInteraction: false
				},
			}
		}
		
	});

	var feedbacksSlider = new Swiper('.js-feedbacks-slider', {
		slidesPerView: 1,
		speed: 500,
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: true
		},
		spaceBetween: 0,
		navigation: {
			nextEl: '.js-feedbacks-slider-btn-next',
			prevEl: '.js-feedbacks-slider-btn-prev',
			disabledClass: 'is-disabled'
		},
		
	});

	// Fancy
	$('[data-fancybox]').fancybox({
		toolbar  : false,
		smallBtn : true
	});


	$('.js-toggle-feedback-text-btn').on('click', function(e) {
		e.preventDefault();

		$(this).toggleClass('is-toggled');

		$(this).parents('.feedback').find('.feedback__text span').stop().slideToggle(150);
	});

	$('.js-toggle-faq').on('click', function(e) {
		e.preventDefault();

		$(this).parents('.faq__item').toggleClass('is-toggled');

		$(this).parents('.faq__item').find('.faq__item--body').stop().slideToggle(170);
	});


	$('.js-input-phone').mask("+7(999)-999-99-99",{placeholder:" "});
});
