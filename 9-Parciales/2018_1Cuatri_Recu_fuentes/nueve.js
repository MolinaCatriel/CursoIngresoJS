function mostrar()
{
    var animal;
    var peso;
    var temperatura;
    var contpares = 0;
    var contcerogrados = 0;
    var acum = 0;
    var promedio;
    var maxpeso;
    var min;
    var animalpesado;
    var temperaturapesado;
    var contpesados = 0;
    var contpeso = 0;
    var cont=0;


    do {
        animal = prompt("Ingrese el nombre de un animal:");
        peso = parseInt(prompt("Ingrese el peso del animal entre 1 y 1000 Kgr"));
        while (isNaN(peso) || peso < 1 || peso > 1000) {
            peso = peso = parseInt(prompt("Error, ingrese el peso del animal entre 1 y 1000 Kgr"));
        }
        temperatura = parseInt(prompt("Ingrese la temperatura de habitat entre -30° y 30°"));
        while (isNaN(temperatura) || temperatura < -30 || temperatura > 30) {
            temperatura = parseInt(prompt("Error, ingrese la temperatura de habitat entre -30° y 30"));
        }

        if (temperatura % 2 == 0) 
        {
            contpares++;
        }
        if (contpesados == 0) {
            animalpesado = animal;
            temperaturapesado = temperatura;
        }
        if (animalpesado > maxpeso) {
            animalpesado = animal;
            temperaturapesado = temperatura;
        }
        contpesados++
        if (temperatura < 0) {
            contcerogrados++;
            
        }
        if(temperatura<0 && cont==0)
        {
            min=peso;
            max=peso;
        }
        if(temperatura<0 && peso<min )
        {
            min = peso;
        }
        if(temperatura<0 && peso>max )
        {
            max=peso;
        }
        cont++;
        acum = acum + peso;
        contpeso++

    } while (confirm("¿Quiere continuar?"));

    promedio = acum / contpeso;



    document.write("La cantidad de temperatura pares es: " + contpares + "<br>");
    document.write("El nombre del animal mas pesado es: " + animalpesado + " La temperatura del animal mas pesado es: " + temperaturapesado + "<br>");
    document.write("La cantidad de animales que viven menos de cero grados es: " + contcerogrados + "<br>");
    document.write("El promedio del peso de todos los animales es: " + promedio + "<br>");
    document.write("El peso maximo: " + max + " El peso minimo: " + min + " de los animales de temperatura menor a 0°" + "<br>");
       
}

