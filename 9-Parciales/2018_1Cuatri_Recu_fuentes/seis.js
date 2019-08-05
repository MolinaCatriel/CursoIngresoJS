function mostrar() {

    var hora;
    var mensaje;

    hora = document.getElementById("laHora").value;

    switch (hora) {
        case "6":
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
            mensaje = "Es de mañana";
            break;
        case "12":
        case "13":
        case "14":
        case "15":
        case "16":
        case "17":
        case "18":
        case "19":
            mensaje = "Es de tarde";
            break;

        case "20":
        case "21":
        case "22":
        case "23":
        case "24":
            mensaje = "Es de noche";
            break;

        default:
            mensaje = "hora invalida";

            break;




    }
    if (hora < 24 && hora>20) {
        mensaje = "a dormir";
    }
    alert(mensaje);

}
