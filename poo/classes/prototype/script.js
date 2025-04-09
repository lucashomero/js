// Prototype Chain

const address = {
    city: "São Paulo",
    country: "Brazil",
}
console.log(address) // Prototype: Object

const users = ["Rodrigo", "João", "Maria"]
console.log(users) // Prototype: Array

const username = "Lucas Homero"
console.log(username.__proto__) // Prototype: Object. String herda prototype de objeto