// 10. Eventos no DOM

// Evento de carregamento da página
window.addEventListener("load", () => {
    console.log("A página foi carregada")
  })
  
  // Evento de clique em qualquer lugar da página
  addEventListener("click", (event) => {
    // event.preventDefault() // Impede o comportamento padrão
    console.log(event.target)              // Elemento clicado
    console.log(event.target.textContent)  // Texto do elemento clicado
  })
  
  // Evento de rolagem na lista
  const ul = document.querySelector("ul")
  ul.addEventListener("scroll", (event) => {
    console.log(event)            // Detalhes do evento
    console.log(ul.scrollTop)     // Distância rolada
  })
  
  // Voltar ao topo ao chegar no fim da lista
  ul.addEventListener("scroll", () => {
    if (ul.scrollTop > 300) {
      console.log("Fim da lista")
      ul.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  })
  
  // Evento de clique no botão
  const button = document.querySelector("button")
  button.addEventListener("click", (event) => {
    event.preventDefault()
    console.log("clicou")
  })
  
  // Evento de envio de formulário
  const form = document.querySelector("form")
  form.onsubmit = (event) => {
    event.preventDefault()
    console.log("você fez submit no formulário")
  }
  