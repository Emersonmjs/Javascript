class Carro{
    static nome = "Melhor"
    constructor(idade){
        this.idade = idade
    }

    static mudar(nome){
        this.nome = nome
    }
}

const c1 = new Carro(18)
console.log(Carro.mudar("Maior"))
console.log(Carro.nome)
