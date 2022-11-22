let combinados = ["Yurian", 5, "c", 7.9, "Chocolate"];
let numeros = [5,6,3,2,4,3,2,1];
let personas = ["Sergio", "Angy", "Yurian", "Roberto"];
let helados = ["Chocomenta", "Napolitano", "Coco", "Chocolate"];

//for(let i=0; i < helados.length ; i++)
for(let i in helados){
    console.log("Un sabor es:(in) "+ helados[i]);
}

for(let helado of helados){
    console.log("Un sabor es:(of) "+ helado);
}

helados.forEach(function(helado){
    console.log("Un sabor es:(foreach) "+ helado);
});

helados.forEach(function(x){
    console.log("Un sabor es:(foreach) "+ x);
});


for(let i in helados){
    console.log(personas[i]+" le toca "+ helados[i]);
}
