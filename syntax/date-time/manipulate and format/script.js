let date = new Date("July 3, 2024 14:30:00")

// Manipular

// Modificar o ano
date.setFullYear(2026)
// Modificar o mês (começa com zero)
date.setMonth(1)
// Modificar o dia
date.setDate(5)
// Modificar a hora
date.setHours(18)
// Modificar o minuto
date.setMinutes(15)
// Modificar o segundo
date.setSeconds(30)
console.log(date)

// Formatar
// padStart metodo p manipular texto. Indica a qtd de caracter que o texto deve ter e se não tiver completa com o 0.
console.log(date.getDate().toString().padStart(2, "0")) 
console.log(date.getMonth().toString().padStart(2, "0"))

// Formatando para o dia sempre ter 2 digítos
let day = date.getDate().toString().padStart(2, "0")
console.log(day)
let month = date.getMonth().toString().padStart(2, "0")

let year = date.getFullYear()
let hour = date.getHours()
let minute = date.getMinutes()

console.log(`${day}/${month}/${year} às ${hour}:${minute}`)


// Métodos que convertem data e hora para métodos de Strings, específicos de data e hora
let date2 = new Date("2024-07-02T14:30:00")
// Retorna somente a data
console.log(date2.toDateString())
// Retorna somente a hora
console.log(date2.toTimeString())



// Exibindo data e hora formatada de acordo com a localidade
let date3 = new Date("2003-08-24T20:30:15")

// Exibe data e hora no formato local.
console.log(date3.toLocaleDateString())
console.log(date3.toLocaleTimeString())

// Exibe a data e hora no formato escolhido
console.log(date3.toLocaleDateString("pt-br"))
console.log(date3.toLocaleTimeString("en"))


// toLocaleString
console.log(date3.toLocaleString())

console.log(date3.toLocaleString("pt-br", {
    dateStyle: "long",
}))

console.log(date3.toLocaleString("pt-br", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
}))

// toLocaleString p formatar valores
let amount = 12.5
console.log(amount.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
}))
