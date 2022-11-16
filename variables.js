let nameUser = "Justin";
let last_name = "Guillén";

document.write(`${nameUser} ${last_name}`);

function showProps(obj, objName) {
    var result = ``;
    for (var i in obj) {
      // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
      if (obj.hasOwnProperty(i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    return result;
  }

// declarar una variable es: 

let x; 

console.log(x);

//inicializar una variables es:   darle un valor, un dato, guardar algo en ese espacio de memoria que reservamos.

x = 12;

console.log(x);

//reinicializar es reemplazar su valor

x = x + 1;

console.log(typeof x);

const $divCreator = document.createElement('div');
const $div = document.querySelector('.lop')

function incribirMiembro (name, lastName1) {
    name = prompt("Ingresa tu nombre");
    lastName1 = prompt("Ingresa tu apellido");
    var fullName = `${name} ${lastName1}`;
    return $div.textContent = fullName;
}

incribirMiembro();



$divCreator.style.height = '2rem';
$divCreator.style.width = '2rem';

// function styleDiv(propertyCss, estilo) {
//   return  $div.style.propertyCss = estilo + '%';
// }

// styleDiv(backgroundColor, red);

// $div.style.backgroundColor = 'green';
// $div.style.height = '22rem';
// $div.style.width = '22rem';


// styleDiv(color);



