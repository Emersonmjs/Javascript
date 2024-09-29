const genero = document.querySelector("#genero")
const classificacao = document.querySelector("#classificacao")
const ano = document.querySelector("#ano")
const listaFilmes = document.querySelector("#lista-filmes")

let filmes = [
    { titulo: "Matrix", genero: "ficção", classificacao: "16", ano: "1999" },
    { titulo: "O Rei Leão", genero: "drama", classificacao: "livre", ano: "1994" },
    { titulo: "Vingadores", genero: "ação", classificacao: "12", ano: "2012" },
    { titulo: "Parasita", genero: "drama", classificacao: "16", ano: "2019" },
    { titulo: "Deadpool", genero: "comédia", classificacao: "18", ano: "2016" },
    { titulo: "A Origem", genero: "ficção", classificacao: "12", ano: "2010" },
    { titulo: "O Senhor dos Anéis: A Sociedade do Anel", genero: "fantasia", classificacao: "12", ano: "2001" },
    { titulo: "Os Incríveis", genero: "animação", classificacao: "livre", ano: "2004" },
    { titulo: "Coringa", genero: "drama", classificacao: "18", ano: "2019" },
    { titulo: "Toy Story", genero: "animação", classificacao: "livre", ano: "1995" },
    { titulo: "Jurassic Park", genero: "aventura", classificacao: "12", ano: "1993" },
    { titulo: "Star Wars: Episódio IV - Uma Nova Esperança", genero: "ficção", classificacao: "10", ano: "1977" },
    { titulo: "Harry Potter e a Pedra Filosofal", genero: "fantasia", classificacao: "12", ano: "2001" },
    { titulo: "O Grande Lebowski", genero: "comédia", classificacao: "16", ano: "1998" },
    { titulo: "A Forma da Água", genero: "fantasia", classificacao: "14", ano: "2017" },
    { titulo: "O Lobo de Wall Street", genero: "comédia", classificacao: "18", ano: "2013" },
    { titulo: "Mad Max: Estrada da Fúria", genero: "ação", classificacao: "16", ano: "2015" },
    { titulo: "A Vida é Bela", genero: "drama", classificacao: "10", ano: "1997" },
    { titulo: "O Pianista", genero: "drama", classificacao: "14", ano: "2002" },
    { titulo: "Clube da Luta", genero: "drama", classificacao: "18", ano: "1999" },
    { titulo: "Mulan", genero: "animação", classificacao: "livre", ano: "1998" },
    { titulo: "Procurando Nemo", genero: "animação", classificacao: "livre", ano: "2003" },
    { titulo: "Os Vingadores: Ultimato", genero: "ação", classificacao: "12", ano: "2019" },
    { titulo: "As Vantagens de Ser Invisível", genero: "drama", classificacao: "12", ano: "2012" },
    { titulo: "A Estrela de Belém", genero: "animação", classificacao: "livre", ano: "2017" },
    { titulo: "Frozen: Uma Aventura Congelante", genero: "animação", classificacao: "livre", ano: "2013" },
    { titulo: "O Exterminador do Futuro", genero: "ficção", classificacao: "14", ano: "1984" }
];


function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function mostrarFilmes(array){
    listaFilmes.innerHTML = ""
    array.forEach((elemento)=>{
        const filme = document.createElement("li")
        filme.innerHTML = `
        Nome: ${elemento.titulo}<br>
        Gênero: ${elemento.genero}<br>
        Classificação: ${isNaN(Number(elemento.classificacao))? elemento.classificacao: elemento.classificacao + " anos"} <br>
        Ano: ${elemento.ano}<br><hr>`
        listaFilmes.appendChild(filme)
    })
}

mostrarFilmes(filmes)

function filtroUniversal(array, campo, valor){
    if(campo === "ano"){
        return array.filter((elemento)=>{
            if(valor === "antes2000"){
                const valorSelecionado = 2000
                return valorSelecionado === "todos" || Number(elemento[campo]) < valorSelecionado
            }else if(valor === "2000-2010"){
                const valorSelecionado = 2010
                return valorSelecionado === "todos" || Number(elemento[campo]) > 2000 && Number(elemento[campo]) <= valorSelecionado
            }else if(valor === "depois2010"){
                const valorSelecionado = 2010
                return valorSelecionado === "todos" || Number(elemento[campo]) > valorSelecionado
            } else{
                const valorSelecionado = valor.toLowerCase()
                return valorSelecionado === "todos" || elemento[campo].toLowerCase() === valorSelecionado
            }
        })
    }else{
        const valorSelecionado = valor.toLowerCase()
        return array.filter((elemento)=>{
            return removerAcentos(valorSelecionado) === "todos" || removerAcentos(elemento[campo].toLowerCase()) === removerAcentos(valorSelecionado)
        })
    }
    
}

// function converterAno(valor){
//     if(valor === "antes2000"){
//         return valor = 2000
//     } else if(valor === "2000-2010"){
//         return valor = 2010
//     } else if(valor === "depois2010"){
//         valor = 2010
//     }
// }

function filtroCampo(){
    const generoSelecionado = genero.value
    const classificacaoSelecionada = classificacao.value
    const anoSelecionado = ano.value
    let filtroFilmes = filtroUniversal(filmes, "genero", generoSelecionado)
    filtroFilmes = filtroUniversal(filtroFilmes, "classificacao", classificacaoSelecionada)
    filtroFilmes = filtroUniversal(filtroFilmes, "ano", anoSelecionado)

    mostrarFilmes(filtroFilmes)
}

genero.addEventListener("change", filtroCampo)
classificacao.addEventListener("change", filtroCampo)
ano.addEventListener("change", filtroCampo)


