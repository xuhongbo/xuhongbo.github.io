
/*=========================================================================================================================
*
*
*   Kit.js
*	(メドッドのショートカット)
*
*
=========================================================================================================================*/

/*====================================================================================================
*
*	jQueryメソッドのショートカット
*
====================================================================================================*/
/*----------------------------------
*	px文字列をリプレース
----------------------------------*/
$.cutPx = function(i_target){
	return Number(i_target.replace("px",""));
}

/*----------------------------------
*	undefinedの判別
----------------------------------*/
$.isUndefined = function(i_value){ return typeof(i_value) == "undefined"; }

/*----------------------------------
*	jQueryの変数にまとめてアクセス
----------------------------------*/
$.wrap = function(){
}


/*====================================================================================================
*
*	jQueryメソッドのショートカット
*
====================================================================================================*/
/*----------------------------------
*	top,bottom,left,right
----------------------------------*/
$.fn.top = function(i_value){
	return (!$.isUndefined(i_value)) ? this.css("top",i_value) : $.cutPx(this.css("top"));
}
$.fn.bottom = function(i_value){
	return (!$.isUndefined(i_value)) ? this.css("bottom",i_value) : $.cutPx(this.css("bottom"));
}
$.fn.left = function(i_value){
	return (!$.isUndefined(i_value)) ? this.css("left",i_value) : $.cutPx(this.css("left"));
}
$.fn.right = function(i_value){
	return (!$.isUndefined(i_value)) ? this.css("right",i_value) : $.cutPx(this.css("right"));
}
$.fn.x = function(i_value){
	return (!$.isUndefined(i_value)) ? this.css("x",i_value) : $.cutPx(this.css("x"));
}
$.fn.y = function(i_value){
	return (!$.isUndefined(i_value)) ? this.css("y",i_value) : $.cutPx(this.css("y"));
}

/*----------------------------------
*	opacity,scale,rotate
----------------------------------*/
$.fn.opacity = function(i_value){
	return (!$.isUndefined(i_value)) ? this.css("opacity",i_value) : this.css("opacity");
}


$.fn.rotate = function(i_value){
	return (!$.isUndefined(i_value)) ? this.css("rotate",i_value + "deg") : this.css("rotate");
}

$.fn.scale = function(i_value){
	return (!$.isUndefined(i_value)) ? this.css("scale",i_value) : this.css("scale");
}




/*====================================================================================================
*
*	その他便利系
*
====================================================================================================*/

/*----------------------------------
*	data属性のショートカット
----------------------------------*/
$.fn.setId = function(){
	return this.each(function(i,i_target){　$(i_target).data({"id":i});　});
}
$.fn.getId = function(){
	return this.data()["id"];
}
$.fn.setDh = function(){
	return this.each(function(i,i_target){　$(i_target).data({"dh": $(i_target).height() });　});
}
$.fn.getDh = function(){
	return this.data()["dh"];
}

/*----------------------------------
*	delay
----------------------------------*/
var Delay = function(){
	this.timer;
	this.func;
}

Delay.prototype.set = function(i_delay,i_function){

	this.func = i_function;

	this.stop(false);
	this.timer = setTimeout(i_function,i_delay);
	
	return this;
}
Delay.prototype.stop = function(i_isEndTo){
	clearTimeout(this.timer);
	if(i_isEndTo){
		if(!$.isUndefined(this.func)) this.func();
	}

	return this;
}



/*----------------------------------
*	アニメーションで指定位置に移動
----------------------------------*/
$.fn.scrollTo = function(i_options){
	var options = $.extend({
		
		duration: 800,
		easing : "swing",
		delay : 0
 		
	},i_options);
	
	//移動
	$("html,body").stop(true,false).delay(options.delay).animate( { scrollTop:this.offset().top }, { duration: options.duration, easing: options.easing});

	return this;
};
/*----------------------------------
*	hoverRollOver
----------------------------------*/
$.fn.hoverRollOver = function(){

	/*----------------------------
	* init
	----------------------------*/
	function init(i_$this){

		var $this = i_$this;
		
		$this.hover(
			function(){
				$this.addClass("hover");
			},
			function(){
				$this.removeClass("hover");
			}
		);

	}
		
	
	//メソッドチェーン用
	return this.each(function(){ init( $(this) ); });
}

/*----------------------------------
*	フェードロールオーバー
----------------------------------*/
$.fn.fadeRollOver = function(i_options){

	/*=============================
	* Extend
	=============================*/
	var options = $.extend({
		
		time: 250,
		opacity:0.7,
		isStop:true
		
	},i_options);
	

	/*----------------------------
	* init
	----------------------------*/
	function init(i_$this){

		var $this = i_$this;
	
		$this.hover(
			function(){
				//$this.stop().fadeTo(options.time,options.opacity);
				$this.transitStop(true,false).transit({
					"opacity" : options.opacity
				},options.time,"linear");
			},
			function(){
				//if($this.hasClass("swiper-button-disabled")) return;
				$this.transitStop(true,false).transit({
					"opacity" : 1
				},options.time,"linear");
			}
		);
	}
		
	
	//メソッドチェーン用
	return this.each(function(){ init( $(this) ); });
	
}

/*----------------------------------
*	lineRollOver
----------------------------------*/
$.fn.lineRollOver = function(i_options){

	/*----------------------------
	* init
	----------------------------*/
	function init(i_$this){

		var $this = i_$this;
		$this.hover(
			function(){
				$this.stop().css({
					"text-decoration" : "underline"
				});
			},
			function(){
				$this.stop().css({
					"text-decoration" : "none"
				});
			}
		);

	}
		
	
	//メソッドチェーン用
	return this.each(function(){ init( $(this) ); });
	
}


/*---------------------------------------------------------------------------------------------------
*
*	■■gerSrc■■
*
----------------------------------------------------------------------------------------------------*/
$.fn.getSrc = function(){


	var check = {};
	var srcs = [];
	
	this.each(function(){
		
		$(this).find("img").each(function(){
			var src = $(this).attr("src");
			if(!check[src]){
				check[src] = src;
				srcs.push(src);
			}
		});
		
	});
	
	return srcs;
	
}

