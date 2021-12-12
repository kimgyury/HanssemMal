// 메인페이지 JS

/// 현재 페이지 window 폭//
var winW=$(window).width();
var mobsts=0;//0-DT, 1-mob
if(winW<500 ){mobsts=1;}//폭이 500보다작으면 mobile임!
//console.log(mobsts);

$(function(){ //////////////////////////////// JQB /////////////////////////////////////////
	
	 new Swiper('.swiper-container', {
		 
		slidesPerView: 2,
		spaceBetween: 30,
		slidesPerGroup: 1,
		speed: 500,
		loop: true,
		loopAdditionalSlides:2,
		centeredSlides: true,
		 
		breakpoints: {
			500: {
				slidesOffsetBefore:1,
				slidesPerView: 1.1,
				spaceBetween: 10,
				slidesPerGroup: 1,
				speed: 500,
				loop: true,
				loopAdditionalSlides:2,
				centeredSlides: true,
			}
			
		}
	 });
	
	/// 모바일 베스트, 세일상품 영역 스와이프 /////////////////////////////////////
	new Swiper(".swiper-mobitem, .swiper-display", {
		
		breakpoints: {
			500: {
				slidesPerView: 1,
				spaceBetween: 40,
				slidesPerGroup: 1,
				speed: 500,
				loop: true,
				loopAdditionalSlides:2,
				centeredSlides: true,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false,
				},
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
				}
			}
		}
	});
	
	
	/// 1150px 이하 세일상품 영역 스와이프 /////////////////////////////////////
	new Swiper(".swiper-offbox", {
		
		slidesPerView: 3.5,
		spaceBetween: 0,
		slidesPerGroup: 1,
		speed: 500,
		loop: true,
		loopAdditionalSlides:2,
		
		breakpoints:{
			900:{
				slidesPerView: 2.5,
				spaceBetween: 0,
				slidesPerGroup: 1,
				speed: 500,
				loop: true,
				loopAdditionalSlides:2,
				pagination: {
					el: '.swiper-pagination',
					type: 'bullets',
				}
			}
		}
	});
	
	
	// 모바일 베스트, 세일상품 영역 스와이프 /////////////////////////////////////
	new Swiper(".swiper-mobitem", {
		
		slidesPerView: 1,
		spaceBetween: 40,
		slidesPerGroup: 1,
		speed: 500,
		loop: true,
		loopAdditionalSlides:2,
		centeredSlides: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		}
	});
	
	// 모바일 베스트, 세일상품 영역 스와이프 /////////////////////////////////////
	new Swiper(".swiper-display", {
		
		slidesPerView: 1,
		spaceBetween: 40,
		slidesPerGroup: 1,
		speed: 500,
		loop: true,
		loopAdditionalSlides:2,
		centeredSlides: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		}
	});
	
	/// 모바일 신상품영역 스와이프 /////////////////////////////////////
	new Swiper(".swiper-mobnew", {
		
		slidesPerView: 1,
		spaceBetween: 40,
		slidesPerGroup: 1,
		speed: 500,
		loop: true,
		loopAdditionalSlides:2,
		centeredSlides: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		}
	});
	
	/// 모바일 배너 스와이프 /////////////////////////////////////
	new Swiper(".swiper-mobbanner", {
		
		slidesPerView: 1,
		spaceBetween: 0,
		slidesPerGroup: 1,
		speed: 500,
		loop: true,
		loopAdditionalSlides:2,
		centeredSlides: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
		}
	});
	
	
	$(".swiper-top").draggable({
			axis:"x" //x축으로 고정(y로 쓰면 y축 고정)
		}); /// draggable /// 
		
		/// 드래그 대상에 transition을 설정하여 드래그를 떼었을때 약간 더 가는 애니메이션
		$(".swiper-top").css({
			transition:"all .4s ease-out"
		}); /// css ///
		
		/// 이동위치 한계설정하기 ///
		/// 첫번째 이미지와 끝 이미지가 화면 중간까지만 오도록 설정함 ///
		/// 1. mouseup -> 마우스 왼쪽버튼을 누르다가 놓을때 발생하는 이벤트
		/// 2. mousedown -> 마우스 왼쪽버튼을 누르는 시점에서 발생하는 이벤트
		/// 3. mousemove -> 마우스 포인터가 설정영역에서 움직일때 연속적으로 발생하는 이벤트
		$(".swiper-top").bind("mouseup mousemove",function(e){
			//console.log("포인터X좌표:"+e.pageX+"\n포인터Y좌표"+e.pageY);
			e.preventDefault();
			/// 1. 움직이는 박스(#move)의 현재 left값을 알아오기
			var mpos=$(".swiper-top").offset().left;
			// offset() 메서드 - 선택 요소의 측정시점의 각종 위치 크기등의 값을 반환해 주는 메서드.
			console.log(mpos);
			
			/// 2. 화면의 절반 크기 계산
			var fpoint=$(window).width();
			// $(window).width() - 현재브라우저 창의 가로폭
			//console.log("화면절반폭"+fpoint)
			
			/// 3. 마지막이미지 한계값
			/// #move의 width크기에서 화면 절반 값을 뺀 값 -> 마지막 이미지화면 중간위치
			var lpoint=$(".swiper-top").width()-fpoint;
			
			/// 4. 처음과 마지막 위치 강제 설정하기
			if(mpos>fpoint*0.1){ //첫번째 이미지 한계
				$(".swiper-top").css({left:0});
			}/// if문 ///
			
			else if(mpos<-lpoint){ //마지막 이미지 한
				$(".swiper-top").css({left:-lpoint+"px"});
			}
		}); /// mousemove, mouseup ///
	 
	///////////////////////// 배너 자동 넘기기 //////////////////////////////////////////////////////////////////////////
	autobanner();
	///////////////////////// 배너 자동 넘기기 //////////////////////////////////////////////////////////////////////////
	
	///////////////////////// 한샘 라이프 이미지 클릭시 페이지 이동 //////////////////////////////////////////////////////////////////////////
	$("#lifebox li").click(function(){
		location.href="sub_life.html";
	}); /// click /////////////////////
	///////////////////////// 한샘 라이프 이미지 클릭시 페이지 이동 //////////////////////////////////////////////////////////////////////////
	
	//////////////////////// 블릿 클릭시 신상품 이동 //////////////////////////////////////////////////////////////////////
	var bbtnsts=0;
	$("#bbtn>ul>li").click(function(){
		
		if (bbtnsts===1){return false;}
		bbtnsts=1;
		
		clearInterval(newb);
		clearTimeout(newT);
		newT=setTimeout(autobanner,4000);
		
		var bidx=$(this).index();
		var cbidx=$("#bbtn>ul>li.selbbtn").index();
		var diffB=Number(bidx-cbidx);//차이수
		console.log(bidx, cbidx, diffB);
		
		$(this).addClass("selbbtn").siblings().removeClass("selbbtn");
		var absdB=Math.abs(diffB); //절대값 차이수
		
		if (diffB > 0){
			$("#newitem").stop().animate({left:absdB*-100+"%"},800,"easeOutSine",function(){
				var tempB=absdB;	
				for (var i=0; i<absdB; i++){
					tempB--;
					$(this).append($("li",this).first()).css({left:tempB+"%"});
				}
				bbtnsts=0;
			}); /// animate ///
		} /// if ///
		
		else if (diffB < 0){ //오른쪽 이동
			var tempB2=0; //임시변수
			for(var k=0; k<absdB; k++){
				tempB2++;
				$("#newitem").prepend($("#newitem>li").last()).css({left:(tempB2*-100)+"%"});
			}
			$("#newitem").animate({left:"0"},800,"easeOutSine",function(){bbtnsts=0;});
		}/// else if ///
	});	
	//////////////////////// 블릿 클릭시 신상품 이동 //////////////////////////////////////////////////////////////////////
	
	//////////////////////// 블릿 클릭시 배너 이동 //////////////////////////////////////////////////////////////////////
	$("#builetbox>li").click(function(){
		
		clearInterval(sban);
		clearTimeout(banT);
		banT=setTimeout(autobanner,4000);
		
		var bno=$(this).index(); //블릿순번
		var cbno=$("#builetbox>li.bcolor").index(); //현재블릿순번
		var diff=Number(bno-cbno); //블릿순번-현재블릿순번 차이수
		console.log("차이수 :"+diff);
		
		//var ccls=$("#banbox>li").eq(1).attr("class");
		//ccls=Number(ccls.substr(ccls.length-1,1))-1;
		
		var absd=Math.abs(diff); //절대값 차이수
		console.log(absd);
		
		$(this).addClass("bcolor").siblings().removeClass("bcolor");
		
		if (diff>0){//왼쪽이동
			$("#banbox").animate({left:absd*-100+"%"},600,"easeOutSine",function(){
				var temp=absd;//횟수 임시변수
				for(var i=0; i<absd; i++){
					temp--;//1씩감소해서 하나씩 잘라 위치값을 변경함!
					$(this).append($("#banbox>li").first()).css({left:temp+"%"});					
				}/// for ///
			}); /// animate ///
		}
		else if (diff<0){//오른쪽이동
			var temp2=0;//임시변수
			for(var j=0; j<absd; j++){
				temp2++;//1씩증가해서 left위치값을 증가 시킨다.
				$("#banbox").prepend($("#banbox>li").last()).css({left:(temp2*-100)+"%"});		
			}/// for ///
			$("#banbox").animate({left:"0"},600,"easeOutSine");
		}
		
	}); /// click //////////////////////////////////////////////////////////
	//////////////////////// 블릿 클릭시 배너 이동 //////////////////////////////////////////////////////////////////////
	
	///////////////////////// 모바일 상품 드래그 //////////////////////////////////////////////////////////////////////////
	var win=$(window).width();
	$(".mobPbox").draggable({
		axis: "x" //x축고정!
	}); /// draggable //////////////////////////////////////////
	
	$(".mobPbox").on("dragstop touchend",function(){
		// console.log(win);
		
		var cleft=$(this).offset().left; //현재 left값 알아오기
		
		if(cleft>0){
			$(this).stop().animate({left:"0px"},500,"easeOutSine");/// ani ///
		} /// if 문 //////////////////////////////////////////////
		else if(cleft<0&&cleft>-win*0.5){
			$(this).stop().animate({left:"-100%"},500,"easeOutSine");/// ani ///
			$("#mobbuilet>ul>li").eq(1).addClass("selmbtn").siblings().removeClass("selmbtn");
		} /// if 문 //////////////////////////////////////////////
		else if(cleft<-win){
			$(this).stop().animate({left:-win+"px"},500,"easeOutSine");/// ani ///
		} /// if 문 //////////////////////////////////////////////
		else if(cleft <-win*0.5&&cleft>-win){
			$(this).stop().animate({left:"0px"},500,"easeOutSine");/// ani ///
			$("#mobbuilet>ul>li").eq(0).addClass("selmbtn").siblings().removeClass("selmbtn");
		} /// if 문 //////////////////////////////////////////////
	}); /// dragstop touchend ///////////////////////////////
	///////////////////////// 모바일 상품 드래그 //////////////////////////////////////////////////////////////////////////
	
	///////////////////////// 한샘리뷰 드래그 //////////////////////////////////////////////////////////////////////////
	/*
	드래그 슬라이드 기능구현
	1. 드래그가 끝난시점에 각 배너의 width값의 10%를 기준해서
	   처음 ul의 left값이 -25% 이므로
	2. -35% 보다 크면 제자리, 작으면 슬라이드 왼쪽이동
	3. -15% 보다 작으면 제자리, 크면 슬라이드 오른쪽이동
	*/
	var winw=$(window).width();
	
	$("#mobreview").draggable({axis:"x"});
	
	var diffM=0;/// 당긴만큼 폭을 보정하기 위한 변수
	
	$("#mobreview").on("dragstart touchstart",function(){
		diffM=$(this).offset().left;/// 처음 찍었을때 left값
		console.log(diffM);
	});

	$("#mobreview").on("dragstop touchend",function(){

		$(".cover").show();
		//var clm=$("li",this).eq(0).offset().left;
		//console.log("첫번째li"+clm);
		console.log("전체폭"+winw);
		var currl=$(this).offset().left; //현재 left값 알아오기
		console.log("현재 레프트값"+currl);
		
		if (currl > -winw*0.23){
		//diffM=diffM-$(this).offset().left;// 처음찍었을때 left값-드래그 끝난순간 left값=당겨진 차
		//console.log(diffM);
			$("#mobreview").stop().animate({left:-winw*0.66+"px"},800,"easeOutCirc",function(){
				$(this).prepend($("li",this).last()).css({left:"-33%"});//이동후 left값 초기화!!!
			});/// ani ////
		} /// if 문 ///
		
		else if(currl < -winw*0.43){
			$("#mobreview").stop().animate({left:"-33%"},800,"easeOutCirc",function(){// 이동 후 맨앞의 li를 잘라서 맨뒤로 이동
				$(this).append($("li",this).first()).css({left:"-33%"});//이동후 left값 초기화!!!
			});/// ani ////
		} /// else if 문 ///
		
		else{// 범위이외엔 제자리
			$(this).stop().animate({left:-win*0.25+"px"},800,"easeOutCirc");/// ani ////
		}/// else문 ///
		
		setTimeout(function(){$(".cover").hide();},800);
	});
	///////////////////////// 한샘리뷰 드래그 /////////////////////////////////////////////////////////////////////////////////////////
	
	//////////////////////// 상품 탭 클릭시 상품창 변경 /////////////////////////////////////////////////////////////////////////////
	$("#mobP>ul li").click(function(){
		var idx=$(this).index(); //클릭된 li의 순번
		//alert(idx);
		$(this).addClass("Pcolor").siblings().removeClass("Pcolor");
		$(".Pbox").eq(idx).addClass("Pboxcolor").siblings().removeClass("Pboxcolor");
	}); /// click ///////////////////////////////////////////////
	//////////////////////// 상품 탭 클릭시 상품창 변경 /////////////////////////////////////////////////////////////////////////////
	
	///////////////////////// 베스트 자동함수 /////////////////////////////////////////////////////////////////////////////////////////
	$(".udbtn").click(function(e){
		e.preventDefault(); //a태그 기본이동 막기
		var idx=$(this).index(); // 클릭된 a태그의 순번
		
		clearInterval(sbsts);//자동실행 멈춤
		clearTimeout(sbT);// 타임아웃함수 지우기(매번지워야함! - 안그러면 여러번 셋팅되서 스나미처럼 실행됨!!)
		sbT=setTimeout(autoSideBan,4000);// 4초간 아무작업 안하면 다시 자동이동호출하기
		
		// 사이드배너 이동함수 호출
		goSideBan(idx);
	}); //////// click ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////// 베스트 자동함수 ////////////////////////////////////////////////////////////////////////////////////////
	
	///////////////////////// 신상품 자동함수 ///////////////////////////////////////////////////////////////////////////////////////
	
	$("#newbox>a").click(function(e){
		e.preventDefault(); //a태그 기본이동 막기
		var idx=$(this).index(); // 클릭된 a태그의 순번
		
		clearInterval(newb);//자동실행 멈춤
		clearTimeout(newT);// 타임아웃함수 지우기(매번지워야함! - 안그러면 여러번 셋팅되서 스나미처럼 실행됨!!)
		newT=setTimeout(autonew,4000);// 4초간 아무작업 안하면 다시 자동이동호출하기
		
		// 이동함수 호출
		gonew(idx);
	});//// click ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////// 신상품 자동함수 ///////////////////////////////////////////////////////////////////////////////////////
	
	/// 신상품 영역 자동함수 호출 ///
	autonew();
	/// 베스트영역 자동함수 호출 ///
	autoSideBan();
	
	//////////////////////// 모바일 베스트, 신상품 탭 클릭시 상품창 변경 /////////////////////////////////////////////////////////////////////////////
	var mtsts=0;
	$("#mobtab>a").click(function(){
		if (mtsts===1){return false;}
		mtsts=1;
		var aidx=$(this).index();
		console.log(aidx);
		
		if (aidx===1){
			$(this).addClass("seltab").siblings().removeClass("seltab");
			$("#mobnew").css({opacity:"1", zIndex:"1"});
			$("#mobbest").css({opacity:"0", zIndex:"-1"});
			mtsts=0;
		}
		else if (aidx===0){
			$(this).addClass("seltab").siblings().removeClass("seltab");
			$("#mobnew").css({opacity:"0", zIndex:"-1"});
			$("#mobbest").css({opacity:"1", zIndex:"1"});
			mtsts=0;
		}
	});
	//////////////////////// 모바일 베스트, 신상품 탭 클릭시 상품창 변경 /////////////////////////////////////////////////////////////////////////////
	
	/////////////////////// 세일상품 영역 ///////////////////////////////////
	$("#dsalebox>ul>li").hover(
		function(){
			$(this).addClass("sopa");
		},
		function(){
			$(this).removeClass("sopa");
		}
	);
	/////////////////////// 세일상품 영역 ///////////////////////////////////
	
	////////////////////// 리뷰 호버시 //////////////////////////////////////
	$(".resmall>li>a, .resmall2>li>a").hover(
		function(){
			$(this).addClass("recolor");
		},
		function(){
			$(this).removeClass("recolor");
		}
	);
	////////////////////// 리뷰 호버시 //////////////////////////////////////
	
	$("a").click(function(e){
		e.preventDefault();
	});
	
	
}); ///////////////////////////////// JQB /////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var sban; /// 배너 setinterval 전역변수
var banT; /// 배너 타임아웃함수용 변수

