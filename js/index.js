(function ($) {
    // 多库共存
    $.noConflict();

    // 添加轮播图效果
    $('.carousel').carousel({interval: 2000});

    //左右按钮
     $('#menu li').bind('click', function () {
            let iIndex = $(this).index();
            $('#menu li').removeClass('active').eq(iIndex).addClass('active');
            $('.computer').css('display', 'none').eq(iIndex).css({display: 'block'});
        });

    
	//划过
	 $('.top-1').on('mouseenter', function () {
     		$('.body2').css('display','block');
     		$('.body2').siblings().css({'display':'none'});
 		});
    $('.top-2').on('mouseenter', function () {
     		$('.body3').css('display','block');
     		$('.body3').siblings().css({'display':'none'});
 		});
     $('.top-3').on('mouseenter', function () {
     		$('.body4').css('display','block');
     		$('.body4').siblings().css({'display':'none'});
 		});
      $('.top-4').on('mouseenter', function () {
     		$('.body5').css('display','block');
     		$('.body5').siblings().css({'display':'none'});
 		});
      $('.top-5').on('mouseenter', function () {
     		$('.body6').css('display','block');
     		$('.body6').siblings().css({'display':'none'});
 		});
 		$('.top-6').on('mouseenter', function () {
     		$('.body7').css('display','block');
     		$('.body7').siblings().css({'display':'none'});
 		});
 		
    //选项卡
   
    	$('#menu li').bind('click', function () {
            let iIndex = $(this).index();
            console.log(iIndex);
            $('#menu li').removeClass('active')
            .eq(iIndex).addClass('active')
            .css({'background-image':'url(images/1.png)'})
            .css({'color':'red'}).siblings()
            .css({'background':'#ce0202'})
            .css({'color':'#fff'});
            $('.import-1').css('display', 'none').eq(iIndex).css({display: 'block'});
        });


})(jQuery);