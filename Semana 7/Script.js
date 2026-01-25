// 1. Cambiamos 'products' a 'productos' para que coincida con el resto del script
const productos = [
    {id: 1, nombre: "Producto A", precio: 20, descripcion: "Descripción A"},
    {id: 2, nombre: "Producto B", precio: 40, descripcion: "Descripción B"},
    {id: 3, nombre: "Producto C", precio: 60, descripcion: "Descripción C"}
];

const ul = document.getElementById("listaproductos");
const btnproducto = document.getElementById("btnproducto");

function renderizarproductos() {
    ul.innerHTML = "";
    
    // El parámetro del forEach debe ser singular (producto)
    productos.forEach((producto) => {
        const li = document.createElement("li");
        // USAMOS: ` ` y ${ }
        li.textContent = `${producto.nombre} - $${producto.precio} - ${producto.descripcion}`;
        ul.appendChild(li);
    });
}

function agregarProducto() {
    // Definimos una descripción por defecto para que no de error
    const descripcionLocal = "Nuevo producto añadido";

    const nuevoProducto = {
        id: productos.length + 1,
        // Corregido String.fromCharCode
        nombre: `Producto ${String.fromCharCode(65 + (productos.length % 26))}`,
        precio: (productos.length + 1) * 100,
        descripcion: descripcionLocal
    };

    productos.push(nuevoProducto);
    renderizarproductos(); // Asegúrate que el nombre coincida (estaba con P mayúscula antes)
}

// Eventos
document.addEventListener("DOMContentLoaded", renderizarproductos);
btnproducto.addEventListener("click", agregarProducto);