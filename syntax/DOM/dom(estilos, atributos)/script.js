// ======================================================
// 5. Manipulação de Classes no DOM
// ======================================================

const input = document.querySelector("#name")

// Adiciona a classe CSS ao elemento
input.classList.add("input-error")

// Remove a classe do elemento
input.classList.remove("input-error")

// Alterna a classe: adiciona se não tiver, remove se já tiver
input.classList.toggle("input-error")

// ======================================================
// 6. Manipulação de Estilos Inline
// ======================================================

const button = document.querySelector("button")
button.style.backgroundColor = "orange" // Define a cor de fundo

// ======================================================
// 7. Criação de Elementos no DOM
// ======================================================

const guests = document.querySelector("ul") // Seleciona a <ul> da lista

// Criando um novo <li>
const newGuest = document.createElement("li")

// Criando e configurando <span> com o nome
const guestName = document.createElement("span")
guestName.textContent = "Diego"
guestName.classList.add("guest")
console.log(guestName)

// Criando e configurando <span> com o sobrenome
const guestSurname = document.createElement("span")
guestSurname.textContent = "Fernandes"
console.log(guestSurname)

// ======================================================
// 8. Inserção de Elementos no DOM
// ======================================================

// Formas de inserir filhos em um elemento:

// newGuest.append(guestName, guestSurname)   // Adiciona no final (aceita vários elementos)
// newGuest.prepend(guestSurname)             // Adiciona no início
// newGuest.appendChild(guestName)            // Adiciona um único filho

// Exemplo: adicionando direto na lista
guests.append(guestName)

// ======================================================
// 9. Manipulação de Atributos
// ======================================================

const inputField = document.querySelector("input")

// Define ou atualiza atributos
// inputField.setAttribute("disabled", true)
// inputField.setAttribute("type", "file")

// Remove atributos
// inputField.removeAttribute("id")
