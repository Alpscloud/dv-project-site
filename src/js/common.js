

document.addEventListener('DOMContentLoaded', function() {

	var fileInputs = document.querySelectorAll( '.input__file' );


	Array.prototype.forEach.call( fileInputs, function( input ) {
		var label    = input.parentNode,
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

	



	// ========= Smooth scrolling to the acnhors ===========
	$('.js-smooth-scroll-link').on('click', function (e) {
		e.preventDefault();
		var id = $(this).attr('href'),
			top = $(id).offset().top;

		$('html, body').animate({scrollTop: top}, 'slow');
	});	
	// ========= =========== =========== ===========

	// Popup
	$('.js-open-engineer-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup-engineer').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.js-open-consultation-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup-consultation').fadeIn(300);
		$('html').addClass('is-fixed');
	});

	$('.js-open-mchs-consultation-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup-mchs').fadeIn(300);
		$('html').addClass('is-fixed');
	});


	$('.js-close-popup-btn').on('click',function(e) {
		e.preventDefault();
		$(this).parents('.js-popup').fadeOut(300);
		$('html').removeClass('is-fixed');
	});

	$('.popup__overflow').on('click', function(e) {
		e.stopPropagation();

		var content = $(this).find('.popup__body');

		if(!content.is(e.target) && content.has(e.target).length === 0) {
			$('html').removeClass('is-fixed');
			$('.js-popup').fadeOut(300);
		}

	});
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
		pagination: {
			el: '.js-portfolio-desktop-slider-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.js-portfolio-desktop-slider-btn-next',
			prevEl: '.js-portfolio-desktop-slider-btn-prev',
		},
		
	});

	var portfolioMobileSlider = new Swiper('.js-portfolio-mobile-slider', {
		slidesPerView: 'auto',
		speed: 500,
		
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
		
		spaceBetween: 0,
		navigation: {
			nextEl: '.js-feedbacks-slider-btn-next',
			prevEl: '.js-feedbacks-slider-btn-prev',
			disabledClass: 'is-disabled'
		},
		
	});

	var projectSliderInit = $('.js-project-slider-main');

	if(projectSliderInit.length > 0) {
		var projectSliderThumbs = new Swiper('.js-project-slider-thumbnails', {
			spaceBetween: 10,
			slidesPerView: 3,
			loop: true,
			freeMode: false,
			loopedSlides: 1, //looped slides should be the same
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			touchRatio: 0
		});

		var galleryTop = new Swiper('.js-project-slider-main', {
			spaceBetween: 0,
			loop: true,
			loopedSlides: 1, //looped slides should be the same
			navigation: {
				nextEl: '.js-project-slider-main-btn-next',
				prevEl: '.js-project-slider-main-btn-prev',
			},

			thumbs: {
				swiper: projectSliderThumbs,
			},
		});
	}

	

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

	// ========= Ajax form ===========
	$('.js-input').on('focus',function() {
		if($(this).hasClass('is-error')) {
			$(this).removeClass('is-error');
		}
	});


 $('.js-form').on('submit', function(e) {
		e.preventDefault();

		var self = $(this);

		var inputs = self.find('.js-input'),
		flag = true;

		var formData = new FormData(self.get(0));

		// Validate
		$(inputs).each(function() {
			if(!$(this).val() || $(this).val() == "") {
				$(this).addClass('is-error');
				flag = false;
			}
		});

		if(!flag) {return false;}

		$.ajax({
			contentType: false, 
      processData: false, 
      type: "POST",
			url: "/wp-content/themes/dv-project-theme/contacts.php", //Change
			data: formData
		}).done(function() {
			self.trigger("reset");
			self.find(".input__file--name").removeClass('is-active');
			window.location.href ='/typage';
		});

	});
	// ========= =========== =========== ===========


	$('.js-input-phone').mask("+7(999)-999-99-99",{placeholder:" "});
});
