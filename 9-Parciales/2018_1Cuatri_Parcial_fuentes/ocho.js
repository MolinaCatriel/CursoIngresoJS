function mostrar() {

    var num;
    var letra;
    var contpares = 0;
    var contimpares = 0;
    var contceros = 0;
    var acum = 0;
    var contnum = 0;
    var contnegativos = 0;
    var contpositivos = 0;
    var acumnega = 0;
    var min;
    var max;
    var letramax;
    var letramin;
    var promedio;


    do {
        letra = prompt("Ingrese una letra: ");
        num = parseInt(prompt("Ingrese un numero entre el -100 y 100"));
        while ((isNaN(num)) || (num > 100) || (num < -100)) {
            num = parseInt(prompt("Error, ingrese un numero entre el -100 y 100"));

        }
        if (num % 2 == 0) {
            contpares++;
        } else {
            contimpares++;
        }
        if (num == 0) {
            contceros++;
        }
        if (num >= 0) {
            contpositivos++;
            acum = acum + num

        } else {
            contnegativos++;
            acumnega = acumnega + num;
        }
        if (contnum == 0) {
            max = num;
            letramax = letra;
            min = num;
            letramin = letra;
        }
        if (num > max) {
            max = num;
            letramax = letra;
        }
        if (num < min) {
            min = num;
            letramin = letra;
        }
        contnum++;


    } while (confirm("Quiere continuar?"));

    promedio = acum / contpositivos;

    document.write("Cant num pares: " + contpares + "<br>");
    document.write("Cant num impares: " + contimpares + "<br>");
    document.write("Cantidad num ceros: " + contceros + "<br>");
    document.write("El promedio de positivos: " + promedio + "<br>");
    document.write("La suma de todos los negativos: " + acumnega + "<br>");
    document.write("El numero maximo es: " + max + " Letra: " + letramax + " El numero minimo es: " + min + " Letra: " + letramin + "<br>");


}



