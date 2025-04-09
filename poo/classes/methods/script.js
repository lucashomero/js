// Classes - Métodos
// Adicionando métodos nas classes
class Email { 
    constructor(name, email){
        this.name = name
        this.email = email
    }
    sendEmail(){
        console.log("E-mail enviado para", this.name, "no endereço", this.email)
    }
}

const user1 = new Email ("Lucas", "lucas@email.com")
user1.sendEmail()


// Método estático
// Métodos estáticos podem ser acessados sem a necessidade de instaciar uma classe
class User {
    static showMessage(){
        console.log("Essa é uma mensagem")
    }
}
// Acesso direto, (nome da classe).(método)+() -> User.showMessage()
User.showMessage()

// Porém não é possivel receber atributos pelo construtor, somente por parâmetros
