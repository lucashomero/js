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