const fetch = require('node-fetch')

const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

const getrandomId = () => {
  const randomId = Math.floor((Math.random() * 807) + 1);
  return randomId
}

async function fetchPokemon() {
  const res = await fetch(baseURL + getrandomId());
  const pokemon = await res.json();
  console.log(pokemon)
}

module.exports = fetchPokemon;