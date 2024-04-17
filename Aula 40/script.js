const caixa1 = document.querySelector('#caixa1')
const cursosTodos = document.querySelectorAll(".curso")
const cursoo = document.querySelector("#c1")
const button = document.querySelector('#button')
const cursos = ['HTML','CSS','JavaScript','PHP','React','MySQL']


cursos.map((elemento, index)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c'+(index+1))
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = elemento
    caixa1.appendChild(novoElemento)
})

