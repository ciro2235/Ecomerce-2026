import { productos  } from "./productos";

const contenedor = Document.getElementById("contenedor-productos");

productos.forEach(producto => {
    contenedor.innerHTML += ``
})