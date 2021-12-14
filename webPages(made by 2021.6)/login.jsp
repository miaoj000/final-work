<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<%@include file="link.jsp" %>
<script type="text/javascript">
	function change_checkcode(){
		document.getElementById("img").src="CheckCodeAction?"+Math.random();
	}
</script>
<title>空闲教室管理预约系统</title>
</head>
<body>
<div class="container">
	<%@include file="nav.jsp" %>
	<div class="row">
		<div class="col-lg-8 card">
			<div class="card-header">用户登录</div>
				<div class="card-body">
					<p style="color: red">${info}</p>
					<form method="post" action="LoginAction">
						<div class="form-group row">
							<label for="inputEmail3" class="col-lg-3 col-form-label">用户名</label>
							<div class="col-lg-9">
								<input type="text" name="username" class="form-control" required
									 placeholder="用户名">
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword3" class="col-lg-3 col-form-label">密码</label>
							<div class="col-lg-9">
								<input type="password" name="password" class="form-control" required
									 placeholder="密码">
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword3" class="col-lg-3 col-form-label">验证码</label>
							<div class="col-lg-4">
								<input type="text" name="checkcode" class="form-control" required
									 >
							</div>
							<div class="col-lg-3">
								<img id="img" src="CheckCodeAction" onclick="change_checkcode()">
							</div>
						</div>
						<div class="form-group row">
							<div class="col-lg-10">
								<button type="submit" class="btn btn-outline-primary">登录</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<%@include file="right.jsp" %>
		</div>
	</div>
	
</body>
</html>