const servicios = [
    {
        icono: "far fa-chart-bar",
        titulo: "Market Analysis",
        texto: "Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna.",
        boton: ""
    },
    {
        icono: "far fa-comment-alt",
        titulo: "Fast Support",
        texto: "Credit goes to <a href='#'>Pexels</a> website for all images used in this template. Cras condimentum mi et sapien dignissim luctus.",
        boton: ""
    },
    {
        icono: "fas fa-fingerprint",
        titulo: "Top Security",
        texto: "You have <b>no</b> authority to post this template as a ZIP file on your template collection websites. You can <b>use</b> this template for your commercial websites.",
        boton: "Learn More"
    },
    {
        icono: "fas fa-users",
        titulo: "Social Work",
        texto: "You can change <a href='#'>Font Awesome icons</a> by either <b><i>fas or far</i></b> in the HTML codes. For Examples:<br><i>&lt;i class='fas fa-users'&gt;&lt;i class='far fa-chart-bar'&gt;</i>",
        boton: "Details"
    }
];

function crearServicios() {
    const contenedor = document.getElementById("servicios");

    servicios.forEach(function (servicio) {
        const bloque = document.createElement("div");
        bloque.className = "servicio";

        const icono = document.createElement("i");
        icono.className = "icono " + servicio.icono;

        const contenido = document.createElement("div");

        const titulo = document.createElement("h2");
        titulo.textContent = servicio.titulo;

        const texto = document.createElement("p");
        texto.innerHTML = servicio.texto;

        contenido.appendChild(titulo);
        contenido.appendChild(texto);

        if (servicio.boton) {
            const boton = document.createElement("button");
            boton.className = "boton";
            boton.textContent = servicio.boton;
            contenido.appendChild(boton);
        }

        bloque.appendChild(icono);
        bloque.appendChild(contenido);
        contenedor.appendChild(bloque);
    });
}

document.addEventListener("DOMContentLoaded", crearServicios);
