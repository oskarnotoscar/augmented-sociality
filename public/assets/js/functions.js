/*------------------------------------
	Theme Name: Seo
	Start Date : 
	End Date : 
	Last change: 
	Version: 1.0
	Assigned to:
	Primary use:
---------------------------------------*/
/*	
	- Menu Switch
	- Responsive Caret
	- Expand Panel Resize
	- Google Map
			
	+ Document Ready
		- Scrolling Navigation
		- Set Sticky Menu
		- Responsive Caret
		- Menu Switch
		- Expand Panel Resize
		- Revolution Slider
		- Skill Section
		- Case Studies Carousel
		- Contact Map
		- Quick Contact Form

	+ Window Load
		- Site Loader
*/

(function($) {

	"use strict" 	
	
	/* - Menu Switch * */
	function menu_switch(){
		var width = $(window).width();
		if( width > 991 ) {
			$(".header_s2 .ownavigation .navbar-nav").addClass("menu-open");
			$(".menu-switch > a").on("click", function() {
				$(".ownavigation .navbar-nav").toggleClass("menu-open")
			});
		} else {
			$(".ownavigation .navbar-nav").removeClass("menu-open");
		}
	}
	
	/* - Responsive Caret* */
	function menu_dropdown_open(){
		var width = $(window).width();
		if( width > 991 ) {
			if($(".ownavigation .nav li.ddl-active").length ) {
				$(".ownavigation .nav > li").removeClass("ddl-active");
				$(".ownavigation .nav li .dropdown-menu").removeAttr("style");
			}
		} else {
			$(".ownavigation .nav li .dropdown-menu").removeAttr("style");
		}
	}
	
	/* - Expand Panel Resize * */
	function panel_resize(){
		var width = $(window).width();
		if( width > 991 ) {
			if($(".header_s #slidepanel").length ) {
				$(".header_s #slidepanel").removeAttr("style");
			}
		}
	}	
	
	/* - Google Map* */
	function initialize(obj) {
		var lat = $("#"+obj).attr("data-lat");
        var lng = $("#"+obj).attr("data-lng");
		var contentString = $("#"+obj).attr("data-string");
		var myLatlng = new google.maps.LatLng(lat,lng);
		var map, marker, infowindow;
		var image = "assets/images/marker.png";
		var zoomLevel = parseInt($("#"+obj).attr("data-zoom") ,10);		
		var styles = [{"featureType": "administrative.country","elementType": "geometry","stylers": [{"visibility": "simplified"},{"hue": "#ff0000"}]}]
		var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});	
		
		var mapOptions = {
			zoom: zoomLevel,
			disableDefaultUI: true,
			center: myLatlng,
            scrollwheel: false,
			mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
			}
		}
		
		map = new google.maps.Map(document.getElementById(obj), mapOptions);	
		
		map.mapTypes.set("map_style", styledMap);
		map.setMapTypeId("map_style");
		
		infowindow = new google.maps.InfoWindow({
			content: contentString
		});      
	    
        marker = new google.maps.Marker({
			position: myLatlng,
			map: map,
			icon: image
		});

		google.maps.event.addListener(marker, "click", function() {
			infowindow.open(map,marker);
		});
	}
	
	function sticky_menu() {
		var menu_scroll = $("body").offset().top;
		var scroll_top = $(window).scrollTop();
		
		if ( scroll_top > menu_scroll ) {
			$(".header_s").addClass("navbar-fixed-top animated fadeInDown");
		} else {
			$(".header_s").removeClass("navbar-fixed-top animated fadeInDown"); 
		}
	}
	
	/* + Document Ready - Handler for .ready() called */
	$(document).ready(function() {

		/* - Scrolling Navigation* */
		var width	=	$(window).width();
		var height	=	$(window).height();
		
		/* - Set Sticky Menu* */
		if( $(".header_s").length ) {
			sticky_menu();
		}
		
		$('.navbar-nav li a[href*="#"]:not([href="#"]), .site-logo a[href*="#"]:not([href="#"])').on("click", function(e) {
	
			var $anchor = $(this);
			
			$("html, body").stop().animate({ scrollTop: $($anchor.attr("href")).offset().top - 49 }, 1500, "easeInOutExpo");
			
			e.preventDefault();
		});

		/* - Responsive Caret* */
		$(".ddl-switch").on("click", function() {
			var li = $(this).parent();
			if ( li.hasClass("ddl-active") || li.find(".ddl-active").length !== 0 || li.find(".dropdown-menu").is(":visible") ) {
				li.removeClass("ddl-active");
				li.children().find(".ddl-active").removeClass("ddl-active");
				li.children(".dropdown-menu").slideUp();
			}
			else {
				li.addClass("ddl-active");
				li.children(".dropdown-menu").slideDown();
			}
		});
		
		/* - Expand Panel * */
		$("#slideit").on ("click", function() {
			$("#slidepanel").slideDown(1000);
			$("html").animate({ scrollTop: 0 }, 1000);
		});	

		/* Collapse Panel * */
		$("#closeit").on("click", function() {
			$("#slidepanel").slideUp("slow");
			$("html").animate({ scrollTop: 0 }, 1000);
		});	
		
		/* Switch buttons from "Log In | Register" to "Close Panel" on click * */
		$("#toggle a").on("click", function() {
			$("#toggle a").toggle();
		});	
		
		/* - Menu Switch */
		if($(".menu-switch").length){
			menu_switch();
		}
		
		panel_resize();
		
		/* - Revolution Slider */
		if($(".slider-section").length){
			$("#home-slider1").revolution({
				sliderType:"standard",
				delay:6000,
				responsiveLevels:[1920,1025,768,480],
				gridwidth:[1920,1025,768,480],
				gridheight:[921,700,600,400],			
				navigation: {
					arrows:{
						enable:true,
						style:"uranus",
					},
					bullets: {
						enable:true,
						style:"zeus",
						hide_onleave:false,						
						hide_under:600,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:33,
						space:10,
						tmp:''
					}
				},
			});
			
			$("#home-slider2").revolution({
				delay:6000,
				responsiveLevels:[1920,1025,768,480],
				gridwidth:[1920,1025,768,480],
				gridheight:[700,600,560,400],
				navigation: {
					arrows:{
						enable:true,
						style:"uranus",
					},
					bullets: {
						enable:true,
						style:"zeus",
						hide_onleave:false,
						direction:"horizontal",
						h_align:"center",
						v_align:"bottom",
						h_offset:0,
						v_offset:30,
						space:10,
						tmp:''
					}
				},
			});
		}
		
		/* - Skill Section */
		$( " [id*='skill_type-'] " ).each(function ()
		{
			var ele_id = 0;
			ele_id = $(this).attr('id').split("-")[1];
			
			var $this = $(this);
			var myVal = $(this).data("value");

			$this.appear(function()
			{			
				var skill_type1_item_count = 0;
				var skill_type1_count = 0;					
				skill_type1_item_count = $( "[id*='skill_"+ ele_id +"_count-']" ).length;				
				
				for(var i=1; i<=skill_type1_item_count; i++)
				{
					skill_type1_count = $( "[id*='skill_"+ ele_id +"_count-"+i+"']" ).attr( "data-skill_percent" );
					$("[id*='skill_"+ ele_id +"_count-"+i+"']").animateNumber({ number: skill_type1_count }, 5000);
					if($('html[dir="rtl"]').length) {
						$("[id*='skill_"+ ele_id +"_count-"+i+"']").css("right",skill_type1_count +"%");
					} else {
						$("[id*='skill_"+ ele_id +"_count-"+i+"']").css("left",skill_type1_count +"%");
					}
				}
				
				var skill_bar_count = 0;
				var skills_bar_count = 0;
				skill_bar_count = $( "[id*='skill_bar_"+ ele_id +"_count-']" ).length;
				
				for(var j=1; j<=skill_bar_count; j++)
				{
					skills_bar_count = $( "[id*='skill_"+ ele_id +"_count-"+j+"']" ).attr( "data-skill_percent" );
					$("[id*='skill_bar_"+ ele_id +"_count-"+j+"']").css({'width': skills_bar_count +'%'});
				}
			});
		});
		
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
        });
		
		/* - Case Studies Carousel */
		if( $(".case-studies-carousel").length ) {
			if($('html[dir="rtl"]').length) {
				$(".case-studies-carousel").owlCarousel({
					loop: true,
					margin: 10,
					nav: false,
					dots: false,
					autoplay: false,
					rtl: true,
					responsive:{
						0:{
							items: 1
						},
						480:{
							items: 2
						},
						600:{
							items: 2
						},
						768:{
							items: 3
						},
						1024:{
							items: 4
						},
						1366:{
							items: 5
						}
					}
				});
			} else {
				$(".case-studies-carousel").owlCarousel({
					loop: true,
					margin: 10,
					nav: false,
					dots: false,
					autoplay: false,
					responsive:{
						0:{
							items: 1
						},
						480:{
							items: 2
						},
						600:{
							items: 2
						},
						768:{
							items: 3
						},
						1024:{
							items: 4
						},
						1366:{
							items: 5
						}
					}
				});
			}
		}
		
		/* - Contact Map* */
		if($("#map-canvas-contact").length === 1){
			initialize("map-canvas-contact");
		}
		
		/* - Quick Contact Form* */
		$( "#btn_submit" ).on( "click", function(event) {
		  event.preventDefault();
		  var mydata = $("form").serialize();
			$.ajax({
				type: "POST",
				dataType: "json",
				url: "contact.php",
				data: mydata,
				success: function(data) {
					if( data["type"] == "error" ){
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").removeClass("alert-msg-success");
						$("#alert-msg").addClass("alert-msg-failure");
						$("#alert-msg").show();
					} else {
						$("#alert-msg").html(data["msg"]);
						$("#alert-msg").addClass("alert-msg-success");
						$("#alert-msg").removeClass("alert-msg-failure");					
						$("#input_name").val("");
						$("#input_email").val("");												
						$("#input_subject").val("");										
						$("#textarea_message").val("");
						$("#alert-msg").show();				
					}			
				},
				error: function(xhr, textStatus, errorThrown) {
					alert(textStatus);
				}
			});
		});
		
	});	/* - Document Ready /- */
	
	/* + Window Scroll */
	$(window).on("scroll",function() {
		/* - Set Sticky Menu* */
		if( $(".header_s").length ) {
			sticky_menu();
		}
	});
	
	$( window ).on("resize",function() {
		var width	=	$(window).width();
		var height	=	$(window).height();
		
		/* - Expand Panel Resize */
		panel_resize();
		menu_dropdown_open()
		
		/* - Menu Switch */
		if($(".menu-switch").length){
			menu_switch();
		}
	});
	
	/* + Window Load - Handler for .load() called */
	$(window).on("load",function() {
		/* - Site Loader* */
		if ( !$("html").is(".ie6, .ie7, .ie8") ) {
			$("#site-loader").delay(1000).fadeOut("slow");
		}
		else {
			$("#site-loader").css("display","none");
		}
		
	});

})(jQuery);