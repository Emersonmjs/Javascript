const saida = document.querySelector("#saida")
const tecla = document.querySelectorAll(".tecla")
const igualdade = document.querySelector("#igualdade")
const operacao = document.querySelectorAll(".operacoes")
const limpar = document.querySelector("#apagar_tudo")
const abrir_p = document.querySelector("#abrir_p")
const fechar_p = document.querySelector("#fechar_p")
const tecla_e_operacao = document.querySelectorAll(".tecla, .operacoes")
const copy = document.querySelector("#copy")
const tcopy = document.querySelector("#texto")

let decimal = false
let sinal = false

tecla.forEach((elemento)=>{
    elemento.addEventListener("click", (evt)=>{
        sinal = false
        if(evt.target.innerHTML == "."){
            if(!decimal){
                decimal = true
                if(elemento.innerHTML == "0"){
                    saida.innerHTML = "0,"
                }else{
                    saida.innerHTML += evt.target.innerHTML
                }
                
            }
        }else{
            if(saida.innerHTML == "0"){
                saida.innerHTML = ""
            }
            saida.innerHTML += elemento.innerHTML
        }
    })
})

operacao.forEach((elemento)=>{
    elemento.addEventListener("click", (evt)=>{
        if(!sinal){
            sinal = true
            if(saida.innerHTML == "0"){
                saida.innerHTML == ""
            }
            if(evt.target.innerHTML == "*"){
                saida.innerHTML+="*"
            }else{
                saida.innerHTML+= evt.target.innerHTML
            }
            
        }
    })
})

limpar.addEventListener("click", ()=>{
    
    decimal = false
    sinal = false
    saida.innerHTML = "0"
})

igualdade.addEventListener("click", ()=>{
    decimal = false
    sinal = false
    const res = eval(saida.innerHTML)
    saida.innerHTML = res
})

copy.addEventListener("click", ()=>{
    tcopy.select()
    tcopy.setSelectionRange(0,999999999)
    navigator.clipboard.writeText(saida.innerHTML)
})