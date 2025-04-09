// Date Time
console.log(new Date (2024, 0, 3)) // ano, mês (0-11), dia
console.log(new Date (2024, 0, 3, 14, 30, 0)) // ano, mês (0-11), dia, hora, minuto e segundo
console.log(new Date("2024-01-03T14:30:00")) // format: yyyy/mm/dd T hh/mm/ss

let birth = new Date("2003-08-24T02:23:31")
// Dia da semana de 0 à 6 (domingo é 0)
console.log(birth.getDay())
// Dia do mês (0 à 30)
console.log(birth.getDate())
// Mês (0 à 11)
console.log(birth.getMonth() + 1)
// Ano
console.log(birth.getFullYear())
// Horas
console.log(birth.getHours())
// Minutos
console.log(birth.getMinutes())
// Seconds
console.log(birth.getSeconds())
