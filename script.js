// VARIÁVEIS E TIPOS EMBUTIDOS
let nome = "Lucas";
const idade = 21;
let altura = 1.75;
let estudante = true;
let endereco = {
  rua: "Rua das Flores",
  numero: 123,
  cidade: "Brasília"
};
let notas = [8.5, 9.0, 7.5];
let nulo = null;
let indefinido;

// ESTRUTURA DE CONTROLE - Condicional
if (idade < 18) {
  console.log("Menor de idade");
} else if (idade < 60) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

// ESTRUTURA DE CONTROLE - Switch
let dia = 3;
switch (dia) {
  case 1: console.log("Domingo"); break;
  case 2: console.log("Segunda-feira"); break;
  case 3: console.log("Terça-feira"); break;
  case 4: console.log("Quarta-feira"); break;
  case 5: console.log("Quinta-feira"); break;
  case 6: console.log("Sexta-feira"); break;
  case 7: console.log("Sábado"); break;
  default: console.log("Dia inválido");
}

// ESTRUTURA DE CONTROLE - Laços
for (let i = 1; i <= 5; i++) {
  console.log("Contador for:", i);
}

let j = 5;
while (j >= 1) {
  console.log("Contador while:", j);
  j--;
}

// FUNÇÕES

function bemVindo() {
  console.log("Bem-vindo ao sistema!");
}
bemVindo();

function soma(a, b) {
  return a + b;
}
console.log("Soma:", soma(3, 4));

const dobro = n => n * 2;
console.log("Dobro de 5:", dobro(5));

function apresentar(nome, idade) {
  return `Meu nome é ${nome} e tenho ${idade} anos.`;
}
console.log(apresentar("Lucas", 21));

function calcularMedia(notas) {
  let total = 0;
  for (let nota of notas) {
    total += nota;
  }
  return total / notas.length;
}
console.log("Média das notas:", calcularMedia(notas));

// ESCOPO

let mensagem = "Mensagem global";

function mostrarMensagem() {
  console.log("Mensagem dentro da função:", mensagem);
}
mostrarMensagem();

// ESCOPO DE FUNÇÃO
function segredo() {
  let chave = "12345";
  console.log("Dentro da função, chave:", chave);
}
segredo();
// console.log(chave); // erro: chave is not defined

// ESCOPO DE BLOCO
if (true) {
  let x = 10;
  const y = 20;
  console.log("Dentro do bloco:", x, y);
}
// console.log(x); // erro: x is not defined

// HOISTING COM VAR
console.log(nomeHoisting); // undefined
var nomeHoisting = "Homero";

// HOISTING COM LET
// console.log(sobrenome); // erro: Cannot access 'sobrenome' before initialization
let sobrenome = "Silva";
console.log("Sobrenome:", sobrenome);
