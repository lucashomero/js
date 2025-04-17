// Utilizando fetch com then
// const response = fetch("http://localhost:3333/products").then((response) => response.json()).then((data) => console.log(data))

// Utilizando fetch com asynca/wait
async function fetchProducts() {
    const response = await fetch("http://localhost:3333/products")
    const data = await response.json()
    console.log(data)
}

fetchProducts()