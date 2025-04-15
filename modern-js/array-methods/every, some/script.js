// Método every() 
// testa se todos os elementos do array passam na condição e retorna um valor Boolean

// Exemplo de array de idades
const ages = [18, 30, 39, 28]

// Verifica se todas as idades são maiores ou igual a 18
const result = ages.every((age) => age >= 18)
console.log(result)


// Método some()
// testa se ao menos um dos elementos no array passa na condição e retorna um valor true ou false

const idades = [15,30,39,29]

const result2 = ages.some((age) => age < 18)
console.log(result)