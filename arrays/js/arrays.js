
/*Definicion de un arreglo*/
let numericos = new Array();
numericos = [];

numericos = [2, 3, 5, 7, 8, 9, 0, 10, 3];
   //        0  1  2  3  4  5  6
console.log("El arreglo numericos tiene "+numericos.length+" elementos");
             // i < 7
for(let i=0; i < numericos.length ; i++){
    console.log("El valor del arr en la pos "+i+ " es "+numericos[i])
}