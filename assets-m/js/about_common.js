/**
 * ENDE2019
 * createTime 2018.09.04
 * author Jim Wang (Hao Wang)
 * version 1.0
 */
/*------------video------------*/
$(document).ready(function () {

    

    $(".video_close").bind("click",function(){
        $(".video_warp").hide();
        $(".video_playbox").html('');
    })
});

function video_tab(id,arr){
    if($.trim( arr )=="全部"){
        $(".v_tab_list li").show();
    }else{
        $(".v_tab_list li").hide();
        var getSize=$(".v_tab_list li").length;
        for(var i=0;i<getSize; i++){
            var getArr=$(".v_tab_list li").eq(i).attr('data-controller')
            if(getArr == arr){
                $(".v_tab_list li").eq(i).show();
            }
        }
    }
    $(".video_tabWarp .video_tab li").removeClass("cut");
    $(id).addClass("cut");
}


function popVideo(src){
    $(".video_playbox").html('<video class="video" src="'+src+'" controls=""></video>');
    $(".video_warp").show();
}

function tabPlay(i,src,poster){
    $(".video_ptab .v_list li.cut").removeClass("cut");
    $(i).addClass("cut");
    var creatHtml='<video pleload="none" class="home_video" controls="" src="'+src+'" poster="'+poster+'"></video>'
    $(".video_ptab .v_area").html(creatHtml);
    
}


/*------------video end------------*/

/*------------news------------*/
$(function(){
    $(".news_menu li").bind("click",function(){
    var index = $(this).index();
    $(".news_menu li").removeClass('cut').eq(index).addClass("cut");
    $(".news_tab").hide().eq(index).show();
    });
})
/*------------news end------------*/
/*------------history------------*/
$(function(){
    var swiper = new Swiper('.about_his_wrap_act .swiper-container2', {
        nextButton: '.about_his_wrap_act .swiper-button-next',
        prevButton: '.about_his_wrap_act .swiper-button-prev',
        loop: false
    });

    var Slideindex = "";
    //===========切换===========
    $(".about_his_y li").on("click",function(){
        var $index=$(this).index();
        develop_tab($index);
    });

    
    

    $(".about_his_lImg").bind("click",function(){
        var socha=$(".about_his_y li").size()-swiperMenu.activeIndex;
        
       if(socha <= 2 && $(".about_his_y li").size() > swiperMenu.activeIndex){
        //var newIndex=swiperMenu.activeIndex+1;
        //swiperMenu.activeIndex = newIndex;
        //develop_tab(9);
        swiperMenu.activeIndex=9
        return
       }
    })



    swiperMenu = new Swiper('.about_his_swiper', {
        loop: true,
        pagination: '.about_his_swiper .swiper-pagination',
        nextButton: '.about_his_rImg',
        prevButton: '.about_his_lImg',
        slidesPerView: 3,
        spaceBetween:10,
        initialSlide:0,
        onSlideChangeEnd: function(swiper){
            console.log(swiper.activeIndex)
                var $index=swiper.activeIndex;
                develop_tab($index)
        }
    });
   
})



function develop_tab(i){
    $(".about_his_y li").removeClass("active").eq(i).addClass("active");
   
    if(i-3 >= $(".about_his_wrap li").length){
        isAct=0;
    }else{
        isAct= i-3
    }
    
    $(".about_his_wrap li").removeClass("about_his_wrap_act").eq(isAct).addClass("about_his_wrap_act");
    
    var swiper = new Swiper('.about_his_wrap_act .swiper-container2', {
    nextButton: '.about_his_wrap_act .swiper-button-next',
    prevButton: '.about_his_wrap_act .swiper-button-prev',
    initialSlide :0,
    loop: false
    });
}
/*------------history end------------*/
/*------------join------------*/
$(document).ready(function(){
    //===========切换===========
    $(".about_join_r li").on("click",function(){
        var index = $(this).index();
        console.log(index);
        $(".about_join_r li").removeClass('about_join_r_act');
        $(".about_join_cont>li").removeClass('about_join_cont_act');
        $(this).addClass("about_join_r_act");
        $(".about_join_cont>li").eq(index).addClass('about_join_cont_act');
    });

    $(".newest_table .newest_fun").bind("click",function(){
        $(this).parent().addClass("cut");
        $(this).siblings('.newest_content').slideToggle(function(){
            if($(this).is(":visible")){
                $(this).parent().addClass("cut");
            }else{
                $(this).parent().removeClass("cut");
            }
        });

    });

    //===========点击展开
    $(".demand_table .demand_fun").bind("click",function(){
        
        $(this).siblings('.demand_content').slideToggle(function(){
            if($(this).is(":visible")){
                $(this).parent().addClass("cut");
            }else{
                $(this).parent().removeClass("cut");
            }
        });
    });

    $(".join_traffic .traffic_ul li").bind("click",function(){
        $(".join_traffic .traffic_ul li").removeClass("cut");
        $(this).addClass("cut");
        $(".join_traffic .traffic_ul li .about_join_map").hide();
        $(this).find(".about_join_map").show();
    })

    //===============二维码
    $(".about_join_f1").on("click",function(){
        $(".overlay").show();
    });
    $(".close").on("click", function () {
        $(".overlay").hide();
    })
});
/*------------join end------------*/

/*------------culture------------*/
/*$(function(){
    var innerHeight = $(".about_culture_b:eq(0)>div>img").height()+'px';
    $(".about_culture_b2").css("height",innerHeight);
    $(".about_culture_b1").css("height",innerHeight);
});*/
/*------------culture end------------*/
/*------------case ------------*/
$(function(){
    var swiper = new Swiper('.swiper_tab .cut .swiper_case', {
        nextButton: '.swiper_case .swiper-button-next',
        prevButton: '.swiper_case .swiper-button-prev',
        loop: false
    });

    $(".scheme_menu li").on("click",function(){
        var index = $(this).index();
        $(".scheme_menu li").removeClass('cut').eq(index).addClass("cut");
        $(".swiper_tab li").removeClass('cut').eq(index).addClass('cut');

        var swiper = new Swiper('.swiper_tab .cut .swiper_case', {
        nextButton: '.swiper_case .swiper-button-next',
        prevButton: '.swiper_case .swiper-button-prev',
        loop: false
        });
    });
})
/*------------case end------------*/
