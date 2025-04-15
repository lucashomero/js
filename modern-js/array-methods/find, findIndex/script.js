// Método findIndex()
// retorna o índice no array do primeiro elemnto que satisfazer a condição. Caso contrário, retorna -1. Indicando que nenhum elemento passou no teste

const values = [3,4,6,8,12]

// Obtendo o primeiro índice do elemento que o valor é maior do que 4
const index = values.findIndex((value) => value > 4)
console.log(index);         // 2 → posição do 5
console.log(values[index]); // 5 → valor na posição 2

// Método find()
// retorna o valor do primeiro elemento do array que satisfazer a condição. Caso contrário, undefined é retornado

const values2 = [5,12,8,130,44]

// Retorna o primeiro elemento que valor é maior que 10
const found = values2.find((value) => value > 10)
console.log(found)

// Exemplo com objetos
const fruits = [
    {name: "apples", quantity: 23},
    {name: "bananas", quantity: 25},
    {name: "oranges", quantity: 52},
]

const result = fruits.find((fruit) => fruit.name === "bananas")
console.log(result)