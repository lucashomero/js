// Criando Array com construtor
const newArray = new Array()
console.log(newArray)
console.log("Rodrigo".length)

// [] - Array
// {} - Object

const available = new Array(10)
console.log(available) // vazio com 10 posições
console.log(available.length) 

let fruits = ["Apple", "Banana", "Orange"]
console.log(fruits)
console.log(fruits.length)

// Acessando último elemento no Array

console.log(fruits[fruits.length-1])

// Convertendo uma String para Array

let fullname = "Lucas Homero Vieira dos Santos"
console.log(fullname)
console.log(fullname.split(" ")) // Aplica o método split e separa por espaços

let espaçado = fullname.split(" ") // Cria um Array com os nomes separados pelo espaço
console.log(espaçado)
console.log(espaçado[1])

console.log(Array.from(fullname)) // Cria um Array com as letras


// Adicionando e Removendo um Item
// Push - Adiciona um item no final do Array
// Unshift - Adiciona um item no início do Array
// Pop - Remove um item do final do Array
// Shift - Remove um item do início do Array

let users =  []
users.push("Rodrigo")
users.push("João")
users.push("Marcos")
users.unshift("Ana")
console.log(users)

users.pop()
users.shift()
console.log(users)

// Procurando e retornando o index do elemento no Array
let frutas = ["Limão", "Goiaba", "Acerola", "Maracujá", "Melancia"]
let position = frutas.indexOf("Maracujá") 
console.log(position)

// Remove um item pela posição do índice (1 é o número de intes para remover)
frutas.splice(position, 1)
console.log(frutas)


// Elementos que o Array aceita
let myArray = [ 
 "Um texto",
 10,
 true,
 function(){
    console.log("Função dentro do Array")
 }, 
 {
    name: "Rodrigo",
    email: "rodrigo@email.com",
 },
]
// Texto
console.log(myArray[0])
// Número
console.log(myArray[1])
// Boolean
console.log(myArray[2])
// Função
myArray[3]()
// Objeto
console.log(myArray[4].name, myArray[4].email)


// Verificar se existe um item no Array
console.log(frutas.includes("Goiaba"))