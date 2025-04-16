const book = {
    title: "Objetos Imutaveis",
    category: "JavaScript",
    author: {
        name: "lucas",
        email: "lucas@email.com"
    },
}

const updatedBook = {
    ...book,
    title: "Criando uma API",
    category: "Java"
}

// Original intacto
console.log(book)

// Modificado
console.log(updatedBook)

// Utilizando operador de desestruturacao (rest operator) para remover propriedades
const { category, ...newBook} = book
console.log(newBook)
