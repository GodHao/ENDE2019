<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>投稿</title>
</head>
<body>
<h1>投稿</h1>
	<form action="<c:url value='/contribute.action' />"  enctype="multipart/form-data"  method="post">
		<h2>稿件人基本信息填写</h2>
                姓    名：<input type="text" name="name" value="${form.name }"/>${errors.name}<br/>
	        邮    箱：<input type="text" name="email" value="${form.email }"/>${errors.email}<br/>
		国    籍：
		<select name="nationality" >
			<option value="China">China</option>
			<option value="England">England</option>
			<option value="US">US</option>
		</select> <br/>
		学校/机构：<input type="text" name="affiliation" value="${form.affiliation }"/> <br/>
		<h2>稿件信息填写</h2>
		稿件标题：<input type="text" name="title" value="${form.title }"/> ${errors.title}<br/>
		论文类型：
		<select name="type">
			<option value="1">oral</option>
			<option value="2">report</option>
		</select><br/>
		稿件上传：<input type="file" name="file"/> ${errors.file}<br/>
		<input type="submit" value="投稿"/>
	</form>
</body>
</html>