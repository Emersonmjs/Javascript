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

const tirarSelecao = ()=>{
    const cursosGeral = document.querySelectorAll('.selecionado')
    cursosGeral.forEach((ele)=>{
        ele.classList.remove('selecionado')
    })
}
const criarNovoCurso =(elemento)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c'+(indice))
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = elemento
    novoElemento.addEventListener('click', (el)=>{
        tirarSelecao()  
        el.target.classList.toggle('selecionado')
    })
    return novoElemento
    
}

cursos.map((el)=>{
    const novoElemento= criarNovoCurso(el)
    caixa1.appendChild(novoElemento)
    indice++
})



const cursoSelecionadocaixa = ()=>{
    const cursoSelecionado= document.querySelectorAll('.selecionado')
    if(cursoSelecionado == undefined || cursoSelecionado == []){
        console.log(cursoSelecionado)
    }else{
        return cursoSelecionado[0]
    }
}


btnCursoSelecionado.addEventListener('click', ()=>{
    try{
        const cursoSelecionado = cursoSelecionadocaixa().textContent
        alert("Curso selecionado: "+cursoSelecionado)
    }catch(ex){
        alert("Selecione um curso")
    }
})

btnRemoverCurso.addEventListener('click', ()=>{
    const cursoSelecionado = cursoSelecionadocaixa()
    if(cursoSelecionado != undefined){
        cursoSelecionado.remove()
    }else{
        alert("Nenhum curso foi selecionado")
    }
    
})


btnAdicionarNovoAntes.addEventListener('click', ()=>{
    
    if(cursoSelecionadocaixa()!= undefined){
        if(nomeCurso.value != ""){
            const novoElemento = criarNovoCurso(nomeCurso.value)
            caixa1.insertBefore(novoElemento, cursoSelecionadocaixa())
        }else{
            alert("O curso está sem o nome")
        }
    }else{
        alert("Selecione um curso!")
    }
    
})

btnAdicionarNovoDepois.addEventListener('click', ()=>{
    try{
        if(nomeCurso.value != ""){
            const novoElemento = criarNovoCurso(nomeCurso.value)
            caixa1.insertBefore(novoElemento, cursoSelecionadocaixa().nextSibling)
        }else{
            alert("O curso está sem o nome")
        }
    }catch(ex){
        alert("Selecione um curso!")
    }
})