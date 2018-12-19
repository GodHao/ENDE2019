<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>主页</title>
</head>
<body>
	<h1>欢迎${user.name }来到主页</h1><br/>
	<h2>已提交的稿件</h2><br/>
	<c:forEach items="${paperList }" var="paper">
		<ul>
			<li>论文title:${paper.title }</li>
			<li>论文作者:${paper.name }</li>
			<li>论文类型:${paper.type }</li>
			<li>提交时间:<fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss" value='${paper.createTime}'/> </li>
			<li><a href="#">修改</a></li>
		</ul>
	</c:forEach>	
	<a href="<c:url value='toContribute.action'/>">投稿</a> <br/>
	<a href="<c:url value='toConferenceRegister.action'/>">会议注册</a> <br/>
</body> 
</html>