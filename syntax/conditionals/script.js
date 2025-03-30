// operador condicional 

// ternário
let age = 21
console.log (age >= 18 ? "Pode dirigir" : "N pode dirigir")

// falsy e truthy (boolean)
// falsy
console.log(false ? "verdadeiro" : "falso")
console.log(0 ? "verdadeiro" : "falso")
console.log(null ? "verdadeiro" : "falso")
console.log(undefined ? "verdadeiro" : "falso")
console.log("" ? "verdadeiro" : "falso") // string = false
// truthy
console.log(true ? "verdadeiro" : "falso")
console.log(1 ? "verdadeiro" : "falso")
console.log({} ? "verdadeiro" : "falso")
console.log({} ? "verdadeiro" : "falso")
console.log([] ? "verdadeiro" : "falso")
console.log(2 ? "verdadeiro" : "falso")
console.log(3.5 ? "verdadeiro" : "falso")
console.log(" " ? "verdadeiro" : "falso") // string com caracter espaço = true


// if
let hour = 13
if (hour >= 12) {
  console.log("bom dia")
}

// if else
age = 17
if (age >= 18) {
  console.log("maior de idade")
} else {
  console.log("menor de idade")
}

// else if encadeado
let day = 14
if (day <= 8){
  console.log("começo do mes")
} else if (day > 12 && day <= 21){
  console.log("meio do mes")
} else{
  console.log("final do mes")
}


// switch
let option = 11

switch(option){
  case 1: 
  console.log("Consultar pedido")
  break
  case 2: 
  console.log("Falar com atendente")
  break
  case 3: 
  console.log("Cancelar pedido")
  break
  default: 
  console.log("Operação inválida")
  break
}


// try catch 
console.log(" ")
console.log("try")
try {
  console.log(result)
} catch (e){
  console.log(e)
}

// finaly, executado independente da operação
console.log(" ")
console.log("finally")
try {
  let resultado = 10 / 0
  console.log("Resultado:", resultado)
} catch (erro) {
  console.log("Erro:", erro.message)
} finally {
  console.log("Fim da operação")
}

// lançando exceções 
console.log(" ")
console.log("throwing exception")
let teste = 0
try {
  if(result === 0){
    throw new Error("o valor é igual a zero")
  }
} catch (e) {
  console.log(e)
} finally {
  console.log("Fim")
}