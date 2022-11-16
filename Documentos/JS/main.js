
//programar el algoritmo: Entender el problema, en este caso ¿qué es un secuencia?, Es una secuencia númerica que inicia con el número 0 y con el 1, y lo sumamos luego sumamos los dos números anteriores para que me de, en secuencia, el número siguiente. 

//1. Primeros valores: (0, 1); 
/* 
Luego los sumamos: 

0 + 1 = 1 

Luego 

1 + 1 = 2 

Luego 

1 + 2 = 3
*/

//¿Qué aprendí de nuevo? Las funciones deben ayudarnos a resolver los problemas, ¡HAY QUE UTILIZARLAS!
let userNumber = parseInt(prompt("Ingresa un número: ")); 
        
let fibonacciNumber = 0; 

let otherFibonacciNumber = 1;

if (userNumber > 0) {

    let temp = fibonacciNumber; 
    fibonacciNumber = otherFibonacciNumber;
    otherFibonacciNumber = otherFibonacciNumber + temp

    document.write( "</br>" + "El número en serie de Fibonacci es: " + (userNumber - 1) + "</br>");

} else {
    document.write(`</br> Este es el número de fibonacci que elegiste: ${fibonacciNumber}  </br>`);
}

function generateFibonacci (limit) {
    //la función debe retornar un array con números 
    let fib0 = 0;
    let fib1 = 1;

    let myArrayFib = [fib0, fib0 + fib1];
    myArrayFib.push(fib1 + fib1);

    for (let i = 3; i < limit; i++) {
        myArrayFib[i] = myArrayFib[i - 1] + myArrayFib [i - 2];
    }

    return myArrayFib;
}

const fibSerie = generateFibonacci(userNumber);

//star btn create
const $newElementBtn = document.createElement('button');
const $containerText = document.querySelector('.container-code');

$newElementBtn.innerText = 'Probar de nuevo';

$containerText.append($newElementBtn);

$newElementBtn.addEventListener('click', () => {
    location.reload();
});

//end btn-create

fibSerie.forEach ($number => {
    const $body = document.querySelector('body');
    const $newElementUl = document.createElement('ul');
    const $newElementLi = document.createElement('li');


    $newElementLi.innerText  = "El número en secuencia: " + $number;

    $body.append($newElementUl);
    $newElementUl.appendChild($newElementLi);
});




