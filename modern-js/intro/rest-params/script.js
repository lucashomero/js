// Rest params (...)
// permite representar um número indefinido de argumentos como um array
// (...rest) or (...args)

// ...rest
function values (...rest){
    // Mostra a quantidade de argumentos
    console.log(rest.length)
    // Exibe o conteúdo do rest, que é um array
    console.log(rest)
    // Exibindo o conteúdo do array
    console.log(...rest)
}
values(2, 1, 3, 4)

// spread (espalhar)
//  permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos 

const numbers = [1, 2, 3]
console.log(numbers)

// Spread
console.log(...numbers)

const data = [
    {
        name: "Lucas",
        email: "rodrigo@email.com",
        avatar: "r.png",
    },
    {
        name:"João",
        email: "joão@email.com",
        avatar: "j.png",
    }
]

console.log(data)

// Utilizando o spread no array com objetos
console.log(...data)