const btnIncrementar = document.getElementById("Incrementar");
const btnDecrementar = document.getElementById("Decrementar");
const contadorSpan = document.getElementById("contador");
const input = document.getElementById("message");
const messagesDiv = document.getElementById("messages");
const container = document.getElementById("container");
const btnReset = document.getElementById("reset");

let contador = 0;

// Contador de cliques
btnIncrementar.addEventListener("click", () => {
    contador++;
    contadorSpan.textContent = contador;
});

btnDecrementar.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        contadorSpan.textContent = contador;
    } else {
        alert("O contador já está em zero");
    }
});

// Contador de caracteres (sem espaço)
const charCount = document.createElement("p");
charCount.textContent = "Caracteres (sem espaços): 0";
messagesDiv.appendChild(charCount);

input.addEventListener("input", () => {
    const textoSemEspacos = input.value.replace(/\s/g, "");
    charCount.textContent = `Caracteres (sem espaços): ${textoSemEspacos.length}`;
});

// Adicionar texto ao pressionar Enter
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && input.value.trim() !== "") {
        const novoParagrafo = document.createElement("p");
        novoParagrafo.textContent = input.value;
        messagesDiv.appendChild(novoParagrafo);
        charCount.textContent = "Caracteres (sem espaços): 0";
    }
});

// Adicionar lista
function adicionarLista() {
    const tipo = document.getElementById("tipoLista").value; // "ol" ou "ul"
    const novaLista = document.createElement(tipo);

    for (let i = 1; i <= 3; i++) {
        const item = document.createElement("li");
        item.textContent = `Item ${i}`;
        novaLista.appendChild(item);
    }

    container.appendChild(novaLista);
}

// Botão de Reset
btnReset.addEventListener("click", () => {
    // Zerar contador de cliques
    contador = 0;
    contadorSpan.textContent = "0";

    // Limpar listas
    container.innerHTML = "";

    // Limpar mensagens (manter contador de caracteres)
    messagesDiv.innerHTML = "";
    messagesDiv.appendChild(charCount);

    // Limpar input e contador de caracteres
    input.value = "";
    charCount.textContent = "Caracteres (sem espaços): 0";
});
