// métodos para recorrer arrays 1. filter, 2. map

var articulos = [
    {nombre: "Bici", costo: 2000},
    {nombre: "Tv", costo: 2300},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 1000},
    {nombre: "Laptop", costo: 100000},
    {nombre: "Audifonos", costo: 700},
];

// método filter 

let recordingArticles = articulos.filter(function (articulo) {
    return articulo.costo <= 2000;
}    
);

// méthod map 

var nombreArticulo = articulos.map(function (articulo){
    return articulo.nombre;
}
);

// method find

let findArticle = articulos.find( function (articulo) {
    return articulo.costo <= 200;
});

console.log(nombreArticulo);

var Emiliano = {
    ojos: "Claros",
    edad: 4,
    sexo: "Masculino",
    mamá: "Karla"
};

document.write(Emiliano.edad); 

