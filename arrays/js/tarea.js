let numerico = [7,9,55,23,4,10]; //Recorrer y evaluar cuales son pares

let sumatoria = [8,19,22,90,11,1,33,2];  // Recorrer este arreglo y devolver sumatoria

let numericos = [7, 9, 55, 23, 4, 10];

function numerosPares(arreglo){
    //let arreglo = sumatoria; lo hace invisiblemente
    for (let i = 0; i < arreglo.length; i++){
        let esPar = arreglo[i] % 2;
        if (esPar == 0){
            console.log("El número "+ arreglo[i] + " es par uwu");
        }
        else{
            console.log("El número "+ arreglo[i] + " es impar unu");
        }
    }
}


function suma (s){
    let r = 0
    for(let i = 0; i < s.length ; i++){
        r = r + s[i] 
        console.log(s[i])
    }
    return ("resultado: " + r)
}

function arregloPares(numerico){
    // numerico = [7,9,55,23,4,10];
    //let numerico = [7,9,55,23,4,10]; //Recorrer y evaluar cuales son pares
    for(let i = 0; i < numerico.length; i++){
        residuo = numerico[i] % 2;
        if(residuo == 1){
            console.log("El numero " + numerico[i] + " es impar");
        }else{
            console.log("El numero " + numerico[i] + " es par");
        }
    }
}

console.log(numerico);
console.log(arregloPares([7,9,55,23,4,10]));


function arregloSumatoria(){
    let sumatoria = [8,19,22,90,11,1,33,2];  // Recorrer este arreglo y devolver sumatoria
    sumTotal = 0;
    for (let i = 0; i < sumatoria.length; i++){
        sumTotal += sumatoria[i];
        console.log("La sumatoria del arreglo es: " + sumTotal);
    }
}
console.log(arregloSumatoria());

//Usar en al menos una for(let i=0; i < helados.length ; i++)

//Opcional:
//Método de la burbuja para ordenar
//Busquedas lineales
//Busquedas binarias