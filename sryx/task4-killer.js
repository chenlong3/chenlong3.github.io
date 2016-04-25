/**
 * Created by Administrator on 2016/3/9.
 */
arr = sessionStorage.obj;
mycars = JSON.parse(arr);
console.log(arr);
var length=mycars.length;
var i;
window.onload=function filledBlack(i){
    i=1;
    //填充块
    while(i<length+1) {
        var content = "<div class='content-box' id='box" + i + "'></div>";
        var role = "<p class='box-top'>" + mycars[i - 1] + "</p>";
        var sort = "<p class='box-bottom'>" + i + "号</p>";
        var box = "<div class='box'>" + role + "" + sort + "</div>";
        var boxImg = "<div class='box-img'><img src='img/task4-2.png' id='img" + i + "'></div>";
        $("#content").append(content);
        $("#box" + i).append(box, boxImg);
        if (mycars[i-1] == "死亡") {
            $("#box" +i).css("opacity", "0.3");
        }
        i++;
    }
    $(".content-box").click(function(){
        var a=$(this).hasClass("intro");
        if(a!=true){
            $(".content-box").removeClass("intro");
            $(this).addClass("intro");
        }
    });
    //选择投票还是杀手杀人
    if(a%2==1){
        var header="<p><img src='img/task-2.png' align='left'>投票<img src='img/task3-2.png' align='right'></p>";
        $("header").empty();
        $("header").append(header);
        var topTop="<div class='top-top'>发言讨论已结束，请大家投票<img src='img/task6-audio.png' align='right'></div>";
        $(".top-top").remove();
        $("#top").prepend(topTop);
        $(".top-top-p").text("点击得票数人最多的头像");
    }
    else{
        var headerTwo="<p><img src='img/task-2.png' align='left'>杀手杀人<img src='img/task3-2.png' align='right'></p>";
        $("header").empty();
        $("header").append(headerTwo);
        var topTopTwo="<div class='top-top'>晚上到了，杀手开始杀人<img src='img/task6-audio.png' align='right'></div>";
        $(".top-top").remove();
        $("#top").prepend(topTopTwo);
        $(".top-top-p").text("点击你准备杀的人的头像");
    }
};
var a=sessionStorage.a;
if(a==null){
    a=2;
}
else{
    a++;
}
function btn(a){
    $(".intro").addClass("die"+a);
    $(".content-box").removeClass("intro");
    var rank=$(".die"+a).find("p.box-top").text();      //身份
    var number=parseInt($(".die"+a).find("p.box-bottom").text());//号码
    //判断游戏是否结束
    if(rank=="死亡"){
        alert("该角色已死亡")
    }
    else if(rank==""){
        alert("请点击目标头像")
    }
    else{
        if(a%2==0){
            location.href="task4-decode.html"
        }
        else{
            location.href="task4-3.html"
        }
        var txt=sessionStorage.txt;
        if(txt==null){
            txt="<p>"+number+"号被杀手杀死了，真实身份是"+rank+"</p>";
        }
        else{
            txt+="<p>"+number+"号被杀手杀死了，真实身份是"+rank+"</p>";
        }
        sessionStorage.txt=txt;
        console.log(txt);
        sessionStorage.a=a;
        console.log(a);
        sessionStorage.rank=rank;
        sessionStorage.number=number;
        console.log(number);
        mycars[number-1]="死亡";
        var arr = JSON.stringify(mycars);
        sessionStorage.obj = arr;//存入
        console.log(arr);
        //判断胜利方
        if(mycars.indexOf("杀手")==-1||mycars.indexOf("水民")==-1){
            location.href="task4-result.html";   //游戏结束
            var text="警察胜利";
            if(mycars.indexOf("水民")==-1){
                text="杀手胜利"
            }
            sessionStorage.text=text;
        }
    }
}
