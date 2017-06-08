function progresar (){
    let progreso = document.querySelector("progress");
    let btnStop = document.getElementById("btnStop");
    btnStop.addEventListener("click", function(){
        clearInterval(refreshInterval);
    });
    var refreshInterval = setInterval(function(){
        if(progreso.value >= 100){
            progreso.value = 0;
        }
        else{
            progreso.value += 10;
        }
    }, 500);
}

function esperar (){
    
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click", progresar);
}

$(function(){
    esperar();
})