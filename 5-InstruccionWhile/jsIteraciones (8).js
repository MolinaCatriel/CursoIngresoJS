function mostrar()
{
	var contNegativo = 0;
	var positivo = 0;
	var negativo = 1;
	var seguir = 's';
	var numero;

	do {
		numero = parseInt(prompt("Ingrese un numero"));
		while (isNaN(numero)) {
			numero = prompt("Error, ingrese un numero");
		}


		if (numero < 0) {
			negativo = negativo * numero;
			contNegativo++;
		}
		else {
			positivo = positivo + numero;

		}
		seguir = prompt("¿Quiere seguir? s: para si n: para no.");
	}
	while (seguir == 's');
	if (contNegativo == 0) {
		negativo = 0
	}



	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN