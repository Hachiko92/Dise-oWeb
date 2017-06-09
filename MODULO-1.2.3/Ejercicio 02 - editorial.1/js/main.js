function menu(){
  let btnMenu = document.querySelector("#btnMenu");
  let btnMenuImage = document.querySelector("#btnMenuImage");
  btnMenu.addEventListener("click", desplegar);
}

function desplegar(){
  let menuMobile = document.getElementById("menuMobile");
  menuMobile.classList.toggle("oculto");

  if (btnMenuImage.src.indexOf("Open.png")>-1) {
    btnMenuImage.src = btnMenuImage.src.replace("Open.png", "Close.png");
  } else {
    btnMenuImage.src = btnMenuImage.src.replace("Close.png", "Open.png");
  }
}

$(function (){
  let menuTemporal = document.getElementById("menuTemporal");
  menuTemporal.className = "oculto";
  menu();
})