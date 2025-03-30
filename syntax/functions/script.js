// Functions

function ola(){
  console.log("olá")
}
ola()

// parâmetro e argumento

function message(username){
  console.log(`olá ${username}`)
}
message("Lucas")

// basic function
console.log("basic function")
function soma(c, d){
   let x = c + d
  console.log(x)
}
soma(2, 3)


// utilizando return
console.log("utilizando return")
function sum(a, b){
  let result = a + b
  return result
}
let response = sum(7, 3)
console.log(response)


// função também possui comportamento de hoisting
sayHello()
function sayHello() {
  console.log("Olá!")
}

// função dentro de função
function externa() {
  function interna() {
    console.log("Sou interna")
  }

  interna()
}
externa()


// comentário de documentação
/**
 * Soma dois números
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function testando(a, b) {
  return a + b
}

// função anônima 
const saudacao = function() {
  console.log("Olá, mundo!")
}
saudacao()

// arrow function
const somar = (a, b) => a + b
console.log(somar(5, 4)) // 9

// callback function, função passada para outra função como argumento
function execute (taskName, callback){
  console.log("Executando a tarefa: ", taskName)

  callback()
}
function callback(){
  console.log("Tarefa finalizada")
}
execute("Donwload do arquivo...", callback)

// callback function, criando a função no próprio parâmetro (função anônima)
execute ("Upload do arquivo...", function(){
  console.log("Função de callback com uma função anônima")
})

// callback function, utilizando arrow function 
execute("Excluindo arquivo...", () => {
  console.log("Arquivo excluído")
})

// callback function, encurtando a função com arrow function
execute("salvando arquivo...", () => console.log("arquivo salvo!"))