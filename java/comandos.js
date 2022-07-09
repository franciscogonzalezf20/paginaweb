/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}

/* ///////////////////////////////////////////////////////////////// */

/* animacion aparicion de los elementos derecha a izquierda*/

let animadoDer = document.querySelectorAll(".animadoDer");

function mostrarScroll(){
  let scrollTop = document.documentElement.scrollTop;
  for (var i=0; i < animadoDer.length; i++){
    let alturaAnimado = animadoDer [i].offsetTop
    if (alturaAnimado - 200 < scrollTop){
      animadoDer[i].style.opacity = 1;
      animadoDer[i].classList.add("mostrarDer");
    }
  }
}
window.addEventListener('scroll',mostrarScroll);

/* animacion aparicion de los elementos izquierda a derecha*/

let animadoIzq = document.querySelectorAll(".animadoIzq");

function mostrar(){
  let scrollTop = document.documentElement.scrollTop;
  for (var i=0; i < animadoIzq.length; i++){
    let alturaAnima = animadoIzq [i].offsetTop
    if (alturaAnima - 200 < scrollTop){
      animadoIzq[i].style.opacity = 1;
      animadoIzq[i].classList.add("mostrarIzq");
    }
  }
}
window.addEventListener('scroll',mostrar);

/* animacion aparicion de los elementos arriba hacia abajo*/


let animadoUp = document.querySelectorAll(".animadoUp");

function mostrarScr(){
  let scrollTop = document.documentElement.scrollTop;
  for (var i=0; i < animadoUp.length; i++){
    let altura = animadoUp [i].offsetTop
    if (altura - 200 < scrollTop){
      animadoUp[i].style.opacity = 1;
      animadoUp[i].classList.add("mostrarUp");
    }
  }
}
window.addEventListener('scroll',mostrarScr);
