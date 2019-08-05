function mostrar()
{
    var numero1;
    var numero2;
    var division;
    var suma;


    numero1=parseInt(prompt("Ingrese el primer numero:"));
    numero2=parseInt(prompt("Ingrese el segundo numero"));

    if(numero1==numero2)
    {
        alert(numero1 +" "+numero2);
    }
    if(numero1>numero2)
    {
        division=numero1/numero2;
        alert("La division es: "+division);

    }
    if(numero1<numero2)
    {
        suma=numero1+numero2;
        alert("La suma es: "+suma);

    }
    if((suma<50) && (numero1<numero2))
    {
        alert("La suma es "+suma +" y es menor a 50");

    }





}
