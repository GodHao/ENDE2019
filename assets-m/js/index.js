/**
 * ENDE2019
 * createTime 2018.09.04
 * author Jim Wang (Hao Wang)
 * version 1.0
 */
$(function(){
    var swiper = new Swiper('.carousel_warp .swiper-container', {
    pagination: '.carousel_warp .swiper-pagination',
    paginationClickable: true,
    loop: true
    });

    var swiper = new Swiper('.ibanner_box_2 .swiper-container', {
    pagination: '.ibanner_box_2 .swiper-pagination',
    paginationClickable: true,
    loop: true,
    autoplay : 5000
    });

  $(".menuBox .rclick").bind("click",function(){
    var liIndex=$(this).parent().index();
    switch( Math.floor(liIndex/3) ){
      case 0:
        $(".menuBox .bBor").eq(3).css({"clear":"both"})
      break
      case 1:
        $(".menuBox .bBor").eq(6).css({"clear":"both"})
      break
    }

    if($(this).parent().attr("class").indexOf("bBor_cut") != -1){
      $(this).siblings(".bor_list").slideToggle();
      $(this).parent().removeClass("bBor_cut");
    }else{
      $(".bBor").removeClass("bBor_cut");
      $(".bBor .bor_list").removeAttr("style")
      $(this).parent().addClass("bBor_cut");
      $(this).siblings(".bor_list").css({marginLeft:-$(this).offset().left})
      $(this).siblings(".bor_list").slideToggle()
    }
  })


})
