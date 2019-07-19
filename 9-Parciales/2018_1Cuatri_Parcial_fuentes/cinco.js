function mostrar() {
    var planeta;
    var mensaje;
    planeta = prompt("Ingrese un planeta: ");
    switch (planeta) 
    {
        case "mercurio":
        case "venus":
            mensaje = "acá hace más calor";
            break;
        case "tierra":
            mensaje = "acá vivimos";
            break;
        case "marte":
        case "saturno":
        case "jupiter":
        case "pluton":
        case "urano":
        case "neptuno":
            mensaje = "acá hace más frio";
            break;
        default:
            mensaje = "No es un planeta";
    }
    alert(mensaje);
}

