const buscaTitulo = document.querySelector("#busca-titulo")
const genero = document.querySelector("#genero")
const classificacao = document.querySelector("#classificacao")
const ano = document.querySelector("#ano")
const ordenarPor = document.querySelector("#ordenar-por")
const ordem = document.querySelector("#ordem")
const aplicarFiltros = document.querySelector("#aplicar-filtros")
const listaFilmes = document.querySelector("#lista-filmes")
buscaTitulo.focus()

let filmes = [
    { titulo: "Matrix", genero: "ficcao", classificacao: "16", ano: "1999" },
    { titulo: "O Rei Leão", genero: "drama", classificacao: "livre", ano: "1994" },
    { titulo: "Vingadores", genero: "acao", classificacao: "12", ano: "2012" },
    { titulo: "Parasita", genero: "drama", classificacao: "16", ano: "2019" },
    { titulo: "Deadpool", genero: "comedia", classificacao: "18", ano: "2016" },
    { titulo: "Interestelar", genero: "ficcao", classificacao: "12", ano: "2014" },
    { titulo: "O Senhor dos Anéis", genero: "fantasia", classificacao: "12", ano: "2001" },
    { titulo: "Titanic", genero: "drama", classificacao: "12", ano: "1997" },
    { titulo: "Jurassic Park", genero: "ficcao", classificacao: "12", ano: "1993" },
    { titulo: "Toy Story", genero: "animacao", classificacao: "livre", ano: "1995" },
    { titulo: "Homem de Ferro", genero: "acao", classificacao: "12", ano: "2008" },
    { titulo: "Gladiador", genero: "drama", classificacao: "16", ano: "2000" },
    { titulo: "A Origem", genero: "ficcao", classificacao: "14", ano: "2010" },
    { titulo: "Pulp Fiction", genero: "drama", classificacao: "18", ano: "1994" },
    { titulo: "O Iluminado", genero: "terror", classificacao: "18", ano: "1980" },
    { titulo: "Forrest Gump", genero: "drama", classificacao: "12", ano: "1994" },
    { titulo: "V de Vingança", genero: "ficcao", classificacao: "16", ano: "2005" },
    { titulo: "O Exterminador do Futuro", genero: "acao", classificacao: "18", ano: "1984" },
    { titulo: "O Poderoso Chefão", genero: "drama", classificacao: "16", ano: "1972" },
    { titulo: "Avatar", genero: "ficcao", classificacao: "12", ano: "2009" },
    { titulo: "Os Incríveis", genero: "animacao", classificacao: "livre", ano: "2004" },
    { titulo: "Coringa", genero: "drama", classificacao: "18", ano: "2019" },
    { titulo: "A Bela e a Fera", genero: "fantasia", classificacao: "livre", ano: "1991" },
    { titulo: "Shrek", genero: "animacao", classificacao: "livre", ano: "2001" },
    { titulo: "Piratas do Caribe", genero: "aventura", classificacao: "12", ano: "2003" },
    { titulo: "Star Wars: Uma Nova Esperança", genero: "ficcao", classificacao: "12", ano: "1977" },
    { titulo: "A Lista de Schindler", genero: "drama", classificacao: "16", ano: "1993" },
    { titulo: "Mad Max: Estrada da Fúria", genero: "acao", classificacao: "18", ano: "2015" },
    { titulo: "Pantera Negra", genero: "acao", classificacao: "12", ano: "2018" },
    { titulo: "Frozen", genero: "animacao", classificacao: "livre", ano: "2013" },
    { titulo: "O Lobo de Wall Street", genero: "comedia", classificacao: "18", ano: "2013" },
    { titulo: "Guardiões da Galáxia", genero: "acao", classificacao: "12", ano: "2014" },
    { titulo: "Harry Potter e a Pedra Filosofal", genero: "fantasia", classificacao: "12", ano: "2001" }
];

function mostrarFilmes({array, localExposicao}){
    localExposicao.innerHTML = ""
    array.forEach((elemento)=>{
        const filme = document.createElement("li")
        filme.innerHTML = `
        Nome: ${elemento.titulo}<br>
        Gênero: ${elemento.genero}<br>
        Classificação: ${elemento.classificacao}<br>
        Ano: ${elemento.ano}<br><hr>`
        localExposicao.appendChild(filme)
    })
}

mostrarFilmes({array: filmes, localExposicao: listaFilmes})

