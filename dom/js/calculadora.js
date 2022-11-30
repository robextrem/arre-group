function suma(x,y){
    return x+y;
}
function resta(x,y){
    return x-y;
}
function multiplicacion(x,y){
    return x*y;
}
function division(x,y){
    return x/y;
}


document.querySelector("#mult").addEventListener("click", calc)

function calc(){
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);

    let resultado = multiplicacion(num1, num2);
    document.querySelector(".resultado").innerHTML += resultado;
    
}
