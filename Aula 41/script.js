const caixa1 = document.querySelector('#caixa1')
const cursosTodos = document.querySelectorAll(".curso")
const cursoo = document.querySelector("#c1")
const button = document.querySelector('#button')
const cursos = ['HTML','CSS','JavaScript','PHP','React','MySQL']
const btnCursoSelecionado = document.querySelector('#btnCursoSelecionado')


cursos.map((elemento, index)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c'+(index+1))
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = elemento
    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    caixa1.appendChild(novoElemento)
    
    
})

btnCursoSelecionado.addEventListener('click', ()=>{
    const radios = [...document.querySelectorAll('input[type=radio]')]
    let RadioSelecionado= radios.filter((ele)=>{
        return ele.checked
    })
    RadioSelecionado = RadioSelecionado[0]
    const CursoSelecionado = RadioSelecionado.parentNode.previousSibling.textContent
    alert("Curso selecionado: "+CursoSelecionado)
})
