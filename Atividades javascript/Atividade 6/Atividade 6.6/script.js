const genero = document.querySelector("#genero")
const classificacao = document.querySelector("#classificacao")
const ano = document.querySelector("#ano")
const listaLivros = document.querySelector("#lista-livros")

let livros = [
    { titulo: "O Senhor dos Anéis", genero: "fantasia", classificacao: "12", ano: "1954" },
    { titulo: "A Guerra dos Tronos", genero: "fantasia", classificacao: "16", ano: "1996" },
    { titulo: "1984", genero: "ficcao", classificacao: "16", ano: "1949" },
    { titulo: "O Conto da Aia", genero: "ficcao", classificacao: "18", ano: "1985" },
    { titulo: "A Menina que Roubava Livros", genero: "drama", classificacao: "12", ano: "2005" },
    { titulo: "O Código Da Vinci", genero: "suspense", classificacao: "16", ano: "2003" },
    { titulo: "A Cabana", genero: "drama", classificacao: "livre", ano: "2007" }
];

function mostrarLivros(array){
    listaLivros.innerHTML = ""

    array.forEach((elemento)=>{
        const livro = document.createElement("li")
        livro.innerHTML = `
        Nome: ${elemento.titulo}<br>
        Gênero: ${elemento.genero}<br>
        Classificação: ${elemento.classificacao}<br>
        Ano: ${elemento.ano}<br>`
        listaLivros.appendChild(livro)
    })
}

mostrarLivros(livros)

function filtragemUniversal(array, campo, valor){
    const valorSelecionado = valor
    return array.filter((elemento)=>{
        console.log(elemento)
        if(campo === "ano"){
            if(valorSelecionado === "antes2000"){
                return valorSelecionado === "todos" || Number(elemento[campo]) < 2000
            }else if(valorSelecionado === "2000-2010"){
                return valorSelecionado === "todos" || Number(elemento[campo]) >= 2000 && Number(elemento[campo]) <= 2010 
            }else if(valorSelecionado === "depois2010"){
                return valorSelecionado === "todos" || Number(elemento[campo]) > 2010
            } else if(valorSelecionado === "todos"){
                return valorSelecionado === "todos" || elemento[campo].toLowerCase() === valorSelecionado
            }
        }else{
            return valorSelecionado === "todos" || elemento[campo].toLowerCase() === valorSelecionado
            
        }
    })
}



function filtroLivro(){
    const generoSelecionado = genero.value
    const classificacaoSelecionada = classificacao.value
    const anoSelecionado = ano.value
    let filtroLivros = filtragemUniversal(livros, "genero", generoSelecionado)
    filtroLivros = filtragemUniversal(filtroLivros, "classificacao", classificacaoSelecionada)
    filtroLivros = filtragemUniversal(filtroLivros, "ano", anoSelecionado)
    mostrarLivros(filtroLivros)
}

genero.addEventListener("change", filtroLivro)
classificacao.addEventListener("change", filtroLivro)
ano.addEventListener("change", filtroLivro)