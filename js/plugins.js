// JavaScript Document

var headerH, posi_top;
var $header = $('.site-header');

var isTop = ($('.top-mv').length) ? true : false;

$(function () {


	$('.sp-zoom').each(function () {
		var url = $(this).attr('src');
		$(this).after('<div class="btn-zoom pc-hide"><a href="' + url + '" target="_blank"><i class="fas fa-search-plus"></i> zoom in</a></div>');
	});

	if ($('.site-main.l-narrow').length) {
		var path = $('.lower-page-visual').css("background-image");
		path = path.replace(/(?:^url\(["']?|["']?\)$)/g, "");
		$('.lower-page-visual').before('<div class="index-bg"><img src="' + path + '"></div>');
	}


	$(".toggle-switch").on("click", function () {
		if ($(this).hasClass("active")) {
			$(".toggle-cont").slideUp("fast");
			$(".toggle-switch").removeClass("active");

		} else {
			$(".toggle-cont").slideUp("fast");
			$(".toggle-switch").removeClass("active");
			$(this).next(".toggle-cont").slideDown("fast");
			$(this).toggleClass("active");
			$(".toggle-cont2").slideUp("fast");
			$(".toggle-switch2").removeClass("active");
		}
	});
	
	// MATCH MEDIA
	var mql = window.matchMedia("screen and (min-width: 768px)");

	function checkBreakPoint(mql) {
		if (!mql.matches) {
			// for SP

		} else {
			$(window).scroll(function () {
				var scroll_y = $(this).scrollTop();
				if (scroll_y > 100) {
					$(".toggle-cont2").slideUp("fast");
					$(".toggle-switch2").removeClass("active");
				} else {
				}
			});
		}
	}
	mql.addListener(checkBreakPoint);
	checkBreakPoint(mql);
	
	
	$(".toggle-switch2").on("click", function () {
		if ($(this).hasClass("active")) {
			$(this).next(".toggle-cont2").slideUp("fast");
			$(this).removeClass("active");
		} else {
			$(this).next(".toggle-cont2").slideDown("fast");
			$(this).toggleClass("active");
		}
	});

	$('.toggle-cont').on('mouseleave', function () {
		$(this).slideUp("fast").prev(".toggle-switch").removeClass('active');
	});

	//IMG FIT
	objectFitImages('img.ofi');
	objectFitImages('.list-pickup li .pickup-img img');

	// perfectScrollbar
	$(".sp-scroll").perfectScrollbar();
	$(".scroll-content").perfectScrollbar();


	var galleryThumbs = new Swiper('.swiper-container.thumbnail', {
		spaceBetween: 5,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop = new Swiper('.swiper-container.main', {
		spaceBetween: 0,
		autoHeight: true,
		navigation: {
			nextEl: '.main .swiper-button-next',
			prevEl: '.main .swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});
	var galleryThumbs2 = new Swiper('.swiper-container.thumbnail2', {
		spaceBetween: 5,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop2 = new Swiper('.swiper-container.main2', {
		spaceBetween: 0,
		autoHeight: true,
		navigation: {
			nextEl: '.main2 .swiper-button-next',
			prevEl: '.main2 .swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs2
		}
	});
	var galleryThumbs3 = new Swiper('.swiper-container.thumbnail3', {
		spaceBetween: 5,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop3 = new Swiper('.swiper-container.main3', {
		spaceBetween: 0,
		autoHeight: true,
		navigation: {
			nextEl: '.main3 .swiper-button-next',
			prevEl: '.main3 .swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs3
		}
	});
	var galleryThumbs4 = new Swiper('.swiper-container.thumbnail4', {
		spaceBetween: 5,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop4 = new Swiper('.swiper-container.main4', {
		spaceBetween: 0,
		autoHeight: true,
		navigation: {
			nextEl: '.main4 .swiper-button-next',
			prevEl: '.main4 .swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs4
		}
	});
	var galleryThumbs5 = new Swiper('.swiper-container.thumbnail5', {
		spaceBetween: 5,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop5 = new Swiper('.swiper-container.main5', {
		spaceBetween: 0,
		autoHeight: true,
		navigation: {
			nextEl: '.main5 .swiper-button-next',
			prevEl: '.main5 .swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs5
		}
	});
	var galleryThumbs6 = new Swiper('.swiper-container.thumbnail6', {
		spaceBetween: 5,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});
	var galleryTop6 = new Swiper('.swiper-container.main6', {
		spaceBetween: 0,
		autoHeight: true,
		navigation: {
			nextEl: '.main6 .swiper-button-next',
			prevEl: '.main6 .swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs6
		}
	});

	var vertical = new Swiper('.swiper-container.vertical', {
		effect: 'fade',
		speed: 3000,
		autoplay: {
			delay: 5000,
		},
		loop: true,
		breakpoints: {
			767: {
				pagination: {
					el: '.swiper-pagination',
					clickable: false
				}
			}
		}
	});

	// FOOTER BANNER SLIDER
	var mySwiper = new Swiper('.footer-banner-silder-container', {
		centeredSlides: true,
		slidesPerView: 6,
		spaceBetween: 10,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		loop: true,
		breakpoints: {
			767: {
				slidesPerView: 7
			}
		}
	});

	//ACCORDION
	$(".accordion-mod .switch").on("click", function () {
		if ($(this).next().css("display") == "none") {
			$(this).next().slideDown("fast");
			$(this).toggleClass("active");

			var galleryThumbs = new Swiper('.swiper-container.thumbnail', {
				spaceBetween: 5,
				slidesPerView: 4,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});
			var galleryTop = new Swiper('.swiper-container.main', {
				spaceBetween: 0,
				autoHeight: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				thumbs: {
					swiper: galleryThumbs
				}
			});
			var galleryThumbs2 = new Swiper('.swiper-container.thumbnail2', {
				spaceBetween: 5,
				slidesPerView: 4,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});
			var galleryTop2 = new Swiper('.swiper-container.main2', {
				spaceBetween: 0,
				autoHeight: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				thumbs: {
					swiper: galleryThumbs2
				}
			});
			var galleryThumbs3 = new Swiper('.swiper-container.thumbnail3', {
				spaceBetween: 5,
				slidesPerView: 4,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});
			var galleryTop3 = new Swiper('.swiper-container.main3', {
				spaceBetween: 0,
				autoHeight: true,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				thumbs: {
					swiper: galleryThumbs3
				}
			});
			var galleryThumbs4 = new Swiper('.swiper-container.thumbnail4', {
				spaceBetween: 5,
				slidesPerView: 4,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});
			var galleryTop4 = new Swiper('.swiper-container.main4', {
				spaceBetween: 0,
				autoHeight: true,
				navigation: {
					nextEl: '.main4 .swiper-button-next',
					prevEl: '.main4 .swiper-button-prev',
				},
				thumbs: {
					swiper: galleryThumbs4
				}
			});
			var galleryThumbs5 = new Swiper('.swiper-container.thumbnail5', {
				spaceBetween: 5,
				slidesPerView: 4,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});
			var galleryTop5 = new Swiper('.swiper-container.main5', {
				spaceBetween: 0,
				autoHeight: true,
				navigation: {
					nextEl: '.main5 .swiper-button-next',
					prevEl: '.main5 .swiper-button-prev',
				},
				thumbs: {
					swiper: galleryThumbs5
				}
			});
			var galleryThumbs6 = new Swiper('.swiper-container.thumbnail6', {
				spaceBetween: 5,
				slidesPerView: 4,
				freeMode: true,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			});
			var galleryTop6 = new Swiper('.swiper-container.main6', {
				spaceBetween: 0,
				autoHeight: true,
				navigation: {
					nextEl: '.main6 .swiper-button-next',
					prevEl: '.main6 .swiper-button-prev',
				},
				thumbs: {
					swiper: galleryThumbs6
				}
			});

		} else {
			$(this).next().slideUp("fast");
			$(this).removeClass("active");
		}
		var space = (window.matchMedia('(max-width:767px)').matches) ? 0 : 20;
		var headerH = $('.site-header-nav').innerHeight() + $('#js-index-nav').innerHeight() - space;
		var n = window.location.href.slice(window.location.href.indexOf('?') + 4);
		var p = $(this).offset().top - headerH;
		$('html,body').animate({
			scrollTop: p
		}, 'slow', 'easeOutBack');
		return false;
	});
	$(".accordion-mod .close").on("click", function () {
		$(this).parent().slideUp("fast");
		$(this).parent().prev().removeClass("active");
		var n = window.location.href.slice(window.location.href.indexOf('?') + 4);
		var p = $(this).parent().prev().offset().top - headerH;
		$('html,body').animate({
			scrollTop: p
		}, 'slow', 'easeOutBack');
		return false;
	});

	var $grid = $('.grid').imagesLoaded(function () {
		$grid.masonry({
			itemSelector: '.ph'
		});
	});

	$('#js-news-tab .tab-btns a').on('click', function () {
		$('#js-news-tab .tab-btns a').addClass('fade');
		$(this).removeClass('fade');
		var tab = $(this).data('tab');
		$('#js-news-tab .tab-contents > div').css('display', 'none');
		$('#js-news-tab .tab-contents .' + tab).fadeIn();
		return false;
	});


	$('#js-index-nav > li').on('click', function () {
		if ($(this).children('.toggle-btn').hasClass('active')) {
			$(this).children('.toggle-btn').removeClass('active');
			$(this).find('.toggle-cont').slideUp(100);

		} else {
			$('#js-index-nav .toggle-btn').removeClass('active');
			$(this).children('.toggle-btn').addClass('active');
			$('#js-index-nav .toggle-cont').css('display', 'none');
			$(this).find('.toggle-cont').slideDown(200);
			$(".toggle-cont2").slideUp(100);
			$(".search-toggle.toggle-switch2").removeClass('active');
		}
	});
	$('#js-index-nav .toggle-cont').on('mouseleave', function () {
		$('#js-index-nav .toggle-btn').removeClass('active');
		$('#js-index-nav .toggle-cont').slideUp(100);
	})

	//   Smooth Scroll
	var space = (window.matchMedia('(max-width:767px)').matches) ? 0 : 20;
	var headerH = $('.site-header-nav').innerHeight() + $('#js-index-nav').innerHeight() - space;
	var speed = 500;
	$('a[href^="#"]').click(function () {
		var href = jQuery(this).attr("href");
		if (href !== '#') {
			var target = $(href === "#" || href === "" ? 'html' : href);
			var position = target.offset().top - headerH;
			setTimeout(function () {
				jQuery("html, body").animate({
					scrollTop: position
				}, speed, "swing");
			}, 100);
			return false;
		}
	});

	var hash = location.hash;
	if (hash) {
		var $target = jQuery(hash);
		if ($target.length) {
			var pos = $target.offset().top - headerH - 20;
			jQuery("html, body").animate({
				scrollTop: pos
			}, 400);
		}
	}

	var topBtn = $('.pagetop');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});

	$('.menu-cont-wrap .switch').on('click', function () {
		$('.menu-cont-wrap ul').slideUp(100);
		if ($(this).hasClass('open')) {
			$(this).removeClass('open');
		} else {
			$('.menu-cont-wrap .switch').removeClass('open');
			$(this).addClass('open').next().slideDown(500);
		}
	});


	headerH = $('.site-header').innerHeight() + $('#js-index-nav').innerHeight();

	if (isTop) {
		set_posi();
	}

});

$(window).resize(function () {

	if (isTop) {
		set_posi();
	}

});

$(window).scroll(function () {

	if (isTop) {
		set_posi();
	}

});

function set_posi() {


	var $nav = $('.index-nav');
	var winH = $(window).innerHeight();
	var headerH = $('.site-header').innerHeight();
	var indexNavH = $('.index-nav').innerHeight();
	var fixH = winH - 157;
	var halfH = winH / 2;

	var scrlTop = $(window).scrollTop();

	if (fixH < scrlTop) {
		$nav.addClass('fixed');
		$('.site-header').addClass('js-header-narrow');
	} else {
		$nav.removeClass('fixed');
		$('.site-header').removeClass('js-header-narrow');
	};

	if (halfH < scrlTop) {
		$nav.addClass('toggle-upper');
	} else {
		$nav.removeClass('toggle-upper');
	}


}


// SP-TEL-LINK
if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
	$(function () {
		$('.tel-link').each(function () {
			var str = $(this).html();
			if ($(this).children().is('img')) {
				$(this).html($('<a>').attr('href', 'tel:' + $(this).children().attr('alt').replace(/-/g, '')).append(str + '</a>'));
			} else {
				$(this).html($('<a>').attr('href', 'tel:' + $(this).text().replace(/-/g, '')).append(str + '</a>'));
			}
		});
	});
}
