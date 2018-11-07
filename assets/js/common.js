/**
 * ENDE2019
 * createTime 2018.08.29
 * author Jim Wang (Hao Wang)
 * version 1.0
 */

//var baseURL = "http://111.231.82.208/ENDE2019/"; //服务器地址
var baseURL = "http://127.0.0.1:8020/ENDE2019/"
//var baseURL = "http://www.ende2019.com/";
//var baseURL = "http://127.0.0.1:8020/ENDE2019/"
var baseURL = "http://www.ende2019.com/";
var searchURL = "http://www.ende2019.com:9200/ende2019/ende/_search";
//加载网页内容
var loadPage = function(page){
	setCookie("currentPage",page);
    $("#main").load(baseURL + page);
}

function setCookie(key,value,t)
{
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+t);
	document.cookie=key+"="+value+"; expires="+oDate.toDateString();
}

function getCookie(key){
	var arr1=document.cookie.split("; ");//由于cookie是通过一个分号+空格的形式串联起来的，所以这里需要先按分号空格截断,变成[name=Jack,pwd=123456,age=22]数组类型；
	for(var i=0;i<arr1.length;i++){
	    var arr2=arr1[i].split("=");//通过=截断，把name=Jack截断成[name,Jack]数组；
		if(arr2[0]==key){
			return decodeURI(arr2[1]);
		}
	}
}

function search(keyword)
{
	var data = {"query" : { "match" : { "keyword" : keyword}}};
	$.ajax({
        type: "POST",
        url: searchURL,
        data: JSON.stringify(data),
        contentType: 'application/json',
        success: function(data){
	        if(data.hits.hits.length > 0){
	        	loadPage(data.hits.hits[0]._source.page);
	        }
	    }
    });																			
}
