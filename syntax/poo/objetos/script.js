const pessoa = {
    nome: "Lucas",     // aqui está definindo a propriedade 'nome'
    idade: 21,         // aqui está definindo a propriedade 'idade'
    falar() {
      console.log(`Oi, meu nome é ${this.nome}`);
    }
  };

pessoa.falar()

// Melhor prática: usando classe 
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Oi, meu nome é ${this.nome}`);
  }
}

const pessoa1 = new Pessoa("Lucas", 21);
const pessoa2 = new Pessoa("Ana", 25);
pessoa1.falar(); 
pessoa2.falar(); 