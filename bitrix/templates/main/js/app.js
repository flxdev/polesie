$(window).on('load',function(){
	if($('.selection_wrapper').length){

		$('.input_label').each(function(){
			filterItems($(this));
		})
		priceFilter($('.price'));
		var target = $('.selection__checkout > .select-u-body');

		$('.select-all-inner .input_label').each(function(){
			if($(this).find('input:checked').length && $(this)[0].hasAttribute('data-id')){
	 			var id = $(this).data('id');
	 			target.find("[data-id=" + id + "]").find('.input-real').addClass('active');
	 		}
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
				console.log(scroll);
				target.scrollLeft(scroll);
				target2.scrollLeft(scroll);
		})
	}
	Comparescroll();
}

if($('.compare_inner.row-fixed').length){
	$('.compare-scroll-outer').hide();
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
			if(wTop > scT+150 && wTop < cBot- 70){
				scrollC.addClass('pos-b').removeClass('pos-c');
				
			}
			else if( wTop > cBot- 70){
				console.log(2);
				scrollC.addClass('pos-c').removeClass('pos-b');
			}
			else{
				
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
			
			  $(this).addClass("active");
			  $(this).siblings().removeClass('active');

			  	inputs.each(function(){
			  		var _ = $(this),
			  		area = _.attr('value');

			  		if(area == val ){
			  			_.prop('checked',true);
			  		}
			  	})
			});
		$(document).on("mouseenter", ".map-zone", function() {
			var val = $(this).data('area');

			  	inputs.each(function(){
			  		var _ = $(this),
			  		area = _.attr('value');

			  		if(area == val ){
			  			_.parents('.select-u-item').addClass('hover').siblings().removeClass('hover');
			  		}
			  	})
			});
		$(document).on("mouseleave", "#map_main", function() {
			  	inputs.each(function(){
			  		var _ = $(this);
			  			_.parents('.select-u-item').removeClass('hover');
			  	});
			});
		$(".regions .input_label").each(function(){
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
		touchMove: false,
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
		touchMove: false,
		slidesToShow: 4,

		appendArrows: $('.features__nav'),
  nextArrow:'<button type="button" class="carousel-next"><div class="icon"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 9 5" style="enable-background:new 0 0 9 5;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#9E9E9E;}</style><path class="st0" d="M4.5,5L9,0.6L8.4,0L4.5,3.7L0.6,0L0,0.6L4.5,5"/></svg></div></button>',
  prevArrow:'<button type="button" class="carousel-prev"><div class="icon"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 9 5" style="enable-background:new 0 0 9 5;" xml:space="preserve"><style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#9E9E9E;}</style><path class="st0" d="M4.5,5L9,0.6L8.4,0L4.5,3.7L0.6,0L0,0.6L4.5,5"/></svg></div></button>',
		responsive: [
	    {
	      breakpoint: 1040,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        draggable: true,
	      }
	    },
	    {
	      breakpoint: 780,
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
		touchMove: false,
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
    ]
	});
	$('.slick-slider-discount-news').slick({
		accessibility: true,
		arrows: true,
		slidesToShow: 3,
		draggable: false,
		touchMove: false,
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
		touchMove: false,
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
		touchMove: false,
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
		variableWidth: true,
		touchMove: false,
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

	}

if($('#brand').length){

	$("#brand").find('.tab_item').not(":first").hide();

	$("#brand .tab").click(function() {

		if(!$(this).hasClass('innactive')){

			$("#brand .tab").removeClass("active").addClass('innactive').eq($(this).index()).addClass("active");

			setTimeout(function(){
				$("#brand .tab").removeClass('innactive');
			},500);

			$("#brand").find('.tab_item').hide().eq($("#brand .active").index()).fadeIn().find('.slick-slider').slick('setPosition');
			
			if($(this).is(':last-child')){
				$("#brand").find('.tabs_consult').last().addClass('active').siblings().removeClass('active');
			}else{
				$("#brand").find('.tabs_consult').first().addClass('active').siblings().removeClass('active');

			}
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

			category.click(function(){
				$(this).addClass('active').closest(container).find(input).focus();
			})
			item.each(function(){
				var _= $(this);
				_.click(function(){
					
					var text = _.find('label').text();
					trText.text(text);
					setTimeout(function(){
						_.closest(container).find(input).focus();
						_.closest(container).find(category).removeClass('active');
					},10)
					
				})
			});
			$(document).mouseup(function (e){ 
				if (!container.is(e.target) 
				    && container.has(e.target).length === 0) {
					container.removeClass('in-focus').find(input).focusout();
					category.removeClass('active');
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
		var items = more.parent().find('.tab');

		more.on('click', function(event){
			event.preventDefault();
		});

		more.on('mouseenter', function(event){
			
			var list = $(this).parent().find('.drop-menu-wrapper');
			

			$(this).addClass('active');
			list.fadeIn('fast');

		list.on('mouseleave', function(){


				more.removeClass('active');
				list.fadeOut('fast');


		});

	});

	items.click(function(){

				$(this).parents(more).removeClass('active').find('.drop-menu-wrapper').delay(500).fadeOut('fast');

				
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
					setTimeout(function(){
						slider.slick('unslick');
					},300);
					
				}
			});
	});
$('.button_close').click(function(){
			var target = $(this).parents('.hidden_bg').removeClass('active');
			var slider =$(this).parent().find('.slick-slider');
			if(slider.length){
				setTimeout(function(){
					slider.slick('unslick');
					slider.children().remove();
				},300);
				
			}
			
			if(!$(this).hasClass('js-modal-trigger')){
			 $("html").css("overflow-y","scroll");
			}
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
	$('.discount-slider  .themed_block').matchHeight({
		 property: 'min-height'
	});

	//images or links draggeble
	function drag() {
		$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	}
	drag();

//epty comprasion and defer
var notEmpty = function(){
	
	var lineTool = $('.line-tool');

	lineTool.each(function(){
		var _ = $(this);
		var counter = _.find('.counter');
		var conterVal = parseInt(counter.text());
		if(conterVal != 0){
			counter.css({display: 'block'});
		}else{
			counter.css({display: 'none'});
		}
	})	
};
notEmpty();
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

	var topItem = $('.top-line-nav nav .top-item:nth-child(n+4)');
	var topCont = $('.top-line-nav .drop-line-nav');
	var top3 = $('.top-line-nav nav .top-item:nth-child(3)');
	var brandItem = $('.index-brands .tabs > .tab:nth-child(n+1)');
	var brandCont = $('.index-brands  .drop-line-nav > .tabs');
	brandItem.clone().appendTo(brandCont);
	menuItems.clone().appendTo(btn);
	topItem.detach().prependTo(topCont);
	top3.clone().prependTo(topCont);

	};
menuAdd();

//mobile search
var mobileSearch = function(){
		var trigger = $('.js-search-btn'),
			target =$('.mobile-search');

		trigger.on('click', function(e){
			e.preventDefault();

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
	}
	else {
		parent.removeClass('checked');
	}
}

$('.price-wrapper .price').on('input change',function(){
	
	$(this)[0].onkeypress = function(e) {
		e = e || event;
		if (e.ctrlKey || e.altKey || e.metaKey) return;
		var chr = getChar(e);
		if (chr == null) return;
		if (chr < '0' || chr > '9') {
			return false;
		}
	}
	priceFilter($(this));
});
if(('.selection_wrapper').length){
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
}

if($('.select-all-inner').length){
	function fakeSelect() {
		var container = $('.selection__checkout'),
			fakeCont = container.find('>.select-u-body'),
			mainCont = container.find('.select-all-inner'),
			fakeInput = fakeCont.find('.input_label'),
			mainInput = mainCont.find('.input_label');
			console.log(fakeInput.length, mainInput.length);
		fakeInput.each(function(){
			var _ = $(this),
				fakeInput_r = _.find('.input-real');

			_.click(function(){
				var id = _.data('id');
				if(!fakeInput_r.hasClass('active')){
					fakeInput_r.addClass('active');

					mainCont.find('[data-id=' + id + ']').find('.input-real').prop('checked',true);
				}
				else{
					fakeInput_r.removeClass('active');
					mainCont.find('[data-id=' + id + ']').find('.input-real').prop('checked',false);
				}
			})
		});

		mainInput.each(function(){
			var _ = $(this);
			_.click(function(){
				if(_[0].hasAttribute('data-id')){
					var id = _.data('id');
					console.log(id)
					if(_.find('input:checked').length ){
						// console.log(_.find('input:checked').length);
						fakeCont.find("[data-id=" + id + "]").find('.input-real').addClass('active');
					}else {
						fakeCont.find('[data-id=' + id + ']').find('.input-real').removeClass('active');
					}
				}
			});
		})
	} fakeSelect();
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

 if($('.product-content-wrapper').length){
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
	}, 10);


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
	var modalOff = function(){
		if($(window).width() < 835){
			trigger.removeClass('js-modal-trigger').removeAttr('data-target');
		}
		else{
			trigger.addClass('js-modal-trigger').attr('data-target','.product_hidden');
		}
	}
	modalOff();
	$(window).resize(function(){
		modalOff();
	});

		if(trigger.hasClass('js-modal-trigger')){
			console.log('has');
			trigger.click(function(e){
				e.preventDefault();
				var mainSlides = $(this).parent().find('.product-slider-item');
				var addSlides = $(this).parent().find('.product-add-item');
				var currslide = $(this).find('.slick-active').data('slick-index');

				addSlides.clone().appendTo('.product_hidden .product-madd-slider').removeAttr('style').removeAttr('tabindex');
				mainSlides.clone().appendTo('.product_hidden .product-modal-slider').removeAttr('style').removeAttr('tabindex');

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
	
}

	var selectProduct = function(select){

		var btn = $('.js-select-toggle');

		btn.each(function(){
			var item = $(this);

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
(function ($, F) {

    F.transitions.resizeIn = function() {

        var previous = F.previous,
            current  = F.current,
            startPos = previous.wrap.stop(true).position(),
            endPos   = $.extend({opacity : 1}, current.pos);

        startPos.width  = previous.wrap.width();
        startPos.height = previous.wrap.height();

        previous.wrap.stop(true).trigger('onReset').remove();

        delete endPos.position;

        current.inner.hide();

        current.wrap.css(startPos).animate(endPos, {
            duration : current.nextSpeed,
            easing   : current.nextEasing,
            step     : F.transitions.step,
            complete : function() {
                F._afterZoomIn();

                current.inner.fadeIn("fast");
            }
        });
    };
     F.transitions.slidebottomIn = function() {

        F.wrap.addClass('slidebottom');

        setTimeout(function(){
            F.wrap.addClass('slidebottom-transitions');
            F.wrap.addClass('show');
            F._afterZoomIn();
        });

    }
    F.transitions.slidebottomOut = function() {
        
        F.wrap.removeClass('show');

        setTimeout(function(){
            F.wrap.removeClass('slidebottom slidebottom-transitions');
            F._afterZoomOut();
        }, 500);

    };

}(jQuery, jQuery.fancybox));
   $('.fancybox').fancybox({
   		openMethod: 'slidebottomIn',
        closeMethod: 'slidebottomOut',
      closeBtn: true,
      padding : 40,
      nextEffect: 'slide',
      nextMethod : 'resizeIn',
      nextSpeed  : 250,
      prevMethod : false,
      autoSize	: true,
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
    $("#rev-star-" + i).css("background-image", "url(img/utility/star-yellow.svg)");
  }
  for (i = num + 1; i <= 5; i++) {
    $("#rev-star-" + i).css("background-image", "url(img/utility/star-gray.svg)");
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
var form_call = $('.call-form');
if (form_call.length) {

    form_call.each(function () {
        var form_this = $(this);
        $.validate({
            form : form_this,
            borderColorOnError : true,
            scrollToTopOnError : false,
            onSuccess: function($form){
                 $(this).parents('.call_hidden').removeClass('active');
                 $('body').find('.call-success_hidden').addClass('active');
            }
        });
    });
};
var form_subscribe = $('.form-subscribe');
if (form_subscribe.length) {
    form_subscribe.each(function () {
        var form_this = $(this);
        $.validate({
            form : form_this,
            borderColorOnError : true,
            scrollToTopOnError : false,
            onSuccess: function($form){
                 $('body').find('.success_hidden').addClass('active');
            }
        });
    });
};
var form_vac = $('.vacancy_hidden .vacancy-form');
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
// disable hover on scroll
var body = document.body,
    timer;

window.addEventListener('scroll', function() {
  clearTimeout(timer);
  if(!body.classList.contains('disable-hover')) {
    body.classList.add('disable-hover')
  }
  
  timer = setTimeout(function(){
    body.classList.remove('disable-hover')
  },300);
}, false);
//mobile sticky header
jQuery(document).ready(function($){

	var mainHeader = $('#wrap .cd-auto-hide-header'),
		secondaryNavigation = $('.cd-secondary-nav'),
		belowNavHeroContent = $('.sub-nav-hero'),
		headerHeight = mainHeader.height();
	
	var scrolling = false,
		previousTop = 0,
		currentTop = 0,
		scrollDelta = 10,
		scrollOffset = 150;
	$(window).on('scroll', function(){
		if( !scrolling ) {
			scrolling = true;
			(!window.requestAnimationFrame)
				? setTimeout(autoHideHeader, 250)
				: requestAnimationFrame(autoHideHeader);
		}
	});

	$(window).on('resize', function(){
		headerHeight = mainHeader.height();
	});

	function autoHideHeader() {
		var currentTop = $(window).scrollTop();

		( belowNavHeroContent.length > 0 ) 
			? checkStickyNavigation(currentTop)
			: checkSimpleNavigation(currentTop);

	   	previousTop = currentTop;
		scrolling = false;
	}

	function checkSimpleNavigation(currentTop) {
	    if (previousTop - currentTop > scrollDelta) {
	    	mainHeader.removeClass('is-hidden');
	    } else if( currentTop - previousTop > scrollDelta && currentTop > scrollOffset) {
	    	mainHeader.addClass('is-hidden');
	    	$('.mobile-search').removeClass('active');
	    }
	}
});
$(".form-col .dropzone").dropzone({ 
	url: "/file/post",
	dictDefaultMessage: 'Загрузить фото <span class = "fsize">(не более 5Мб)</span> ',
	dictFileTooBig : 'Файл слишком большой',
	dictResponseError : 'Сервер ответил с ошибкой',
	dictInvalidFileType: 'Неверный тип файла',
	acceptedFiles: ".jpeg,.jpg,.png,.gif",
	maxFilesize: '5',
	addRemoveLinks :true
	 });

$(".vacancy-form .dropzone").dropzone({ 
	url: "/file/post",
	previewTemplate: '<div class="dz-preview dz-file-preview"><div class="dz-details"><div class="dz-filename"><span data-dz-name></span></div></div><div class="dz-success-mark"><span><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 86.3 93" width ="15px" height = "16px" style="enable-background:new 0 0 86.3 93;" xml:space="preserve"><style type="text/css">.st0{fill:none;stroke:#FF0000;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style><path class="st0" d="M70.3,57.8L44.4,83.7c-9.3,9.3-24.6,9.3-33.9,0L9.8,83c-9.3-9.3-9.3-24.6,0-33.9l41-41c7-7,18.5-7,25.5,0 l2.1,2.1c7,7,6.2,16.8-0.8,23.8l-17,17.5"/><line class="st0" x1="80.5" y1="47.6" x2="78.3" y2="49.8"/><path class="st0" d="M60.6,51.4l-13.7,14c-5.4,5.4-14,6.7-19.5,1.3L26.7,66c-5.4-5.4-4.4-13.8,1-19.3l27.7-26.6"/></svg></span></div><div class="dz-error-message"><span data-dz-errormessage></span></div></div>',
	dictDefaultMessage: 'Прикрепите резюме ',
	dictFileTooBig : 'Файл слишком большой',
	dictResponseError : 'Сервер ответил с ошибкой',
	dictInvalidFileType: 'Неверный тип файла',
	maxFilesize: '5',
	acceptedFiles: ".doc,.docx,.pdf,.txt",
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
	        iconImageSize:[22, 30],
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