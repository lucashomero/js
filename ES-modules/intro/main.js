// Acessando modulos
// Importanndo somente função sum e mult
import {sum, mult} from "./calc.js"
console.log("4 + 6 =", sum(4,6))

// Importando todas as funções do modulo calc
import * as calc from "./calc.js"
console.log("4 + 6 =", calc.sum(10,5))

// Importando um método renomeado
import { divTwoNumbers } from "./calc.js"
console.log("8 / 2 =", divTwoNumbers(8,2))

// Renomeando importações
// Util quando voce ja esta usando um método com o mesmo nome
import { sum as s } from "./calc.js"
console.log("5 + 15", s(5, 15))

// Importando classes 
import { Calc } from "./calc.js"

// Necessário instaciar
const classCalc = new Calc()

console.log("10 % 2 =", classCalc.rest(10,2))
console.log("10 - 2 =", classCalc.sub(10,2))
console.log(classCalc.name)
