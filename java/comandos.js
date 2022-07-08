/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

/* ///////////////////////////////////////////////////////////////// */

/* animacion aparicion de los elementos */

let animado = document.querySelectorAll(".animado");

function mostrarScroll(){
  let scrollTop = document.documentElement.scrollTop;
  for (var i=0; i < animado.length; i++){
    let alturaAnimado = animado [i].offsetTop
    if (alturaAnimado - 100 < scrollTop){
      animado[i].style.opacity = 1;
      animado[i].classList.add("mostrarDer");
    }
  }
}
window.addEventListener('scroll',mostrarScroll);

/* escritura animada */

let writing = str => {
  let arrFromDtr = str.split('');
  
}