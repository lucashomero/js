// UTC, coordinated universal time
// Intl é a API de Internacionalização do ECMAScript.

// Obtem informações da localidade
const currentLocale = Intl.DateTimeFormat().resolvedOptions()
console.log(currentLocale)

// Exibe no formato de acordo com a localidade.
console.log(new  Intl.DateTimeFormat("pt-br").format(new Date()))
console.log(new  Intl.DateTimeFormat("en-us").format(new Date()))

const date = new Date()

// Obtem a diferença em minutos do timezone
console.log(date.getTimezoneOffset())
// Obtem a diferença em horas do timezone
console.log(date.getTimezoneOffset()/60)


// Criando uma data e hora com fuso horário

// Retorna a hora com fuso horário UTC aplicado
// console.log(dateWithTimeZone.toISOString())

// Aplica data e hora com fuso horário diretamente no new Date()
const dateWithTimeZone2 = new Date("2025-04-09T19:09:09.195+03:00")
console.log(dateWithTimeZone2.toLocaleString())

const dateWithTimeZone = new Date()
console.log(dateWithTimeZone.toLocaleString())



