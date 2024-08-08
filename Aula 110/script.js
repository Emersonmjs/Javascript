const carro = document.querySelector("#carro")
const btn_esquerda = document.querySelector("#btn_esquerda")
const btn_direita = document.querySelector("#btn_direita")
const btn_parar = document.querySelector("#btn_parar")

const init=()=>{
    // carro.style.position="absolute"
    // carro.style.left="0px"
    carro.style="position:absolute;left:0px;width:100px;"
    tamMax = window.innerWidth-parseInt(carro.style.width)
}

let anima = null
let tamMax = null

const mover = (entrada)=>{
    if(entrada > 0){
        if(parseInt(carro.style.left) <= tamMax){
            carro.style.left= parseInt(carro.style.left) + (10*entrada) + "px"
            anima = setTimeout(mover,20,entrada)
        }else{
            clearTimeout(anima)
        }
    }else if(entrada < 0){
        if(parseInt(carro.style.left) >= 0){
            carro.style.left= parseInt(carro.style.left) + (10*entrada) + "px"
            anima = setTimeout(mover,20,entrada)
        }else{
            clearTimeout(anima)
        }
    }
    console.log(tamMax)
    
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
window.addEventListener("resize",()=>{
    tamMax = window.innerWidth-parseInt(carro.style.width)
})
