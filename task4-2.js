/**
 * Created by Administrator on 2016/3/8.
 */
arr = sessionStorage.obj;
mycars = JSON.parse(arr);
console.log(arr);
window.onload=function filledBlack(){
    var i=1;
    while(i<mycars.length+1){
        var box="<div class='box' id='box"+i+"'></div>";
        var role="<p class='box-top'>"+mycars[i-1]+"</p>";
        var sort="<p class='box-bottom'>"+i+"号</p>";
        $("#content").append(box);
        $("#box"+i).append(role,sort);
        i++;
    }
};