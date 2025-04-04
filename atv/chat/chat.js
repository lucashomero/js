const input = document.getElementById("inputItem")
const tabela = document.getElementById("tabelaCorpo")



input.addEventListener("keypress", function(event) {

  if(event.key === "Enter"){
  const item = input.value.trim()
  if(item !== ""){
  //Add
  const tr = document.createElement("tr")
  const td = document.createElement("td")
  td.textContent = item
  tr.appendChild(td)
  tabela.appendChild(tr)
  input.value = ""
  
  //Remove
  tr.addEventListener("dblclick", function() {
  tabela.removeChild(tr)
  })
  input.value = ""; 
  } else {
    alert("Digite um campo valido")
  }
  }

  

})
