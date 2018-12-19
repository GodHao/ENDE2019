<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>网站注册</h1>
    <form action="<c:url value='/register.action'/>" method="post">
    	用户名：<input type="text" name="name" value="${form.name }"/>${errors.username}<br/>
	        邮　箱：<input type="text" name="email" value="${form.email }"/>${errors.email}<br/>
		密　码：<input type="password" name="password"/>${errors.password}<br/>
		<h2>基本信息填写</h2>
		职    称：
		<select name="title">
			<option value="1">Professor</option>
			<option value="2">Dr.</option>
			<option value="3">Mr.</option>
			<option value="4">Ms.</option>
			<option value="5">Miss</option>
		</select> <br/>
		国    籍：
		<select name="nationality" >
			<option value="China">China</option>
			<option value="England">England</option>
			<option value="US">US</option>
		</select> <br/>
		学校/机构：<input type="text" name="affiliation" value="${form.affiliation }"/> <br/>
		<input type="submit" value="注册"/>
	</form>
</body>
</html>