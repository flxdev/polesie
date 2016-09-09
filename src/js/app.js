$(window).on('load',function(){
	if($('.selection_wrapper').length){

		$('.input_label').each(function(){
			filterItems($(this));
		})
	}
	if($('.compare_fakehead-inner').length){
		$(".headhesive").addClass('is-hidden');
	}
});
$(document).ready(function () {

if($('.compare_inner').length){
	var Comparescroll = function(){
		var target = $('.compare-wrapper');
		var target2 = $('.compare_fakehead-inner');
		var targetW = $('.compare_inner').width() - 250;
		var scroler = $('.compare-scroller');


		scroler.css({'width': targetW});
		
		$('.compare-scroll-inner').on('scroll',function(e){
				var scroll = $(this).scrollLeft();
				target.scrollLeft(scroll);
				target2.scrollLeft(scroll);
		})
	}
	Comparescroll();
}

if($('.compare_inner.row-fixed').length){
	$('.compare-scroll-outer').hide();
	console.log('fix')
}


if($('.compare_fakehead-inner').length){
	var head = $('.compare_fakehead'),
		headName = head.find('.compare-item-name'),
		scrollC = $('.compare-scroll-outer'),
		table = $('.compare_inner').find('.compare_group').first();
		scT = table.offset().top,
		cBot = $('.compare-wrapper')[0].getBoundingClientRect().bottom,
		tableM = $('.compare_group');
		

	$(window).on('scroll',function(){
		var wTop = $(window).scrollTop() + $(window).height();
			console.log(cBot, wTop, scT);
			if(wTop > scT+150 && wTop < cBot- 70){
				scrollC.addClass('pos-b').removeClass('pos-c');
				
				console.log(1);
			}
			else if( wTop > cBot- 70){
				console.log(2);
				scrollC.addClass('pos-c').removeClass('pos-b');
			}
			else{
				console.log('top')
				
				scrollC.removeClass('pos-b').removeClass('pos-c');
			}
		
	});
	$(window).on('scroll',function(){
		var scT2 = table.offset().top - $(window).scrollTop();
		console.log(scT2);
		if(scT2 < 50){

			head.addClass('is-visible');
		}else{

			head.removeClass('is-visible');
		}

		});
	tableM.each(function(){
		var _ = $(this);
		var text = _.find('.table-title .text').text()
			$(window).on('scroll',function(){
				var pos = _.offset().top - $(window).scrollTop();
				if(pos < 30){
					headName.text(text);
				}
		});
	});
	}

var mapArea = function(){
		var form = $('.region_form');
		var inputs = form.find('.input-real');

		$(document).on("click", ".map-zone", function() {
			var val = $(this).data('area');
			
			  $(this)[0].classList.add("active");
			  $(this).siblings().removeClass('active');

			  	inputs.each(function(){
			  		var _ = $(this),
			  		area = _.attr('value');

			  		if(area == val ){
			  			_.prop('checked',true);
			  		}
			  	})
			});
		$(".input_label").each(function(){
			  	var _ = $(this);
			  	_.click(function(){
			  		var area = $(this).find("input").attr('value');
			  		var zone = $('#map_main');
			  		zone.find("[data-area=" + area + "]").addClass("active").siblings().removeClass("active");
			  	})
			  });
	}
	mapArea();
$(function() {

//main-mobile menu

	$('.js-mobile-menu-btn').click(function(){
		var  _ = $(this),
		menu = $('.nav >ul'),
		content = $('.content_main-wrapper');

		if(!_.hasClass('mobile-back')){

			_.css({'transform': 'translateX(-100%)'});
			content.addClass('is-hidden');
			menu.removeClass('is-hidden');
			$('.mobile-back').removeClass('is-hidden');
			$('body').css({'overflow': 'hidden'});

		}
		else{

			_.addClass('is-hidden');
			content.removeClass('is-hidden');
			menu.addClass('is-hidden');
			$('body').removeAttr('style');
			_.prev().css({'transform': 'translateX(0)'});
		}

		$(window).resize(function(){
			if($(window).width() > 768){
				$('body').removeAttr('style');
				content.removeClass('is-hidden');
				menu.addClass('is-hidden');
				$('.mobile-back').addClass('is-hidden').prev().css({'transform': 'translateX(0)'});
				$('.menu-item> a').removeClass('active');
				$('.main-nav-dropmenu').removeAttr('style');
				$('.sub-item > a').removeClass('active');
				$('.drop-nav-dropmenu').removeAttr('style');
			}
		})
	})

var mobileMain = function(){
		var menuItem = $('.menu-item> a');
		if($(window).width() <770){

			menuItem.each(function(){

					var _ = $(this);

			_.click(function(){

			var target = _.parent().find('.main-nav-dropmenu');

					if(!_.hasClass('active')) {
						menuItem.removeClass('active');
						$('.main-nav-dropmenu').removeAttr('style');
						_.addClass('active')
						target.fadeIn(300);

					} else {
						_.removeClass('active');
						target.fadeOut({

							duration: 300,
							complete: function(){

								$(this).removeAttr('style')
							}
						})
					}
				})
			});
			

		}
}

mobileMain();
var mobileSub = function(){
		var subItem = $('.sub-item > a');
		if($(window).width() <770){

			subItem.each(function(){

					var _ = $(this);

			_.click(function(){
				console.log(1);
			var target = _.parent().find('.drop-nav-dropmenu');

					if(!_.hasClass('active')) {
						subItem.removeClass('active');
						$('.drop-nav-dropmenu').removeAttr('style');
						_.addClass('active')
						target.fadeIn(300);

					} else {
						_.removeClass('active');
						target.fadeOut({

							duration: 300,
							complete: function(){

								$(this).removeAttr('style')
							}
						})
					}
				})
			});
			

		}
}
mobileSub();
	// Create a new instance of Headhesive
	var options = {
		offset: 400
	};
	var header = new Headhesive('.header', options);
	
	$(".wrap-catalog-btn p").click(function(){
		$(".headhesive .main-nav").toggle();
	});


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
	//scroll to element
	$(".js-scroll").click(function (e) {

        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;

        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 120}, 500);
         e.preventDefault();
         if (elementClick == '#tab_item') {
         	$("#brand .tab").removeClass("active").eq(1).addClass("active");
        $("#brand").find('.tab_item').hide().eq($("#brand .active").index()).fadeIn();
         }
        
    });
    // 2-0 2-2 all items
	if($('.js-all-title').length){
		var cont = $('.selection_body'),
			trigger = $('.js-all-title'),
			target = $('.js-all-inner');
			сontainer= $('.select-all-cont');

			trigger.each(function(){
				var _ = $(this);
				_.click(function(){
					var currTarg = _.parent().find(target);
					if(currTarg.hasClass('active')){
							currTarg.removeClass('active');
					}
					else{
						
						currTarg.addClass('active');
					}
				$(document).mouseup(function (e){ 
					if (!currTarg.is(e.target) 
					    && currTarg.has(e.target).length === 0 && !_.is(e.target)) {
						currTarg.removeClass('active');
						console.log(1);
					}
				});
			});
		});


	}
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

	if($('.discount').hasClass('discount-inner')){
		$('.slick-slider-discount-themed').slick({
		accessibility: true,
		arrows: true,
		slidesToShow: 5,
		draggable: false,
		responsive: [
    {
      breakpoint: 1040,
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
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 380,
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
		slidesToShow: 4,
		draggable: false,
		responsive: [
	{
      breakpoint: 1200,
      settings: {
      slidesToShow: 3,
      slidesToScroll: 1
      }
    },
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 490,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
    ]
	});
	}
	else{
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
        slidesToShow: 1,
        slidesToScroll: 1,
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

	}

	if($('#brand').length){
		//tabs BRAND
	$("#brand").find('.tab_item').not(":first").hide();

	$("#brand .tab").click(function() {
		$("#brand .tab").removeClass("active").eq($(this).index()).addClass("active");
		$("#brand").find('.tab_item').hide().eq($("#brand .active").index()).fadeIn().find('.slick-slider').slick('setPosition');
		if($(this).is(':last-child')){
			$("#brand").find('.tabs_consult').last().addClass('active').siblings().removeClass('active');
		}else{
			$("#brand").find('.tabs_consult').first().addClass('active').siblings().removeClass('active');

		}

	}).eq(0).addClass("active");

	}


//input blocks
	(function(){
		var container =$('.line-search-form') ,
			input = container.find('input[type=search]'),
			form = container.find("form"),
			category = container.find('.select-container'),
			trText = container.find('.search_drop span');
			item = category.find('.section-item '),

			input.focus(function(){
				$(this).closest(container).addClass('in-focus')

			});


			item.each(function(){
				var _= $(this);
				_.click(function(){
					
					var text = _.find('label').text();
					trText.text(text);
					setTimeout(function(){
						_.closest(container).find(input).focus();
					},10)
					
				})
			});
			$(document).mouseup(function (e){ 
				if (!container.is(e.target) 
				    && container.has(e.target).length === 0) {
					container.removeClass('in-focus').find(input).focusout();
				}
			});

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


//++++++++++++++++++++++++
//modal open/close
//++++++++++++++++++++++++++++++

	$( ".js-modal-trigger").click(function(event) {
		event.preventDefault();

		data = $(this).data('target');

		$('body').find(data).addClass('active');
		$("html").css("overflow-y","hidden");

		$(document).mouseup(function (e){ 
				var div = $('.hidden-block');
				if (!div.is(e.target) 
				    && div.has(e.target).length === 0) {
					div.parent().removeClass('active');
					$("html").css("overflow-y","scroll"); 
					var slider =div.parent().find('.slick-slider');
					slider.slick('unslick');
				}
			});

		$('.button_close').click(function(){
			var target = $(this).parents('.hidden_bg').removeClass('active');
			var slider =$(this).parent().find('.slick-slider');
			slider.slick('unslick');
			if(!$(this).hasClass('js-modal-trigger')){
			 $("html").css("overflow-y","scroll");
			}
		});
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
	$('.categories_item ').matchHeight({
		 property: 'min-height'
	});
	$('.compare-wrapper ').matchHeight({
		 property: 'height'
	});
	$('.content-section .product-delivery').matchHeight({
		 property: 'min-height'
	});
	$('.news-small-wrap  .news_block').matchHeight({
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
	};
menuAdd();

//mobile search
var mobileSearch = function(){
		var trigger = $('.js-search-btn'),
			target =$('.mobile-search');

		trigger.on('click', function(){

			target.toggleClass('active');
			

		});
	};
mobileSearch();

//mobile nav

var mobileAside = function(){

		var trigger = $('.moblie_btn');

		trigger.on('click', function(){
			target = trigger.parent().find('.js-toggle-target');
			if(!$(this).hasClass('active')) {

				$(this).addClass('active')
				target.fadeIn(300);

			} else {

				$(this).removeClass('active');
				target.fadeOut({

					duration: 300,
					complete: function(){

						$(this).removeAttr('style')
					}
				})
			}
		});
	};

mobileAside();

if($('.selection_item').length){

	var searchBlk = $('.selection_item-title');
	

	searchBlk.on('click', function(){

		var target =  $(this).parent().find('.selection_body');
		$(this).toggleClass('active');
			target.toggle('normal');
	});

var priceFilter = function(val){
	var parent = val.parents('.selection_item');

	if(val.val().length > 0){
		parent.addClass('checked');
		console.log($(this).val())
	}
	else {
		parent.removeClass('checked');
		console.log($(this).length)
	}
}

$('.price-wrapper .price').on('input change',function(e){

	console.log($(this).val().length)
	priceFilter($(this));
});

var clearItems = function(block){
	var selBody = block.parents('.selection_wrapper'),
		selInput = selBody.find('input:checked'),
		selCont = selInput.parents('.selection_item');

		selInput.prop('checked', false); 
		selCont.removeClass('checked');
		$('.selection_body').hide('normal');
		$('.selection_item-title').removeClass('active');
		$('.price').val('');
		priceFilter($('.price'));

}
    $('.input_label').click(function(){

    	filterItems($(this));
    	
    });

    $('.selection_find-clear').click(function(event){

    	event.preventDefault();
    	clearItems($(this));
    });



}





 if($('.sort_wrapper').length){

 	var sortItem = function(){
 		var trigger = $('.js-select-item');

 		trigger.on('click', function(){
 			var _ = $(this);
 			var textCont = _.find('span');
 			var target = _.parent().find('.sort-select-body');
 			var item = target.find('.sort-select-item a');

 			target.toggleClass('active');
 			_.toggleClass('active');

 			item.on('click',function(e){

 				var _ = $(this),
 					altLext = _.data('text');

 				textCont.text(altLext);

 				_.parent().addClass('active').siblings().removeClass('active');
 				e.preventDefault();
 				setTimeout(function(){

 					target.removeClass('active');
 					trigger.removeClass('active');

 				},500);
 			});
 				$(document).mouseup(function (e){ 
					if (!trigger.is(e.target) 
					    && trigger.has(e.target).length === 0 && !item.is(e.target) ) {
						target.removeClass('active');
 						trigger.removeClass('active');
					}
				});

 		});
 	};
 	sortItem();
 } 

 if($('.product-much-cont').length){
 	setTimeout(function(){
		$('.product-much-slider').slick({
			arrows: true,
			slidesToShow: 1,
			asNavFor: $('.product-add-slider'),
			infinite: false,
			appendArrows: $('.features__nav'),
	  		nextArrow:'<button type="button" class="carousel-next"><div class="icon"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 9 5" style="enable-background:new 0 0 9 5;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#9E9E9E;}</style><path class="st0" d="M4.5,5L9,0.6L8.4,0L4.5,3.7L0.6,0L0,0.6L4.5,5"/></svg></div></button>',
	  		prevArrow:'<button type="button" class="carousel-prev"><div class="icon"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 9 5" style="enable-background:new 0 0 9 5;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#9E9E9E;}</style><path class="st0" d="M4.5,5L9,0.6L8.4,0L4.5,3.7L0.6,0L0,0.6L4.5,5"/></svg></div></button>',
		});
		$('.product-add-slider').slick({
			asNavFor: $('.product-much-slider'),
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: false,
			draggable: false,
			arrows:false,
			focusOnSelect: true,
			responsive: [
		    {
		      breakpoint: 668,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		      }
		    },
		     {
		      breakpoint: 520,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		      }
		    },
			]
		});
	}, 100);


	var trigger = $('.product-much-slider');

	trigger.on('mouseenter',function(){
		var _ = $(this);
		var addSlider = _.parent().find('.product-add-slider');
		var addNav = _.parent().find('.features__nav');
		addSlider.addClass('active');
		addNav.addClass('active');

		_.parent().on('mouseleave', function(){

			addSlider.removeClass('active');
			addNav.removeClass('active');

		});
	})
	if($(window).width() > 835){
		trigger.data('target','.product_hidden')
	trigger.click(function(){

		var currslide = $(this).find('.slick-active').data('slick-index');

		$('.product-modal-slider').slick({
			arrows: true,
			slidesToShow: 1,
			asNavFor: $('.product-madd-slider'),
			infinite: false,
			appendArrows: $('.features__nav-modal'),
	  		nextArrow:'<button type="button" class="carousel-next"><div class="icon"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 9 5" style="enable-background:new 0 0 9 5;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#9E9E9E;}</style><path class="st0" d="M4.5,5L9,0.6L8.4,0L4.5,3.7L0.6,0L0,0.6L4.5,5"/></svg></div></button>',
	  		prevArrow:'<button type="button" class="carousel-prev"><div class="icon"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 9 5" style="enable-background:new 0 0 9 5;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#9E9E9E;}</style><path class="st0" d="M4.5,5L9,0.6L8.4,0L4.5,3.7L0.6,0L0,0.6L4.5,5"/></svg></div></button>',
		});

		$('.product-madd-slider').slick({
			asNavFor: $('.product-modal-slider'),
			slidesToShow: 5,
			slidesToScroll: 1,
			infinite: false,
			draggable: false,
			arrows:false,
			focusOnSelect: true,
		});
		$('.product-modal-slider').slick('slickGoTo', currslide);
	});
	}

	else{
		console.log(100)
		trigger.data('target','')
	}
}

	var selectProduct = function(select){

		var btn = $('.js-select-toggle');

		btn.each(function(){
			var item = $(this);
			/*item.parents('.input-wrapper').addClass('has-error');*/
			item.click(function(event){
				event.preventDefault();
				var _ = $(this),
					inp = _.parent().find('input'),
					clr = _.parent().find('.js-clear'),
					text = _.data('placeholder');
					
				btn.removeClass('active');

				item.addClass('active');

				inp.each(function(){

					var _ = $(this);

					if(!_.is(':checked')){
						_.click(function(){
							var value = _.val();
							var targetToText = _.parents().find(item);
							inp.removeClass('error');
							item.removeClass('has-error');

							targetToText.find('span').text(value);
							
							setTimeout(function(){
								targetToText.removeClass('active').addClass('is-checked').parents('.input-wrapper').removeClass('has-error').addClass('has-success');
							}, 300)

						});
					}
					else{
						return false
					}
				});
				clr.click(function(event){
					var _ = $(this);
					var targetToText = _.parent('.select-check').find(item);
					event.preventDefault()
					
					inp.prop('checked',false);
					item.removeClass('active').removeClass('is-checked').find('span').text(text).parents('.input-wrapper').addClass('has-error').removeClass('has-success');
					
				})
				$(document).mouseup(function (e){ 
					var div = $(".select-check");
					if (!div.is(e.target) 
					    && div.has(e.target).length === 0) {
						div.find(btn).removeClass('active');
					}
				});
			});

		});

	}
	selectProduct();
//number plus/minus
function number() {
	var number = $('.js-number');
	number.each(function(){
		var max_number = $(this).attr("data-max-number");
		var input = $(this).find("input");
		var plus = $(this).find(".js-plus-number");
		var minus = $(this).find(".js-minus-number");
		var add = $(this).parent().find('.js-add');
		plus.on("click", function(){
			var val = +(input.val());
			//if (val >= max_number) {
			//	return false
			//}
			//else {
				val += 1;
				input.val(val);
			//};				
			input.trigger('change');
		});
		minus.on("click", function(){
			var val = +(input.val());
			if (val > 0) {
				val -= 1;
				input.val(val);
			};
			if(val === 0 && !$(this).parents('.js-price').hasClass('order__case')) {
				return false
			}
			input.trigger('change');
			return false;
		});
		input.on("change", function(){
			var val = +$(this).val();
			/*if (val > max_number) {
				val = max_number;
				$(this).val(val);
			}*/
			if (val == '' || val < 0) {
				val = 0;
				$(this).val(val);
			}
		});
		input[0].onkeypress = function(e) {
			e = e || event;
			if (e.ctrlKey || e.altKey || e.metaKey) return;
			var chr = getChar(e);
			if (chr == null) return;
			if (chr < '0' || chr > '9') {
				return false;
			}
		}
	});
}
number();
function getChar(event) {
		if (event.which == null) {
			if (event.keyCode < 32) return null;
			return String.fromCharCode(event.keyCode) // IE
		}
		if (event.which != 0 && event.charCode != 0) {
			if (event.which < 32) return null;
			return String.fromCharCode(event.which) 
		}
		return null;
	}
//fancybox
   $('.fancybox').fancybox({
   	openEffect  : 'elastic',
      closeBtn: true,
      padding : 40,
      nextEffect: 'fade',
      prevEffect: 'fade',
   	 helpers:  {
        overlay : {
            css : {
                'background' : 'rgba(74,74,74,.34)'
            }
        }
    }
   });
$('.rev-star').click(function() {
	$(this).closest('.input-wrapper').addClass('has-success');
  num = parseInt($(this).data("num"));
  i = 1;
  for (i = 1; i <= num; i++) {
    $("#rev-star-" + i).css("background-image", "url(../img/utility/star-yellow.svg)");
  }
  for (i = num + 1; i <= 5; i++) {
    $("#rev-star-" + i).css("background-image", "url(../img/utility/star-gray.svg)");
  }
  $(".rev-hidden").val(num);

  return false;
});
//video playlist
if($('.video-playlist-cont').length){

	var item = $('.video-item'),
		playerCont = $('.video-main-cont').find('iframe');
	item.each(function(){
		var _ = $(this);
		_.click(function(e){
			_.addClass('active').siblings().removeClass('active');
			e.preventDefault();
			var src = _.attr('href');
			console.log(src);

			playerCont.attr('src',src);

		})
	})
}
// FORMS STARTS HERE
if($('.js-forgoten-pass-wrap').length){

	var block = $('.js-forgoten-pass-wrap');
	var btn = $('.forgot-pass');
	var succes = $('.js-forgoten-pass-succes');
	var sucClose = succes.find('.hits-stat-more');

	block.hide();
	succes.hide();
	
	btn.click(function(e){
		e.preventDefault();
		$(this).closest('.tab-form-wrapper').hide();
		block.show();
	})

	sucClose.click(function(e){
		e.preventDefault();
		$(this).closest('.tab-form-wrapper').hide();
		$('.js-form-login').show();
	})


	 var form_validate = $('.js-form-email');
    if (form_validate.length) {
        form_validate.each(function () {
            var form_this = $(this);
            $.validate({
                form : form_this,
                borderColorOnError : true,
                scrollToTopOnError : false,
                onSuccess: function($form){
                     $('.js-forgoten-pass-wrap').hide();
                     succes.show();
                }
            });
        });
    };
}
var form_main = $('.form-feed');
if (form_main.length) {
    form_main.each(function () {
        var form_this = $(this);
        $.validate({
            form : form_this,
            borderColorOnError : true,
            scrollToTopOnError : false,
            onSuccess: function($form){

                 if(form_this.find('.select-check').length){
					if(!form_this.find('.select-check').parents('.input-wrapper').hasClass('has-success')){
						form_this.find('.select-check').parents('.input-wrapper').addClass('has-error');
						console.log('find')
							return false;
					}
				}
				if(form_this.find('.rev-stars').length){
					if(!form_this.find('.rev-stars').closest('.input-wrapper').hasClass('has-success')){
						form_this.find('.rev-stars').closest('.input-wrapper').addClass('has-error');
						console.log('find')
							return false;
					}
				}
            }

        });
    });
};
var form_mail = $('.password_hidden .form-feed');
//modal password form
if (form_mail.length) {

    form_mail.each(function () {
        var form_this = $(this);
        $.validate({
            form : form_this,
            borderColorOnError : true,
            scrollToTopOnError : false,
            onSuccess: function($form){
                 $(this).parents('.password_hidden').removeClass('active');
                 $('body').find('.password-success_hidden').addClass('active');
            }
        });
    });
};
var form_vac = $('.vacancy_hidden .vacancy-form');
//modal password form
if (form_vac.length) {
    form_vac.each(function () {
        var form_this = $(this);
        $.validate({
            form : form_this,
            borderColorOnError : true,
            scrollToTopOnError : false,
            onSuccess: function($form){
                 $(this).parents('.vacancy_hidden').removeClass('active');
                 $('body').find('.vacancy-success_hidden').addClass('active');
            }
        });
    });
};
$(".dropzone").dropzone({ 
	url: "/file/post",
	dictDefaultMessage: 'Загрузить фото <span class = "fsize">(не более 5Мб)</span> ',
	dictFileTooBig : 'Файл слишком большой',
	dictResponseError : 'Сервер ответил с ошибкой',
	maxFilesize: '5',
	addRemoveLinks :true
	 });
if($('.accordion-container').length){
$(".set > .head").on("click", function(){
	if($(this).hasClass('active')){
	$(this).removeClass("active");
	$(this).siblings('.content').slideUp(200);
}else{
	$(".set > .head").removeClass("active");
	$(this).addClass("active");
	$('.content').slideUp(200);
	$(this).siblings('.content').slideDown(200);
}
});
}

if($('#map').length){
 var myMap;

ymaps.ready(init);

function init () {

    myMap = new ymaps.Map('map', {

        center: [52.203855, 24.328998], 
        zoom: 13,
        controls: ['zoomControl', 'fullscreenControl']
    }, {

    }),
     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {

        }, {
        	iconLayout: 'default#image',
	        iconImageHref: 'images/myIcon.gif',
	        iconImageHref: 'img/pin.svg',
	        // Размеры метки.
	        iconImageSize:[24, 30],
	        iconImageOffset: [-10, -42]
        });
     
myMap.geoObjects.add(myPlacemark);
    };
}
//end of document.ready
 });
var filterItems = function(item){
	var selCont = item.parents('.selection_item'),
		selInput = selCont.find('input:checked');

	 	if(selInput.length != 0){
	 		selCont.addClass('checked');
	 	}
	 	else if(selInput.length === 0) {
	 		selCont.removeClass('checked');
	 	}

    }

