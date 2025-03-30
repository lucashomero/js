//  JavaScript - Syntax
console.log("Hello World") 
console.log("Js conectado com Html")

// Var
// variavel sem valor
var user
// atribuindo valor a variavel
var user = "lucashomero@gmail.com"
console.log(email)
// substituindo o valor de uma variavel
var email
email = "kirlianshores@gmail.com"
console.log(email)

//Let

// joao
// let joao
// let joao = "Lucas"
// Let nao permite redlecarar variavel no mesmo escop
// Let icada (hoisting) porem n pode ser usada antes da declaracao

// Const
// N permite reatribuicao
// const num = 3
// const num = 2

// Escopo global
// var email = "joao62@gmail.com"

// Escopo local
// {
//     console.log (email)
// }


// Typeof
let username = "Lucas"
console.log(username)
console.log(typeof username)


// "asplas duplas x aspas simples"
console.log('uma string com "aspas duplas" dentro de simples')
console.log("uma string com 'aspas duplas' dentro de simples")

// string com acento grave ` `
console.log (`
string com acento grave 
permite a formatacao com
quebra de linha
`)

// Concatenar 
let x = username + ' ' + email
console.log(x)

// Template Literals
console.log(username, email)

// Template Literals
console.log(`ola, ${username}. Email ${email}`)

let z = -5
console.log(typeof z,`: ${z}`)

// Conversão
// console.log(typeof "9") -> string
// console.log(typeof Number "9") -> number
// let age = 18
// console.log(typeof age) -> number
// console.log(typeof toString(age)) -> text
// console.log(typeof age.toString()) -> text

// Coerção 
// o javascript tenta de forma implicita/automatica converter um dos valores p um tipo compativel
console.log(10 + "5") 

// Incrementar
let number = 10
number++
console.log(number)

// Incrementa após
console.log("incremento depois", number++)
console.log(number)

// Incrementa antes
console.log("incremento antes", ++number)


// Conteudo (== " ") x Tipo (== )
let one = 1
let two = 2
console.log(one == two)
console.log(one == 1)
console.log(one == "1")
console.log(one != two)
console.log(two != two)
console.log(two != "2")


// === Estritamente igual (conteudo e tipo)
console.log(one === 1) // true
console.log(one === "1") // false

// !== Estritamente diferente de
console.log(one !== two) // true
console.log(one !== 1) // false


// Divisao, resto e potenciação
let value = 10  
console.log(value)
console.log(value **= 2)
console.log(value %= 2)
console.log(value /= 2)
console.log(`final value ${value}`)

// Operadores Lógicos
let k = true
let s = false
console.log(k && s)
console.log(k || s)
console.log(!s)




