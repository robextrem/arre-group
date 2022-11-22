
let mensaje = hola("Roberto");

console.log(mensaje);
console.log(hola("Yurian"));

cortar();

function hola(nombre){
    return "Hola "+nombre;
}

function cortar(){
    console.log("aqui empieza");
    return; //Aqui acaba
    console.log("aqui segun termina");
}