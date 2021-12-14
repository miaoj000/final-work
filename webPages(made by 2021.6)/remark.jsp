<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<%@include file="link.jsp" %>
<title>空闲教室管理预约系统</title>
<script type="text/javascript">
		function resetU(){
			var btnReset = document.getElementById("reset");
			var btnDelete = document.getElementById("delete");
			var user = $("#inputEmail1").val();
			console.log(user);
			$.get("ResetPass",{username:user},function(){
				alert("修改成功！");
			})
		}
		function deleteU(){
			var btnReset = document.getElementById("reset");
			var btnDelete = document.getElementById("delete");
			var user = $("#inputEmail1").val();
			$.get("DeleteUser",{username:user},function(){
				alert("修改成功！");
			})
		}
	</script>
</head>
<body>
	<div class="container">
		<%@include file="nav.jsp" %>
		<div class="row">
			<div class="col-lg-8 card">
				<div class="card-header">用户注册</div>
					<div class="card-body">
						<p style="color: red">${info}</p>
						<form method="post">
							<div class="form-group row">
								<label for="inputEmail1" class="col-lg-3 col-form-label">用户名</label>
								<div class="col-lg-9">
									<input type="text" name="username" class="form-control" required
										id="inputEmail1" placeholder="用户名">
								</div>
							</div>
							<div class="form-group row">
								<div class="col-lg-6">
									<button type="button" id="reset" class="btn btn-outline-primary" onclick="resetU()">重置</button>
								</div>
								<div class="col-lg-6">
									<button type="button" id="delete" class="btn btn-outline-primary" onclick="deleteU()">删除</button>
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