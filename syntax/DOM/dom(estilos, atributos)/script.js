// // Classes
// const input = document.querySelector("#name")

// // Adiciona a classe
// input.classList.add("input-error")

// // Remove a classe
// input.classList.remove("input-error")

// // Toggle
// // Se não tem classe, adiciona. Se tem, remove
// input.classList.toggle("input-error")

// Elemento, exemplo button
const button = document.querySelector("button")
button.style.backgroundColor = "orange"

// Criando Elementos
const guests = document.querySelector("ul")

const newGuest = document.createElement("li")

const guestName = document.createElement("span") // Criando o elemento
guestName.textContent = "Diego" // Atribuindo valor
console.log(guestName) 
guestName.classList.add("guest")

const guestSurname = document.createElement("span") // Criando o elemento
guestSurname.textContent = "Fernandes" // Atribuindo valor
console.log(guestSurname) 

// Append, adiciona após o ultimo filho
// newGuest.append(guestName, guestSurname)
// Prepend, adiciona antes do primeiro filho
// newGuest.prepend(guestSurname)
// console.log(newGuest)

// Mais simples que o append e aceita apenas um argumento
// newGuest.appendChild(guestName)
// console.log(newGuest)


// Adicionando visualmente no documento web
// const guestName = document.createElement("span") // Criando o elemento
guests.append(guestName)
guestName.textContent = "Diego" // Atribuindo valor
guestName.classList.add("guest")
// guests.prepend(guestName) // Adicionando no topo (prepend, antes do filho)



// Manipulando Atributos

// Atualizar um atributo
// input.setAttribute("disabled", true)
// input.setAttribute("type","file")

// Remover um atributo
// input.removeAttribute("id")

const input = document.querySelector("input")