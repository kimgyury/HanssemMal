// BED JS //
var winW=$(window).width();
var mobsts=0;//0-DT, 1-mob
if(winW<500 ){mobsts=1;}//폭이 500보다작으면 mobile임!
//console.log(mobsts);


/// 이미지 설명글 전역변수 셋팅 ///
var msg=[
	"유로 601 그레이 침대 일반형 K",
	"유로 601 그레이 침대 일반형 Q",
	"유로 601 그레이 침대 수납형 Q",
	"유로 501 내추럴화이트 침대 K/Q",
	"유로 501 내추럴화이트 침대 SS",
	"유로 501 미드브라운 침대 K/Q 겸용",
	"유로 501 미드브라운 침대 SS",
	"지오 브라운 전동침대 세트 K",
	"지오 브라운 전동침대 세트 Q",
	"모아 내추럴 SS 수납형",
	"클로즈 내추럴 SS 일반형",
	"클로즈 내추럴 SS 수납형",
	"샌드 오크 침대 SS 수납형",
	"샌드 오크 침대 SS 일반형",
	"체드 브라운 SS"
];

var won=[
	"1,359,000원",
	"1,259,000원",
	"1,459,000원",
	"697,000원",
	"542,000원",
	"697,000원",
	"542,000원",
	"3,999,000원",
	"2,780,000원",
	"539,000원",
	"419,000원",
	"359,000원",
	"629,000원",
	"449,000원",
	"549,000원"
];

$(function(){ ///////////////////////// JQB ////////////////////////////////////
	
/*	for(var i=0;i<15;i++){
		$("#imgbox").append('<li class="bedphoto"><a href="#"><img src="www/image/subbed0'+(i+1)+'.png" alt="배경"><span class="bedtxt">'+msg[i]+'</span><span class="bedwon">'+won[i]+'</span></a></li>');
		//console.log(msg[i].indexOf("K"));
	} /// 상품이미지 for문 /// 
		
	*/
	//////////////// sorting 메뉴 클릭시 해당 메뉴만 보이기 /////////////
	var scode=["All","K","Q","SS"];
	$("#sizetab li").click(function(e){
		e.preventDefault();
		
		var seq=$(this).index();
		console.log(seq);
		seq=scode[seq];
		
		if(seq==="All"){
			$("#imgbox>li").show();
		}//// if //////
		else{		
			$("#imgbox>li").each(function(idx,ele){
				var ctxt=$(".bedtxt",this).text().indexOf(seq);
//				console.log(ctxt);
				if(ctxt===-1){// 아닌것
					$(ele).hide();
				}
				else{// 해당되는것
					$(ele).show();
				}
			});/// each ////			
		}//////// else ///////////////////
		
		/// 해당 선택된 li 클래스 넣기 ///
		$(this).addClass("scolor").siblings().removeClass("scolor");
		
	});////////////// click ////////////////////*
	
	$(".bedphoto>a").click(function(e){
		e.preventDefault();
	});
	
	
	
}); ///////////////////////// JQB ////////////////////////////////////













