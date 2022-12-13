let url = "https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json";

fetch(url).then(function(response){
    return response.json();
}).then(function(pokemones){
    pokemones.forEach(function(pokemon){
        //console.log(pokemon)

        let div = document.createElement("div");
        div.classList.add("column","is-4")
        div.innerHTML=`
        <div class="card">
            <div class="card-image">
            <figure class="image is-4by3">
                <img src="${pokemon.ThumbnailImage}" alt="${pokemon.name}">
            </figure>
            </div>
            <div class="card-content">                    
                <p class="title is-4">${pokemon.name}</p>
                <p class="subtitle is-6">#${pokemon.number}</p>
            </div>
        </div>
        `;

        document.querySelector("#pokedex").append(div);

    })

    /*
    for(let i in pokemones){
        console.log(pokemones[i])
    }*/


});


/*
<div class="column is-4">
            <div class="card">
                <div class="card-image">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
                </div>
                <div class="card-content">                    
                    <p class="title is-4">Bulbasaur</p>
                    <p class="subtitle is-6">#1</p>
                </div>
            </div>
        </div>*/