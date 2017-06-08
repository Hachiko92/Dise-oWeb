function progresar (tiempo){
    let progreso = document.querySelector("progress");
    let btnStop = document.getElementById("btnStop");
    progreso.value = 0;
    btnStop.addEventListener("click", function(){
        clearInterval(refreshInterval);
    });
    var refreshInterval = setInterval(function(){
        if(progreso.value >= 100){
            clearInterval(refreshInterval);
        }
        else{
            progreso.value += 10;
        }
    }, tiempo);
    return;
}

function esperar (){
    
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", function(){
        progresar(500);
    });
}

$(function(){
    esperar();
})