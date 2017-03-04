
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

	/*============================================================
	*	init
	============================================================*/
	function init(){

		//plugin
		$(".btn,.footerBtn").fadeRollOver({"opacity" : 0.5});
		$(".fade").fadeRollOver({"opacity" : 0.5});
		$("#WorkPase .thumnailBox li").fadeRollOver({"opacity" : 0.55});


		//実行
		startMenu();
		startHeader();
	}

	/*============================================================
	*	startMenu
	============================================================*/
	function startMenu(){

		//変数
		var $menuBtn = $("#MenuBtn");
		var $menuArea = $("#MenuArea");
		var $bgTop = $("#MenuArea .top");
		var $bgUnder = $("#MenuArea .under");
		var $navi = $("#MenuArea li");
		var $line = $("#MenuBtn li");
		var $line01 = $("#MenuBtn li").eq(0);
		var $line02 = $("#MenuBtn li").eq(1);

		var isNaviMode = false;

		var openColor = "#D9D9D9";
		var closeColor = "#D9D9D9";

		if($menuBtn.hasClass("black")){
			closeColor = "#000000";
		}

		/*=========初期設定=========*/
		$menuBtn.find("li").css({
			"opacity" : 0,
			"y" : 20
		});

		$navi.fadeRollOver({"opacity" : 0.4});

		$menuBtn.on("mouseover",onMouseOver);
		$menuBtn.on("mouseout",onMouseOut);
		$menuBtn.on("click",onClick);


		/*=========最初のアニメーション=========*/
		setTimeout(function(){

			$menuBtn.find("li").each(function(i,i_target){
				$(i_target).transit({
					"opacity" : 1,
					"y" : 0,
					"delay" : 100 * i
				},1000,"easeOutQuint");
			});

		},0);

		/*=========イベント=========*/
		function onMouseOver(){

			if(isNaviMode) return;

			$line01.transitStop(true,false).transit({
				"y" : -4
			},200,"out");
			$line02.transitStop(true,false).transit({
				"y" : 4
			},200,"out");
		}
		function onMouseOut(){

			if(isNaviMode) return;

			$line01.transitStop(true,false).transit({
				"y" : 0
			},200,"out");
			$line02.transitStop(true,false).transit({
				"y" : 0
			},200,"out");
		}
		/*=========イベント=========*/
		function onClick(){

			if(!isNaviMode){

				isNaviMode = true;

				//エリアのアニメーション
				$menuArea.show();
				$bgTop.transitStop(true,false).transit({
					"height" : "50%",
					"opacity" : 1
				},900,"easeInOutQuint");

				$bgUnder.transitStop(true,false).transit({
					"height" : "50%",
					"opacity" : 1,
					"top" : "50%"
				},900,"easeInOutQuint");

				$navi.transitStop(true,false).transit({
					"opacity" : 1,
					"delay" : 500
				},700);

				//ラインの背景

				//バツボタン
				$line01.transitStop(true,false).transit({
					"rotate" : "-45deg",
					"y" : 6,
					"background" : openColor
				},900,"easeOutExpo");
				$line02.transitStop(true,false).transit({
					"rotate" : "45deg",
					"y" : -7,
					"background" : openColor
				},900,"easeOutExpo");

			}else{

				isNaviMode = false;

				//エリアのアニメーション
				$bgTop.transitStop(true,false).transit({
					"height" : "0%",
					"opacity" : 0
				},900,"easeInOutQuint");
				
				$bgUnder.transitStop(true,false).transit({
					"height" : "0%",
					"opacity" : 0,
					"top" : "100%"
				},900,"easeInOutQuint",function(){
					$menuArea.hide();
				});

				$navi.transitStop(true,false).transit({
					"opacity" : 0
				},700);


				//バツボタン解除
				$line01.transitStop(true,false).transit({
					"rotate" : "0deg",
					"y" : 0,
					"background" : closeColor
				},900,"easeOutExpo");
				$line02.transitStop(true,false).transit({
					"rotate" : "0deg",
					"y" : 0,
					"background" : closeColor
				},900,"easeOutExpo");
			}

		}//onClick




	}

	/*============================================================
	*	startHeader
	============================================================*/
	function startHeader(){
		var $logo = $("header .logo");
		var $downArrow = $("header .downArrow img");
		var $cover = $("header .cover").opacity(0);
		var $bg = $("header .bg").opacity(0);

		$bg.transit({
			"opacity" : 1,
			"scale"  :1,
			"delay" : 200
		},1200,"easeOutQuint");

		$cover.transit({
			"opacity" : 1,
			"delay" : 540
		},1200,"easeOutQuint");

		setInterval(animteDownArrow,2000);
		animteDownArrow();
		function animteDownArrow(){
			$downArrow.transit({
				"opacity" : 0
			},700,"in-out");
			$downArrow.transit({
				"opacity" : 1
			},700,"in-out");
		}

	}




init();});
