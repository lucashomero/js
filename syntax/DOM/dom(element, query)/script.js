// Document Object Modal (DOM)
// representação de dados dos objetos que compõe a estrutura e o conteúdo de um documento web (página html)

// console.log(document)
// Retornando titulo da pagina
console.log(document.title)

// getElementById
// Acessando elemento pelo ID (seletor id)
const guest = document.getElementById("guest-1")
const guest2 = document.getElementById("guest-2")
console.log(guest)

// console.dir()
// Retornando as propriedades do objeto
console.dir(guest)

// getElementsByClassName
// Acessar elemento com class (seletor class)
const guestsByClass = document.getElementsByClassName("guest")
console.log(guestsByClass)

// console.log(x.item(0))
// console.log(x[0]) 
// Exibir o primeiro elemento da lista
console.log(guestsByClass.item(0))
console.log(guestsByClass[0])

// getElementsByTagName
// Selecionar lista de elementos pela tag
const guestsTag = document.getElementsByTagName("li")
console.log(guestsTag)

//querySelector
// Acessa o elemento pelo seletor ID
const guestByQuery= document.querySelector("#guest-1")
console.log(guestByQuery)

// querySelector
// Acessa o elemento pelo selector class
const guests= document.querySelector(".guest")
console.log(guests)

// querySelectorAll
const allGuests = document.querySelectorAll(".guest")
console.log(allGuests)

// getElementByID x querySelector

// Retornando o conteúdo como texto do elemento
const guestQuery= document.querySelector("#guest-1")
console.log(guestQuery.textContent)

// Alterando o conteúdo texto do elemento
const edit= document.querySelector("#guest-1 span")
edit.textContent = "Lucas"
console.log(edit.textContent)
console.log(edit)


console.log(guest)
console.log(guest2)

// Retorna o conteúdo visível e oculto
console.log(guest.textContent) 

// Retorna somente o conteúdo visível.
console.log(guest.innerText) 

// Retorna o HTML como texto.
console.log(guest.innerHTML) 