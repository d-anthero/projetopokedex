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
        <span>${pokemon.ability}</span>
</div>


<ul>
<li>HP:${pokemon.hp}</li>
<li>Ataque:</li>
<li>Defesa:</li>
<li>Ataque Sp.:</li>
<li>Defesa Sp.:</li>
<li>Velocidade:</li>
<li>Total:</li>
    `
}

loadPokemonData(data - 1, 1)