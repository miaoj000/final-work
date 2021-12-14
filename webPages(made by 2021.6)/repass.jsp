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
				<div class="card-header">修改密码</div>
					<div class="card-body">
						<form method="post" action="RePass">
							<div class="form-group row">
								<label for="inputPassword1" class="col-lg-3 col-form-label">旧密码</label>
								<div class="col-lg-9">
									<input type="password" name="opassword" class="form-control" required
										id="inputPassword1" placeholder="旧密码">
								</div>
							</div>
							<div class="form-group row">
								<label for="inputPassword2" class="col-lg-3 col-form-label">新密码</label>
								<div class="col-lg-9">
									<input type="password" name="npassword" class="form-control" required
										id="inputPassword2" placeholder="新密码">
								</div>
							</div>
							
							<div class="form-group row">
								<label for="inputEmail3" class="col-lg-3 col-form-label">重复新密码</label>
								<div class="col-lg-9">
									<input type="password" name="e" class="form-control" required
										id="inputPassword3" placeholder="新密码" onkeyup="validate()">
								</div>
								<p style="color:red" id="tip"></p>
							</div>
							<div class="form-group row">
								<div class="col-lg-10">
									<button id="bt-repass" type="submit" class="btn btn-outline-primary" disabled>确定</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<%@include file="right.jsp" %>
			</div>
	</div>
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
</body>
</html>