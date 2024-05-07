const valor1 = document.querySelector("#valor1")
const valor2 = document.querySelector("#valor2")
const res = document.querySelector("input#resultado")
const soma = document.querySelector("#soma")
const subtracao = document.querySelector("#subtracao")
const multiplicacao = document.querySelector("#multiplicacao")
const divisao = document.querySelector("#divisao")

const op= [
    (val1=0,val2=0)=>{
        let res= 0
        res = val1+val2
        return res
    },
    (val1=0,val2=0)=>{
        let res= 0
        res = val1-val2
        return res
    },
    (val1=0,val2=0)=>{
        let res= 1
        res = val1*val2
        return res
    },
    (val1=0,val2=0)=>{
        let res= 1
        res = val1/val2
        return res
    }
]

soma.addEventListener("click",()=>{
    res.value= op[0](Number(valor1.value), Number(valor2.value))
})
subtracao.addEventListener("click",()=>{
    res.value= op[1](Number(valor1.value), Number(valor2.value))
})
multiplicacao.addEventListener("click",()=>{
    res.value= op[2](Number(valor1.value), Number(valor2.value))
})
divisao.addEventListener("click",()=>{
    res.value= op[3](Number(valor1.value), Number(valor2.value))
})