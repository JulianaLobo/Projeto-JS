document.addEventListener('DOMContentLoaded', function() {
    let estudantes = [];
    const opcaoSelect = document.getElementById('opcao');
    const resultadoDiv = document.getElementById('resultado');

    // Carrega os dados 
    fetch('https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json')
        .then(response => {
            if (!response.ok) throw new Error('Erro ao carregar dados');
            return response.json();
        })
        .then(data => {
            estudantes = data;
            console.log('Dados carregados com sucesso!');
        });

    // Evento para o select
    opcaoSelect.addEventListener('change', function() {
        const opcao = this.value;
        mostrarResultados(opcao);
    });

    

    // Função principal
    function mostrarResultados(opcao) {
        resultadoDiv.innerHTML = '';
        
        switch(opcao) {
            case 'todos':
                resultadoDiv.innerHTML = estudantes.map(formatarEstudante).join('');
                console.log('estudantes:', estudantes);
                break;
                
            case 'reprovados':
                const reprovados = estudantes.filter(e => (e.notaBim1 + e.notaBim2) < 60);
                resultadoDiv.innerHTML = reprovados.length > 0 
                    ? reprovados.map(formatarEstudante).join('')
                    : 'Nenhum estudante reprovado';
                break;
                
            case 'aprovados':
                const aprovados = estudantes.filter(e => (e.notaBim1 + e.notaBim2) >= 60);
                resultadoDiv.innerHTML = aprovados.length > 0
                    ? aprovados.map(formatarEstudante).join('')
                    : 'Nenhum estudante aprovado';
                break;
                
            case 'mulheres':
                const mulheres = estudantes.filter(e => e.sexo === 'F');
                resultadoDiv.innerHTML = mulheres.length > 0
                    ? mulheres.map(formatarEstudante).join('')
                    : 'Nenhuma estudante mulher';
                break;
                
            case 'homens':
                const homens = estudantes.filter(e => e.sexo === 'M');
                resultadoDiv.innerHTML = homens.length > 0
                    ? homens.map(formatarEstudante).join('')
                    : 'Nenhum estudante homem';
                break;
                
            case 'media':
                const total = estudantes.reduce((sum, e) => sum + e.notaBim1 + e.notaBim2, 0);
                const media = total / estudantes.length;
                resultadoDiv.innerHTML = `Média da turma: ${media.toFixed(2)}`;
                break;
                
            default:
                resultadoDiv.innerHTML = '';
        }
    }

    // Formata cada estudante
    function formatarEstudante(estudante) {
        const total = estudante.notaBim1 + estudante.notaBim2;
        return `
            <div class="estudante">
                ${estudante.nome}: ${estudante.notaBim1} (bim1) e ${estudante.notaBim2} (bim2) = ${total.toFixed(1)}
            </div>
        `;
    }
});