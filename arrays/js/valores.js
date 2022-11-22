let combinados = ["Yurian", 5, "c", 7.9, "Chocolate"];
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


for(let i in helados){
    console.log(personas[i]+" le toca "+ helados[i]);
}
