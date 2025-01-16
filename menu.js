//csvAmigurimis.json

function hacerInvisibles() {
    document.querySelectorAll(".amigurumi").forEach( amigurumi => amigurumi.style.display = "None");
}

function hacerVisibles(selector) {
    document.querySelectorAll(selector).forEach( amigurumi => amigurumi.style.display = "Block");
}

//Botón Todos
document.querySelector("#bTodos").addEventListener("click", (event) => {
    hacerVisibles(".amigurumi");
});

//Botón Unicornios
document.querySelector("#bUnicornios").addEventListener("click", (event) => {
    hacerInvisibles();
    hacerVisibles(".unicornio");
});

//Botón Gatos
document.querySelector("#bGatos").addEventListener("click", (event) => {
    hacerInvisibles();
    hacerVisibles(".gato");
});

//Botón Otros
document.querySelector("#bOtros").addEventListener("click", (event) => {
    hacerInvisibles();
    hacerVisibles(".otros");
});

//Input Buscar
let inputBuscar = document.querySelector("#iBuscar")
inputBuscar.addEventListener("input", (event) => {
    hacerInvisibles();

    let cadenaBusqueda = inputBuscar.value.toLowerCase();
    if (cadenaBusqueda.length > 0) {
        hacerVisibles(`[nombre*="${cadenaBusqueda}"]`);
    } else {
        hacerVisibles(".amigurumi");
    }
});

//Hacer invisible el anuncio
setTimeout(() => {
    //document.querySelector("#anuncio").style.display = 'none';
    document.querySelector("#anuncio").style.top = '-90rem';
}, 2000);
