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
	$(window).scroll(function(){  
        if ($(window).scrollTop()>500){  
            $(".back_to_top").fadeIn(500);  
        }  
        else  
        {  
            $(".back_to_top").fadeOut(500);  
        }  
    });  
    //当点击跳转链接后，回到页面顶部位置  
    $(".back_to_top").click(function(){  
        $('body,html').animate({scrollTop:0},10);  
        return false;  
    });
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