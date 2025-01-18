const urlParams = new URLSearchParams(window.location.search);
const amigurumi = JSON.parse(urlParams.get("amigurumi"));

console.log("Detalle --> ", amigurumi);
console.log("Detalle --> ", amigurumi.nombre);

function generaDetalle(amigurumi) {
    let nuevoArticulo = document.querySelector("#contenedor");

    //Izda. Crear la section de la imagen de la izquierda
    const nuevoSectionImagen = document.createElement("section");
    nuevoSectionImagen.setAttribute("id", "izquierda")
    //1.- Crear la imagen
    const nuevaImg = document.createElement("img");
    nuevaImg.setAttribute("src", amigurumi.img);
    nuevaImg.setAttribute("alt", `Amigurumi de ${amigurumi.nombre}`);
    nuevoSectionImagen.appendChild(nuevaImg);

    //Añade la section a la izquierda
    nuevoArticulo.appendChild(nuevoSectionImagen);


    //Dcha. Crear la section del texto de la derecha
    const nuevoSectionTexto = document.createElement("section");
    nuevoSectionTexto.setAttribute("id", "derecha")
    //1. Crear el titulo de la tarjeta
    const nuevoTitulo = document.createElement("h3");
    nuevoTitulo.textContent = "Titulo : " + amigurumi.nombre;
    nuevoSectionTexto.appendChild(nuevoTitulo);
    //2. Crear la descripción de la tarjeta
    const nuevaDescripcion = document.createElement("p");
    nuevaDescripcion.textContent = "Descripción : " + amigurumi.descripcion;
    nuevoSectionTexto.appendChild(nuevaDescripcion);
    //3. Crear ver detalles de la tarjeta
    const nuevaClase = document.createElement("h4");
    nuevaClase.textContent = "Clase : " + amigurumi.clase;
    nuevoSectionTexto.appendChild(nuevaClase);


    //Añade la section a la derecha
    nuevoArticulo.appendChild(nuevoSectionTexto);
}

document.querySelector("#volver").addEventListener("click", () => {
    history.back();
});

generaDetalle(amigurumi);