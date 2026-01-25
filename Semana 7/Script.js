
const productos = [
    {id: 1, nombre: "Producto A", precio: 5, descripcion: "Descripción A"},
    {id: 2, nombre: "Producto B", precio: 10, descripcion: "Descripción B"},
    {id: 3, nombre: "Producto C", precio: 15, descripcion: "Descripción C"}
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
    // 1. Pedimos los datos al usuario mediante ventanas emergentes
    const nombreUsuario = prompt("Ingrese el nombre del producto:");
    const precioUsuario = prompt("Ingrese el precio:");
    const descUsuario = prompt("Ingrese la descripción:");

    // 2. Validación simple: si el usuario cancela o deja vacío, no agregamos nada
    if (nombreUsuario && precioUsuario && descUsuario) {
        const nuevoProducto = {
            id: productos.length + 1,
            nombre: nombreUsuario,
            precio: parseFloat(precioUsuario), // Convertimos el texto a número
            descripcion: descUsuario
        };

        // 3. Empujamos al array y refrescamos la lista
        productos.push(nuevoProducto);
        renderizarproductos();
    } else {
        alert("Acción cancelada o faltan datos.");
    }
}

document.addEventListener("DOMContentLoaded", renderizarproductos);
btnproducto.addEventListener("click", agregarProducto);