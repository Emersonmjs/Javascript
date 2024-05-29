const f_tipoMilitar = document.querySelector("#f_tipoMilitar")
const f_tipoNormal = document.querySelector("#f_tipoNormal")
const f_blindagem = document.querySelector("#f_blindagem")
const f_municao = document.querySelector("#f_municao")
const carros = document.querySelector("#carros")
const btn_addCarro = document.querySelector("#btn_addCarro")
const f_nome = document.querySelector("#f_nome")
const f_portas = document.querySelector("#f_portas")

let a_carros = []

f_tipoMilitar.addEventListener("click", ()=>{
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})
f_tipoNormal.addEventListener("click", ()=>{
    f_nome.value = ""
    f_portas.value = 0
    f_blindagem.value = 0
    f_municao.value = 0
    f_blindagem.setAttribute("disabled","disabled")
    f_municao.setAttribute("disabled","disabled")
})

const gerenciadorCarros=()=>{
    carros.innerHTML= ""
    a_carros.forEach((car)=>{
        const div = document.createElement("div")
        div.setAttribute("class","carro")
        div.innerHTML = `Nome: ${car.nome}</br>Portas: ${car.portas}</br>Blindagem: ${car.blindagem}</br>Munição: ${car.municao}`
        carros.appendChild(div)
        console.log(car)
    })
    
}

btn_addCarro.addEventListener("click", ()=>{
    if(f_tipoNormal.checked){
        const c = new Carro(f_nome.value, Number(f_portas.value))
        a_carros.push(c)
    }else{
        const c = new Militar(f_nome.value, Number(f_portas.value), Number(f_blindagem.value), Number(f_municao.value))
        a_carros.push(c)
    }
    gerenciadorCarros()
})

class Carro{
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = function(){
        this.ligado = true
    }
    desligar = function(){
        this.ligado = false
    }
    setCor = function(cor){
        this.cor = cor
    }
}

class Militar extends Carro{
    constructor(nome, portas, blindagem, municao){
        super(nome, portas)
        this.blindagem= blindagem
        this.municao = municao
        this.setCor("Verde")
    }
    atirar = function(){
        if(this.municao > 0){
            this.municao = municao--
        }
    }
}


