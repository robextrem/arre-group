//const axios = require('axios');
let url = "https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json";

axios.get(url).then(function(response){

    let pokemones = response.data;

    //for(let i=0; i<pokemon.length; i++)
    for(let i in pokemones){ 
        //let pokemon = pokemones[i]

        let favorito = (pokemones[i].name=="Dialga" ||  pokemones[i].name=="Psyduck" || pokemones[i].name=="Squirtle")? "background:goldenrod" : "";

        document.querySelector("#contenido").innerHTML += `<div class="column is-3">
        <div class="card" style="${favorito}">
            <div class="card-image">
            <figure class="image is-square">
                <img src="${pokemones[i].ThumbnailImage}">
            </figure>
            </div>
            <div class="card-content">
            <div class="media">
                <div class="media-left">
                <figure class="image is-48x48">
                    <img src="https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png">
                </figure>
                </div>
                <div class="media-content">
                <p class="title is-4">${pokemones[i].name}</p>
                <p class="subtitle is-6">${pokemones[i].height}</p>
                </div>
            </div>
            </div>
        </div>
    </div>` 
    }

});

/*
<div class="column is-3">
                <div class="card">
                    <div class="card-image">
                    <figure class="image is-square">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                    </div>
                    <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png">
                        </figure>
                        </div>
                        <div class="media-content">
                        <p class="title is-4">John Smith</p>
                        <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
*/