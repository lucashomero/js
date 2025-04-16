// setTimeout() executa uma função após um intervalo de tempo especificado
// tempo em milissegundos
setTimeout(() => {
    console.log("Ola, tudo bem?")
}, 11000)

// setInterval() executa uma função após um intervalo de tempo especificado.
let value = 10

const interval = setInterval(()=> {
    console.log(value)
    value--

    if(value === 0){
        console.log("FELIZ ANO NOVO!!")
        clearInterval(interval)
    }
}, 1000)
