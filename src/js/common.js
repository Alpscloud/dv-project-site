

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

	$('.js-open-service-popup-btn').on('click',function(e) {
		e.preventDefault();
		$('.js-popup-service').fadeIn(300);
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
    $('.js-input').on('focus', function () {
        if ($(this).hasClass('is-error')) {
            $(this).removeClass('is-error');
        }
    });


    var send_form_flag = false; /* false resend form while loading */
    $('.js-form').on('submit', function (e) {
        e.preventDefault();

        var self = $(this);

        self.find('.form-send-error-text').hide();

        var inputs = self.find('.js-input'),
            flag = true;

        var formData = new FormData(self.get(0));

        // Validate
        $(inputs).each(function () {
            if (!$(this).val() || $(this).val() == "") {
                $(this).addClass('is-error');
                flag = false;
            }
        });
		
		var error_div = self.find('.form-send-error-text');
		if (error_div.length == 0) {
            self.find('.btn[type="submit"]').after('<div class="form-send-error-text" style="display:none;"></div>');
            error_div = self.find('.form-send-error-text');
        }

		var VALIDATE_FILE_EXTENSIONS = false;
		var VALIDATE_FILE_SIZE = true;
		var TRUE_ALL_FILE_SIZE = 10000000;
        var TRUE_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'doc', 'xls', 'ppt', 'pps', 'docm', 'docx', 'xlsx', 'xlsm', 'xlsb', 'pptx', 'pptm', 'ppsx', 'ppsm', 'pdf', 'rar', 'zip', '7z', 'tar', 'tar.gz', 'gz', 'gzip', 'tar-gz', 'dwg'];
        try {
			var file_list = formData.getAll("fileFF[]");
            	var no_valid_files = [];
            	var all_files_size = 0;
            	for (var i = 0, file; file = file_list[i]; i++) {
            	    var sFileName = file.name;
            	    var sFileExtension = sFileName.split('.')[sFileName.split('.').length - 1].toLowerCase();
            	    all_files_size += file.size;
            	    if (VALIDATE_FILE_EXTENSIONS === true && !(TRUE_EXTENSIONS.includes(sFileExtension))) {
            	        no_valid_files.push(sFileName);
            	    }
            	}
            	if (no_valid_files.length > 0 && VALIDATE_FILE_EXTENSIONS === true) {
            	    flag = false;
					self.find('.input__file[name="fileFF[]"]').val('');
					self.find('.input__file--name').html('');
            	    error_div = self.find('.form-send-error-text');
            	    error_div.html('Извините, письмо не отправлено. <br>Невозможно загрузить некоторые файлы: ' + no_valid_files.join('<br>'));
            	    error_div.show();
            	    return false;
            	}
            	if (all_files_size > TRUE_ALL_FILE_SIZE && VALIDATE_FILE_SIZE === true) {
					flag = false;
					self.find('.input__file[name="fileFF[]"]').val('');
					self.find('.input__file--name').html('');
					error_div = self.find('.form-send-error-text');
            	    error_div.html('Письмо не может быть отправлено, так как файл весит больше 10мб, вышлете его на почту <a href="mailto:aps@dv-p.ru">aps@dv-p.ru</a>');
            	    error_div.show();
            	    return false;
            	}
        } catch (exception) {
			
        }

        if (!flag) {
            return false;
        }
        if (send_form_flag) return false;

        var sendBtn = self.find('.btn[type="submit"] .btn__text');
        var savedBtnText = sendBtn.html();
        sendBtn.html('Идет отправка формы');
        send_form_flag = true;
        $.ajax({
            contentType: false,
            processData: false,
            type: "POST",
            url: "/wp-content/themes/dv-project-theme/contacts.php", //Change
            data: formData,
            success: function (data) {
                sendBtn.html(savedBtnText);
                send_form_flag = false;
                error_div = self.find('.form-send-error-text');
                if (data == "OK") {
                    self.trigger("reset");
                    self.find(".input__file--name").removeClass('is-active');
                    error_div.hide();
                    window.location.href = '/typage';
                } else {
                    error_div.html(data);
                    error_div.show();
                }
            },
            error: function (resp) {
                sendBtn.html(savedBtnText);
                send_form_flag = false;

                error_div = self.find('.form-send-error-text');
                error_div.html('Ошибка отправки формы');
                error_div.show();
            }
        });
    });
    // ========= =========== =========== ===========


	$('.js-input-phone').mask("+7(999)-999-99-99",{placeholder:" "});
});
