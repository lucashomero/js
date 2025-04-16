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

// Visualizando que o retorno é uma promise
const response = asyncFunction() 
console.log(response)

console.log("Executando função assíncrona...")
asyncFunction()
.then((response) => {console.log("Sucesso: ", response)})
.catch((error)=>{console.log("Error:", error)})
.finally(() => {console.log("Fim da execução")})