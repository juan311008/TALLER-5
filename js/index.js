const paginas = [
    {
        titulo: "Ejemplo CSS # 2",
        descripcion: "Beautiful, Hand-crafted Layouts",
        archivo: "html/ejercicio2.html"
    },
    {
        titulo: "Ejercicio CSS # 3",
        descripcion: "What We Do",
        archivo: "html/ejercicio3.html"
    }
];

function crearMenu() {
    const menu = document.getElementById("menu");

    paginas.forEach(function (pagina) {
        const enlace = document.createElement("a");
        enlace.className = "tarjeta";
        enlace.href = pagina.archivo;

        const titulo = document.createElement("h2");
        titulo.textContent = pagina.titulo;

        const descripcion = document.createElement("p");
        descripcion.textContent = pagina.descripcion;

        enlace.appendChild(titulo);
        enlace.appendChild(descripcion);
        menu.appendChild(enlace);
    });
}

document.addEventListener("DOMContentLoaded", crearMenu);
