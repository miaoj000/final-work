<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div class="row">
	<div class="btn-group col-lg-12" style="margin:0;padding:0" role="group" aria-label="Button group with nested dropdown">
		<button type="button" class="btn btn-secondary" onclick="window.location.href='#'">19计算机2缪俊杰190110910520</button>
	    <button type="button" class="btn btn-secondary" onclick="window.location.href='IndexAction'">主页</button>
	    <button type="button" class="btn btn-secondary" onclick="window.location.href='LoginAction'">登录</button>
	    <button type="button" class="btn btn-secondary" onclick="window.location.href='RegAction'">注册</button>
	    <button type="button" class="btn btn-secondary" onclick="window.location.href='SpareClassListAction'">空闲教室查询</button>
	    <button type="button" class="btn btn-secondary" onclick="window.location.href='AppointmentAction'">教室使用预约</button>
	  	<button type="button" class="btn btn-secondary" onclick="window.location.href='remark.jsp'">账户重置/删除</button>
	  	<button type="button" class="btn btn-secondary" onclick="window.location.href='/190110910520/download/introduction.doc'">说明下载</button>
	    <div class="btn-group" role="group">
			<button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			${username}
			</button>
			<div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
			<a class="dropdown-item" href="MyInfoAction">我的信息</a>
			<a class="dropdown-item" href="MySpareClassListAction">我的预约</a>
			<a class="dropdown-item" href="repass.jsp">修改密码</a>
			<a class="dropdown-item" href="LogoutAction">登出</a>
			</div>
		</div>
	</div>
</div>