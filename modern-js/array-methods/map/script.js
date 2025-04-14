// método map() 
// chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada. E no final, devolve o novo array.

const products = ["Teclado", "Mouse", "Monitor"]

products.map((product)=>{
    console.log(product)
})

// Utilizando o novo objeto retornado
const formatted = products.map((product)=>{
    // return product.toUpperCase()
    return{
        id: Math.random(),
        description: product,
        price: 150,
    }
})
console.log(formatted)