var sbsts; /// 베스트상품 setinterval 전역변수
var sbT; /// 사이드 배너 타임아웃함수용 변수

var newb; /// 신상품 setintetval 전역변수
var newT; /// 타임아웃변수

///////////////////////// 베스트영역 자동함수 //////////////////////////////////////////////////////////////////////////
var beststs=0; //반복실행 막기 전역변수
function goSideBan(bidx){ //idx 위,아래 구분 (1-위로버튼, 2-아래로버튼) 함수-idx이므로 이름이 같아도 됨.
	// 반복실행 막기 리턴 false //
	if(beststs===1){return false;}
	beststs=1;
	
	if (bidx===1){// 위로버튼
			$("#bestitem").stop().animate({top:"-50%"},600,"easeOutSine",function(){
			$(this).append($("#bestitem>li").first()).css({top:"0"});
			beststs=0;
		});
	}// 위로버튼///////////////////////////////
	
	else if(bidx===2){//아래로버튼
		$("#bestitem").prepend($("#bestitem>li").last()).css({top:"-50%"});
		$("#bestitem").stop().animate({top:"0"},600,"easeOutSine",function(){
			beststs=0;
		});
	}//아래로버튼/////////////////////////////
}///// goSideBan  함수 /////////////////////////////////////////////////////////////////////////////////
/*
	함수명 : autoSideBan
	기능 : 사이드배너 자동넘김 셋팅함수
*/
function autoSideBan(){
	sbsts=setInterval("goSideBan(1)",4000); //// setInterval /////
}//// autoSideBan 함수 //////////////////////////////////////////////////////////////////////////////////////
///////////////////////// 베스트영역 자동함수 //////////////////////////////////////////////////////////////////////////

