/**
 * ENDE2019
 * createTime 2018.08.29
 * author Jim Wang (Hao Wang)
 * version 1.0
 */

//var baseURL = "http://i3r.scu.edu.cn/"; //服务器地址
var baseURL = "http://127.0.0.1:8020/ENDE2019/";//测试地址
//加载网页内容
var loadPage = function(page,pos){
    if(pos){
    	$("#main").load(baseURL + page + "#" + pos);
    }
    else{
    	$("#main").load(baseURL + page);
    }
}