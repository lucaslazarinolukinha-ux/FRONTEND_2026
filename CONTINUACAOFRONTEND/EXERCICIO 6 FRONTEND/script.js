 function calcularOrcamento() {
        // 1. Obter valores dos inputs
        const valorPorPessoa = parseFloat(document.getElementById('pacote').value);
        const quantidade = parseInt(document.getElementById('convidados').value);
        const resultsArea = document.getElementById('resultsArea');

        // Validação básica
        if (isNaN(quantidade) || quantidade <= 0) {
            alert("Por favor, insira uma quantidade válida de pessoas.");
            resultsArea.style.display = 'none';
            return;
        }

        // 2. Regras de Cálculo
        const calculoBase = valorPorPessoa * quantidade;
        const taxaServico = calculoBase * 0.10;
        const subtotal = calculoBase + taxaServico;
        
        let desconto = 0;
        if (quantidade > 100) {
            desconto = subtotal * 0.05; // 5% de desconto
        }
        
        const totalFinal = subtotal - desconto;

        // 3. Exibir resultados com .toFixed(2)
        document.getElementById('resBruto').innerText = `R$ ${calculoBase.toFixed(2)}`;
        document.getElementById('resTaxa').innerText = `R$ ${taxaServico.toFixed(2)}`;
        document.getElementById('resDesconto').innerText = `- R$ ${desconto.toFixed(2)}`;
        document.getElementById('resTotal').innerText = `R$ ${totalFinal.toFixed(2)}`;

        // Mostrar a área de resultados
        resultsArea.style.display = 'block';
    }