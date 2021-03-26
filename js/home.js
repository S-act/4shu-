function JM1k() {
    location.href = 'M1k.html'; 
}
function J4Tt() {
    location.href = 'seigo.html'; 
}
function JKanyou() {
    location.href = 'kanyou.html'; 
}
function JTK1() {
    location.href = 'TANGO.html'; 
}

function JM1kL() {
    var list = document.getElementsByClassName("kesu");
    for (var i = 0; i < list.length; i++) {
      var element = list[i];
      element.classList.remove('on');
      element.classList.add('off');
    }
    M1ksentakushi.classList.remove("off");
    M1ksentakushi.classList.add("on");
}
function JM1kLK() {   
    IDM1k.classList.remove("off");
    IDM1k.classList.add("on");
    M1ksentakushi.classList.remove("on");
    M1ksentakushi.classList.add("off");
    var h = bangouhantei();
    if(h===1){
        shisuu1();
    }
    if(h===2){
        jouhoukoushiki();
    }
}
function shisuu1() {
    sisuuhousoku1.classList.remove("off");
    sisuuhousoku1.classList.add("on");
}
function jouhoukoushiki() {
    jouhoukoushiki1.classList.remove("off");
    jouhoukoushiki1.classList.add("on");
}
function bangouhantei(){
    var n = bangou.selectedIndex;
    n = n+1;

    return n;
}

function allchange() {
    var far = fir.value
    var sek = secon.value

    if(hanten.checked){
        var list2 = document.getElementsByClassName("en");
        var list3 = document.getElementsByClassName("jp");
        for(var loop=0; loop < list3.length; loop++){
        var element2 = list2[loop];
        var element3 = list3[loop];
        element2.classList.remove('red');
        element3.classList.add('red');
        console.log("ろぐ");
        }
        console.log("ろぐ");
    }else{
        var list2 = document.getElementsByClassName("jp");
        var list3 = document.getElementsByClassName("en");
        for(var loop=0; loop < list3.length; loop++){
        var element2 = list2[loop];
        var element3 = list3[loop];
        element2.classList.remove('red');
        element3.classList.add('red');
        console.log("ろぐ");
        }
        console.log("ろぐ２");
    }
    var list = document.getElementsByClassName("kenti");
    for (var i = 0; i < list.length; i++) {
        var element = list[i];
        element.classList.remove('on');
        element.classList.add('off');
      }
    for (var far = far*2 - 2 ; -1 <= sek*2 - far -2 ; far++) {
        var element = list[far];
        element.classList.remove('off');
        element.classList.add('on');
    }
}
