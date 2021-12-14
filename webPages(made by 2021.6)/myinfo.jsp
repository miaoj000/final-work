<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<%@include file="link.jsp" %>
<title>空闲教室管理预约系统</title>
</head>
<body>
	<div class="container">
		<%@include file="nav.jsp" %>
		<div class="row">
			<div class="col-lg-8 card">
				<div class="card-header">用户信息</div>
					<div class="card-body">
						<div class="form-group row">
							<label for="inputEmail1" class="col-lg-3 col-form-label">用户名</label>
							<div class="col-lg-9">
								<p>${userInfo.username}</p>
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword2" class="col-lg-3 col-form-label">密码</label>
							<div class="col-lg-9">
								<p>${userInfo.password}</p>
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword4" class="col-lg-3 col-form-label">联系方式</label>
							<div class="col-lg-9">
								<p>${userInfo.phone}</p>
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword5" class="col-lg-3 col-form-label">学号</label>
							<div class="col-lg-9">
								<p>${userInfo.number}</p>
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword3" class="col-lg-3 col-form-label">专业</label>
							<div class="col-lg-3">
								<p>${userInfo.major}</p>
							</div>
						</div>
						<a class="btn btn-danger">注销账户</a>
						<p>注意：账户一旦注销，需重新注册</p>
					</div>
				</div>
				<%@include file="right.jsp" %>
			</div>
	</div>
</body>
</html>