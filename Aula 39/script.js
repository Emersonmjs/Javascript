const caixa1 = document.querySelector('#caixa1')
const cursosTodos = document.querySelectorAll(".curso")
const curso = document.querySelector("#c1")
let i = 0
var teste = []
cursosTodos.forEach((el)=>{
    teste.push(el.innerHTML)
})
    

cursosTodos.forEach((elemento, index)=>{
    elemento.addEventListener('click', ()=>{
        elemento.classList.toggle('ativo')
        const selecionado = document.querySelectorAll('.curso:not(.ativo)')
        selecionado.forEach((el, i)=>{
            caixa1.children[index].innerHTML = teste[index]  
        })     
        const naoSelecionado = document.querySelectorAll('.ativo')
        naoSelecionado.forEach((el, i)=>{
            caixa1.children[index].innerHTML = "Curso Selecionado!"
        })
        }
)
})
    
