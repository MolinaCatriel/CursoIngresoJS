function mostrar() {
    var letra;
    var numero;
    var contpares = 0
    var contimpares = 0;
    var contceros = 0;
    var acumnega = 0;
    var acumpositivios = 0;
    var contpositivos = 0;
    var promedio;
    var min;
    var max;
    var letramax;
    var letramin;
    var cont = 0;

    do {
        letra = prompt("Ingrese una letra");
        numero = parseInt(prompt("Ingrese un numero entre el -100 y el 100"));
        while (isNaN(numero) || numero > 100 || numero < -100) {
            numero = parseInt(prompt("Error, ingrese un numero valido"));
        }
        if (numero % 2 == 0) {
            contpares++;
        } else {
            contimpares++;
        }
        if (numero == 0) {
            contceros++;
        } else if (numero < 0) {
            acumnega = acumnega + numero;
        }
        if (numero > 0) {
            contpositivos++
            acumpositivios = acumpositivios + numero;
        }
        if (cont == 0) {
            max = numero;
            min = numero;
            letramax = letra;
            letramin = letra;
        }
        if(numero>max)
        {
            max=numero;
            letramax=letra;
        }
        if(numero<min)
        {
            min=numero;
            letramin=letra;
        }
cont++;




    }while (confirm("Quiere continuar?"));
    promedio = acumpositivios / contpositivos;

    document.write("La cantidad de numeros pares es: " + contpares + "<br>");
    document.write("La cantidad de numeros impares es: " + contimpares + "<br>");
    document.write("La cantidad de numeros ceros es: " + contceros + "<br>");
    document.write("La suma de todos los numeros negativos es: " + acumnega + "<br>");
    document.write("El promedio de los numeros positivos es: " + promedio + "<br>");
    document.write("El numero maximo es: "+max+" y el sexo es: "+letramax+"<br>");
    document.write("El numero minimo es: "+min+" y el sexo es: "+letramin+"<br>");
}


