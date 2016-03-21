<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>登录界面</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<script src="js/jquery-1.11.2.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<style type="text/css">
		body{background-image: url("image/login.jpg");-moz-background-size:100% 100%;background-size:100% 100%;background-repeat:  no-repeat;background-position: center;}
		.login{border-radius: 6px;border: 1px solid rgba(0,0,0,.2);width: 400px;height: 300px;background-color: #ffffff;text-align: center;margin:0 auto;vertical-align:middle;text-align: center;margin-top: 10%;}
		.login table{font-size: 12px;font-family: Microsoft YaHei;}
		.login button{width: 100%;height: 35px;}
		.login span{color: #ffffff;}
		.form-control{border-radius: 0px;}
		.input-group-addon{background-color: #1FB175;border: 0px solid #ccc;border-radius: 0px;}
		#basic-addon2{background-color: #E4B44C;}
	</style>
  </head>
  
  <body>
  	<div class="login" align="center">
  		<table width="80%" height="100%" align="center">
  			<tr>
  				<td>
  					<span style="font-size: 16px;color: black;">登录</span>
  				</td>
  			</tr>
			<tr>
				<td>
					<div class="input-group">
					  <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></span>
					  <input type="text" class="form-control" placeholder="手机号或邮箱" aria-describedby="basic-addon1">
					</div>
				</td>
			</tr>  		
			<tr>
				<td>
					<div class="input-group">
					  <span class="input-group-addon" id="basic-addon2"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span></span>
					  <input type="password" class="form-control" placeholder="密码" aria-describedby="basic-addon1">
					</div>
				</td>
			</tr>  	
			<tr>
				<td>
					<button type="button" class="btn btn-info">登&nbsp;&nbsp;录</button>
				</td>
			</tr>	
  		</table>
  	</div>
  </body>
</html>
