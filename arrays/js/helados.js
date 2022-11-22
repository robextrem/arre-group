let sabor = window.prompt();

//alert(quien(sabor));
alert(saborfavorito(sabor));

function quien(sabor){

    sabor = sabor.toLowerCase();

    switch(sabor){
        case "chocolate":{
            return "Angy";
        }
        case "chocomenta":{
            return "Yurian"
        }
        case "napolitano":{
            return "Sergio";
        }
        default:{
            return "Roberto";
        }
    }
}


function saborfavorito(nombre){
    let favs = ""

    nombre = nombre.toLowerCase();

    switch(nombre){
        case "angy":{
            favs = "chocolate";
            break;
        }
        case "yurian":{
            favs = "chocomenta";
            break;
        }
        case "sergio":{
            favs = "napolitano";
            break;
        }
        default:{
            alert("La persona que buscas no esta en la base de datos")
            return;
        }
    }
    return favs;
}