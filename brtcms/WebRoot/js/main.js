/**
 * 布瑞特 公共js
 */
$(function(){
	$(".navbar_top_middle span").on("mouseover",function(){
		$(this).css("color","#EE4000");
	}).on("mouseout",function(){
		$(this).css({"color":"#ffffff"});
	});
	$(".popover").on("mouseover",function(){
		alert(222);
		//$(this).css({"color":"#ffffff","background-color":"#4AA3DB"});
	});
	$('[data-toggle="popover"]').popover();
	
});

function person(){
	alert("我的主页");
}
function personsetting(){
	alert("设置");
}
function exit(){
	alert("退出");
}