function anoSelecionado(valor, elemento, campo){
    const valorSelecionado = valor
    console.log(valorSelecionado)
    if(valorSelecionado === "antes2000"){
        return Number(elemento[campo]) < 2000
    } else if(valorSelecionado === "2000-2010"){
        return Number(elemento[campo]) >= 2000 && Number(elemento[campo]) <= 2010
    } else if(valorSelecionado === "depois2010"){
        console.log(valorSelecionado)
        return Number(elemento[campo]) > 2010
    }else if(valorSelecionado === "todos"){
        console.log(valorSelecionado)
        return elemento[campo]
    }
} //Filtro pelo ano está correto

function filtroUniversal(array, campo, valor){
    const valorSelecionado = valor.toLowerCase()
    console.log(valorSelecionado)
    return array.filter((elemento)=>{
        if(campo === "ano"){
            return anoSelecionado(valorSelecionado, elemento, campo)
        }else if(campo === "titulo"){
            return valorSelecionado === "todos" || (elemento[campo].toLowerCase()).includes(valorSelecionado)
        }else{
            return valorSelecionado === "todos" || (elemento[campo].toLowerCase()) === valorSelecionado
        }
        
    })
}

function ordemDaEscolha(array, campo, valor){
    const valorDaOrdem = valor
    return array.sort((atual, posterior)=>{
        if(campo === "titulo"){
            if(valorDaOrdem === "crescente"){
                return atual[campo].localeCompare(posterior[campo])
            } else if(valorDaOrdem === "decrescente"){
                return posterior[campo].localeCompare(atual[campo])
            } 
        } else if(campo === "ano"){
            if(valorDaOrdem === "crescente"){
                return Number(atual[campo]) - Number(posterior[campo])
            } else if(valorDaOrdem === "decrescente"){
                return Number(posterior[campo]) - Number(atual[campo])
            } 
        } else if(campo === "classificacao"){
            let valorAtual = atual[campo] === "livre"? 0: atual[campo]
            let valorPosterior = posterior[campo] === "livre"? 0: posterior[campo]
            if(valorDaOrdem === "crescente"){
                return Number(valorAtual) > Number(valorPosterior)? 1: -1
            } else if(valorDaOrdem === "decrescente"){
                return Number(valorPosterior) > Number(valorAtual)? 1: -1
            } 
        }
    })
}

function salvarPreferencias(){
    localStorage.setItem("titulo", buscaTitulo.value)
    localStorage.setItem("genero", genero.value)
    localStorage.setItem("classificacao", classificacao.value)
    localStorage.setItem("ano", ano.value)
    localStorage.setItem("ordenarPor", ordenarPor.value)
    localStorage.setItem("ordem", ordem.value)
}

function filtroFilmes(){
    let filmesFiltrados = ""
    filmesFiltrados = filtroUniversal(filmes, "titulo", buscaTitulo.value.toLowerCase())
    filmesFiltrados = filtroUniversal(filmesFiltrados, "genero", genero.value.toLowerCase())
    filmesFiltrados = filtroUniversal(filmesFiltrados, "classificacao", classificacao.value.toLowerCase())
    filmesFiltrados = filtroUniversal(filmesFiltrados, "ano", ano.value.toLowerCase())
    filmesFiltrados = ordemDaEscolha(filmesFiltrados, ordenarPor.value.toLowerCase(), ordem.value.toLowerCase())
    mostrarFilmes({array: filmesFiltrados, localExposicao: listaFilmes})
    salvarPreferencias()
}

function restaurarPreferencias(){
    if(localStorage.getItem("titulo")){
        buscaTitulo.value = localStorage.getItem("titulo")
    }
    if(localStorage.getItem("genero")){
        genero.value = localStorage.getItem("genero")
    }
    if(localStorage.getItem("classificacao")){
        classificacao.value = localStorage.getItem("classificacao")
    }
    if(localStorage.getItem("ano")){
        ano.value = localStorage.getItem("ano")
    }
    if(localStorage.getItem("ordenarPor")){
        ordenarPor.value = localStorage.getItem("ordenarPor")
    }
    if(localStorage.getItem("ordem")){
        ordem.value = localStorage.getItem("ordem")
    }
    filtroFilmes()
}


aplicarFiltros.addEventListener("click", filtroFilmes)

restaurarPreferencias()
