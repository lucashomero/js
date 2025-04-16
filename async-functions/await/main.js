// Função que retorna uma Promise 
function asyncFunction() {
    return new Promise((resolve, reject) => {
        // Simula uma operação assíncrona 
        setTimeout(() => {
            const isSucess = true
            if(isSucess){
                resolve("A operação foi concluída com sucesso!")
            } else {
                reject("Algo deu errado!")
            }
        }, 3000) // Simula uma operação que leva 3 segundos
    })
}   

// Em arrow function
/*
const fetch = async () => {
    const response = await asyncFunction()
    console.log(response)
}
*/

// Função, colocar async no início da declaração
async function fetch () {
    try{
        const response = await asyncFunction()
        console.log("Sucesso:", response)
    } catch(error){
        console.log("Erro:", error)
    } finally{
        console.log("Fim da execução!")
    }
}

fetch()