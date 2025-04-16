// Criando e habilitando modulos a serem acessados com export
function sum(a,b) {
    return a + b
}

function mult(a,b) {
    return a * b
}

function div(a,b) {
    return a / b
}

// Exportando sum e mult
export { sum, mult } 


// Exportação default
// Função padrão fornecida pelo módulo
// export default function sum(a,b) {
//     return a + b
// }
// import x from "./calc.js"
// console.log("4+6=", x(4,6))


// Exportação nomeada
// Método é importado pelo próprio nome de exportação
// function mult(a,b) {
//     return a * b
// }
// import { mult } from "./calc.js"


// Renomeando as exportações
// Para importar, devo usar o nome que foi atribuido a exportação renomeada
// Ex: import { divTwoNumbers } from "./calc.js"
export { div as divTwoNumbers }

// Usando classes nos módulos
export class Calc {
    name = "Lucas"
    rest(a,b) {
        return a % b
    }
    
    sub(a,b) {
        return a - b
    }
}