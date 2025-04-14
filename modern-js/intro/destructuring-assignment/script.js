// destructuring assignment (desestruturação)
// permite extrair dados de arrays ou objetos em variáveis distintas


// Desestruturando array
const data = ["Lucas Homero", "lucas@email.com"]
const [username, email] = data
console.log("name: ", username)
console.log("email: ", email)

// Desestruturar somente o primeiro
const nomes = ["Lucas", "Allan", "Salomao"]
const[lucas] = nomes
console.log(lucas)

// Ignorando elemento na desestruturação
// Ignorando somente o primeiro
const [_, allano] = nomes
console.log(allano)
// Ignorando o primeiro e o segundo elemento
const [,, salomas] = nomes
console.log(salomas)


// Desestruturando objeto
const product = {
    description: "Teclado",
    price: 150
}

const { description, price } = product
console.log("Descrição: ", description)
console.log("Preço: ", price)

function newProduct({description, price}){
    console.log("## NOVO PRODUTO ###")
    console.log("Descrição: ", description)
    console.log("Preço: ", price)
}
newProduct({description: "Mouse",price: 70})

