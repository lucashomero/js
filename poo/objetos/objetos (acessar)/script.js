//Criando um método e acessando uma propriedade dentro de um objeto
const user = {
    name: "Lucas",
    message: function(){
    console.log(`Olá ${this.name}`)
    }
}
user.message()

const product = {
    name: "Teclado",
    quantity: 100,
}

// Atualizar o valor de uma propriedade
console.log(product.name, product.quantity)
product.quantity = 90
product.name = "Mouse"
console.log(product.name, product.quantity)

/*
 Optional Chaining
 -encadeamento opcional, qnd a propriedade ou função chamada é nullish (null or undefined), a expressão retorna undefined em vez de gerar erro

-útil ao explorar o conteudo de um objeto quando não existe garantia da existência de determinadas propriedades obrigatórias
*/

const usuario = {
    id: 1, 
    name: "Lucas",
    address: {
        street: "Guará",
        city: "Brasília",
        geo: {
            latitude:  47.809,
            longitude: 17.5674
        },
    },
    message: function(){
        console.log(`$Olá, ${this.name}`)
    }
}

// Optional Chaining
console.log(usuario?.address?.street)