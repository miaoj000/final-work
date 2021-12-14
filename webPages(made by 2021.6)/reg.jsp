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
<script type="text/javascript">
	function validate(){
		var in1 = $("#inputPassword2").val();
		var in2 = $("#inputPassword3").val();
		console.log(in1);
		console.log(in2);
		if(in1==in2){
			$("#tip").html("两次密码相同！");
			$("#tip").css("color","green");
			$("#bt-repass").removeAttr("disabled");
		}else{
			$("#tip").html("两次密码不同！");
			$("#tip").css("color","red");
		}
	}
	</script>
	<div class="container">
		<%@include file="nav.jsp" %>
		<div class="row">
			<div class="col-lg-8 card">
				<div class="card-header">用户注册</div>
					<div class="card-body">
						<p style="color: red">${info}</p>
						<form method="post" action="RegAction">
							<div class="form-group row">
								<label for="inputEmail1" class="col-lg-3 col-form-label">用户名</label>
								<div class="col-lg-9">
									<input type="text" name="username" class="form-control" required
										id="inputEmail1" placeholder="用户名">
								</div>
							</div>
							<div class="form-group row">
								<label for="inputPassword2" class="col-lg-3 col-form-label">密码</label>
								<div class="col-lg-9">
									<input type="password" name="password" class="form-control" required
										id="inputPassword2" placeholder="密码">
								</div>
							</div>
							<div class="form-group row">
								<label for="inputPassword3" class="col-lg-3 col-form-label">重复密码</label>
								<div class="col-lg-9">
									<input type="password" name="password" class="form-control" required
										id="inputPassword3" placeholder="密码" onkeyup="validate()">
								</div>
								<p style="color:red" id="tip"></p>
							</div>
							<div class="form-group row">
								<label for="inputPassword4" class="col-lg-3 col-form-label">联系方式</label>
								<div class="col-lg-9">
									<input type="text" name="phone" class="form-control" required
										id="inputPassword4" placeholder="联系方式">
								</div>
							</div>
							<div class="form-group row">
								<label for="inputPassword5" class="col-lg-3 col-form-label">学号</label>
								<div class="col-lg-9">
									<input type="text" name="number" class="form-control" required
										id="inputPassword5" placeholder="学号">
								</div>
							</div>
							<div class="form-group row">
								<label for="inputPassword3" class="col-lg-3 col-form-label">专业</label>
								<div class="col-lg-3">
									<select name="major">
										<option value="电子商务">电子商务</option>
										<option value="计算机">计算机</option>
										<option value="信息管理">信息管理</option>
										<option value="软件工程">软件工程</option>
									</select>
								</div>
							</div>
							<div class="form-group row">
								<div class="col-lg-10">
									<button id="bt-repass" type="submit" class="btn btn-outline-primary" disabled>注册</button>
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