<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<%@include file="link.jsp" %>
<title>空闲教室管理预约系统</title>
<script type="text/javascript">
function btqr(){
	var btn = document.getElementById("bt");
	btn.onclick = function(){
		var i1 = document.getElementById("img1")
		$.get("QrBuildAction",{text:"text"},function(data){
			i1.src="photo/"+data;
			console.log(data);
		})
	}
}
</script>
</head>
<body>
	<div class="container">
		<%@include file="nav.jsp" %>
		<div class="row">
			<div class="card col-lg-9">
				<div class="card-body">
					<p style="color: red">${info}</p>
					<img class="card-img-top" src="photo/index.jpg">
					<p class="card-text">欢迎来到空闲教室管理预约系统，请登录后使用</p>
					<div class="row">
						<div class="col-lg-2 offset-lg-1">
							<a class="btn btn-outline-primary" href="LoginAction">登录</a>
						</div>
						<div class="col-lg-2 offset-lg-6">
							<a class="btn btn-outline-primary" href="RegAction">注册</a>
						</div>
					</div>
				</div>
			</div>
			<div class="card col-lg-3">
				<img class="card-img-top" id="img1" src="">
				<div class="card-body">
					<p class="card-text">移动版请扫码下载,点击按钮显示二维码</p>
					<button class="btn btn-outline-primary" id="bt" onclick="btqr()">生成二维码</button>
				</div>
			</div>
		</div>
	</div>
</body>
</html>