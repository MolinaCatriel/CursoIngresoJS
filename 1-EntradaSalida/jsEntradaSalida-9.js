/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    
    var resultado1;

    sueldo=document.getElementById("sueldo").value;

    sueldo=parseInt(sueldo); 
    resultado1=sueldo+sueldo*10/100;
    resultado1=parseInt(resultado1);
    document.getElementById("resultado").value=resultado1;

	
}
