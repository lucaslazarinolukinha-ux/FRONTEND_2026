 function mostrarTabela() {
        // Seleciona o container e o botão
        const container = document.getElementById('container-imagem');
        
        // Verifica se a imagem já existe para não duplicar
        if (document.getElementById('tabelaJogos')) return;

        // Cria o elemento de imagem
        const img = document.createElement('img');
        
        // Define o caminho (ajuste conforme a pasta 'Prova' mencionada)
        img.src = 'Prova/tabela_jogos.png'; 
        img.alt = 'Tabela de Jogos Copa 2026';
        img.id = 'tabelaJogos';
        img.style.maxWidth = '100%';
        img.style.marginTop = '20px';

        // Adiciona a imagem ao container
        container.appendChild(img);
    }
    function revelar() {
    // 1. Alterar o src da imagem principal (presumindo id="main-player-img")
    const imgPlayer = document.getElementById('main-player-img');
    imgPlayer.src = 'img/_vinicius_junior.png';

    // 2. Substituir conteúdo dos spans
    document.getElementById('nome').innerText = 'Vinícius José Paixão de Oliveira Júnior';
    document.getElementById('data').innerText = '12/07/2000 (25 anos)';
    document.getElementById('altura').innerText = '1,76 m';
    document.getElementById('posicao').innerText = 'Ponta-esquerda / Atacante';
    document.getElementById('rank').innerText = '9,5';

    // 3. Remover classe 'placeholder' e adicionar 'card-text'
    const elements = document.querySelectorAll('.placeholder');
    elements.forEach(el => {
        el.classList.remove('placeholder');
        el.classList.add('card-text');
    });
}