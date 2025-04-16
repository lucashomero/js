// Shallow Freezing
// Congela objeto e impede modificacoes, porem nao inclui objetos aninhados

// JavaSript nao impoe restricoes a modificacoes do objeto
const book = {
    title: "Objetos Imutaveis",
    category: "JavaScript",
    author: {
        name: "Rodrigo",
        email: "rodrigo@email.com"
    },
}
book.category = "HTML"
console.log(book)

// Congela o objeto e impede a modificacao
Object.freeze(book)
book.category = "CSS"
console.log(book)

// Porem nao impede modificacoes em objetos aninhados
book.author.name = "Joao"
console.log(book)


// Deep Freezing
// Congela objeto e impede modificacoes em objetos aninhados

const course = {
    title: "NodeJS", 
    category: "javascript",
    author: {
        name: "Lucas",
        email: "lucas@email.com"
    },
}

function deepFreeze(object){
    // Pega todas as propriedades do objeto e devolve como array
    const props = Reflect.ownKeys(object)

    // Itera sobre todas as propriedades do objeto
    for (const prop of props) {
        // Obtem o valor associoado a propriedade atual
        const value = object[prop]

        // Verifica se o valor e um objeto ou funcao para continuar aplicando o deepFreeze em objetos aninhados.
        if(value && typeof value === "object" || typeof value === "function"){
            deepFreeze(value)
        }
    }

    // Retorna o objeto congelado
    return Object.freeze(object)
}

deepFreeze(course)
course.author.name = "Jp"
console.log(course)