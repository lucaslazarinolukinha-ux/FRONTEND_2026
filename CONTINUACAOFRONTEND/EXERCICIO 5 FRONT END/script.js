// Função para adicionar convidado
    



function addGuest() {
        const input = document.getElementById('guestName');
        const name = input.value.trim(); // .trim() para evitar vazios
        
        if (name === "") {
            alert("Por favor, digite o nome do convidado.");
            return;
        }

        const list = document.getElementById('guestlist');
        
        // Criar elemento li
        const li = document.createElement('li');
        
        // Estrutura interna do li
        li.innerHTML = `
            <span class="guest-name">${name}</span>
            <div class="actions">
                <button class="action-btn btn-check" onclick="togglePresence(this)">✓</button>
                <button class="action-btn btn-edit" onclick="editGuest(this)">✎</button>
                <button class="action-btn btn-delete" onclick="deleteGuest(this)">✕</button>
            </div>
        `;

        list.appendChild(li);
        input.value = ""; // Limpa o campo
        input.focus();
    }

    // Função para Alternar Presença (Concluir)
    function togglePresence(button) {
        const li = button.closest('li');
        const nameSpan = li.querySelector('.guest-name');
        nameSpan.classList.toggle('guest-concluido'); // classList.toggle
    }

    // Função para Editar
    function editGuest(button) {
        const li = button.closest('li');
        const nameSpan = li.querySelector('.guest-name');
        const currentName = nameSpan.innerText;
        
        // prompt() para novo nome
        const newName = prompt("Editar nome do convidado:", currentName);
        
        if (newName !== null && newName.trim() !== "") {
            nameSpan.innerText = newName.trim();
        }
    }

    // Função para Excluir
    function deleteGuest(button) {
        const li = button.closest('li');
        if (confirm("Tem certeza que deseja remover este convidado?")) {
            li.remove();
        }
    }

    // Adicionar ao apertar "Enter"
    document.getElementById('guestName').addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            addGuest();
        }
    });
       
