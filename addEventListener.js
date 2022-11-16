//usar la terminal para mover .js a una carpeta y asi con lo demás const $inputNumber1 = document.querySelector('#calculo1');
const $inputNumber1 = document.querySelector('#calculo1');
const $inputNumber2 = document.querySelector('#calculo2');
const $myInputs = document.querySelector('.inputs');
const $pResult = document.querySelector('#result');

const $button = document.querySelector('#btn-Calcular');
const $form = document.getElementById('form');

$form.addEventListener('submit', $sumarInputs); //no volver a llamar el evento

function $sumarInputs(event){
    let sumar = parseInt($inputNumber1.value) + parseInt($inputNumber2.value);
    console.log({event});

    event.preventDefault();

    $pResult.innerText = `El resultado es: ${sumar} `;

};