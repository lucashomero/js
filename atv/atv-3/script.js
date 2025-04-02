const btnIncrementar = document.getElementById("Incrementar")
const btnDecrementar = document.getElementById("Decrementar")
const contadorSpan = document.getElementById("contador")
const input = document.getElementById("message")
const messagesDiv = document.getElementById("messages")
const charCount = document.createElement("p")

let contador = 0

btnIncrementar.addEventListener("click", (event) => {
    // event.preventDefault()
    contador++
    contadorSpan.textContent = contador
})

btnDecrementar.addEventListener("click", (event) => {
    // event.preventDefault()
    if(contador > 0){
        contador--
        contadorSpan.textContent = contador
    } else{ 
        alert("O contador ja esta em zero")
    }
})

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && input.value.trim() !== "") {
        const novoParagrafo = document.createElement("p")
        novoParagrafo.textContent = input.value
        messagesDiv.appendChild(novoParagrafo)
        
        input.addEventListener("keypress", (event) => {
        console.log(event.key) // Somente caracteres imprimíveis
        })
        
    }
    
})

// input.addEventListener("keydown", function(event){
//     const text = input.value.replace(/\s/g, "")
//     const novoParagrafo = document.createElement("p")
//     novoParagrafo.textContent = text.length
//     messagesDiv.appendChild(novoParagrafo)
// })


input.addEventListener("input", function () {
    const text = input.value.replace(/\s/g, "")
    charCount.textContent = `Caracteres (sem espaços): ${text.length}`
    messagesDiv.appendChild(charCount)
})