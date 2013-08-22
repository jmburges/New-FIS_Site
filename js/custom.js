jQuery(document).ready(function( $ ) { 
		
		//Drop Menu
		function mainmenu(){
		$('#nav ul').css({display: "none"}); // Opera Fix
		
		$('#nav li').hover(function(){
			$(this).find('ul:first').css({visibility: "visible",display: "none"}).fadeIn(200);
			},function(){
			$(this).find('ul:first').css({visibility: "hidden"});
			});
		}
		
		mainmenu();
		
		$('.nav ul').attr('id', 'nav');
		
		
		//Responsive Menu
		$(".nav").mobileMenu();
		$("<div class='mobile-icon'></div>").insertAfter(".select-menu");
		
		
		//Flexslider
		if ((custom_js_vars.flexslider_auto) == 'enabled') {
			$('.flexslider').flexslider({
				slideshow: true,
				animationDuration: 200 
			});
		
		} else {
			$('.flexslider').flexslider({
				slideshow: false
			});
		}
		
		
		//Tabs
		$("ul.tabs").tabs("div.panes > div",{effect: "fade" }); 
		
		
		//Hidden Drawer Toggle
		$('.hidden-toggle').click(function() {
		  $('.header-hidden').slideToggle('fast', function() {
		    // Animation complete.
		  });
		  
		  $(".header-hidden-toggle-wrap").toggleClass("show-hidden");
		  $(".hidden-toggle .icon-plus").toggleClass("icon-minus");
		});
		
		
		//FitVids
		$(".okvideo").fitVids();		
		
		
		//Column Heights
		$(document).ready(function() {
		   var maxHeight = -1;
		
		   $('.column').each(function() {
		     maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
		   });
		
		   $('.column').each(function() {
		     $(this).height(maxHeight);
		   });
		 });

		//collapsing navigation on down scroll to specified change point.

		var changePoint = 100, //y-axis scroll point at which to alter the navigation
				currentPoint = 0; //initially set current point to zero.

		function minifyNav() {
			$('object#minify').css({'display':'block'});
			$('object#bigify').css({'display':'none'});
			$('.header-right').css({'padding-top':'10px'});
			$('.nav').css({'margin-top':'0'});
			$('.nav > li').css({'padding-bottom':'0'});
		}

		function bigifyNav() {
			$('object#minify').css({'display':'none'});
			$('object#bigify').css({'display':'block'});
			$('.header-right').css({'padding-top':'40px'});
			$('.nav').css({'margin-top':'1em'});
			$('.nav > li').css({'padding-bottom':'17px'});

		}

		$(window).scroll(function() { //windows scrolls event.
			currentPoint = $(document).scrollTop(); //update the current scroll position.
			//console.log(currentPoint);
			if (currentPoint > changePoint) {
				minifyNav(); //shrink nav
			} else {
				bigifyNav(); ///bigify nav
				$('#work-force-1').css('margin-top','-'+currentPoint+'px');
			}
		});

		// Bio text more link to expand text for larger bios.

		var max_fold_height = 228;

		$('.jg-bio').each(function(){
			var current_height = $(this).height();

			if (current_height > max_fold_height) {
				$(this).parent().append('<span class="expand">more</span>');
			}
		});

		$('.jg-bio').height(max_fold_height);
		$('.jg-bio').css({'position':'relative','z-index':'0','overflow':'hidden'});

		$('.expand').toggle(function() {
			$(this).parent().find('.jg-bio').addClass('auto_height');
			$(this).text('less');
		}, function() {
			$(this).parent().find('.jg-bio').removeClass('auto_height');
			$(this).text('more');
		});
		
});