// WHILE: Executa até que a condição seja verdadeira
// let execute = true
// while (execute) {
//     let response = window.prompt("Deseja continuar: 1 (SIM) ou 2 (NÃO)")
//     if(response === "2") {
//         execute = false
//     }
// }
// console.log("Segue o fluxo")
    
// Loop infinito 
// let value = true
// while(value) {
//     console.log("Executando while")
// }

    //////////////

// Do While
// let value = 0 
// do {
//     value++
//     console.log(value)
// } while (value < 10)
// console.log("Segue o fluxo")

    //////////////

// For
// Repete ate que a condição seja falsa
// for(step = 0; step <= 10; step++) {
//     console.log(step)
// }

// Exemplo tabuada
// for(let i = 0; i <= 10; i++){
//     let number = 7
//     let tabuada = 7 * i
//     console.log(`tabuada do sete ${number} x ${i} = ${tabuada}`)
// }

    //////////////

// For in (percorre a propriedade)
// Executa iterações a partir de um objeto e percorre as propriedades

let person = {
    name: "Rodrigo",
    surname: "Gonçalves",
    email: "rodrigo@email.com",
}

for (let property in person){
    // Exibe o nome da propriedade
    console.log(property)
    // Exibe o conteúdo da propriedade
    console.log(person[property])    
}

let students = ["Rodrigo", "João", "Amanda"]

for (let index in students) {
    console.log(students[index])
}

    //////////////

// For of (percorre o valor)
// Itera sobre valores de um objeto iterável

let estudantes = ["Rodrigo", "Amanda", "John"]

for (let estudante of estudantes) {
    console.log(estudante)
}

let user = [{
    name: "lucas",
    email: "lucas@email.com"
}]

for(let value of user) {
    console.log(value.email)
}