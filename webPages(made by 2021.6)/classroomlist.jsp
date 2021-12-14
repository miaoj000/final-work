<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<%@include file="link.jsp"%>
<title>Insert title here</title>
</head>
<body>
	<div class="container">
		<%@include file="nav.jsp"%>
		<div class="row">
		<div class="col-lg-12 card">
			<div class="row">
					<table class="table col-lg-12">
						<thead class="thead-dark">
							<tr>
								<th scope="col">教室号</th>
								<th scope="col">课时</th>
								<th scope="col">教室容量</th>
								<th scope="col">是否已被预约</th>
								<th scope="col">预约人</th>
								<th scope="col">预约人联系方式</th>
							</tr>
						</thead>
						<tbody>
							<c:forEach items="${classroomlist }" var="classroom">
								<tr>
									<td>${classroom.classroomNumber }</td>
									<td>${classroom.classNumber }</td>
									<td>${classroom.peopleAllowed}</td>
									<td>${classroom.classStatus}</td>
									<td>${classroom.appointmentName}</td>
									<td><c:if test="${classroom.appointmentName != null}"><button type="button"
											class="btn btn-primary" 
											onclick="window.location.href='MySpareClassListAction?appointmentName=${classroom.appointmentName}'">
											查看我的预约</button></c:if>		
									</td>
								</tr>
							</c:forEach>
						</tbody>
					</table>
				</div>
				</div>
			</div>
		</div>
</body>
</html>