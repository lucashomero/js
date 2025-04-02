// // 10. Eventos no DOM

// // Evento de carregamento da página
// window.addEventListener("load", () => {
//     console.log("A página foi carregada")
//   })
  
//   // Evento de clique em qualquer lugar da página
//   addEventListener("click", (event) => {
//     // event.preventDefault()
//     console.log(event.target)
//     console.log(event.target.textContent)
//   })
  
//   // Evento de rolagem e retorno ao topo
//   const ul = document.querySelector("ul")
//   ul.addEventListener("scroll", (event) => {
//     console.log(event)
//     console.log(ul.scrollTop)
//   })
//   ul.addEventListener("scroll", () => {
//     if (ul.scrollTop > 300) {
//       console.log("Fim da lista")
//       ul.scrollTo({
//         top: 0,
//         behavior: "smooth"
//       })
//     }
//   })
  
//   // Evento de clique no botão
//   const button = document.querySelector("button")
//   button.addEventListener("click", (event) => {
//     event.preventDefault()
//     console.log("clicou")
//   })
  
//   // Evento de envio de formulário
//   const form = document.querySelector("form")
//   form.onsubmit = (event) => {
//     event.preventDefault()
//     console.log("você fez submit no formulário")
//   }
  
//   // onsubmit vs addEventListener
//   // onsubmit: só permite um manipulador por vez
//   // addEventListener: permite vários manipuladores
  
//   // 11. Eventos de Teclado
  
//   // keydown: captura qualquer tecla pressionada
//   const inputKDown = document.querySelector("input")
//   inputKDown.addEventListener("keydown", (event) => {
//     console.log(event.key)
//   })
  
//   // keypress: captura apenas caracteres imprimíveis
//   const inputKPress = document.querySelector("input")
//   inputKPress.addEventListener("keypress", (event) => {
//     console.log(event.key)
//   })
  
//   // change: quando o valor do input muda e perde o foco
//   const inputChange = document.querySelector("input")
//   inputChange.onchange = () => {
//     console.log("O input mudou")
//   }
  
//   // 12. Expressões Regulares (RegEx)
  
//   // Expressão Regular: valida padrões em strings
//   // Site útil: regexr.com
  
//   // Validação com replace e regex
//   const input = document.querySelector("input")
//   form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     const regex = /\D+/g
//     const value = input.value.replace(regex, "")
//     console.log(value)
//   })
  
  // Verificando se o padrão (letras) foi encontrado
//   const input = document.querySelector("input")
//   const form = document.querySelector("form")
//   form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     const value = input.value
//     const regex = /\D+/g
//     if (regex.test(value)) {
//       alert("Padrão encontrado")
//     } else {
//       alert("Valor inválido. Digite corretamente")
//     }
//   })
  