window.addEventListener("load", function() {

    // Evento click: es un evento propio de los botones
   /* document.getElementById("btnenvio").addEventListener("click", function() {
        document.getElementById("mensaje").innerHTML = "Formulario enviado con exito!";
    });*/

    // Evento dblclik (doble click): es un evento propio de botones
    /*document.getElementById("btnenvio").addEventListener("dblclick", function() {
        document.getElementById("mensaje").innerHTML = "Formulario enviado con exito!";
    });*/

    // Evento mouseover: es un evento que aplica para todo elemento de html
    /*document.getElementById("btnenvio").addEventListener("mouseover", function() {
        document.getElementById("mensaje").innerHTML = "Formulario enviado con exito!";
    });*/
    
    // Evento mouseout: es un evento que aplica para todo elemento de html
    /*document.getElementById("btnenvio").addEventListener("mouseout", function() {
        document.getElementById("mensaje").innerHTML = "Formulario enviado con exito!";
    });*/

    // Evento keyup: es un evento propio de cajas de texto, hace que al presionar una tecla aparezca un mensaje
    /*document.getElementById("boxtext").addEventListener("keyup", function() {
        document.getElementById("mensaje").innerHTML = "Formulario enviado con exito!";
    });*/

    // Evento focus: Es un evento propio de caja de texto, hace que al seleccionar la caja de texto se active una funcion
    /*document.getElementById("boxtext").addEventListener("focus", function() {
        document.getElementById("mensaje").innerHTML = "Formulario enviado con exito!";
    });*/

    // Evento blur: es un evento propio de las cajas de texto, hace que al seleccionar y deseleccionar una caja de texto se active una funcion
    /*document.getElementById("boxtext").addEventListener("blur", function() {
        document.getElementById("mensaje").innerHTML = "Formulario enviado con exito!";
    });*/

    // Evento change: es un evento propio de menu desplegables, input tipo radio y checkbox, es un evento que se ejecuta cada vez que hay un cambio en un control de un elemento del formulario
    /*document.getElementById("Provincia").addEventListener("change", function() {
        document.getElementById("mensaje").innerHTML = "Formulario enviado con exito!";
    });*/
    /*var generos = document.querySelectorAll("input[type=radio]");
    generos.forEach((g) => {
        g.addEventListener("change", function() {
            document.getElementById("mensaje").innerHTML = "Formulario enviado con exito!";
        });
    });*/
});

function abrir () {
    const container = document.getElementsByClassName('container');
    console.log(container)
    let resul = "";
    for (let i = 0; i < container.length; i++) {
        resul = container[i].addEventListener("click", function() {
            document.querySelector('#mensaje').innerHTML = "Hola"
        }); 
    }
}