// Reto: Con CSS hacer una animación que un circulo vaya creciendo hacia fuera;

/* 
PROBLEMA A: 

-Dejar pasar solo a los +18 (mayores de edad),
-El primero que entre después de las 2 AM, no paga

PROBLEMA B: 

-Crear mini-sistema para registar alumnos presentes (P) y ausentes (A)
-Pasados 30 dias, mostrar la situación final del alumno
-Máximo de 10 % de ausencias 

PROBLEMA C: 

-Se deberá crear una calculadora que simplifique el trabajo
*/


let Introfree = false; //esta es la entrada, cuando la entrada ya se haya dado lo hacemos gratis 

const validarClientes = (time) => {
    let age = prompt('¿Cuál es tu edad?'); 

    if (age >= 18 ) {
        if (time > 2 && time < 7 && !Introfree) {
            alert("Puedes pasar gratis son las 2:00 AM");
            free = true;
        } else {
            alert('Puedes pasar pero tienes que pagar la entrada');
        }
    } else {
        alert('No puedes entrar');
    }
};


function randomPlay(max, min) {
    return Math.floor((Math.random() * max) - min);
};

for (let i = 0; i <= 4; i++) {
    validarClientes(randomPlay(20, 1));
    console.log(randomPlay(20, 1));
};

//falta que me de 20 numeros aleatorios para que los ponga como time


