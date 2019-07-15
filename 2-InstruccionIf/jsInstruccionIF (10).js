function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
 if(nota=Math.floor (Math.random() *10) +1)
	{
		if(nota>=9)
		{
			alert(nota + " EXCELENTE");
		}
		else
		{

			alert(nota + " APROBÓ")
		}
		if(nota<4)
		{
			alert(nota + " Vamos, la proxima se puede")
		}

	}

	

}//FIN DE LA FUNCIÓN