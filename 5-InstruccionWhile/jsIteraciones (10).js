function mostrar()
{

	var contador=0;
	var numero;
	var numeroDos;
	var suma;
	alert(numero);
	
	numeroDos=12;
	suma=numero*numeroDos;
	alert(suma);
	suma="3";//bien
	suma=3;//bien
	suma="lalala";//error

	while(isNaN(suma))
	{
		alert("error");
		suma=prompt("error, reingrese solo numeros");
	}
	alert("ingreso correcto "+suma);
	
	/*
	if(isNaN(suma))
	{
		alert("error");

	}else{
		alert("bien");
	}*/


	
	




}

