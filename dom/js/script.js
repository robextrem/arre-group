document.querySelector("#enviar").addEventListener("click",operacion) 


function operacion(){
    let n = parseInt(document.querySelector(".input").value); // como si fuera prompt
    let resultado = espar(n);
    // 9 es impar
    document.querySelector(".hola").innerHTML += "<p class='azul'>"+resultado+"</p>";
}

function espar(b)
{
   if (b % 2 == 0){
    return b + " es par"
    }
    else{
    return b + " es impar"
   }
}