// Pom-------
function tecla_pom () {
    Document.querySelector('#som_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0;

//enquanto
while (contador < 9) {
    listaDeTeclas[contador].onclick = tocaSomPom;

    contador = contador + 1;

    console.log(contador);
}
    

