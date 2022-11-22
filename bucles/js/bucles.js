// iteradores o bucles como
// for, while, doWhile, forEach, for In, for of, return-until en otros leguajes

//index o i
//i++
//i = i +1
//i += 1

/*
for(var i=1 ;  i<=10  ; i++) {

    console.log("Num: "+ i)

    //despues de todo esto se ejectua el i++
}

console.log("El valor final de i es "+ i)*/


for(var i=2 ;  i<=6  ; i++) {
    console.log("Par: "+ i)
}
console.log("El valor final de i es "+ i)


function numericos (){
    for(let a=0; a<100 ; a = a + 10){
        //Repetirlo 10 veces

        if(a == 50)
        break;

        console.log("El num "+a);
    }
    console.log("Mas comandos")
}

let a=0;
while(a<100){
    console.log("El num "+a);
    a = a + 10;
}
