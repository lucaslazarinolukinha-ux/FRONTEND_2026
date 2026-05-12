 document.getElementById('calcular').addEventListener('click', () => {
            const nome = document.getElementById('nome').value;
            const n1 = parseFloat(document.getElementById('n1').value);
            const n2 = parseFloat(document.getElementById('n2').value);
            const n3 = parseFloat(document.getElementById('n3').value);
            const feedback = document.getElementById('feedback');

            if(isNaN(n1) || isNaN(n2) || isNaN(n3)) {
                alert("Preencha todas as notas!");
                return;
            }

            const media = (n1 + n2 + n3) / 3;
            let situacao = "";
            let classe = "";

            if (media >= 7.0) {
                situacao = "Aprovado";
                classe = "aprovado";
            } else if (media >= 4.0) {
                let falta = (10 - media).toFixed(2);
                situacao = `Exame. Falta ${falta} para nota 10.`;
                classe = "exame";
            } else {
                situacao = "Reprovado";
                classe = "reprovado";
            }

            feedback.innerHTML = `${nome}, Média: ${media.toFixed(2)} - ${situacao}`;
            feedback.className = classe;
        });