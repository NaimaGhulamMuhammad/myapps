function btnclick(_this, num){
    _this.className = "btn-custom"
    var res = document.getElementById("calc");
    res.value += num;
}
function btnafterclick(_this){
    _this.className = "afterclick"
}
function getResult(_this, val){
    _this.className = "btn-custom"
    var res = document.getElementById("calc");
    res.value = eval(res.value)
    if(val == "%"){
        getResult(_this)
    }
    else if(val=="sin"){
        Math.sin(res.value)
    }
    else if(val=="cos"){
        Math.cos(res.value)
    }
    else if(val=="tan"){
        Math.tan(res.value)
    }
    else if(val=="ln"){
        Math.log(res.value)
    }
    else if(val=="√"){
        Math.sqrt(res.value)
    }
    else if(val=="^"){
        Math.exp(res.value)
    }
    else if(val == "x2"){
        eval(res.value*res.value)
    }
}
function clearValue(_this){
    var res = document.getElementById("calc");
    res.value = "";
    _this.className = "btn-custom"
}
function del(_this) {
    _this.className = "btn-custom"
    var res = document.getElementById("calc");
    res.value = res.value.slice(0,-1)
}

function lightTheme(class1, class2, color){
    var btn = document.getElementsByTagName("button")
    var body=document.getElementById("mainbody")
    var watch = document.getElementById("stpwtch")
    var calc = document.getElementById("main")
    watch.className += class2
    body.className += class1
    calc.className += class2
    for(var i =0; i<btn.length; i++){
    btn[i].style.borderColor= color
    }
    
}
function scientific(_this,val){
    _this.className = "btn-custom"
    var res = document.getElementById("calc");
    
    if(val=="π"){
        res.value = Math.PI    }
    else if(val == "%"){
        getResult(_this)
    }
    else if(val=="sin"){
        res.value = Math.sin(res.value)
    }
    else if(val=="cos"){
        res.value = Math.cos(res.value)
    }
    else if(val=="tan"){
        res.value = Math.tan(res.value)
    }
    else if(val=="ln"){
       res.value = Math.log(res.value)
    }
    else if(val=="√"){
        res.value = Math.sqrt(res.value)
    }
    else if(val=="!"){
        
    }
    else if(val == "x2"){
        res.value = eval(res.value*res.value)
    }
    else if(val == "e"){
        res.value = Math.exp(res.value)
    }
}
function factorial(_this){
    var i
    _this.className = "btn-custom"
    var res = document.getElementById("calc");
    v = res.value
    console.log(res.value)
        for(i=(v-1); i>=1; i--){
            v=v*i
        }
        res.value= v
}

var mh = document.getElementById("min")
var sh = document.getElementById("sec")
var msh = document.getElementById("msec")
var count = 0
var pause = document.getElementById('pause')
var interval
var strt = document.getElementById("start")
function timer(){

    pause.className += "innitial"
    msh.innerHTML++
    if(msh.innerHTML == 100){
        sh.innerHTML++
        msh.innerHTML = 0
    }
    else if(sh.innerHTML == 60){
        mh.innerHTML++
        sh.innerHTML = 0
    }

}
function start(){
 interval = setInterval(timer,10)
}
function stop(){
    clearInterval(interval)
    var pause = document.getElementById('pause')
    pause.value = "resume"
    if(pause.value == "resume"){
    pause.onclick = function() {start()}
    }
 }
 function reset(){
     mh.innerHTML = 0
     sh.innerHTML = 0
     msh.innerHTML = 0
     stop()
     strt.disabled = false

 }