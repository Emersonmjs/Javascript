function aluno(nome, nota){
    this.nome = nome
    this.nota = nota
    console.log(nome)
    console.log(nota)
    this.dados_anonimos=function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },1000)
    }
}
aluno('Emerson',1000)

function aluno(nome, nota){
    this.nome = nome
    this.nota = nota
    this.dados_anonimos=function(){
        setTimeout(()=>{
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}

const al1 = new aluno('Emerson', 1000)
al1.dados_anonimos()