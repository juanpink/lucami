const URL = "https://juanpink.github.io/lucami/csvAmigurumis.json";

let amigurumis;
let amigurumisFiltrados;

function cargaAmigurimis(url, procesarAmigurumis) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => { 
            //console.log(data);
            procesarAmigurumis(data);
        })
        .catch((error) => {
            console.error("Fetch error:", error)
        });
};

function borrarAmigurumis() {
    document.querySelectorAll(".amigurumi").forEach( amigurumi => amigurumi.remove());
}

function procesarAmigurumis(data) {
    borrarAmigurumis();
    amigurumis = data.amigurumis;
    amigurumisFiltrados = Array.from(amigurumis);
    amigurumis.forEach(amigurumi => {
        generaTarjeta(amigurumi);
    });
}

function generaTarjeta(amigurumi) {
    //1. Crear la tarjeta
    const nuevaTarjeta = document.createElement("article");//Crea un elemento de tipo article
    nuevaTarjeta.setAttribute("class", "amigurumi " + amigurumi.clase);
    nuevaTarjeta.setAttribute("nombre", amigurumi.nombre.toLowerCase());

    //2. Crear el titulo de la tarjeta
    const nuevoTitulo = document.createElement("h3");
    nuevoTitulo.textContent = amigurumi.nombre;
    nuevaTarjeta.appendChild(nuevoTitulo);

    /*
    nuevoTitulo.addEventListener("click", (e) => {
        console.log("Probando titulo -> " + e.target.textContent);
        window.location.href = `amigurumi.html?nombre=${e.target.textContent}`;
    });
    */

    //3. Crear la imagen
    const nuevaImg = document.createElement("img");
    nuevaImg.setAttribute("src", amigurumi.img);
    nuevaImg.setAttribute("alt", `Amigurumi de ${amigurumi.nombre}`);
    nuevaTarjeta.appendChild(nuevaImg);

    //4. Crear la descripción de la tarjeta
    const nuevaDescripcion = document.createElement("p");
    nuevaDescripcion.textContent = amigurumi.descripcion;
    nuevaTarjeta.appendChild(nuevaDescripcion);

    //5. Crear ver detalles de la tarjeta
    const nuevoDetalle = document.createElement("h4");
    nuevoDetalle.textContent = "Ver Detalles";
    nuevaTarjeta.appendChild(nuevoDetalle);

    nuevoDetalle.addEventListener("click", (e) => {
        //console.log("Probando detalle -> " + e.target.parentNode.firstChild.textContent);

        let objeto = JSON.stringify(amigurumi);
        window.location.href = `amigurumi.html?amigurumi=${objeto}`;
    });

    //Último paso: Agregar al contenedor la tarjeta recién creada
    document.querySelector("#contenedor").appendChild(nuevaTarjeta);//Agregamos el article al contenedor
}

cargaAmigurimis(URL, procesarAmigurumis);