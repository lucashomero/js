const input = document.getElementById("inputItem");
const lista = document.getElementById("listaCompras");
const select = document.getElementById("menuItens")
const btnMarcar = document.getElementById("btnMarcar")
const btnDesmarcar = document.getElementById("btnDesmarcar")
const btnRemover = document.getElementById("btnRemover")

// Adiciona valor a var Item, ao pressionar enter 
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    const item = input.value.trim();
    if (item !== "") {

    // Criando os elementos
      const li = document.createElement("li");
      const span = document.createElement("span");
      const option = document.createElement("option")

    // Atribuindo valor aos elementos
      span.textContent = item;
      option.textContent = item;
      option.value = item;

    // Adicionando os elementos 
      li.appendChild(span)
      lista.appendChild(li)
      select.appendChild(option)
      input.value = ""
      
    // Remover elemento com dois cliques
      li.addEventListener("dblclick", function () {
      lista.removeChild(li);

      });

    } else {
      alert("Digite um campo válido");
    }
}

});
    // Botão Marcar
    // Verifica se o select.value seleciou algum item
    btnMarcar.addEventListener("click", function () {
    const valorSelecionado = select.value;
    if (valorSelecionado === "") {
      alert("Selecione um item primeiro.");
      return;
    }
    // Procura o <span> correspondente
    const spans = lista.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
      if (spans[i].textContent === valorSelecionado) {
        spans[i].style.backgroundColor = "yellow";
      }
    }

  });

    // Botão Desmarcar
    // Verifica se o select.value seleciou algum item
    btnDesmarcar.addEventListener("click", function () {
    const valorSelecionado = select.value;
    if (valorSelecionado === "") {
      alert("Selecione um item primeiro.");
      return;
    }
    // Procura o <span> marcado
    const spans = lista.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
      if (spans[i].textContent === valorSelecionado) {
        if (spans[i].style.backgroundColor === "yellow") {
          spans[i].style.backgroundColor = "";
        } else {
          alert("Esse item já está desmarcado.");
        }
      }
    }
  });
  
    // Botão Remover
    // Verifica se o select.value seleciou algum item
    btnRemover.addEventListener("click", function () {
    const valorSelecionado = select.value;
    if (valorSelecionado === "") {
      alert("Selecione um item primeiro.");
      return;
    }
    //  Remove li de uma lista, com base no valor textContent de um span dentro de um li
    const spans = lista.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
      // Acessa o <li> pai do <span>
      if (spans[i].textContent === valorSelecionado) {
        const li = spans[i].parentElement;
        lista.removeChild(li);
        break;
      }
    }
  
    // Remover o <option> correspondente
    const opcoes = select.getElementsByTagName("option");
    for (let i = 0; i < opcoes.length; i++) {
      if (opcoes[i].value === valorSelecionado) {
        select.removeChild(opcoes[i]);
        break;
      }
    }
  
    // Resetar seleção
    select.value = "";
  });
  