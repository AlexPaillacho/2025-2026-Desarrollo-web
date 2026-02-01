
function mostrarAlerta() {
    alert("Tenemos ofertas !! Ahora para ti !!");
}


const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
    
    if (!form.checkValidity()) {
        event.preventDefault(); 
        event.stopPropagation();
    } else {
        event.preventDefault();
        alert("¡Formulario enviado con éxito!");
        form.reset(); 
    }

    
    form.classList.add('was-validated');
}, false);



 
function mostrarAlerta() {
    alert("¡Promociones exclusivas: 20% de descuento en toda la tienda!");
}


document.addEventListener("DOMContentLoaded", function() {
    
    const botonEspecial = document.getElementById('btn-alerta');

    if (botonEspecial) {
        
        
        botonEspecial.onclick = function(event) {
       
            event.preventDefault();
            
            alert("Al completar el formulario nos contactaremos para ofrecerle descuentos en toda la tienda");
        };
    }
});


