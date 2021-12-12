// 한샘LIFE+ _ jQuery
/// 현재 페이지 window 폭//
var winW=$(window).width();
var mobsts=0;//0-DT, 1-mob
if(winW<500 ){mobsts=1;}//폭이 500보다작으면 mobile임!
//console.log(mobsts);


$(function(){ /////////// JQB ///////////////////////////////////////////////////////////////////////////////
	
	/// class=bfopa 호버시 디자인 변경 //////////////////////////////////////////////////////////////
	$(".lifebox>div").hover(
		function(){ //over
			$(this).addClass("topa");
			$("a",this).stop().animate({opacity:"1"},300);
		},
		function(){ //out
			$(this).removeClass("topa").css({zIndex:"0"});
			$("a",this).stop().animate({opacity:"0"},300);
		});
	/// class=bfopa 호버시 디자인 변경 //////////////////////////////////////////////////////////////
	
	/// 공간제안 좌우 클릭하면 이미지 옮기기 ///////////////////////////////////////////////////////////
	$(".spbtn>span").click(function(){
		var cbtn=$(this).index();
		console.log(cbtn);
		
		$(this).css({color:"#000",fontFamily:"spoqaR"}).siblings().css({color:"#666"});
		
		if(cbtn===1){ /*오른쪽 버튼*/
			$(".space>ul").prepend($(".space>ul>li").last()).css({left:"-33.333333%"});
			$(".space>ul").stop().animate({left:"0"},500,"easeOutSine");
		} /// 오른쪽 버튼 if문 ///
		
		else if(cbtn===0){ /*왼쪽 버튼*/
			$(".space>ul").stop().animate({left:"-33.333333%"},500,"easeOutSine",function(){
				$(this).append($("li",this).first()).css({left:"0"});
			}); /// animate ///
		} /// 왼쪽 버튼 if문 ///
	}); /// click //////////////////////////////////////////////////////////////////////////////////////////////
	
	/// 가구이야기 좌우 클릭하면 이미지 옮기기 ///////////////////////////////////////////////////////////
	$(".storybtn>span").click(function(){
		var cbtn=$(this).index();
		console.log(cbtn);
		
		$(this).css({color:"#000",fontFamily:"spoqaR"}).siblings().css({color:"#666"});
		
		if(cbtn===1){ /*오른쪽 버튼*/
			$(".story>ul").prepend($(".story>ul>li").last()).css({left:"-33.333333%"});
			$(".story>ul").stop().animate({left:"0"},500,"easeOutSine");
		} /// 오른쪽 버튼 if문 ///
		
		else if(cbtn===0){ /*왼쪽 버튼*/
			$(".story>ul").stop().animate({left:"-33.333333%"},500,"easeOutSine",function(){
				$(this).append($("li",this).first()).css({left:"0"});
			}); /// animate ///
		} /// 왼쪽 버튼 if문 ///
	}); /// click //////////////////////////////////////////////////////////////////////////////////////////////
	
	$("a").click(function(e){
		e.preventDefault();
	});
	
	
	
}); /////////// JQB ///////////////////////////////////////////////////////////////////////////////
































