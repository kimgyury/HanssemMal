// 한샘인테리어 - 공통 제이쿼리 //
var tmSts=0;//탑메뉴변경상태값(0-변경가능, 1-변경불능)
$(window).scroll(function(){
	var winY=$(this).scrollTop();
	//console.log(winY);
	mobsts=1;
	
	if ( winY > 200 && tmSts===0){
		tmSts=1;//잠금장치
		$("#tmenu").css({top:"0",width:"100%",position:"fixed", backgroundColor:"#fff", left:"50%", transform:"translateX(-50%)"});
		$("#tmbox").css({width:"1200px"});
	}
	
	else if ( winY < 200 && tmSts===1){
		tmSts=0;//잠금장치
		$("#tmenu").css({width:"1200px",position:"relative", backgroundColor:"#fff", margin: "0 auto", left:"auto", transform:"translateX(0)"});
		$("#tmbox").css({width:"100%"});
	}
});

var dirSts=0;//방향상태값
$(function(){ ///////////////////////////////// JQB ///////////////////////////////////
	
	$("body").on("mousewheel", function (evente) {
		var dir=evente.originalEvent.wheelDelta; 

		if (dir<0 && tmSts===1 && dirSts===0){//아랫방향
			dirSts=1;//잠금
			$("#tmenu").slideUp();
		}
		else if (dir>0 && tmSts===1 && dirSts===1){
			dirSts=0;//잠금
			$("#tmenu").slideDown();
		}
		
	});
	
	///////////////////////// 메뉴 클릭시 페이지 이동 //////////////////////////////////////////////////////////////////////////
	/// 로고 클릭시 메인페이지로 이동
	$("#logobox>ul>li").last().css({cursor:"pointer"}).click(function(){
		location.href="index.html";
	});
	
	/// #currnav의 첫번째 span 태그 클릭시 메인페이지 이동 
	$("#currnav span").first().css({cursor:"pointer"}).click(function(){
		location.href="index.html";
	}); /// click //////////////////////////////////////////////////
	
	/ 메인메뉴 클릭시 페이지 이동
	$("#tmbox>li a").click(function(){
		var pidx=$(this).parents("li").index();
		console.log(pidx);
		
		if (pidx===0){
			location.href="sub_bed.html";
		}
		else if (pidx===9){
			location.href="sub_life.html";
		}
	}); /// click ////////////////////////////////////////////////////
	///////////////////////// 메뉴 클릭시 페이지 이동 //////////////////////////////////////////////////////////////////////////
	
	/// 더보기 메뉴 호버시 디자인 변경 ///
	if (mobsts===0){
		$(".plusm").hover(
			function(){ //오버시
				$(".pcolor").eq(0).stop().animate({width:"20px"},300);
				$(".pcolor").eq(1).stop().animate({width:"20px"},500);
				$(".pcolor").eq(2).stop().animate({width:"20px"},800);
			},
			function(){ //아웃시
				$(".pcolor").eq(0).stop().animate({width:"0px"},300);
				$(".pcolor").eq(1).stop().animate({width:"0px"},500);
				$(".pcolor").eq(2).stop().animate({width:"0px"},800);
			}
		);
	}
	
	/// 더보기 메뉴버튼 클릭시 모바일 메뉴창 보이기 ///
	// PC버전 경우 //
		$(".plusm").click(function(){
			$("#mobgnb").animate({left:"0"},500,"easeOutSine");
			$("#mobbg").fadeIn(500);
		}); /// click ///
		$(".mbmenu>a").click(function(){
			$("#mobgnb").animate({left:"-350px"},500,"easeOutSine");
			$("#mobbg").fadeOut(500);
		}); /// click ///
	/// 더보기 메뉴버튼 클릭시 모바일 메뉴창 보이기 ///
	
	///////////////////////// 모바일 메뉴창 보이기,숨기기 //////////////////////////////////////////////////////////////////////////
	/// 제품 호버시 서브메뉴 나오기 ///
	// 모바일버전 첫번째 li 터치스타트 //
	if (mobsts===1){
		$("#mgnbbox>li:has('div')").bind("touchstart",function(e){
			e.preventDefault();
			var hidx=$("#mgnbbox>li").first().height();
			console.log(hidx);
			
			if (hidx===50){
				$(this).stop().animate({height:"235px"},500,"easeOutSine");
			}
			else {
				$(this).stop().animate({height:"50px"},500,"easeOutSine");
			}
		});
	}// 모바일버전 경우 //
	
	// 모바일버전 나머지 li 터치할경우 //
/*	if (mobsts===1){
		$("#mgnbbox>li").not($("#mgnbbox>li").first()).bind("touchstart",function(e){
			e.preventDefault();
			var curh=$("#mgnbbox>li").first().height();
			if (curh > 50){
				$("#mgnbbox>li").first().animate({height:"50px"},500,"easeOutSine");
			}
		});
    }*/
	// 모바일버전 나머지 li 터치할경우 //
	
	// PC 버전 //
	if (mobsts===0){
		$("#mgnbbox>li").first().hover(
		function(){
		$("#mgnbbox>li").stop().first().animate({height:"235px"},500,"easeOutSine");
	},
		function(){
		$("#mgnbbox>li").stop().first().animate({height:"50px"},500,"easeOutSine");
	});
	/// hover ///
	}
	///////////////////////// 모바일 메뉴창 보이기,숨기기 //////////////////////////////////////////////////////////////////////////
	
	//////////////////////// 모바일 메뉴창 #mgnbgbox - li 클릭시 ///////////////////////////////////////////////////////////////
	if (mobsts===1){
		$("#mgnbbox>li").bind("touchstart",function(e){
			e.preventDefault();
			$(this).addClass("mgnbC").siblings().removeClass("mgnbC");
			
		});
	}
	//////////////////////// 모바일 메뉴창 #mgnbgbox - li 클릭시 ///////////////////////////////////////////////////////////////
	
	///////////////////////// 패밀리사이트 보이기,숨기기 /////////////////////////// 
	// 이벤트 대상
	$(".fbtn span:last").hide();
	$(".fbtn").click(function(){
		var fmleg=$("#sitelog li:eq(1)").width();
		//alert(fmleg);
		if (fmleg===0){
			$(this).find("span").last().show().prev().hide();
			$("#sitelog li:eq(1)").animate({width:"450px"},700,"easeInOutCirc");
		} /// if문///
		else if(fmleg===450){
			$(this).find("span").first().show().next().hide();
			$("#sitelog li:eq(1)").animate({width:"0"},700,"easeInOutCirc");
		} /// else if문 ///
	}); /// click ///
	///////////////////////// 패밀리사이트 보이기,숨기기 ////////////////////////////
	
	///////////////////////// 인스타,페북,블로그 로고 오버/아웃시 색 변경  /////////////////////////// 
	// 이벤트 대상
	$(".insta").hover(
		function(){
			$(this).attr("src","www/image/instaicon.png");
		},
		function(){
			$(this).attr("src","www/image/instaiconWhite.png");
		}
	);/// hover ////////////
	
	// 페이스북 로고 오버/아웃시 색 변경 //
	$(".facebook").hover(
		function(){
			$(this).attr("src","www/image/facebookcolor.png");
		},
		function(){
			$(this).attr("src","www/image/facebook.png");
		}
	);/// hover ////////////
	
	// 블로그 로고 오버/아웃시 색 변경 //
	$(".blog").hover(
		function(){
			$(this).attr("src","www/image/blog2.png");
		},
		function(){
			$(this).attr("src","www/image/blog.png");
		}
	);/// hover ////////////
	///////////////////////// 인스타,페북,블로그 로고 오버/아웃시 색 변경  /////////////////////////// 
	
	///////////////////////// PC버전일때 검색버튼 클릭시 인풋 보이기, X버튼 누르면 사라지기 ///////////////////////////
	var fbtn=0;
	var sSts=0;
	$("#search").click(function(){
		if(sSts===1){return false;}
		sSts=1;
		
		console.log(fbtn);
		if (fbtn===0){
			$("img",this).attr("src","www/image/close.png");
			$("#findbox").stop().fadeIn(500);
			fbtn=1;
		}

		else if(fbtn===1) {
			$("img",this).attr("src","www/image/find.png");
			$("#findbox").stop().fadeOut(500);
			fbtn=0;
		}
		setTimeout(function(){sSts=0;},500);
	}); //// click ///////////////////////////////////
	///////////////////////// 검색버튼 클릭시 인풋 보이기, X버튼 누르면 사라지기///////////////////////////
	
}); ///////////////////////////////// JQB ////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////부드러운 스크롤//////////////////////////////////////////////////////////////////////
if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
	var delta = 0;
	if (event.wheelDelta) {delta = event.wheelDelta / 90;}
	else if (event.detail) {delta = -event.detail / 2;}

	handle(delta);
	if (event.preventDefault) {event.preventDefault();}
	event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
	var animationInterval = 10; //숫자가 작을수록 빨라짐
	var scrollSpeed = 10; //숫자가 작을수록 빨라짐

	if (end === null) {
		end = $(window).scrollTop();
	}
	end -= 20 * delta;
	goUp = delta > 0;

	if (interval === null) {
		interval = setInterval(function () {
		var scrollTop = $(window).scrollTop();
		var step = Math.round((end - scrollTop) / scrollSpeed);
		if (scrollTop <= 0 || 
		scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
		goUp && step > -1 || 
		!goUp && step < 1 ) {
		clearInterval(interval);
		interval = null;
			end = null;
		}
		$(window).scrollTop(scrollTop + step );
		}, animationInterval);
	}
}


































