$(document).ready(function() {
	if (matchMedia) {
	var mq = window.matchMedia("(min-width: 1280px)");
	var mq2 = window.matchMedia("(min-width: 800px)");
	mq.addListener(WidthChange);
	mq2.addListener(WidthChange);
	WidthChange(mq, mq2);
	}
	function WidthChange() {
		if(mq.matches){
		$(".nav").css("font-size","100%");
		$(".nav").css("left","16%");
		$(".nav").css("width","65%");
		$("ul li").css("margin",".5rem 2rem .5rem 1rem");
	}
	else {
	$(".nav").css("font-size","90%");
	$(".nav").css("left","16%");
	$(".nav").css("width","65%");
	$("ul li").css("margin",".5rem 1.5rem .5rem 0.5rem");

	}

	if(mq2.matches){
		$(".nav").css("font-size","100%");
		$(".nav").css("left","16%");
		$(".nav").css("width","65%");
		$("ul li").css("margin",".5rem 2rem .5rem 1rem");
	}
	else {
		$(".nav").css("font-size","100%");
		$(".nav").css("left","0%");
		$(".nav").css("top","0%");
		$(".nav").css("width","100%");
		$("ul li").css("margin",".5rem 10rem 1rem .5rem");
	}
}
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
			$("ul li").css("margin","1rem 6rem 1rem 3rem");
			if(mq.matches){
			$(".nav").css("left","0%");
			$(".nav").css("width","100%");}
		} else {
			$("nav.navigation").removeClass("fixed");
			WidthChange();
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
