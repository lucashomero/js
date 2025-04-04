const input = document.getElementById("inputItem")
const lista = document.querySelector("ul")


input.addEventListener("keypress", function(event) {

  if(event.key === "Enter"){
  const item = input.value.trim()
  if(item !== ""){
  //Add
  const li = document.createElement("li")
  li.textContent = item
  lista.appendChild(li)
  //Remove
  li.addEventListener("dblclick", function() {
  lista.removeChild(li)
  })
  input.value = ""; 
  } else {
    alert("Digite um campo valido")
  }
  }

})
