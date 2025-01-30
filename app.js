let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    // Validar entrada vazia
    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adicionar nome à lista e limpar o campo
    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    // Adiciona os nomes na lista visível
    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia. Adicione amigos antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    document.getElementById("resultado").innerHTML = `<li><strong>${amigoSorteado}</strong></li>`;
}

// Adiciona evento para permitir adicionar com Enter
document.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementById("amigo");
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            adicionarAmigo();
        }
    });
});
