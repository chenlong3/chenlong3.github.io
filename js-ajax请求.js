/**
 * Created by Administrator on 2016/5/8.
 */
'use strict';
var loadXMLDoc=(function()
{
    var xmlhttp;
    var http=function(type,url,then){
        if (window.XMLHttpRequest)
        {// code for IE7, Firefox, Opera, etc.
            xmlhttp=new XMLHttpRequest();
        }
        else if (window.ActiveXObject)
        {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        if (xmlhttp!=null)
        {
            xmlhttp.open(type,url,true);
            xmlhttp.send();
            xmlhttp.onreadystatechange=function state_Change()
            {
                if (xmlhttp.readyState==4)
                {// 4 = "loaded"
                    if (xmlhttp.status==200)
                    {// 200 = "OK"
                        then()
                    }
                    else
                    {
                        alert("Problem retrieving XML data:" + xmlhttp.statusText);
                    }
                }
            }
        }
        else
        {
            alert("Your browser does not support XMLHTTP.");
        }
    };
    return {
        http:http
    }
})();
//请求成功执行的函数
function sss(){
    alert('ok')
}
//发送请求
function a(){
    loadXMLDoc.http('get','line.json',sss)
}