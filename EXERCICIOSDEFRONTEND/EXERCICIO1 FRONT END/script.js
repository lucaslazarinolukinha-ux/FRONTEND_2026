function validarCPF() {
  let cpf = document.getElementById("cpf").value.replace(/[^\d]+/g, "");
  let resultado = document.getElementById("resultado");

  if (validarLogica(cpf)) {
    resultado.innerHTML = "CPF Válido!";
    resultado.className = "valido";
  } else {
    resultado.innerHTML = "CPF Inválido!";
    resultado.className = "invalido";
  }
}

function validarLogica(cpf) {
  if (cpf.length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;

  for (let t = 9; t < 11; t++) {
    let d = 0;

    for (let c = 0; c < t; c++) {
      d += cpf[c] * (t + 1 - c);
    }

    d = ((10 * d) % 11) % 10;

    if (cpf[t] != d) return false; // ✅ CORRETO
  }

  return true;
}
