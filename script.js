"use strict";

// Pokemon API page: https://pokeapi.co/docs/v2#pokemon-section

const pokemonName = document.querySelector(".pokemon-name");
const pokemonSprite = document.querySelector(".pokemon-sprite");

const getPokemon = async function (pokemon) {
  const pokemonRequest = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${"charmeleon"}/`
  );
  const pokemonRequestJson = await pokemonRequest.json();
  console.log(pokemonRequestJson);

  const evolutionRequest = await fetch(
    `https://pokeapi.co/api/v2/evolution-chain/${pokemon}/`
  );
  const evolutionRequestJson = await evolutionRequest.json();
  console.log(evolutionRequestJson);

  pokemonName.innerText = pokemonRequestJson.name;
  pokemonSprite.src =
    pokemonRequestJson.sprites.other.dream_world.front_default;
};

getPokemon(4);
