function mostrar() {
	var numero;
	var maximo = 0;
	var minimo = 0;
	var seguir;
	var contador = 0

	do {
		numero = parseInt(prompt("Ingrese un numero"));
		while (isNaN(numero)) {
			numero = prompt("Error, ingrese un numero");
		}

		if (contador == 1) {
			maximo = numero;
			minimo = numero;
		} else {
			if (numero > maximo) {
				maximo = numero;
			}
			else {
				if (numero > minimo)
					minimo = numero;
			}

		}


		seguir = prompt("¿Quiere seguir? s: para si n: para no.");
	}
	while (seguir == 's');

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;













}//FIN DE LA FUNCIÓN