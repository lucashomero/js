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

const user = {
  email: "lucas@email.com", // Para atribuir valor a propriedade utilize :
  age: 18,
  // Estrutura de objeto aninhado
  name: {
    first_name: "Lucas",
    surname: "Homero"
  }, 
  // camelCase = var, snake_case = obj
  address: {
    street: "Rua X",
    number: 23,
    city: "João Pessoa",
    postal_code: "12345_123"
  },
  message: function(){
  console.log(`Olá, ${user.name.first_name} ${user.name.surname}`)
  }
}

user.message()
console.log(user.name.surname)

// Notação de colchetes
console.log(user["email"])
console.log(user["name"]["first_name"])
