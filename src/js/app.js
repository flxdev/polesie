$(document).ready(function () {

$(function() {

	// Create a new instance of Headhesive
	var options = {
		offset: 500
	};
	var header = new Headhesive('.header', options);

	$(".wrap-catalog-btn p").click(function(){
		$(".headhesive .main-nav").toggle();
	});
	/*//hide additional item on top
	var headItem = function(){
		var menuItem = $('.top-line-nav nav ul').find('li').last(),
			menuTarget = $('.drop-line-nav');
			console.log('bingo')

			menuTarget.prepend(menuItem);
	};
	headItem();
	$(window).resize(headItem);
	var menuAdaptive = function(){
		var items =  $('.main-nav nav ul').length;
		console.log(items);
	};
	menuAdaptive();
	*/

	//hover nemu
	(function(){
		var head = $('.header'),
			mask = $('.mask-js'),
			item = $('nav ul li.dropdown'),
			target = $('nav').find('.main-nav-dropmenu');

			item.mouseover(function(){
				if(head.hasClass('headhesive--stick')){
					mask.fadeIn();
				}
			});
			item.mouseleave(function(){
					mask.fadeOut();
			});

	})();

	//SLICK slider
	$('.slick-slider').slick({
		accessibility: true,
		arrows: true,
		dots: true,
		draggable: false,
		appendArrows: $('.galery__nav'),
  nextArrow:'<button type="button" class="carousel-next"><div class="icon"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 9 5" style="enable-background:new 0 0 9 5;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#9E9E9E;}</style><path class="st0" d="M4.5,5L9,0.6L8.4,0L4.5,3.7L0.6,0L0,0.6L4.5,5"/></svg></div></button>',
  prevArrow:'<button type="button" class="carousel-prev"><div class="icon"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 9 5" style="enable-background:new 0 0 9 5;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#9E9E9E;}</style><path class="st0" d="M4.5,5L9,0.6L8.4,0L4.5,3.7L0.6,0L0,0.6L4.5,5"/></svg></div></button>',
	});

	$('.slick-slider-discount').slick({
		accessibility: true,
		arrows: true,
		slidesToShow: 6,
		draggable: false,
		responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      }
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
    ]
	});
	$('.features').slick({
		accessibility: true,
		arrows: true,
		draggable: false,
		slidesToShow: 4,
		appendArrows: $('.features__nav'),
  nextArrow:'<button type="button" class="carousel-next"><div class="icon"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 9 5" style="enable-background:new 0 0 9 5;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#9E9E9E;}</style><path class="st0" d="M4.5,5L9,0.6L8.4,0L4.5,3.7L0.6,0L0,0.6L4.5,5"/></svg></div></button>',
  prevArrow:'<button type="button" class="carousel-prev"><div class="icon"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 9 5" style="enable-background:new 0 0 9 5;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#9E9E9E;}</style><path class="st0" d="M4.5,5L9,0.6L8.4,0L4.5,3.7L0.6,0L0,0.6L4.5,5"/></svg></div></button>',
		responsive: [
	    {
	      breakpoint: 1040,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
    	]
	});
	$('.slick-slider-discount-brand').slick({
		accessibility: true,
		arrows: true,
		slidesToShow: 7,
		draggable: false,
		responsive: [
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
    ]
	});

	$('.slick-slider-discount-news').slick({
		accessibility: true,
		arrows: true,
		slidesToShow: 3,
		draggable: false,
		responsive: [

    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
    ]
	});

	$('.slick-slider-discount-themed').slick({
		accessibility: true,
		arrows: true,
		slidesToShow: 7,
		draggable: false,
		responsive: [
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
    ]
	});

	$('.slick-slider-discount-hits').slick({
		accessibility: true,
		arrows: true,
		slidesToShow: 5,
		draggable: false,
		responsive: [
    {
      breakpoint: 1260,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
      }
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
    ]
	});

	//tabs BRAND
	$("#brand .tab_item").not(":first").hide();
	$("#brand .tab").click(function() {
		$("#brand .tab").removeClass("active").eq($(this).index()).addClass("active");
		$("#brand .tab_item").hide().eq($(this).index()).fadeIn().find('.slick-slider').slick('SetPosition');

	}).eq(0).addClass("active");

// function tab() {
// 		$(".js-tab").each(function(){
// 			var tab_link = $(this).find("a"),
// 				tab_item = $(this).find("li"),
// 				index = tab_link.data("href"),
// 				parents = $(this).parents(".js-tab_group"),
// 				tab_cont = parents.find(".js-tab-cont");

// 			tab_link.on("click", function() {
// 				var index = $(this).data("href");
// 				var activeTab = $(this).parents(".js-tab_group").find("."+index);
// 				$('.js-tab-item').removeClass("is-active");
// 				$(this).parent().addClass("is-active");
// 				tab_cont.fadeOut(0).removeClass('visible');
// 				setTimeout(function(){
//         	   			parents.find("."+index).addClass('visible')
//         			}, 10);
// 				parents.find("."+index).show().find('.js-slider').slick('setPosition');
//         	   		autoHeight();
// 				auto();
// 				return false;
// 			});
// 			tab_item.first().addClass("is-active");
// 			parents.find("."+index).show();
// 			setTimeout(function(){
//         	   		parents.find("."+index).addClass('visible')
//         	}, 10);
// 		});
// 	}
// 	tab();



//input blocks
	(function(){
		var input = $('.line-search-form').find('input[type=search]'),
			form = $('.line-search-form').find("form"),
			category = $('.select-container'),
			container =$('.line-search-form') ;

			input.focus(function(){
				form.css('border-color','#fff445');
				$(this).css('border-right-color','#fff445');
				category.fadeIn();

			})
			container.focusout(function(){
				console.log(2)
				form.css('border-color','#eaeaea');
				input.css('border-right-color','#eaeaea');
			})
			
	})();

// hover card
	(function(){
		var cart = $('.cart'),
			parent = cart.parent(),
			list = parent.find('.cart_list-wrapper');
		cart.on('mouseenter', function(){
			parent.addClass('active');
			cart.addClass('active');
			list.fadeIn('fast');

		});
		parent.on('mouseleave', function(){
			parent.removeClass('active');
			cart.removeClass('active');
			list.fadeOut('fast');
		});
		$(document).mouseup(function (e) {
		var container = $(".cart_list-wrapper");
		if (container.has(e.target).length === 0){
			container.hide();
		}
	});
	})();

	// hover nav
	(function(){

		var more = $('.dropdown-btn > a');

		more.on('click', function(event){
			event.preventDefault();
		});
		more.on('mouseenter', function(event){
			
			parent = $(this).parent(),
			list = parent.find('.drop-menu-wrapper');

			$(this).addClass('active');
			list.fadeIn('fast');

		parent.on('mouseleave', function(){
			list = $(this).find('.drop-menu-wrapper');
			more.removeClass('active');
			list.fadeOut('fast');
		});

		});
		
	})();


	/*$('.top-line-nav nav > ul > li:last-child').mouseover(function(){
		$(".drop-line-nav").css("display"," block");
		$('.top-line-nav nav > ul > li:last-child').find('a').first().css("color","#ff0000");
	});

	$('.drop-line-nav').mouseout(function(){
		$('.drop-line-nav').hide();
		$('.top-line-nav nav > ul > li:last-child').find('a').first().css("color","#3c3c3c");
	});*/



	// close block
	$( ".button_close" ).click(function() {
		$('.hidden_bg').css("display"," none");
	});

	// open hidden blocks
	$( ".top-line-region" ).click(function() {
		$('#regions-hidden').css("display"," block");
		$('.hidden_bg').css("display"," block");
	});

	// open hidden blocks
	$( ".top-line-call a" ).click(function() {
		$('#success_hidden').css("display"," block");
		$('.hidden_bg').css("display"," block");
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	
});

	$('.hits_block_wrap ').matchHeight({
		 property: 'min-height'
	});
	//images or links draggeble
	function drag() {
		$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	}
	drag();


var footerBtn = function(){
	
	var btn = $('.js-content-trigger'),
		menu = $('.js-content-trigger').next();

		if($(window).width() < 420){

			console.log(420)

			menu.css({display: 'none'});
			btn.addClass('spoiler');
			menu.addClass('spoiler-body');

			btn.click(function(){

		 	btn.removeClass('active');
		 	$(this).toggleClass('active');

		    if ($(this).next('.spoiler-body').css("display")=="none") {

		    	$('.spoiler-body').hide('normal');
		    	$(this).next('.spoiler-body').addClass('active').toggle('normal');
		    
		 	}
		 	/*else $('.spoiler-body').hide('normal').removeClass('active');
	 		return false;*/
		 	});
		}
		if($(window).width() > 422){
			menu.css({display: 'block'});
		}	 
};
footerBtn();
$(window).resize(footerBtn);
// adding >6 vtyu item to container
var menuAdd = function(){

	var btn = $('.js-container');
	var menuItems = $('.main-nav nav .menu-item:nth-child(n+6)');

	var topItem = $('.top-line-nav nav .top-item:nth-child(3)');
	var topCont = $('.top-line-nav .drop-line-nav');

	menuItems.clone().appendTo(btn);
	topItem.clone().prependTo(topCont);
	console.log(topCont)
	};
menuAdd();

var mobileSearch = function(){
		var trigger = $('.js-search-btn'),
			target =$('.mobile-search');

		trigger.on('click', function(){
			target.toggleClass('active');
		});
	};
mobileSearch();
 });
