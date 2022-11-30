let x = mundo();
console.log(x)

function hola(){
    console.log("Hola!")
    return true;
};

function mundo(){
    console.log("Mundo!");

    alert("adios!");

    let resultado = 5+1;
}

function holamundo(){
    return esPar(7);
}


function numerosPares(arreglo){
    //let arreglo = sumatoria; lo hace invisiblemente
    for (let i = 0; i < arreglo.length; i++){
        if (esPar(arreglo[i])){
            console.log("El número "+ arreglo[i] + " es par uwu");
        }
        else{
            console.log("El número "+ arreglo[i] + " es impar unu");
        }
    }
}

function esPar(n){
    let cond = n % 2;
    if (cond == 0){
        return "Es par";
    }else{
        return "no es par";
    }
}
