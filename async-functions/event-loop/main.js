// (1) Execução síncrona
console.log(1)

// (3) Microtask são executadas antes de temporizadores e promessas
queueMicrotask(() => {
    console.log(2)
})

// (5) Macrotask que aguarda o evento de temporizador ser acionado
setTimeout(() => {
    console.log(3)
},1000)

// (2) Execução síncrona
console.log(4)

// (4) Adiciona uma microtask
Promise.resolve(true).then(() => {
    console.log(5)
})

