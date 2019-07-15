/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero1;
    var numero2;
    var resultado;
       
    numero1 = document.getElementById("numeroUno").value;
    
    numero1 = parseInt(numero1);
    
    numero2 = document.getElementById("numeroDos").value;
    
    numero2 = parseInt(numero2);
    
    resultado=numero1+numero2;

    alert("La suma de los numeros es " + resultado);
	
}

function restar()
{
    var numero1;
    var numero2;
    var resultado1;
       
    numero1 = document.getElementById("numeroUno").value;
    
    numero1 = parseInt(numero1);
    
    numero2 = document.getElementById("numeroDos").value;
    
    numero2 = parseInt(numero2);
    
    resultado1=numero1 - numero2;

    alert("La resta de los numeros es " + resultado1);
	
}

function multiplicar()
{
    var numero1;
    var numero2;
    var resultado2;
       
    numero1 = document.getElementById("numeroUno").value;
    
    numero1 = parseInt(numero1);
    
    numero2 = document.getElementById("numeroDos").value;
    
    numero2 = parseInt(numero2);
    
    resultado2=numero1 * numero2;

    alert("La multiplicacion de los numeros es " + resultado2);

	
}

function dividir()
{
    var numero1;
    var numero2;
    var resultado3;
       
    numero1 = document.getElementById("numeroUno").value;
    
    numero1 = parseInt(numero1);
    
    numero2 = document.getElementById("numeroDos").value;
    
    numero2 = parseInt(numero2);
    
    resultado3 = numero1 / numero2;

    alert("La division de los numeros es " + resultado3);
	
}

