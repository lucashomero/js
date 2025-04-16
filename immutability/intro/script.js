// Imutabilidade
// Referência - altera ambos (objeto original e o novo apontam para o mesmo local na memória
// Cópia - cria um novo objeto (mantém o original intacto)


// Referencia
const address1 = {
    street: "Av. Brasil",
    number: 20
}
// Referencia, nao e uma copia
const address2 = address1
address2.number = 30
// Alterou em ambos, nao somente em address2
console.log(address1,address2)

// Copia
const address3 = {...address1}
address3.number = 50
// Alterou somente em address3
console.log(address1,address3)

// Outra maneira de realizar copia, alterando o atributo diretamente
const address4 = {...address1, number: 60}
console.log(address4)

// Exemplo c/ Array
const list1 = ["Lucas", "Joao"]
const list2 = [...list1]
list2.push("Marcus")
console.log(list2)