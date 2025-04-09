// -MÉTODOS DE STRING EM JAVASCRIPT

// 1. Texto maiúsculo e minúsculo
let texto = "JavaScript";
console.log(texto.toUpperCase()); // "JAVASCRIPT"
console.log(texto.toLowerCase()); // "javascript"

// 2. Obtendo o comprimento de uma string
let nome = "Lucas";
console.log(nome.length); // 5

// 3. Substituindo e fatiando texto
let frase = "Olá, mundo!";
console.log(frase.replace("mundo", "Lucas")); // "Olá, Lucas!"
console.log(frase.slice(0, 5)); // "Olá, "
console.log(frase.substring(0, 5)); // "Olá, "

// 4. Completando uma string
let numero = "42";
console.log(numero.padStart(5, "0")); // "00042"
console.log(numero.padEnd(5, "*"));   // "42***"

// 5. Separando e unindo strings
let lista = "maçã,banana,uva";
let frutas = lista.split(","); // ["maçã", "banana", "uva"]
console.log(frutas.join(" | ")); // "maçã | banana | uva"

// 6. Encontrando um conteúdo no texto
let mensagem = "Bem-vindo ao JavaScript!";
console.log(mensagem.includes("Java"));      // true
console.log(mensagem.indexOf("o"));          // 8
console.log(mensagem.lastIndexOf("o"));      // 12
console.log(mensagem.startsWith("Bem"));     // true
console.log(mensagem.endsWith("!"));         // true


