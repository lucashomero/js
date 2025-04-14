// Strict mode: ativando esse modo, os erros que eram silenciosos passa a gerar exceções no JavaScript
"use strict"

function showMessage(){
    let personName = "Lucas"
    console.log("Olá", personName)
}
showMessage()

class Student{
    get point(){
        return 7
    }
}

let student = new Student()
// Tenta mudar uma propriedade somente leitura
// student.point = 10
console.log(student.point)

// Tentando deletar uma propriedade de um objeto que não pode ser deletado
// delete window.document

// Quando passamos aparâmetros duplicados
/*
function sum (a, a, c){
   return a + a + c 
}

const result = sum(1,3,2) // 3 + 3 + 2 = 8
console.log(result)
*/
