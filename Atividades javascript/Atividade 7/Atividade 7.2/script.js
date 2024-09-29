const buscaTitulo = document.querySelector("#busca-titulo")
const genero = document.querySelector("#genero")
const classificacao = document.querySelector("#classificacao")
const ano = document.querySelector("#ano")
const ordenarPor = document.querySelector("#ordenar-por")
const ordem = document.querySelector("#ordem")
const livreFilmes = document.querySelector("#livre-filmes")
const filmes12 = document.querySelector("#filmes-12")
const filmes16 = document.querySelector("#filmes-16")
const filmes18 = document.querySelector("#filmes-18")
const classificacoes = document.querySelector("#classificacoes")
const arrayClassificacoes = [...document.querySelector("#classificacoes").children]
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

function mostrarFilmes(mostrador, array){
    mostrador.innerHTML = ""
    array.forEach((elemento)=>{
        const filme = document.createElement("li")
        filme.innerHTML = `
        Nome: ${elemento.titulo}<br>
        Gênero: ${elemento.genero}<br>
        Classificação: ${elemento.classificacao}<br>
        Ano: ${elemento.ano}<br>`
        mostrador.appendChild(filme)
    })
}

function filtroUniversal(array, campo, valor){
    const valorSelecionado = valor.toLowerCase()
    return array.filter((elemento)=>{
        if(campo === "ano"){
            if(valorSelecionado === "antes2000"){
                return Number(elemento[campo]) < 2000
            } else if(valorSelecionado === "2000-2010"){
                return Number(elemento[campo]) >= 2000 && Number(elemento[campo]) <= 2010
            } else if(valorSelecionado === "depois2010"){
                return Number(elemento[campo]) > 2010
            } else if(valorSelecionado === "todos"){
                return elemento[campo]
            }
        }else{
            return valorSelecionado === "todos" || (elemento[campo].toLowerCase()).includes(valorSelecionado)
        }
        
    })
}

function mostrarFilmesPorClassificacao(classificacao, array, campo, valor){
    mostrarFilmes(classificacao, filtroUniversal(array, campo, valor))   
}

function mostrarClassificacoes(array){
    mostrarFilmesPorClassificacao(livreFilmes, array, "classificacao", "livre")
    mostrarFilmesPorClassificacao(filmes12, array, "classificacao", "12")
    mostrarFilmesPorClassificacao(filmes16, array, "classificacao", "16")
    mostrarFilmesPorClassificacao(filmes18, array, "classificacao", "18")
}

mostrarClassificacoes(filmes)

function ordemFilmes(array, campo){
    if(campo === "classificacao"){
        if(ordem.value === "crescente"){
            return classificacoes
        }
        if(ordem.value === "decrescente"){
            return classificacoes.reverse()
        }
    }else{
        return array.sort((atual, posterior)=>{
            if(ordem.value === "crescente"){
                return atual[campo].localeCompare(posterior[campo])
            } else if(ordem.value === "decrescente"){
                return posterior[campo].localeCompare(atual[campo])
            }
            
        })
    }
    
}

function filtroFilmes(){
    let filmesFiltrados = filmes
    filmesFiltrados = filtroUniversal(filmesFiltrados, "titulo", buscaTitulo.value.toLowerCase())
    filmesFiltrados = filtroUniversal(filmesFiltrados, "genero", genero.value.toLowerCase())
    filmesFiltrados = filtroUniversal(filmesFiltrados, "classificacao", classificacao.value.toLowerCase())
    filmesFiltrados = filtroUniversal(filmesFiltrados, "ano", ano.value.toLowerCase())
    filmesFiltrados = ordemFilmes(filmesFiltrados, ordenarPor.value)
    
    mostrarClassificacoes(filmesFiltrados)
}
buscaTitulo.addEventListener("input", filtroFilmes)
genero.addEventListener("change", filtroFilmes)
classificacao.addEventListener("change", filtroFilmes)
ano.addEventListener("change", filtroFilmes)
ordenarPor.addEventListener("change", filtroFilmes)
ordem.addEventListener("change", filtroFilmes)