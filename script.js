"use strict";

// Pokemon API page: https://pokeapi.co/docs/v2#pokemon-section

///////////////////////////////////////////////////////////////////////////
// GENERAL STUFF
///////////////////////////////////////////////////////////////////////////
const pokemonSprite = document.querySelector(".pokemon-sprite");
const pokemonName = document.querySelector(".pokemon-name");
const pokemonNumber = document.querySelector(".pokemon-number");
const pokemonType = document.querySelector(".pokemon-type");
const input = document.querySelector(".input");

const getJson = async function (url) {
  const request = await fetch(url);
  return await request.json();
};

const capitalFirstLetter = function (string) {
  const split = string.split("");
  return split[0].toUpperCase() + string.slice(1);
};

///////////////////////////////////////////////////////////////////////////
// RENDER POKEMON
///////////////////////////////////////////////////////////////////////////
const getPokemon = async function (pokemon) {
  const pokemonJson = await getJson(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
  );
  console.log(pokemonJson);
  pokemonSprite.src = pokemonJson.sprites.other.dream_world.front_default;

  //Name and number
  pokemonName.innerText = capitalFirstLetter(pokemonJson.name);
  pokemonNumber.innerText = `#` + ("#000" + `${pokemonJson.id}`).slice(-3);

  //Types
  pokemonType.innerText = capitalFirstLetter(pokemonJson.types[0].type.name);
  if (pokemonJson.types.length > 1) {
    const type2 = document.createElement("span");
    type2.classList.add("pokemon-type", "type-2");
    type2.innerText = capitalFirstLetter(pokemonJson.types[1].type.name);
    pokemonType.insertAdjacentElement("afterend", type2);
  }

  const pokemonTypes = document.querySelectorAll(".pokemon-type");

  pokemonTypes.forEach((type) => {
    if (type.innerText == "Normal") type.style.backgroundColor = "#A8A77A";
    if (type.innerText == "Fire") type.style.backgroundColor = "#EE8130";
    if (type.innerText == "Water") type.style.backgroundColor = "#6390F0";
    if (type.innerText == "Electric") type.style.backgroundColor = "#F7D02C";
    if (type.innerText == "Grass") type.style.backgroundColor = "#7AC74C";
    if (type.innerText == "Ice") type.style.backgroundColor = "#96D9D6";
    if (type.innerText == "Fighting") type.style.backgroundColor = "#C22E28";
    if (type.innerText == "Poison") type.style.backgroundColor = "#A33EA1";
    if (type.innerText == "Ground") type.style.backgroundColor = "#E2BF65";
    if (type.innerText == "Flying") type.style.backgroundColor = "#A98FF3";
    if (type.innerText == "Psychic") type.style.backgroundColor = "#F95587";
    if (type.innerText == "Bug") type.style.backgroundColor = "#A6B91A";
    if (type.innerText == "Rock") type.style.backgroundColor = "#B6A136";
    if (type.innerText == "Ghost") type.style.backgroundColor = "#735797";
    if (type.innerText == "Dragon") type.style.backgroundColor = "#6F35FC";
    if (type.innerText == "Dark") type.style.backgroundColor = "#705746";
    if (type.innerText == "Steel") type.style.backgroundColor = "#B7B7CE";
    if (type.innerText == "Fairy") type.style.backgroundColor = "#D685AD ";
  });
};

///////////////////////////////////////////////////////////////////////////
// SEARCH BAR
///////////////////////////////////////////////////////////////////////////
const search = document.querySelector("#searchInput");
const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
  console.log(search);
});

getPokemon(1);
