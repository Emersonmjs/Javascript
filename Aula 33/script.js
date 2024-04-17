const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_transferir')
const cursosTodos = document.querySelectorAll(".curso")

cursosTodos.forEach((curso, id)=>{
    curso.addEventListener('click', ()=>{
        curso.classList.toggle("selecionado")
    })
})



btn.addEventListener("click", ()=>{
    const selecionados = document.querySelectorAll(".selecionado")
    const naoselecionados = document.querySelectorAll(".curso:not(.selecionado)")
    selecionados.forEach((selec)=>{
        caixa2.appendChild(selec)
    })
    naoselecionados.forEach((selec)=>{
        caixa1.appendChild(selec)
    })
})


