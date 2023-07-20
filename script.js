let animado = document.querySelectorAll(".animado");
let animadoLoad = document.querySelectorAll(".animado-load");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; 1 < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 510 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}

function mostrarLoaded() {
    for (var i=0; 1 < animadoLoad.length; i++) {
        animadoLoad[i].style.opacity = 1;
    }
}

window.addEventListener('scroll', mostrarScroll);
window.addEvenListener('load', mostrarLoaded);

