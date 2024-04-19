const caixa1 = document.querySelector('#caixa1')
const cursosTodos = document.querySelectorAll(".curso")
const cursoo = document.querySelector("#c1")
const button = document.querySelector('#button')
const cursos = ['HTML','CSS','JavaScript','PHP','React','MySQL']
const btnCursoSelecionado = document.querySelector('#btnCursoSelecionado')
const btnRemoverCurso = document.querySelector('#btnRemoverCurso')
const btnAdicionarNovoAntes = document.querySelector('#btnAdicionarNovoAntes')
const btnAdicionarNovoDepois = document.querySelector('#btnAdicionarNovoDepois')
const nomeCurso = document.querySelector('#nomeCurso')

let indice = 0
const criarNovoCurso =(elemento)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c'+(indice))
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = elemento
    const comandos = document.createElement('div')
    comandos.setAttribute('class', 'comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name', 'rb_curso')

    comandos.appendChild(rb)
    novoElemento.appendChild(comandos)
    return novoElemento
    
}

cursos.map((el)=>{
    const novoElemento= criarNovoCurso(el)
    caixa1.appendChild(novoElemento)
    indice++
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


btnAdicionarNovoAntes.addEventListener('click', ()=>{
    const radioselecionado = verificacaoRadio()
    try{
        if(nomeCurso.value != ""){
            const cursoSelecionado = radioselecionado.parentNode.parentNode
            const novoElemento = criarNovoCurso(nomeCurso.value)
            caixa1.insertBefore(novoElemento, cursoSelecionado)
        }else{
            alert("O curso está sem o nome")
        }
    }catch(ex){
        alert("Selecione um curso!")
    }
    
})

btnAdicionarNovoDepois.addEventListener('click', ()=>{
    const radioselecionado = verificacaoRadio()
    try{
        if(nomeCurso.value != ""){
            const cursoSelecionado = radioselecionado.parentNode.parentNode
            const novoElemento = criarNovoCurso(nomeCurso.value)
            caixa1.insertBefore(novoElemento, cursoSelecionado.nextSibling)
        }else{
            alert("O curso está sem o nome")
        }
    }catch(ex){
        alert("Selecione um curso!")
    }
})