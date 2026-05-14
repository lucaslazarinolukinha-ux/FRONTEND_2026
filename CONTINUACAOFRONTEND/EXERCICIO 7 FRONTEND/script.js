function analisarCartao() {
    const input = document.getElementById('cardNumber').value;
    // Remove espaços e pontos
    const numeroLimpo = input.replace(/[\s\.-]/g, ''); 
    
    const painel = document.getElementById('painelInfo');
    const statusEl = document.getElementById('status');
    const bandeiraEl = document.getElementById('bandeira');
    const setorEl = document.getElementById('setor');
    const emissorEl = document.getElementById('emissor');

    // Validação de tamanho (13 a 16 dígitos)
    if (numeroLimpo.length < 13 || numeroLimpo.length > 16 || isNaN(numeroLimpo)) {
        alert("Por favor, insira um número de cartão válido (13 a 16 dígitos).");
        painel.classList.add('hidden');
        return;
    }

    // --- Algoritmo de Luhn ---
    const ehValido = validarLuhn(numeroLimpo);

    // --- Identificação (BIN/IIN) ---
    const bin = numeroLimpo.substring(0, 8);
    let bandeira = "Desconhecida";
    if (numeroLimpo.startsWith('4')) bandeira = "Visa";
    else if (/^5[1-5]/.test(numeroLimpo)) bandeira = "MasterCard";
    else if (/^3[47]/.test(numeroLimpo)) bandeira = "American Express";

    // Setor (1º dígito)
    let setor = "";
    switch(numeroLimpo[0]) {
        case '1': case '2': setor = "Linhas Aéreas"; break;
        case '3': setor = "Viagens e Entretenimento"; break;
        case '4': case '5': setor = "Bancário e Financeiro"; break;
        case '6': setor = "Merchandising e Bancário"; break;
        default: setor = "Outros";
    }

    // Exibir painel
    painel.classList.remove('hidden');
    statusEl.innerText = ehValido ? "VÁLIDO" : "INVÁLIDO";
    statusEl.className = ehValido ? "valido" : "invalido";
    bandeiraEl.innerText = bandeira;
    setorEl.innerText = setor;
    emissorEl.innerText = bin;
}

function validarLuhn(numero) {
    let soma = 0;
    let deveDobrar = false;

    // Inverter a string e percorrer
    for (let i = numero.length - 1; i >= 0; i--) {
        let digito = parseInt(numero.charAt(i));

        if (deveDobrar) {
            digito *= 2;
            if (digito > 9) digito -= 9;
        }

        soma += digito;
        deveDobrar = !deveDobrar;
    }

    return (soma % 10 === 0);
}
