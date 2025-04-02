const btnIncrementar = document.getElementById("Incrementar")
const btnDecrementar = document.getElementById("Decrementar")
const contadorSpan = document.getElementById("contador")
const input = document.getElementById("message")
const messagesDiv = document.getElementById("messages")


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

// let nome = ""
// const text = document.querySelector(".interect")
// const newName = document.createElement("span")
// text.addEventListener("submit", (event) => {
// })

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && input.value.trim() !== "") {
        const novoParagrafo = document.createElement("p")
        novoParagrafo.textContent = input.value
        messagesDiv.appendChild(novoParagrafo)
        input.value = ""
    }
})