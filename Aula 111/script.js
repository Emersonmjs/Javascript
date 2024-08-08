const carro = document.querySelector("#carro")
const btn_iniciar = document.querySelector("#btn_iniciar")
const btn_parar = document.querySelector("#btn_parar")

const init=()=>{
    // carro.style.position="absolute"
    // carro.style.left="0px"
    carro.style="position:absolute;left:0px;width:100px;height:40px;"
    larCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth- larCarro

}

let anima = null
let tamMax = null
let larCarro = null
let entrada = 0


const mover = ()=>{
    if(parseInt(carro.style.left) >= tamMax){
        entrada =-1
    }else if(parseInt(carro.style.left) <= 0){
        entrada = 1
    }
    carro.style.left= parseInt(carro.style.left) + (10*entrada) + "px"
    anima = setTimeout(mover,20)
    console.log(tamMax)
    
}

btn_parar.addEventListener("click", ()=>{
    clearTimeout(anima) //Parar a animação
})

btn_iniciar.addEventListener("click", ()=>{
    mover()
})

// window.onload=init

window.addEventListener("load",init())

window.addEventListener("resize",()=>{
    tamMax = window.innerWidth-parseInt(carro.style.width)
})

window.addEventListener("keydown",(evt)=>{
    if(evt.code==="ArrowUp"){
        carro.style.width=parseInt(carro.style.width)+10+"px"
        carro.style.height=parseInt(carro.style.height)+10+"px"
    }
    if(evt.code==="ArrowDown"){
        carro.style.width=parseInt(carro.style.width)-10+"px"
        carro.style.height=parseInt(carro.style.height)-10+"px"
    }
    larCarro = parseInt(carro.style.width)
    tamMax = window.innerWidth- larCarro
})