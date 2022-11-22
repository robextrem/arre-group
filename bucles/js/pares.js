function espar(a){
    //return (a % 2 == 0) ? "es par" : "es impar";
    if(a % 2 == 0){
        return a + " es par";
    }
    else{
        return a + " es impar";
    }
}

for(let numero = 0;   numero <= 100    ;   numero++ ){
    let resultado = espar(numero);
    console.log(resultado); 
}


