// Lidando com exceções utilizando classesgit a
let index = 300
try {
    if (!Object.includes(17)){
        throw new Error ("O nuúmero 17 não está disponível")
    }
    if(index > 99) {
        throw new RangeError("Número esta fora do intervalo. Escolha um numero de 0 à 99")
    }
} catch(error){
 if (error instanceof TypeError){
    console.log("Método indisponivel")
 } else if (error instanceof RangeError) {
    console.log(error.message)
 }
}

// Utilizando classes para criar errors customizados
class MyCustomError {
    constructor(message){
        this.message = "Classe de Erro Customizada" + message
    }
}

try{
    throw new MyCustomError("Erro personalizado lançado!")
} catch (error){
    if(error instanceof MyCustomError){
        console.log(error.message)
    }else{
        console.log("Não foi possivel executar")
    }
}