const form = document.getElementById("form");
const input = document.getElementById("itemInput");
const tbody = document.getElementById("itemBody");
const select = document.getElementById("itemSelect");
const btnMarcar = document.getElementById("check")



form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede que o formulário recarregue a página

  const valor = input.value.trim();

  if (valor !== "") {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.textContent = valor;
    tr.appendChild(td);
    tbody.appendChild(tr);
    input.value = ""; // limpa o campo após adicionar

    const option = document.createElement("option")
    option.textContent = valor
    option.value = valor
    select.appendChild(option)
  }
})

  const botaoRemover = document.getElementById("remove")
  botaoRemover.addEventListener("click", function(event){
    event.preventDefault()
    const index = select.selectedIndex
    
    if (index > 0) {
      select.remove(index)
    } else {
      alert("Selecione um item valido para remover")
    }

  })

  btnMarcar.addEventListener("click", function(event){
    event.preventDefault()
    const valorSelecionado = select.value;
  
    if (valorSelecionado) {
      // Percorre as linhas da tabela e marca a que tem o mesmo texto
      const linhas = tbody.getElementsByTagName("tr");
      for (let linha of linhas) {
        const celula = linha.getElementsByTagName("td")[0];
        
        if (celula.textContent === valorSelecionado) {
          linha.style.backgroundColor = "yellow"; // Marca
        } else {
          linha.style.backgroundColor = ""; // Desmarca as outras
        }
      }
    } else {
      alert("Selecione um item válido para marcar");
    }
  });

// Adicionando tabela e conteudo na tabela
// const tr = document.createElement("tr");      // cria uma linha
// const td = document.createElement("td");      // cria uma célula
// td.textContent = "Maçã";                      // adiciona o texto "Maçã" à célula

// tr.appendChild(td);                           // agora temos: <tr><td>Maçã</td></tr>
// tbody.appendChild(tr);                        // adiciona essa linha à tabela

// tr.appendChild(td) → você está "preenchendo" a linha com a célula.

// tbody.appendChild(tr) → você está "colocando a linha preenchida" na tabela
//