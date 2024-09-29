const titulo = document.querySelector("#titulo")
const autor = document.querySelector("#autor")
const ano = document.querySelector("#ano")
const listaLivros = document.querySelector("#lista-livros")

let livros = [
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: "1954" },
    { titulo: "Harry Potter", autor: "J.K. Rowling", ano: "1997" },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: "1899" },
    { titulo: "A Guerra dos Tronos", autor: "George R. R. Martin", ano: "1996" },
    { titulo: "O Código Da Vinci", autor: "Dan Brown", ano: "2003" },
    { titulo: "A Culpa é das Estrelas", autor: "John Green", ano: "2012" }
];

function mostrarLivros(array){
    listaLivros.innerHTML = ""
    array.forEach((elemento)=>{
        const livro = document.createElement("li")
        livro.innerHTML = `
        Nome: ${elemento.titulo}<br>
        Autor: ${elemento.autor}<br>
        Ano: ${elemento.ano}<br>`
        listaLivros.appendChild(livro)
    })
}

mostrarLivros(livros)
function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function filtroUniversal(array, campo, valor){
    const valorSelecionado = removerAcentos(valor.toLowerCase())
    console.log(valorSelecionado)
    return array.filter((elemento)=>{
        if(campo === "ano"){
            if(valor === "antes2000"){
                return Number(elemento[campo]) < 2000
            } else if(valor === "2000-2010"){
                return Number(elemento[campo]) >= 2000 && Number(elemento[campo]) <= 2010
            } else if(valor === "depois2010"){
                return Number(elemento[campo]) > 2010
            } else if(valor === "todos"){
                return valorSelecionado === "todos"
            }
        }else{
            return valorSelecionado === "" || removerAcentos(elemento[campo].toLowerCase()).includes(valorSelecionado)
        }
        
    })
}

function filtrarLivros(){
    const valorTitulo = titulo.value
    const autorSelecionado = autor.value
    const anoSelecionado = ano.value
    let filtroLivros = filtroUniversal(livros, "titulo", valorTitulo)
    filtroLivros = filtroUniversal(filtroLivros, "autor", autorSelecionado)
    filtroLivros = filtroUniversal(filtroLivros, "ano", anoSelecionado)

    mostrarLivros(filtroLivros)
}

titulo.addEventListener("input", filtrarLivros)
autor.addEventListener("input", filtrarLivros)
ano.addEventListener("change", filtrarLivros)