function calcularTaxas() {
  const bandeira = document.getElementById("bandeira").value;
  const valorVenda = Number(document.getElementById("valor").value);
  const parcelas = Number(document.getElementById("parcelas").value);
  const resumo = document.getElementById("resumo");

  if (!valorVenda || !parcelas) {
    resumo.innerHTML = "Preencha todos os campos!";
    return;
  }

  // Taxa da bandeira usando SWITCH (pedido no exercício)
  let taxaBandeiraPerc;

  switch (bandeira) {
    case "visa":
      taxaBandeiraPerc = 0.02;
      break;
    case "master":
      taxaBandeiraPerc = 0.0185;
      break;
    case "elo":
      taxaBandeiraPerc = 0.03;
      break;
  }

  // Taxa da bandeira
  const valorTaxaBandeira = valorVenda * taxaBandeiraPerc;

  // Juros simples 0.35% ao mês
  const jurosSimples = valorVenda * (0.0035 * parcelas);

  // Taxa fixa mensal
  const taxaFixa = 12.5 * parcelas;

  // Total
  const valorTotal = valorVenda + valorTaxaBandeira + jurosSimples + taxaFixa;

  // Valor por parcela
  const valorParcela = valorTotal / parcelas;

  resumo.innerHTML = `
    <h3>Resumo da Venda</h3>
    Taxa da Bandeira: R$ ${valorTaxaBandeira.toFixed(2)} <br>
    Juros Totais: R$ ${jurosSimples.toFixed(2)} <br>
    Taxa Fixa: R$ ${taxaFixa.toFixed(2)} <br><br>
    <strong>Total: R$ ${valorTotal.toFixed(2)}</strong><br>
    ${parcelas}x de R$ ${valorParcela.toFixed(2)}
  `;
}
