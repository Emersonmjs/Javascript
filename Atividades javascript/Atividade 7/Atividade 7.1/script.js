const buscaTitulo = document.querySelector("#busca-titulo")
const genero = document.querySelector("#genero")
const classificacao = document.querySelector("#classificacao")
const ano = document.querySelector("#ano")
const ordenarPor = document.querySelector("#ordenar-por")
const ordem = document.querySelector("#ordem")
const listaFilmes = document.querySelector("#lista-filmes")


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

function mostrarFilmes(array){
    listaFilmes.innerHTML = ""
    array.forEach((elemento)=>{
        const filme = document.createElement("li")
        filme.innerHTML = `
        Título: ${elemento.titulo}<br>
        Gênero: ${elemento.genero}<br>
        Classificação: ${elemento.classificacao}<br>
        Ano de Lançamento: ${elemento.ano}`
        listaFilmes.appendChild(filme)
    })
}

mostrarFilmes(filmes)

function filtroUniversal(array, campo, valor){
    const valorSelecionado = valor
    console.log(valor)
    return array.filter((elemento)=>{
        if(campo === "titulo"){
            return valorSelecionado === "" || elemento[campo].toLowerCase().includes(valorSelecionado)
        }else if(campo === "ano"){
            if(valor === "antes2000"){
                return Number(elemento[campo]) < 2000
            }else if(valor === "2000-2010"){
                return Number(elemento[campo]) >= 2000 && Number(elemento[campo]) <= 2010
            }else if(valor === "depois2010"){
                return Number(elemento[campo]) > 2010
            }else if(valor === "todos"){
                return valorSelecionado === "todos"
            }
        }else{
            return valorSelecionado === "todos" || elemento[campo].toLowerCase() === valorSelecionado
        }
        
    })
}

function ordemDefinida(array, campo, ordem){
    console.log(campo)
    if(campo === "titulo"){
        return array.sort((anterior, posterior)=>{
            if(ordem === "crescente"){
                return anterior[campo].localeCompare(posterior[campo])
            } else if(ordem === "decrescente"){
                return posterior[campo].localeCompare(anterior[campo])
            }
            
        })
    }else if(campo === "ano"){
        return array.sort((anterior, posterior)=>{
            if(ordem === "crescente"){
                return anterior.ano - posterior.ano
            } else if(ordem === "decrescente"){
                return posterior.ano - anterior.ano
            }
            
        })
    } else if(campo === "classificacao"){
        return array.sort((anterior, posterior)=>{
            let valorA = (anterior.classificacao === "livre")? 0 : parseInt(anterior.classificacao)
            let valorB = (posterior.classificacao === "livre")? 0 : parseInt(posterior.classificacao)
            if(ordem === "crescente"){
                return valorA > valorB ? 1: -1
            } else if(ordem === "decrescente"){
                return valorA < valorB ? 1: -1
            }
            
            
        })
    }
    
    
}

function filtroFilmes(){
    const textoDigitado = buscaTitulo.value.toLowerCase()
    console.log(textoDigitado)
    const generoSelecionado = genero.value.toLowerCase()
    const classificacaoSelecionado = classificacao.value.toLowerCase()
    const anoSelecionado = ano.value.toLowerCase()
    const tipoDeOrdem = ordenarPor.value.toLowerCase()
    const ordemSelecionada = ordem.value.toLowerCase()
    let filmesFiltrados = filtroUniversal(filmes, "titulo", textoDigitado)
    filmesFiltrados = filtroUniversal(filmesFiltrados, "genero", generoSelecionado)
    filmesFiltrados = filtroUniversal(filmesFiltrados, "classificacao", classificacaoSelecionado)
    filmesFiltrados = filtroUniversal(filmesFiltrados, "ano", anoSelecionado)
    filmesFiltrados = ordemDefinida(filmesFiltrados, tipoDeOrdem, ordemSelecionada)
    mostrarFilmes(filmesFiltrados)
    
}

function eventos(){
    buscaTitulo.addEventListener("input", filtroFilmes)
    genero.addEventListener("change", filtroFilmes)
    classificacao.addEventListener("change", filtroFilmes)
    ano.addEventListener("change", filtroFilmes)
    ordenarPor.addEventListener("change", filtroFilmes)
    ordem.addEventListener("change", filtroFilmes)
}

eventos()