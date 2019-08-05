function mostrar()
{
    var precio;
    var descuento;
    var final;

    precio=parseInt(prompt("Ingrese el precio:"));
    descuento=parseInt(prompt("Ingrese el descuento"));
    
    final=precio-precio*descuento/100;

    document.getElementById("elPrecioFinal").value=final;



}