///////////////////////// 신상품영역 자동함수 //////////////////////////////////////////////////////////////////////////
var newsts=0; //반복실행 막기 전역변수
function gonew(idx){ //idx 위,아래 구분 (1-위로버튼, 2-아래로버튼) 함수-idx이므로 이름이 같아도 됨.
	// 반복실행 막기 리턴 false //
	if(newsts===1){return false;}
	newsts=1;
	
		if(idx===1){//왼쪽버튼
			$("#newitem").stop().animate({left:"-102.5%"},800,"easeOutSine",function(){
				$(this).append($("li",this).first()).css({left:"0"});
				newsts=0;
			});
			var cnp=$("#newitem>li").eq(1).attr("data-n1");
			//console.log(cnp);
			$("#bbtn>ul>li").eq(cnp).addClass("selbbtn").siblings().removeClass("selbbtn");
		}//왼쪽버튼s
		
		else if(idx===2){//오른쪽버튼
			$("#newitem").prepend($("#newitem>li").last()).css({left:"-100%"});
			$("#newitem").animate({left:"0"},800,"easeOutSine",function(){
				newsts=0;
			});
			var cnp=$("#newitem>li").eq(1).attr("data-n1");
			//console.log(cnp);
			cnp--;
			$("#bbtn>ul>li").eq(cnp).addClass("selbbtn").siblings().removeClass("selbbtn");
		}//오른쪽버튼	
		
}///// gonew  함수 ///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
	함수명 : autonew
	기능 : 사이드배너 자동넘김 셋팅함수
*/
function autonew(){
	// 사이드 배너 자동넘김 셋팅
	newb=setInterval("gonew(1)",5000); //// setInterval /////
}//// autonew ///////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// 신상품영역 자동함수 //////////////////////////////////////////////////////////////////////////

///////////////////////// 배너 자동 넘기기 함수 //////////////////////////////////////////////////////////////////////////
function gobanner(){
	$("#banbox").animate({left:"-100%"},600,"easeOutSine",function(){
		$(this).append($("#banbox>li").first()).css({left:"0"});
	});
	
	//블릿변경하기
	var ccls=$("#banbox>li").eq(1).attr("class");
	ccls=Number(ccls.substr(ccls.length-1,1))-1;
	//console.log(ccls);
	$("#builetbox>li").eq(ccls).addClass("bcolor").siblings().removeClass("bcolor");
	
}///// goSideBan  함수 ///////////////////////////////////////////////////////////////////////////////////////////////////
function autobanner(){
	// 배너 자동넘김 셋팅
	sban=setInterval(gobanner,5000); //// setInterval /////
}//// autoBanner //////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// 배너 자동 넘기기 함수 //////////////////////////////////////////////////////////////////////////









