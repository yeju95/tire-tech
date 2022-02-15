$('.navbar-gnb, .navSub_shadow').on('mouseenter mouseleave',function(ev){

    if( $(window).width() > 1169){      //pc(데스크탑) 상태
        
        if(ev.type=='mouseenter'){  //데스크탑상태에서 마운스를 올려놨을때
            $('.navSub_shadow').stop().slideDown();
            $('.sub').stop().fadeIn();
        }
        else{
            $('.navSub_shadow').stop().slideUp(250,function(){
                $(this).removeAttr('style'); 
                //slideUp실행뒤(콜백함수) 남아있는 style을 없애준다
            });            
            $('.sub').stop().fadeOut(250,function(){
                $(this).removeAttr('style');    
            });
        }
    } else {        //모바일 상태

    }
});   //mouseenter mouseleave 부분 끝


var $mainBtn = $('.navbar-gnb > li > a');  //메인 메뉴


$mainBtn.click(function(){ //모바일 상태에서 서브메뉴 슬라이드
    if( $(window).width() < 1170){   //모바일 상태    
   
        if( !$(this).parents('li').is('.act') ) {  //li에 act클라스가 없을때(닫혀있는상태)
            $('.navbar-gnb > li').removeClass('act'); 
            $(this).parents('li').addClass('act');  
            $('.icon').removeClass('on');
            $(this).siblings('.icon').addClass('on'); 

        } 
        else {     //li에 act클라스가 있을때(열려있는상태)  
            $('.navbar-gnb > li').removeClass('act');
            $('.icon').removeClass('on');
        }       
    
    } //모바일 상태 -끝
});//모바일 상태에서 서브메뉴 슬라이드 -끝


//모바일 상태에서 햄버거 버튼을 누르면 사이드바 열리고 닫힘
$('.trigger').click(function(){
    $(this).toggleClass('open');

    if($(this).hasClass('open')){
        $('.side-gnb').animate({right:0},500);
        $('.navbar-wrap').animate({left:-250},500);
    } else {
        $('.side-gnb').animate({right:-250},500);
        $('.navbar-wrap').animate({left:0},500);
    }
})







