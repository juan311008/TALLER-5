const plantillas = [
    { nombre: "Real Estate", imagen: "../recursos/real-estate.jpg" },
    { nombre: "Library", imagen: "../recursos/library.jpg" },
    { nombre: "Transportation", imagen: "../recursos/transportation.jpg" },
    { nombre: "Gas & Oil", imagen: "../recursos/gas-oil.jpg" },
    { nombre: "Marketing Agency", imagen: "../recursos/marketing-agency.jpg" },
    { nombre: "Pizza", imagen: "../recursos/pizza.jpg" },
    { nombre: "Flooring", imagen: "../recursos/flooring.jpg" },
    { nombre: "Steel Processing", imagen: "../recursos/steel-processing.jpg" },
    { nombre: "Coming Soon", imagen: "" }
];

function crearIconoPronto() {
    const icono = document.createElement("div");
    icono.className = "icono-pronto";

    for (let i = 0; i < 9; i++) {
        icono.appendChild(document.createElement("span"));
    }

    return icono;
}

function crearGaleria() {
    const galeria = document.getElementById("galeria");

    plantillas.forEach(function (plantilla) {
        const item = document.createElement("div");
        item.className = "item";

        const marco = document.createElement("div");
        marco.className = "marco";

        if (plantilla.imagen) {
            const img = document.createElement("img");
            img.src = plantilla.imagen;
            img.alt = plantilla.nombre;
            marco.appendChild(img);
        } else {
            item.classList.add("pronto");
            marco.appendChild(crearIconoPronto());
        }

        const titulo = document.createElement("h3");
        titulo.textContent = plantilla.nombre;

        item.appendChild(marco);
        item.appendChild(titulo);
        galeria.appendChild(item);
    });
}

document.addEventListener("DOMContentLoaded", crearGaleria);
