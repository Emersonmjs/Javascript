class Carro{
    constructor(nome, portas){
        this.nome=nome
        this.portas=portas
    }
    estado = ()=>{
        this.ligado = true
    }
    desligar = ()=>{
        this.ligado = false
    }
    setCor = (cor)=>{
        this.cor = cor
    }
}

class Militar extends Carro{
    constructor(nome, portas, municao, blindagem){
        super()
        this.estado()
    }
}

let c1 = new Militar
console.log(c1.cor)
console.log(c1.ligado)