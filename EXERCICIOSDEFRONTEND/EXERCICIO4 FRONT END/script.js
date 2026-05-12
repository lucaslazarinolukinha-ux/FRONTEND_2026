 const valorTaxaBandeira = valorVenda * taxaBandeiraPerc;
            // Juros Simples: 0.35% (0.0035) ao mês
            const jurosSimples = valorVenda * (0.0035 * parcelas);
            const taxaFixa = 12.50 * parcelas; // Taxa mensal de 12,50
            const valorTotal = valorVenda + valorTaxaBandeira + jurosSimples + taxaFixa;
            const valorParcela = valorTotal / parcelas;

            resumo.innerHTML = `
                <strong>Resumo:</strong><br>
                Valor da Taxa (${bandeira}): R$ ${valorTaxaBandeira.toFixed(2)}<br>
                Juros (0.35% a.m): R$ ${jurosSimples.toFixed(2)}<br>
                Taxa Fixa (12.50/mês): R$ ${taxaFixa.toFixed(2)}<br>
                <strong>Valor Total: R$ ${valorTotal.toFixed(2)}</strong><br>
                <strong>Parcelas: ${parcelas}x de R$ ${valorParcela.toFixed(2)}</strong>
            `;
        }