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


	//SLICK slider
	$('.slick-slider').slick({
		accessibility: true,
		arrows: false,
		dots: true
	});

	$('.slick-slider-discount').slick({
		accessibility: true,
		arrows: true,
		slidesToShow: 7
	});

	$('.slick-slider-discount-brand').slick({
		accessibility: true,
		arrows: true,
		slidesToShow: 7
	});

	$('.slick-slider-discount-news').slick({
		accessibility: true,
		arrows: true,
		slidesToShow: 3
	});

	$('.slick-slider-discount-themed').slick({
		accessibility: true,
		arrows: true,
		slidesToShow: 7
	});

	$('.slick-slider-discount-hits').slick({
		accessibility: true,
		arrows: true,
		slidesToShow: 5
	});

	//tabs BRAND
	$("#brand .tab_item").not(":first").hide();
	$("#brand .tab").click(function() {
		$("#brand .tab").removeClass("active").eq($(this).index()).addClass("active");
		$("#brand .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	// hover card
	$('.line-cart').mouseover(function(){
		$(".cart_list_hidden").css("display"," block");
	});
	$('.cart_list_hidden').mouseout(function(){
		$('.cart_list_hidden').hide();
	});
	$(document).mouseup(function (e) {
		var container = $(".cart_list_hidden");
		if (container.has(e.target).length === 0){
			container.hide();
		}
	});

	// hover nav
	$('.top-line-nav nav > ul > li:last-child').mouseover(function(){
		$(".drop-line-nav").css("display"," block");
		$('.top-line-nav nav > ul > li:last-child').find('a').first().css("color","#ff0000");
	});
	$('.drop-line-nav').mouseout(function(){
		$('.drop-line-nav').hide();
		$('.top-line-nav nav > ul > li:last-child').find('a').first().css("color","#3c3c3c");
	});
	$(document).mouseup(function (e) {
		var container = $(".drop-line-nav");
		if (container.has(e.target).length === 0){
			container.hide();
		}
	});


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


	//images or links draggeble
	function drag() {
		$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	}
	drag();



});
 