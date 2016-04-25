/**
 * Created by Administrator on 2016/3/5.
 */
function sentIdentity(){
    var number=document.getElementById("test").value;
    var mycars = new Array();
    mycars = [];
    var x="";
    if(number>18){
        alert("人数太多")
    }
    else if(number<6){
        alert("人数太少")
    }
    else {
        for (var i = 0; i < number; i++) {
            mycars[i] = "水民";
        }
        var b = Math.floor(number / 6);
        for (i = 0; i < b; i++) {
            mycars[Math.round(Math.random() * (number-1))] = "杀手";
        }
        for (i = 0; i < b; i++) {
            mycars[Math.round(Math.random() * (number-1))] = "狙击手";
        }
        var count = 0;
        var sniper = 0;
        for (i = 0; i < number; i++) {
            if (mycars[i] == "杀手")count++;
            if (mycars[i] == "狙击手")sniper++;
        }
        while (count < b) {
            mycars[Math.round(Math.random() * (number-1))] = "杀手";
            for (i = 0; i < number; i++) {
                if (mycars[i] == "杀手")count++;
                if (mycars[i] == "狙击手")sniper++;
            }
        }
        while (sniper < b) {
            mycars[Math.round(Math.random() * (number-1))] = "狙击手";
            for (i = 0; i < number; i++) {
                if (mycars[i] == "杀手")count++;
                if (mycars[i] == "狙击手")sniper++;
            }
        }
        for (i = 0; i < number; i++) {
            x = x + (i + 1) + "号的身份为" + mycars.slice(i, i + 1) + "<br/>";
        }
        document.getElementById("text").innerHTML=x;
        var arr = JSON.stringify(mycars);
        sessionStorage.obj = arr;//存入
        console.log(arr);
    }
}
function btn(){
    if(document.getElementById("text").innerHTML==""){
        alert("请分配角色")
    }
    else{
        location.href="task3.html"
    }
}