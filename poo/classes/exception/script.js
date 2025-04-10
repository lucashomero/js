// Lidando com exceções utilizando classes

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