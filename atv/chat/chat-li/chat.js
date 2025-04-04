const input = document.getElementById("inputItem");
const lista = document.getElementById("listaCompras");

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    const item = input.value.trim();
    if (item !== "") {
      const li = document.createElement("li");
      li.textContent = item;

      li.addEventListener("dblclick", function () {
        lista.removeChild(li);
      });

      lista.appendChild(li);
      input.value = "";
    } else {
      alert("Digite um campo válido");
    }
  }
});
