function loadPokemonData(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonDetailToLi).join('')
 
      pokemondata.innerHTML += newHtml
    })
}

function saveId(pokemon){
    sessionStorage.setItem("id", pokemon)
    location.replace("./pkmndata.html")
    return data;
}
    const data = sessionStorage.getItem("id")

function loadPokemonData(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonDetailToLi).join('')
      pokemondata.innerHTML += newHtml
    })
}

function convertPokemonDetailToLi(pokemon){
    return `
    <h1>${pokemon.name}</h1>
    <img class="dataimg"src=${pokemon.image}></img>
    <ol class="types">
    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
    </ol>
        <span class="dataabilities">${pokemon.ability}</span>
</div>


<ul class ="datastats">
<li>HP: ${pokemon.hp}</li>
<li>Attack: ${pokemon.attack}</li>
<li>Defense: ${pokemon.defense}</li>
<li>Special Attack: ${pokemon.spattack}</li>
<li>Special Defense: ${pokemon.spdefense}</li>
<li>Speed: ${pokemon.speed}</li>
    `
}

loadPokemonData(data - 1, 1)