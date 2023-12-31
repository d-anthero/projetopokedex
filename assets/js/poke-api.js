const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    const abilities = pokeDetail.abilities.map((abilitySlot) => abilitySlot.ability.name)
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const stats = pokeDetail.stats.map((statsSlot) => statsSlot.base_stat)
    const [type] = types
    const [ability] = abilities
    pokemon.types = types
    pokemon.type = type
    pokemon.image = pokeDetail.sprites.other.dream_world.front_default
    pokemon.photo = pokeDetail.sprites.front_default
    pokemon.ability = ability
    pokemon.hp = stats[0];
    pokemon.attack = stats[1];
    pokemon.defense = stats[2];
    pokemon.spattack = stats[3];
    pokemon.spdefense = stats[4];
    pokemon.speed = stats[5];

    console.log(stats)


    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}

