console.trace('Hola');

const $h1 = document.querySelector('h2');
const $p = document.querySelectorAll('p');
const $parrafito = document.querySelector('.parrafo1');
const $parrafo = document.querySelector('#parrafitoID');
const $input = document.querySelector('.input');

console.log($h1);

console.log($input.value);

console.log({
    $h1,
    $input,
    $parrafito,
    $parrafo,
    $p
});

//Uso de innertHTML que deja insertar HTML desde JavaScript pero si no lo usas bien un atacante también puede usar y poner en el frontend html malicioso y romper el código para eso se puede usar innerText

$h1.innerHTML = 'Escribe dos números para sumar <hr/> <li><small><mark>Bro</mark></small></li>';
// $parrafito.innerText = 'Sin penas bro </br>';

//Cambiando atributos con SET and GET atributs

console.log($h1.getAttribute('consola'));

console.log($h1.setAttribute('consola', 'verde'));

console.log($h1.getAttribute('consola'));

$h1.classList.add('limon', 'pera', 'gabo');

$h1.classList.remove('limon');

//$h1.classList.toggle() //añade y quita
//nos deja ver si hay no la clase si la contiene 
//$h1.classList.contains();

//MODIFCAR EL VALOR DEL --VALUE--

$input.value = 'vive al 100 🗽';
$input.style.width = '20rem'
$input.style.height = '6rem';
$input.style.fontSize = '3rem';

//--CREAR UN ELEMENTO-- **Desde cero**

const $newElementImg = document.createElement('img');

$newElementImg.setAttribute('src', './rigby.png');
$newElementImg.style.display = 'grid';
$newElementImg.style.placeItems = 'center';

console.log($newElementImg);

$parrafito.innerHTML = ""; //este lo "oculta" es más como un truco 
$parrafito.style.height = '30rem';
$parrafito.style.background = "saddlebrown";

$parrafito.append($newElementImg);


// $parrafito.replaceWith($newElementImg); //este borra y remplaza



// let ArrayT = [];

// let x = prompt('Ingresa un numero:');
// ArrayT.push(x);
// console.log(ArrayT);

// for (let i = 0; i < ArrayT.length; i++ ) {
//     if (ArrayT[i] == 24) {
//         $h1.style.fontFamily = 'monospace';
//         $h1.style.backgroundColor = 'beige';
//         $h1.style.color = 'black';
//         $h1.style.fontSize = '7rem';
//         $h1.style.textAlign = 'center';
//         $h1.innerHTML = 'Feliz Navidad 🙌';
//     }else if (ArrayT[i] != 24){
//         alert('Aun no es navidad 😖');
//         console.warn(ArrayT[i]);
//         let x = prompt('Ingresa un numero:');
//         ArrayT.push(x);
//     }

// };

// Workship two 

const $inputNumber1 = document.querySelector('#calculo1');
const $inputNumber2 = document.querySelector('#calculo2');
const $myInputs = document.querySelector('.inputs');
const $pResult = document.querySelector('#result');
const $newElementMark = document.createElement('mark');

const $newElementImg2 = document.createElement('img')
$newElementImg2.setAttribute('src', './mono.png');

const $button = document.querySelector('#btn-Calcular');

const $activeEvent = () => {
    let sumar = parseInt($inputNumber1.value) + parseInt($inputNumber2.value);
    $newElementMark.innerText = `${sumar} 🐕`;    
    $newElementMark.style.fontSize = '35px';
    $newElementMark.style.fontFamily = 'monospace';
    $newElementMark.style.borderRadius = '20px'
    $newElementMark.style.textAlign = 'center';
    $newElementMark.style.background = '#f202f2';

    $pResult.innerText = `El resultado es: ${sumar} `;

    $myInputs.appendChild($newElementMark); 
    $parrafito.replaceWith($newElementImg2);
};
