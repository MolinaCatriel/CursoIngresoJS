function mostrar()
{
//tomo la edad 
var edad;

    edad=document.getElementById("edad").value;

    if (edad>=18)
    {
        alert("Mayor de edad");
    } 
    if (edad<=13)
    {
        alert("Niño");
    }
    if (edad>=13 && edad<=17)
    {
        alert("Adolescente");
    }




}//FIN DE LA FUNCIÓN