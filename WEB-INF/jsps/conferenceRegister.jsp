<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>会议注册</title>
</head>
<body>
	<h1>会议注册</h1>
	<form action="<c:url value='/register.action'/>" method="post">
                姓    名：<input type="text" name="name" value="${form.name }"/>${errors.name}<br/>
	        邮    箱：<input type="text" name="email" value="${form.email }"/>${errors.email}<br/>
		<h2>基本信息填写</h2>
		性    别：
		<select name="gender">
			<option value="1">male</option>
			<option value="2">female</option>
			<option value="3">transgender</option>
		</select> <br/>
		职位：
		<select name="position">
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
		学生身份<input type="radio" name="isStudent" value="1" checked>是
            <input type="radio" name="isStudent" value="0">否  <br/>
                论文：
        <select name="carryPaperId">
        	<option value="0">无</option>
        	<c:forEach items="${paperList }" var="paper">
        		<option value="${paper.id}">${paper.name }</option>        	
        	</c:forEach>
        </select><br/>
		<input type="submit" value="注册"/>
	</form>
</body>
</html>