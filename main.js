// Crear un formulario con mínimo 10 campos de datos obtener 
// la información y por medio de un botón ejecutar un función 
// que muestre los datos capturados
const mostrar = function(mensaje="No enviado",callback) {
    document.querySelector(".mensaje").insertAdjacentHTML("beforeend", `<b>${mensaje} : <span>${callback.value}</span> </b> enviado desde el formulario<br>`);
};

addEventListener("submit", function (e){
    let input = e.target;
    document.querySelector(".mensaje").innerHTML = null;
    mostrar("Tipo de documento", input.dato1);
    mostrar("Numero", input.dato2);
    mostrar("Primer Nombre", input.dato3);
    mostrar("Segundo Nombre", input.dato4);
    mostrar("Primer Apellido", input.dato5);
    mostrar("Segundo Apellido", input.dato6);
    mostrar("Edad", input.dato7);
    mostrar("Dirrecion", input.dato8);
    mostrar("Telefono", input.dato9);
    mostrar("Celular", input.dato10);
    e.preventDefault();
})