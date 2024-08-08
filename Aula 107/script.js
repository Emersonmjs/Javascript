const carro = document.querySelector("#carro")
const btn_esquerda = document.querySelector("#btn_esquerda")
const btn_direita = document.querySelector("#btn_direita")
const btn_parar = document.querySelector("#btn_parar")

const init=()=>{
    carro.style.position="absolute"
    carro.style.left="0px"
    carro.style="position:absolute;left:0px;"
}

let anima = null

const mover = (entrada)=>{
    carro.style.left= parseInt(carro.style.left) + (10*entrada) + "px"
    anima = setTimeout(mover,20,entrada)
}

btn_parar.addEventListener("click", ()=>{
    clearTimeout(anima) //Parar a animação
})

btn_esquerda.addEventListener("click", ()=>{
    clearTimeout(anima)
    mover(-1)
})

btn_direita.addEventListener("click", ()=>{
    clearTimeout(anima)
    mover(1)
})
// window.onload=init

window.addEventListener("load",init())