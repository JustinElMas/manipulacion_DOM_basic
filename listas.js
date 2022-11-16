// arryas: Es una lista de elementos

//objeto: Lista de elementos con key

const obj = {
    "name": prompt("Hey! dime tu nombre: "),
    "edad": 12,
    "singer_favorite": ["Jesus", "MC-15", "Redmi2", "Sergio Rojas"],
    "country": "Colombia"
}

// te devuelve el objeto con los values (valores) y te los deja en array Object.values(obj);

/*
(4) ['justib', 12, 'Jesus', 'Colombia']
0: "justib"
1: 12
2: "Jesus"
3: "Colombia"
length: 4
[[Prototype]]: Array(0)

function imprimirElementoporElementoObjeto (obj) {
    let arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
};

undefined

imprimirElementoporElementoObjeto(obj);
VM2300:4 Emiliano
VM2300:4 12
VM2300:4 (4) ['Jesus', 'MC-15', 'Redmi2', 'Sergio Rojas']
VM2300:4 Colombia

*/