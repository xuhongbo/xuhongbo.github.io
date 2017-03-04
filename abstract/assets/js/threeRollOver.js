
/*==========================================================================================================================================
*	
*	
*	common.js
*	
*	
==========================================================================================================================================*/
$(function(){


	/*============================================================
	*	変数
	============================================================*/
	var $header = $("header");
	var $animateBlock = $("header .animateWrapper");
	var $cover = $("header .animateWrapper .cover");
	var $logo = $("header .animateWrapper .logo");
	var $arrow = $("header .animateWrapper .downArrow");
	var imageW,imageH;
	var centerMouseX;
	var centerMouseY;

	/*============================================================
	*	init
	============================================================*/
	function init(){


		imageW = $animateBlock.width();
		imageH = $animateBlock.height();

		$header.on("mousemove",onMouseMove);
		$header.on("mouseout",onMouseOut);

	}

	/*============================================================
	*	onMouseMove
	============================================================*/
	function onMouseMove(i_event){
		
		var eventObj;
		var propName;

		//firefox
		if(window.navigator.userAgent.toLowerCase().indexOf("firefox") != -1){
			eventObj = i_event;
			propName = "offset";
		}else{
			eventObj = event;
			propName = "layer";
		}

		centerMouseX = (eventObj[propName + "X"] - imageW * 0.5) * 0.01;
		centerMouseY = (eventObj[propName + "Y"] - imageH * 0.5) * 0.02;



		$animateBlock.css({
			"transform":"rotateX(" + -centerMouseY + "deg) rotateY(" + centerMouseX +"deg)"
		});
		$cover.css({
			"transform":"translateX(" + centerMouseX * 4 + "px) translateY(" + centerMouseY * 4 +"px)"
		});
		$logo.css({
			"transform":"translateX(" + centerMouseX * 3 + "px) translateY(" + centerMouseY * 3 +"px)"
		});
		$arrow.css({
			"transform":"translateX(" + centerMouseX * 3 + "px) translateY(" + centerMouseY * 3 +"px)"
		});
	}

	

	/*============================================================
	*	onMouseOut
	============================================================*/
	function onMouseOut(){
		$animateBlock.css({
			"transform":"rotateX(0deg) rotateY(0deg)"
		});
		$cover.css({
			"transform":"translateX(0px) translateY(0px)"
		});
		$logo.css({
			"transform":"translateX(0px) translateY(0px)"
		});
		$arrow.css({
			"transform":"translateX(0px) translateY(0px)"
		});
	}

	init();

});
