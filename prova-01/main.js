const apiKey = 'SUA_API_KEY';
const filmesContainer = document.getElementById('filmes');

let listaGeneros = [];

function carregarGeneros() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`;
    return fetch(url)
        .then(res => res.json())
        .then(dados => {
            listaGeneros = dados.genres;
        });
}

function getNomesDosGeneros(genreIds) {
    return genreIds.map(id => {
        const genero = listaGeneros.find(g => g.id === id);
        return genero ? genero.name : '';
    }).filter(nome => nome !== '').join(', ');
}

function carregarFilmes() {
    filmesContainer.innerHTML = '<p>Carregando filmes...</p>';

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;

    fetch(url)
        .then(res => res.json())
        .then(dados => {
            filmesContainer.innerHTML = '';

            dados.results.forEach(filme => {
                const card = document.createElement('div');
                card.classList.add('filme');

                const imageUrl = 'https://image.tmdb.org/t/p/w500';
                const generos = getNomesDosGeneros(filme.genre_ids);

                card.innerHTML = `
                    <img src="${imageUrl}${filme.poster_path}" alt="${filme.title}">
                    <h2>${filme.title}</h2>
                    <p>Data de lançamento: ${filme.release_date}</p>
                    <p>Nota: ${filme.vote_average}/10</p>
                    <p>${filme.overview.substring(0, 100)}...</p>
                    <p><strong>Gêneros:</strong> ${generos}</p>
                `;

                filmesContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error(error);
            filmesContainer.innerHTML = '<p>Erro ao carregar os filmes. Tente novamente mais tarde.</p>';
        });
}

// Primeiro carrega os gêneros, depois os filmes
carregarGeneros().then(carregarFilmes);
