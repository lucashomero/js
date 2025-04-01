// ======================================================
// 1. Introdução ao DOM
// ======================================================
// O DOM é a representação da estrutura da página HTML
// em forma de objeto que pode ser manipulado com JS

console.log(document)             // Documento completo
console.log(document.title)       // Título da página

// ======================================================
// 2. Seletores de Elementos
// ======================================================

// --- getElementById ---
// Seleciona elementos com atributo ID
const guest = document.getElementById("guest-1")
const guest2 = document.getElementById("guest-2")
console.log(guest)

// --- console.dir() ---
// Exibe as propriedades do elemento como objeto JS
console.dir(guest)

// --- getElementsByClassName ---
// Seleciona todos os elementos com a classe especificada
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)

// Acessando o primeiro elemento da coleção
console.log(guestsByClass.item(0))
console.log(guestsByClass[0])

// --- getElementsByTagName ---
// Seleciona todos os elementos com uma determinada tag
const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag)

// --- querySelector ---
// Seleciona o primeiro elemento com o seletor CSS informado
const guestByQuery = document.querySelector("#guest-1")
console.log(guestByQuery)

const guests = document.querySelector(".guest")
console.log(guests)

// --- querySelectorAll ---
// Seleciona todos os elementos que correspondem ao seletor
const allGuests = document.querySelectorAll(".guest")
console.log(allGuests)

// ======================================================
// 3. Comparação: getElementById vs querySelector
// ======================================================
// Ambos podem selecionar por ID, mas querySelector usa sintaxe CSS

// ======================================================
// 4. Conteúdo dos Elementos
// ======================================================

const guestQuery = document.querySelector("#guest-1")

// Retorna o conteúdo como texto (visível + oculto)
console.log(guestQuery.textContent)

// Alterando o conteúdo do elemento <span> dentro do ID guest-1
const edit = document.querySelector("#guest-1 span")
edit.textContent = "Lucas"
console.log(edit.textContent)
console.log(edit)

// Comparando os tipos de retorno
console.log(guest.textContent)  // Visível e oculto
console.log(guest.innerText)    // Somente visível
console.log(guest.innerHTML)    // HTML interno como string
