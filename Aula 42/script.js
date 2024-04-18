const caixa1 = document.querySelector('#caixa1')
const cursosTodos = document.querySelectorAll(".curso")
const cursoo = document.querySelector("#c1")
const button = document.querySelector('#button')
const cursos = ['HTML','CSS','JavaScript','PHP','React','MySQL']
const btnCursoSelecionado = document.querySelector('#btnCursoSelecionado')
const btnRemoverCurso = document.querySelector('#btnRemoverCurso')


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

const verificacaoRadio = ()=>{
    const radios = [...document.querySelectorAll('input[type=radio]')]
    let radioSelecionado= radios.filter((ele)=>{
        return ele.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener('click', ()=>{
    const radioselecionado = verificacaoRadio()
    try{
        const cursoSelecionado = radioselecionado.parentNode.previousSibling.textContent
        alert("Curso selecionado: "+cursoSelecionado)
    }catch(ex){
        alert("Selecione um curso")
    }
})

btnRemoverCurso.addEventListener('click', ()=>{
    const radioselecionado = verificacaoRadio()
    if(radioselecionado != undefined){
        const cursoSelecionado = radioselecionado.parentNode.parentNode
        cursoSelecionado.remove()
    }else{
        alert("Nenhum curso foi selecionado")
    }
    
})