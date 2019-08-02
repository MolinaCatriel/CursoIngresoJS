function mostrar()
{

	var contador = 0;
	var acumulador = 0;
	var numero;
	var promedio
	var seguir = 's';

	do {
		numero = parseInt(prompt("Ingrese un numero"));
		while(isNaN(numero))
		{
			numero=prompt("Error, ingrese un numero");
		}
		contador++;
		acumulador = acumulador + numero;
		seguir = prompt("¿Quiere seguir? s: para si n: para no.");
	} while (seguir == 's');

	promedio = acumulador / numero;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN