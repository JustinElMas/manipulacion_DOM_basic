let respuesta;

while (respuesta != '4') {
    let UserMath = prompt("¿Cuánto es 2 + 2: ");
    respuesta = UserMath;
    
    if (UserMath == '4') {
        alert("Respuesta correcta, la solución es: " + '4');
    } else {
        alert("Intenta de nuevo, respuesta incorrecta");
    }
};