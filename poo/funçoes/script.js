// Função Construtora
// Função que cria e retorna um objeto, quando instanciada
function createProduct(name){ 
    const product = {}
    product.name = name
    product.details = function(){
        console.log(`Produto: ${this.name}`)
    }
    return product
}

// Função construtora não tem necessidade de usar o new
// New é atribuído a classes
const product1 = createProduct("Teclado")
console.log(product1.name)
product1.details()

// O new cria um novo objeto ultizando a estrutura da função construtora 
const product2 = new createProduct("Mouse")
console.log(product2.name)
console.log(product2)
product2.details()

// Exemplos de funções construtoras disponíveis no próprio JavaScript
let myName = new String("Rodrigo")
console.log(myName)

let price = "40.6".replace(".", "")
console.log(price)

let date = new Date("2024-1-1")
console.log(date)


function Person(name){
    this.name=name
    this.message = function(){
        console.log(`Olá, ${this.name}`)
    }
}

const person1 = new Person("Rodrigo")
console.log(person1.name)
person1.message()
