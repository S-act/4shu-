var sen1 ,sen2 ,sen3 ,sen4 ,mondai ,seikai ,gaiyou;
function tst1(){
    var h = bangouhantei();
    if (h===1) {   
    mondai="四高の校カラーは？"
    sen1= "緑";
    sen2= "赤";
    sen3= "白";
    sen4= "青";
    seikai= 1;
    gaiyou= "四高の校カラーは緑です！";
    }
    if (h===2) {   
        mondai="1+1は？"
        sen1= "4";
        sen2= "\(6*10^23\)";
        sen3= "2";
        sen4= "22.4";
        seikai= 3;
        gaiyou= "②はアボガドロ定数、④は1molでの気体の体積です";
    }
    sentakushi1.value ="①."+ sen1;
    sentakushi2.value ="②."+ sen2;
    sentakushi3.value ="③."+  sen3;
    sentakushi4.value ="④."+ sen4;
    mon.innerHTML = mondai;
}
function seigo() {
    if (seikai===1) {
        kaisetsu.innerHTML= "正解！" +gaiyou;
    } else {
        kaisetsu.innerHTML= "不正解！" +"答えは"+seikai+"で　"+gaiyou;
    }
}
function seigo2() {
    if (seikai===2) {
        kaisetsu.innerHTML= "正解！" +gaiyou;
    } else {
        kaisetsu.innerHTML= "不正解！" +"答えは"+seikai+"で　"+gaiyou;
    }
}

function seigo3() {
    if (seikai===3) {
        kaisetsu.innerHTML= "正解！" +gaiyou;
    } else {
        kaisetsu.innerHTML= "不正解！" +"答えは"+seikai+"で　"+gaiyou;
    }
}
function seigo4() {
    if (seikai===4) {
        kaisetsu.innerHTML= "正解！" +gaiyou;
    } else {
        kaisetsu.innerHTML= "不正解！" +"答えは"+seikai+"で　"+gaiyou;
    }
}
function bangouhantei(){
    var n = bangou.selectedIndex;
    n = n+1;

    return n;
}