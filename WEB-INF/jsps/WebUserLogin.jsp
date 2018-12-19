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
	<h1>网站登录</h1>
    <form action="<c:url value='/login.action'/>" method="post">
	        邮　箱：<input type="text" name="email" value="${Email }"/>${errors.email}<br/>
		密　码：<input type="password" name="password" " />${errors.password}<br/>
		<input type="submit" value="登录"/> <a href="<c:url value='/toRegister.action'/>">未注册</a>
	</form>
</body>
</html>