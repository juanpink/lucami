//csvAmigurimis.json

function hacerInvisibles() {
    document.querySelectorAll(".amigurimi").forEach( amigurimi => amigurimi.style.display = "None");
}

function hacerVisibles(selector) {
    document.querySelectorAll(selector).forEach( amigurimi => amigurimi.style.display = "Block");
}

//Botón Todos
document.querySelector("#bTodos").addEventListener("click", (event) => {
    hacerVisibles(".amigurimi");
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
        hacerVisibles(".amigurimi");
    }
});

function cargaAmigurimis() {
    fetch('https://juanpink.github.io/lucami/csvAmigurimis.json')
        .then(response => response.json())
        .then(data => console.log(data));
};

cargaAmigurimis();