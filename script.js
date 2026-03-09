
const boton = document.getElementById("bienvenidaBtn");
boton.addEventListener("click", function() {
    alert("¡Bienvenido a mi página personal!");
});


function validarFormulario() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (name === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos antes de enviar.");
        return false; 
    }

    alert("¡Formulario enviado correctamente!");
    return true; 
}