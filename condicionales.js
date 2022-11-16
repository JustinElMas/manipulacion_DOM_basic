//variables, funciones, condicionales, ciclos, arrayas y objetos en JavaScript

//EJECUTAMOS un bloque de código u otro dependiendo de la condición, o validación

//Tipos: If, if else, if else if, switch, en el switch todos los cases se comparan con la misma variable validada

let userName = prompt("Escribe Hola: ");


switch (userName) {
    case "Hola":
        alert("Te amo Emiliano");
        break;

    default: alert('Se acabó');
        break;
}


try {

    let userName = prompt("Escribe Hola: ");

    userName == "Hola";

} catch (userName) {
    alert('Incorrecto');
}

function getTypeSuscription (suscription){
    if (suscription == "free") {
        console.log("Solo puedes tomar cursos gratis");
    }

    if (suscription == "basic") {
        console.log("Solo puedes tomar cursos basic");
    }

    if (suscription == "expert") {
        console.log("Solo puedes tomar cursos premium");
    }

    if (suscription == "expertPlus") {
        console.log("Solo puedes tomar cursos todos");
    }
}

//las condicionales if con funciones debes usar muy  bien ambos elementos para que sepas lo que haces e intentan si no sabes, pero con cuidado, y con precauciones. por ejemplo el uso de return.

function getTypeSuscription (suscription){
    if (suscription == "free") {
        console.log("Solo puedes tomar cursos gratis");
        return;
    }

    if (suscription == "basic") {
        console.log("Solo puedes tomar cursos basic");
        return;
    }

    if (suscription == "expert") {
        console.log("Solo puedes tomar cursos premium");
        return;
    }

    if (suscription == "expertPlus") {
        console.log("Solo puedes tomar cursos todos");
        return;
    }

    console.warn("No existe ese tipo de suscripcion");
};

const tipoDeSuscripciones = {
    free: 'Solo puedes tomar cursos gratis',
    basic: 'Solo durante un mes',
    expert: 'Casi todos los cursos de Platzi durante un año',
    expertDuo: 'Tu y alguien más pueden tomar los cursos de Platzi'
};

tipoDeSuscripciones.free;

let suscriptionType = prompt("Dime tu tipo de suscripción");

function getTypeSuscription (suscription){
    if (tipoDeSuscripciones[suscription]) {
        console.log(tipoDeSuscripciones[suscription]);
        return;
    }

    console.warn("No existe ese tipo de suscripcion");
};

getTypeSuscription('basic');