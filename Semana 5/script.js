
const inputUrl = document.getElementById("urlimagen");
const botonAgregar = document.getElementById("Agregarimg"); 
const botonEliminar = document.getElementById("Eliminarimg"); 
const galeriaContainer = document.getElementById("Galeria");

let imagenSeleccionada = null;


function manejarSeleccion(event) {
    const clickedImage = event.target;
    
    if (clickedImage.tagName !== 'IMG') return;

    if (imagenSeleccionada) {
        imagenSeleccionada.classList.remove('selected');
    }

    
    if (imagenSeleccionada === clickedImage) {
       
        imagenSeleccionada = null;
    } else {
     
        clickedImage.classList.add('selected'); 
        imagenSeleccionada = clickedImage;
    }

   
    actualizarBotonEliminar();
}




function agregarImagenHandler() {
    const url = inputUrl.value.trim();

    if (url) {
      
        const nuevaImagen = document.createElement('img');
        
        nuevaImagen.src = url;
        nuevaImagen.alt = 'Imagen de la galería';
        
       
        
       
        galeriaContainer.appendChild(nuevaImagen);

        inputUrl.value = '';
    } else {
        alert('Por favor, ingresa una URL de imagen válida.');
    }
}


function actualizarBotonEliminar() {
    
    botonEliminar.disabled = !imagenSeleccionada;
}


function eliminarImagenHandler() {
    if (imagenSeleccionada) {
        
        imagenSeleccionada.remove();

        imagenSeleccionada = null;
        actualizarBotonEliminar();
        
        alert('Imagen eliminada.');
    } 
    
}


botonAgregar.addEventListener('click', agregarImagenHandler);

botonEliminar.addEventListener('click', eliminarImagenHandler);


galeriaContainer.addEventListener('click', manejarSeleccion); 

document.addEventListener('DOMContentLoaded', actualizarBotonEliminar);