function mostrar() {
    var seguir;
    var peso;
    var temperatura;
    var contTemperatura = 0;
    var prodMasPesado;
    var contadorPeso = 0;
    var pesoMax;
    var pesoMin;
    var marca;
    var productomenorcero=0;
    var promedio;
    var acumuladorpeso=0;


    do {
        marca= prompt("Ingrese la marca del producto:");
        peso = parseInt(prompt("Ingrese el peso entre 1 y 100"));
        while (isNaN(peso) || peso > 100 || peso < 1) {
            peso = parseInt(prompt("Error, numero no valido"));
        }
        temperatura = parseInt(prompt("Ingrese la temperatura entre -30º a 30º"));
        while (isNaN(temperatura) || temperatura > 30 || temperatura < -30) {
            temperatura = parseInt(prompt("Error temperatura no valida"));
        }
        if(temperatura%2 == 0)
        {
            contTemperatura++
        }
        if (contadorPeso == 0) {
            pesoMax = peso;
            pesoMin = peso;
        }
        if (peso > pesoMax) {
            pesoMax = peso;
            prodMasPesado=marca;
        }
        if (peso < pesoMin) {
            pesoMin = peso;
        }
        if(temperatura<=0)
        {
            productomenorcero++
        }
        acumuladorpeso=acumuladorpeso+peso
        contadorPeso++;
        contTemperatura++;






        seguir = prompt("Quiere continuar?: s para si.");
    } while (seguir == 's');
promedio=acumuladorpeso/contadorPeso;

    //console.log(marca);
    //console.log(peso);
    //.log(temperatura); 
    document.write ("La cantidad de temperaturas pares es: "+contTemperatura + "<br>");
    document.write (" La marca del producto mas pesado es "+prodMasPesado + "<br>");
    document.write (" La cantidad de productos menores a 0º: "+productomenorcero + "<br>");
    document.write (" El promedio es: "+promedio+ "<br>");
    document.write (" Peso maximo " + pesoMax + " Peso minimo " + pesoMin + "<br>");
}
