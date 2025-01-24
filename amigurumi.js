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

    //Aquí se crea el nuevo div con las miniaturas de las imágenes si las hay, de momento siempre hay

    //const imagenes = [];
    //const imagenes = ["./img/gato1.jpg", "./img/gato2.jpg", "./img/gato3.jpg"];
    //console.log("IMAGENES --> ", amigurumi.imagenes)
    const imagenes = amigurumi.imagenes;

    if (imagenes.length > 0) {
        const img1 = imagenes[0];
        const img2 = imagenes[1];
        const img3 = imagenes[2];

        const alt1 = img1.replace('./img/', '').replace('.jpg', '');
        const alt2 = img2.replace('./img/', '').replace('.jpg', '');
        const alt3 = img3.replace('./img/', '').replace('.jpg', '');

        //4. Crear el div con las miniaturas de las imágenes
        const nuevasMiniaturas = document.createElement("div");
        nuevasMiniaturas.classList.add('row');
        nuevasMiniaturas.innerHTML = `<div class="column"><img src=${img1} width="150px" onclick="openModal();currentSlide(1)" class="hover-shadow" id="img1"><div>`;
        nuevasMiniaturas.innerHTML += `<div class="column"><img src=${img2} width="150px" onclick="openModal();currentSlide(1)" class="hover-shadow" id="img1"><div>`;
        nuevasMiniaturas.innerHTML += `<div class="column"><img src=${img3} width="150px" onclick="openModal();currentSlide(1)" class="hover-shadow" id="img1"><div>`;
        nuevoSectionTexto.appendChild(nuevasMiniaturas);

        //Modifica los datos del modal
        document.querySelector("#myslide1").src=img1;
        document.querySelector("#myslide2").src=img2;
        document.querySelector("#myslide3").src=img3;

        document.querySelector("#thumbail1").src=img1;
        document.querySelector("#thumbail2").src=img2;
        document.querySelector("#thumbail3").src=img3;

        document.querySelector("#thumbail1").alt=alt1;
        document.querySelector("#thumbail2").alt=alt2;
        document.querySelector("#thumbail3").alt=alt3;
    }

    //Añade la section a la derecha
    nuevoArticulo.appendChild(nuevoSectionTexto);

}

document.querySelector("#volver").addEventListener("click", () => {
    history.back();
});

generaDetalle(amigurumi);