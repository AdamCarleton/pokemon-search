const POKEMON="https://pokeapi.co/api/v2/pokemon/";

const resultDiv = document.querySelector(".result");


function fetchPokemonData(pokemon) {
    fetch(POKEMON + pokemon)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h2>${data.name}</h2>
            <h3>(ID: ${data.id})</h3>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <ul>
                <li>HP: ${data.stats[0].base_stat}</li>
                <li>ATK: ${data.stats[1].base_stat}</li>
                <li>DEF: ${data.stats[2].base_stat}</li>
                <li>S.ATK: ${data.stats[3].base_stat}</li>
                <li>S.DEF: ${data.stats[4].base_stat}</li>
                <li>SPD: ${data.stats[5].base_stat}</li>
            </ul>
        `;
        resultDiv.appendChild(card);
    })
}


const input = document.querySelector(".search-bar input");

document.querySelector('.search-bar form').addEventListener("submit", function(e) {
    e.preventDefault();
    const pokeName = input.value.toLowerCase().trim();
    if (pokeName) {
        fetchPokemonData(pokeName);
        input.value = "";
    }
});