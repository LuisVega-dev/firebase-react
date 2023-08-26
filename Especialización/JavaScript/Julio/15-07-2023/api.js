// Metodo 1

/*const apiAll = 'https://pokeapi.co/api/v2/pokemon'
fetch(apiAll)
    .then((ress) => ress.json())
    .then((data) => {
        const pokemons = data.results;
        pokemons.forEach(element => {
            const urlpokemon = element.url
            fetch(urlpokemon)
            .then((result) => result.json())
            .then((data) => {
                const container = document.querySelector('.container')
                const cards = `<div class="card"><h2>${data.name}</h2><img src="${data.sprites.back_default}"></div>`
                container.innerHTML += cards
            })
            .catch((error)=>{alert(error)})
        });
    });*/

// Metodo 2

/*const getData = (api) => {
    return fetch(api)
        .then((result) => result.json())
        .then((data) => data)
}*/

const getData = async (api) => {
    const result = await fetch(api);
    const data = await result.json();
    return data;
}

const apiAll = 'https://pokeapi.co/api/v2/pokemon'
getData(apiAll).then((data) => {
    const pokemons = data.results;
    pokemons.forEach(element => {
        const urlpokemon = element.url;
        getData(urlpokemon).then((data1) => {
            const especies = data1.species.url;
            const getType = data1.types.map((type) => `<p class="type">${type.type.name}</p>`);
            const accessType = getType.join('');
            getData(especies).then((data) => {
                const container = document.querySelector('.container');
                const cards = `<div class="card" style="background-color: ${data.color.name};"><h2>${data1.species.name}</h2><img src="${data1.sprites.back_default}">${accessType}<p>#${data1.id}</p></div>`
                container.innerHTML += cards
            })
        })
        .catch((error)=>{alert(error)})
    });
});