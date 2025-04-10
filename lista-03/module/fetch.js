async function carregarJsonFetch() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/JulianaLobo/Projeto-JS/main/lista-03/dados.json');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        console.log("Dados carregados com fetch:", data);
    } catch (error) {
        console.error("Erro ao carregar JSON:", error);
    }
}

export default carregarJsonFetch;