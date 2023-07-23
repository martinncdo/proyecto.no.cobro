let animado = document.querySelectorAll(".animado");

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

window.addEventListener('scroll', mostrarScroll);

// En tu archivo JavaScript
window.addEventListener('load', function() {
    // Cuando se cargue la página, obtén todos los elementos con la clase 'fadeIn'
    const elementosLeft = document.querySelectorAll('.fadeInLeft');
    const elementosRight = document.querySelectorAll('.fadeInRight')
  
    elementosRight.forEach(function(elementoRight, index) {
        setTimeout(function() {
          elementoRight.classList.add('active');
        }, index * 100); // Agrega un pequeño retraso entre cada animación para que parezca más natural
      });
    // Agrega la clase 'active' a cada elemento después de un breve momento para iniciar la animación
    elementosLeft.forEach(function(elementoLeft, index) {
      setTimeout(function() {
        elementoLeft.classList.add('active');
      }, index * 100); // Agrega un pequeño retraso entre cada animación para que parezca más natural
    });
  });

window.addEventListener('load', ()=> {
  texto = document.getElementById("fuente");
  setTimeout(()=>{
      texto.classList.add("titulo-efecto");
  },3500);
})
  
  



