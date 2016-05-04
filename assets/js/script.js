$(document).ready(function() {
	var navOffset, scrollPos = 0;
	$("nav.navigation").wrap('<div class="nav-placeholder"></div>');
	$("nav.navigation").wrapInner('<div class="nav-in"></div>');
	$(".nav-in").wrapInner('<div class="nav-in-most"></div>');
	function stickyUtility() {
		if (!$("nav.navigation").hasClass("fixed")) {
			navOffset = $("nav.navigation").offset().top;
		}
		$(".nav-placeholder").height($("nav.navigation").outerHeight());
	}
	stickyUtility();
	$(window).resize(function() {
		stickyUtility();
	});
	$(window).scroll(function() {

		scrollPos = $(window).scrollTop();
		if (scrollPos >= navOffset) {
			$("nav.navigation").addClass("fixed");
			$("ul.nav").css("width","100%");
			$("ul li").addClass("full-width-nav");
			$("ul.nav").css("left","0");
		} else {
			$("nav.navigation").removeClass("fixed");
			$("ul li").removeClass("full-width-nav");
			$("ul.nav").css("width","70%");
			$("ul.nav").css("left","10%");

		}

	});
	$(".m-navi").hide();
	$("#close").hide();

	$("#open").click(function(){
		$("#open").hide();
		$("#close").show();
		$(".m-navi").slideDown();

	});
	$("#close").click(function(){
		$("#close").hide();
		$(".m-navi").slideUp();
		$("#open").show();
	});
});
