

async function loadProducts() {
    const response = await fetch("http://127.0.0.1:5000/products")
    const products = await response.json();
    
    
    const contenedor = document.getElementById("contenedor-productos");
    products.forEach(producto => {
    contenedor.innerHTML += `
        <div class="card">
            <img class="card-img" src="${producto.img}" alt="">
            <h2 class="card-h2">${producto.nombre}</h2>
            <p class="card-p">${producto.precio}</p>
            <button class="comprar" onClick="verDetalle(${producto.id})">comprar</button>
        </div>
    `
    })
}
loadProducts()

window.verDetalle = (id) => {
    window.location.href = `./pages/detalle_producto.html?id=${id}`;
}

