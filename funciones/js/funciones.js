let amigo = "Yurian";

saludar(amigo, "Angy", "Sergio");

despedir((amigo=="Yurian")?"Adios Yurian":"Adios extraño");
let mensaje = (amigo=="Yurian")?"Adios Yurian":"Adios extraño";

despedir(mensaje);

function saludar(amigo, amigo2, amigo3){
    console.log("Hola mundo "+amigo+" "+ amigo2 +" "+ amigo3);
}

function despedir(mensaje,){
    console.log(mensaje);
}


