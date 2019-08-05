function mostrar() {
    var contador = 0;
    var notas;
    var sexo;
    var promedio;
    var notabaja;
    var acumulador = 0
    var sexonotabaja;
    var contadorvarones = 0;
    var minimo;




    while (contador < 5) {
        notas = parseInt(prompt("ingrese una nota entre 0 y 10."));
        while (isNaN(notas) || notas > 10 || notas < 0) {
            notas = prompt("Error, Ingrese una nota entre el 0 y 10");
        }
        sexo = prompt("ingrese F ó M .");
        while ((sexo != "f") && (sexo != "m")) {
            sexo = prompt("Error, Sexo no valido");
        }
        if (contador == 0) {
            minimo = notas;
            sexonotabaja=sexo;
        }
        if (notas < minimo) {
            minimo = notas;
            sexonotabaja=sexo;       
        }
        acumulador = acumulador + notas;
        
        

        if ((sexo == "m") && (notas >= 6)) {
            contadorvarones++;
        }
        contador++;

    }
    promedio = acumulador / contador;




    /* promedio notas totales*/
    alert("Promedio de las notas es: " + promedio);
    /* La nota más baja y el sexo de esa persona. */
    alert("La nota mas baja es: " + minimo + " Su sexo es: " + sexonotabaja);
    /* La cantidad de varones que su nota haya sido mayor o igual a 6.*/
    alert("La cantidad de varones con nota mayor a 6 es: " + contadorvarones);
}