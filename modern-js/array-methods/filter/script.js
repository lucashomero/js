// método filter()
// Cria um novo array com todos os elementos que passaram na condição

const words = ["JavaScript", "C#", "NodeJs"]
const result = words.filter((word)=>word.length > 3)
console.log(result)