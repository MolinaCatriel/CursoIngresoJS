function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Febrero":
        alert("Este mes no tiene más de 29 días.");
    break;
    default:
        alert("Este mes tiene 30 o más días");
    
}
//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN