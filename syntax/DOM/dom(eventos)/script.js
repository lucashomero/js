// // eventos
// // addEventListener (evento, funcao)

// window.addEventListener("load", () => {
//     console.log("a pagina foi carregada")
// })

// addEventListener("click", (event) => {
//     // Impede a pagina de recarregar com o evento click
//     // event.preventDefault()

//     // Retorna todas as inf do evento
//     // console.log(event)
    
//     // Retorna o elemento clicado
//     console.log(event.target)
    
//     // Retorna o textContent (conteudo) clicado
//     console.log(event.target.textContent)


// })


// const ul = document.querySelector("ul")

// ul.addEventListener("scroll", (event) => {
//     // retorna o elemento que esta acionando o evento
//     console.log(event)
//     // distancia da lista
//     console.log(ul.scrollTop)
// })

// ul.addEventListener("scroll", (event) => {

//     // indica o fim da lista e retorna ao inicio

//     if(ul.scrollTop > 300){
//         console.log("Fim da lista")
//         ul.scrollTo({
//             top:0,
//             behavior: "smooth",
//         })
    
//     }
// })

// // Indica a quantidade de vezes que disparou o evento
// const button = document.querySelector("button")
// button.addEventListener("click", (event) => {
//     event.preventDefault()
//     console.log("clicou")
// })

// Eventos de formulario
// 

const form = document.querySelector("form")

form.onsubmit = (event) => {
    event.preventDefault()
    console.log("voce fez submit no formulario")
}