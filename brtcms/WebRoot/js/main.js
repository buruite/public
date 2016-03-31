/**
 * 布瑞特 公共js
 */
$(function(){
	$(".navbar_top_middle span").on("mouseover",function(){
		$(this).css("color","#EE4000");
	}).on("mouseout",function(){
		$(this).css({"color":"#ffffff"});
	});
	//显示个人信息
	var popovermsg = "1";
	$(".person_popover").on("mouseenter",function(){
		if(popovermsg == "1"){
			$('.button_person').popover('show');
		}
	}).on("mouseleave",function(){
		if(popovermsg == "2"){
			$('.button_person').popover('hide');
		}
	});
	$('[data-toggle="popover"]').popover();
	$('.navbar_top_right').on('hidden.bs.popover', function () {
		popovermsg = "1";
	}).on("shown.bs.popover", function () {
		popovermsg = "2";
	});
	/*切换手机或邮箱*/
	$("#res_tab li").on("click",function(){
		if($(this).attr("class") == undefined || $(this).attr("class") == ""){
			$("#res_tab li").each(function(){
				$(this).removeClass("active");
			});
			if($(this).find("a").html().trim() == "邮箱注册"){
				$("#pb_res_phone").hide();
				$("#pb_res_email").show();
			}else if($(this).find("a").html().trim() == "手机注册"){
				$("#pb_res_email").hide();
				$("#pb_res_phone").show();
			};
			$(this).addClass("active");
		}
	});
	//上传图片
	$("input[type='file']").fileinput({
		showUpload: false,
		showCaption: false,
		browseClass: "btn btn-primary btn-md",
		allowedFileTypes:  ['image'],
      	previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
      	browseLabel: "请选择图片",
      	removeLabel: "删除",
		previewSettings: {image: {width: "100px", height: "80px"}}
	});
	/*回到顶部*/
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
/*登录*/
function login(){
	$("#loginModal").modal("show");
}
/*注册*/
function register(){
	$("#registerModal").modal("show");
}
function person(){
	window.location.href="mymsg.html";
}
function personsetting(){
	window.location.href="mysetting.html";
}
function exit(){
	alert("退出");
}