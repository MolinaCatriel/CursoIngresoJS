function mostrar() {
    var notas;
    var sexo;
    var contador = 0;
    var acumnotas = 0;
    var promedio;
    var min;
    var sexomin;
    var contvarones = 0;

    while (contador < 5) {
        notas = parseInt(prompt("Ingrese una nota entre el 0 y el 10"));
        while (isNaN(notas) || notas > 10 || notas < 0) {
            notas = parseInt(prompt("Error, numero no valido"));
        }
        sexo = (prompt("Ingrese el sexo"));
        while (sexo != "f" && sexo != "m") {
            sexo = prompt("Error, ingrese un sexo valido");
        }

        if (contador == 0) {

            min = notas;
            sexomin = sexo

        }
        if ((notas >= 6) && (sexo=="m")) {

            contvarones++

        }
        if (notas < min) {
            min = notas
            sexomin = sexo;

        }
        contador++;
        acumnotas = acumnotas + notas;

    }


    promedio = acumnotas / contador;


    alert("El promedio de las notas es: " + promedio);
    alert("La nota mas baja es: " + min + " el sexo es: " + sexomin);
    alert("La cantidad de varones con nota mayo a 6: " + contvarones);

}
