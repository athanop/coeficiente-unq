//calcular el coeficiente completo con la formula: Coeficiente = (Promedio / 2) + [(TCO) / TCC] * 5
//VALOR DE LOS CAMPOS
var datos = function() {
    let prom = document.getElementById("Prom").value;
    let tco = document.getElementById("TCO").value;
    let tcc = document.getElementById("TCC").value;
    let promedio = calcularPromedio(prom)
    let segParte = restoFormula(tco, tcc)
    let result = (promedio) + (segParte)*5
    let decimal = Number((result).toFixed(2));

    if (prom == "" || tco == "" || tcc == ""){
        document.getElementById("result").value = "Datos incorrectos";
    }
    else{
    document.getElementById("result").value = decimal;
    }
}

//calcula el promedio
function calcularPromedio(x){
    return parseFloat(x / 2)
}

//calcula la segunda parte de la fórmula
function restoFormula(n1, n2){
    return parseFloat(n1) / parseFloat(n2)
}


function enterKeyPressed(event) {
    if (event.keyCode == 13) {
       datos()
       return true;
    } else {
       return false;
    }
}