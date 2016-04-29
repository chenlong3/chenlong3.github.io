/**
 * Created by Administrator on 2016/3/7.
 */
arr = sessionStorage.obj;
mycars = JSON.parse(arr);
console.log(arr);
var i=2;
function aa(i){
    if(i==mycars.length*2+1){
        location.href="task4-2.html";
    }
    else
    if(i==mycars.length*2){
        $("p").html("角色：" +mycars[(i)/2-1]);
        $(".flipper").css("transform","rotateY(540deg)");
        $("button").html("法官点击")
    }
    else
    if(i%2==0){
        $("p").html("角色：" +mycars[(i)/2-1]);
        $(".flipper").css("transform","rotateY(540deg)");
        $("button").html("隐藏并传递给"+(i/2+1)+"号")
    }
    else{
        $(".circle").html((i+1)/2);
        $(".flipper").css("transform","rotateY(0deg)");
        $("button").html("查看"+(i+1)/2+"号身份");
    }
}