$(document).ready(function($){
	"use strict";
	
	// WOW Js Active
	new WOW().init();
	
	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');
	
	//Team
	$('.owl-carousel-team').owlCarousel({
		loop:true,
		margin:20,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});
	
	
	
	//Testmonial
	$('.owl-carousel-testmonial').owlCarousel({
		loop:true,
		margin:20,
		nav:false,
		items:1
	});
	
	
	
	
	
	//magnificPopup
	$('#video-play').magnificPopup({
		type: 'iframe',
		iframe: {
			patterns: {
				youtube: {
					index: 'youtube.com/', 
					id: 'v=', 
					src: 'http://www.youtube.com/embed/%id%?autoplay=1' 
				}
			},
			
			srcAction: 'iframe_src'
		}
	});
	
	
	
	
	
	
	
	
	 //Skillsbar
	window.onscroll = function() {scrollFunction()};
	function scrollFunction() {
		if (document.body.scrollTop > 1800 || document.documentElement.scrollTop > 1800) {
			$('.html').animate({width:'90%'},2000);
			$('.css').animate({width:'85%'},2000);
			$('.java').animate({width:'80%'},2000);
			$('.php').animate({width:'60%'},2000);
			$('.wp').animate({width:'90%'},2000);
			
		}
	};
	
	
	
	
	
	
	//Counter
	$('.counter-number').each(function(){
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
			}, {
			duration: 6000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	
	
	
	
	
	//Counter
	$('.counter-number').each(function(){
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
			}, {
			duration: 6000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	
	
	//Mixitup
	var mixer = mixitup('.portfolio-items');
	
	
	
	//Portfolio Popup
	$('.image-link').magnificPopup({type:'image'});
	
	
	
	
	
	
	
	
	
	
	
	//Top header fixed
	$(window).scroll(function(){
		if($(this).scrollTop() > 100){
			
			$(".header-main").css({"position":"fixed"});
			$(".header-main").css({"background":"black"});
			
		}
		else{
			$(".header-main").css({"background":"#000000a6"});
		}
	})
	
	
	
	//Arrow_up
	$("a[href='#page-top']").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	
	$(window).on('scroll', function(){
		if ($(window).scrollTop()){
			$('.go-to-top').addClass('active');
		}
		else{
			$('.go-to-top').removeClass('active');
		}
	});
	
	
	
	
	
	
	
}(jQuery));



