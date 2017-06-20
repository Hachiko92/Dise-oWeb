function menu(){
  let btnMenu = document.querySelector("#btnMenu");
  let btnMenuImage = document.querySelector("#btnMenuImage");
  let desplegableItem = document.querySelectorAll(".desplegables");

  btnMenu.addEventListener("click", desplegar);

  for (let i = 0; i<desplegableItem.length ; i++){
    desplegableItem[i].addEventListener("click", desplearItem);
  }
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

function desplearItem(oEvent){
  let oEventChild = oEvent.target.children;
  oEventChild[0].classList.toggle("ulDesplegable");
}

$(function (){
  let menuTemporal = document.getElementById("menuTemporal");
  menuTemporal.className = "oculto";
  menu();
})