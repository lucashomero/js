// Classe - Nomeclantura convencional -> PascalCase
// Estrutura de uma classe
class Person {
    constructor(name){
        console.log("Olá", name)
    }
}
const person = new Person("Lucas")

class Product {
    constructor(name){
        this.name = name
    }
}
const product1 = new Product("Teclado")
console.log(product1.name)

const product2 = new Product("Mouse")
console.log(product2.name)
