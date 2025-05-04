const filmesContainer = document.getElementById('filmes-container');

let listaGeneros = [];

function carregarGeneros() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=pt-BR';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTQ2NzFmYzI5Zjc5M2RjNDVlZGNkNTg0NTY0NTQyNyIsIm5iZiI6MTc0NjM5ODM1NS40MjcsInN1YiI6IjY4MTdlYzkzODk2MTUyOTcxOTFkMGU2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GTK_L8A52bAPX84ITCWKoi9Z3kco6fyKMDnKU4Hvd9E'
        }
    };

    return fetch(url, options)
        .then(res => res.json())
        .then(dados => {
            console.log('Gêneros carregados:', dados);
            listaGeneros = dados.genres;
        })
        .catch(err => {
            console.error('Erro ao carregar os gêneros:', err);
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

    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTQ2NzFmYzI5Zjc5M2RjNDVlZGNkNTg0NTY0NTQyNyIsIm5iZiI6MTc0NjM5ODM1NS40MjcsInN1YiI6IjY4MTdlYzkzODk2MTUyOTcxOTFkMGU2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GTK_L8A52bAPX84ITCWKoi9Z3kco6fyKMDnKU4Hvd9E'
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(dados => {
            console.log('Filmes recebidos:', dados);
            filmesContainer.innerHTML = '';

            dados.results.slice(0, 10).forEach(filme => {
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
            console.error('Erro ao carregar os filmes:', error);
            filmesContainer.innerHTML = '<p>Erro ao carregar os filmes. Tente novamente mais tarde.</p>';
        });
}

carregarGeneros().then(carregarFilmes); 
