//Realizamos una pequeña encuesta previo a un simulador de carrito de compras
//Declaramos las funciones a usar en el programa//



// Función menu iphone modelos
function menuIphone(i) {
    switch (i) {
        case "1": { alert("Eligió 11"); valor = true; break; }
        case "2": { alert("Eligió 12"); valor = true; break; }
        case "3": { alert("Eligió 13"); valor = true; break; }
        case "4": { alert("Eligió 14"); valor = true; break; }
        default: { alert("¡Atención! Ingrese una opción correcta"); valor = false; }
    }
    return i;
}
// Función menu baterias
function bateria() {
    valor = false;
    do {
        let i = prompt("Qué serie de iphone piensa que más daño de batería sufre?\n1) 11\n2) 12\n3) 13\n4) 14");
        menuIphone(i);
    }
    while (valor != true);
}
// Función menu módulos
function modulo() {
    valor = false;
    do {
        let i = prompt("Qué serie de iphone piensa que más daño de módulo sufre?\n1) 11\n2) 12\n3) 13\n4) 14");
        menuIphone(i);
    }
    while (valor != true);
}
// Función menu cámaras
function camara() {
    valor = false;
    do {
        let i = prompt("Qué serie de iphone piensa que más daño de cámara sufre?\n1) 11\n2) 12\n3) 13\n4) 14");
        menuIphone(i);
    } while (valor != true);
}



//Menu Principal de la encuesta//
alert("Bienvenido a nuestro sitio!");
alert("Realizaremos unas preguntas importantes para nuestro crecimiento");
let valor = false;
do {
    let i = prompt("Le interesa informacion relcionada a:\n1) Baterias\n2) Módulos\n3) Cámaras dañadas\n4) Omitir encuesta");
    console.log("El valor de i es: " + i);
    switch (i) {
        case "1": {
            bateria();
            valor = true;
            break;
        }
        case "2": {
            modulo();
            valor = true;
            break;
        }
        case "3": {
            camara();
            valor = true;
            break;
        }
        case "4": {
            valor = true;
            break;
        }
        default: { alert("Error: Ingrese una opción correcta"); valor = false; }
    }
} while (valor != true);


//Apartado para dejar un mensaje del usuario
let mensaje;
do {
    let i = prompt("Tienes algun pregunta en particular?\nSelecciona 'S' o 'N':");
    if (i == "s" || i == "S") {
        mensaje = prompt("Ingresa tu mensaje aquí:");
        valor = true
    }
    else {
        if (i == "N" || i == "n") {
            alert("Muchas gracias!");
            valor = true;
        }
        else {
            alert("Error: Ingrese una opcion correcta");
            valor = false;
            console.log("El valor es " + valor);
        }
    }
}
while (valor != true);





//En este apartado realizamos una simulacion de un presupuesto//
let opcion;
let carrito = 0;
const pBateria = 40000, pModulo = 70000, pCamara = 30000;
//Funcion que consulta si el cliente desea agregar el cambio de bateria al presupuesto
function fcambioBateria() {
    opcion = 0;
    do {
        alert("El costo de cambio de bateria para iphone es de $ " + pBateria);
        opcion = prompt("\nDesea agregar al presupuesto?\n1) Si\n2) No");
        if (opcion == 1 || opcion == 2) { valor = true; }
        else { valor = false; }
    }
    while (valor != true)
}
//Funcion que consulta si el cliente desea agregar el cambio de modulo al presupuesto
function fcambioModulo() {
    opcion = 0;
    do {
        alert("El costo de cambio de modulo para iphone es de $ " + pModulo);
        opcion = prompt("\nDesea agregar al presupuesto?\n1) Si\n2) No");
        if (opcion == 1 || opcion == 2) { valor = true; }
        else { valor = false; }
    }
    while (valor != true)
}
//Funcion que consulta si el cliente desea agregar el cambio de camara al presupuesto
function fcambioCamara() {
    opcion = 0;
    do {
        alert("El costo de cambio de cámaras para iphone es de $ " + pCamara)
        opcion = prompt("\nDesea agregar al presupuesto?\n1) Si\n2) No");
        if (opcion == 1 || opcion == 2) { valor = true; }
        else { valor = false; }
    }
    while (valor != true)
}
//Menu en el que se ingresan los productos y almacena el carrito de compras el presupuesto
do {
    let i = prompt("Ingrese su consulta:\n1) Cambio de batería\n2) Cambio de módulos\n3) Cambio de Cámaras dañadas\n4) Mostrar total\n5) Quitar del presupuesto\n6) Salir");
    switch (i) {
        case "1":
            {
                fcambioBateria();
                if (opcion == 1) { carrito = carrito + pBateria; }
                console.log("El presupuesto es de $ " + carrito);
                valor = false;
                break;
            }
        case "2":
            {
                fcambioModulo();
                if (opcion == 1) { carrito = carrito + pModulo; }
                console.log("El presupuesto es de $ " + carrito);
                valor = false;
                break;
            }
        case "3":
            {
                fcambioCamara();
                if (opcion == 1) { carrito = carrito + pCamara; }
                console.log("El presupuesto es de $ " + carrito);
                valor = false;
                break;
            }
        case "4":
            {
                alert("El total de la compra es de $ " + carrito);
                console.log("El presupuesto es de $ " + carrito);
                valor = false;
                break;
            }
        case "5":
            {
                do {
                    opcion = prompt("¿Qué artículo desea quitar del presupuesto?\n1) Cambio bateria\n2) Cambio Modulo\n3) Cambio Camaras\n4) Volver");
                    switch (opcion) {
                        case "1": { carrito = carrito - pBateria; valor = true; break; }
                        case "2": { carrito = carrito - pModulo; valor = true; break; }
                        case "3": { carrito = carrito - pCamara; valor = true; break; }
                        case "4": { valor = true; break; }
                        default: { alert("Error: Ingrese una opcion correcta"); valor = false; break; }
                    }
                }
                while (valor != true)
                valor = false;
                console.log("El valor del presupuesto es de " + carrito);
                break;
            }

        case "6":
            {
                alert("Su total es de $ " + carrito);
                alert("Gracias por su consulta!");
                valor = true;
                break;
            }
        default: {
            alert("Error: Ingrese una opcion correcta");
            valor = false;
            break;
        }
    }
}
while (valor != true);