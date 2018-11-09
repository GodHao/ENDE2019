$(".header-nav li").click(function(){
	$(".header-nav li.active").removeClass("active");
	$(this).addClass("active");
});
