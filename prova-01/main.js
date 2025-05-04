document.addEventListener('DOMContentLoaded', function() {
    // Substitua SUA_API_KEY pela chave que você obteve no TMDB
    const apiKey = 'SUA_API_KEY';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const filmes = data.results.slice(0, 10); // Pega os 10 primeiros filmes
            const container = document.getElementById('filmes-container');
            container.innerHTML = ''; // Limpa o "Carregando..."
            
            filmes.forEach(filme => {
                const filmeElement = document.createElement('div');
                filmeElement.className = 'filme';
                
                // URL base para imagens - conforme indicado no enunciado
                const imageUrl = 'https://image.tmdb.org/t/p/w500';
                
                filmeElement.innerHTML = `
                    <img src="${imageUrl}${filme.poster_path}" alt="${filme.title}">
                    <h2>${filme.title}</h2>
                    <p>Data de lançamento: ${filme.release_date}</p>
                    <p>Nota: ${filme.vote_average}/10</p>
                    <p>${filme.overview.substring(0, 100)}...</p>
                `;
                
                container.appendChild(filmeElement);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os filmes:', error);
            document.getElementById('filmes-container').innerHTML = 
                '<p class="erro">Erro ao carregar os filmes. Tente novamente mais tarde.</p>';
        });
});