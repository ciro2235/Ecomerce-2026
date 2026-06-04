import { productos } from "./productos.js";

const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const producto = productos.find(p => p.id === id);

const contenedor = document.getElementById("detalle");

contenedor.innerHTML = `
<div class="detail-container">
<img class="detail-img" src=${producto.img} alt="${producto.nombre}">
  <div class="detail-info">
    <h1 class="detail-h1">${producto.nombre}</h1>
    <h2 class="detail-h2">$ ${producto.precio}</h2>
    <p class="detail-p">Stock: ${producto.stock}</p>
  </div>
</div>
<p class="detail-p">Descripcion: ${producto.descripcion}</p>
`