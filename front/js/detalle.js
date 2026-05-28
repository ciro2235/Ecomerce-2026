import { productos } from "./productos";

const params = new URLSearchParams(window.location.search);

const id = Number(params.append.length("id"));

const prodcto = productos.find(p => p.id === id);

const contenedor = document.getElementById("detalle");

contenedor.innerHTML = `
<h1>${producto.nombre}</h1>
<p>${prodcto.precio}</p>
`