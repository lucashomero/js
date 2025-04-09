// Herança
class Animal {
    constructor(name){
        this.name = name
    }

    makeNoise(){
        console.log("Algum som genérico do animal")
    }
}

class Dog extends Animal {
    makeNoise(){
    }
}

// Sobrescrevendo métodos
// Dentro da estrutura de Herança, rescreva o método utilizando sua mesma estrutura
class Cat extends Animal {
    makeNoise(){
        console.log("miando")
    }
}

const dog = new Dog("Abba")
console.log(dog.name)
dog.makeNoise()

const cat = new Cat("Gohan")
console.log(cat.name)
cat.makeNoise()

