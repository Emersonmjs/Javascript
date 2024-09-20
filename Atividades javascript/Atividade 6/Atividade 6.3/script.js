const listaLivros = document.querySelector("#lista-livros")
const genero = document.querySelector("#genero")
const autor = document.querySelector("#autor")
let livroEspecifico = ""

let livros = [
    {
        titulo: "Titulo-melhor",
        autor: "Autor 1",
        genero: "Fantasia"
    },
    {
        titulo: "Titulo-bom",
        autor: "Autor 3",
        genero: "Suspense"
    },
    {
        titulo: "Titulo-ótimo",
        autor: "Autor 2",
        genero: "Ficção"
    },
    {
        titulo: "Titulo-excelente",
        autor: "Autor 1",
        genero: "Suspense"
    },
    {
        titulo: "Titulo-magnífico",
        autor: "Autor 2",
        genero: "Fantasia"
    }
]

function mostrarLivros(array){

    listaLivros.innerHTML = ""
    array.forEach((elemento)=>{
        const livro = document.createElement("li")
        livro.innerHTML = `
        Título: ${elemento.titulo}<br>
        Autor: ${elemento.autor}<br>
        Gênero: ${elemento.genero}<br><hr>`
        listaLivros.appendChild(livro)
    })
}

mostrarLivros(livros)

function filtrarLivros(event){
    const generoSelecionado = genero.value.toLowerCase()
    const autorSelecionado = autor.value.toLowerCase()
    console.log(generoSelecionado)
    console.log(autorSelecionado)
    livroEspecifico = event.target.value.toLowerCase()
    const livrosFiltrados = livros.filter((elemento)=>{
        const filtroGenero = generoSelecionado === "todos" || elemento.genero.toLowerCase() === generoSelecionado
        console.log(filtroGenero)
        const filtroAutor = autorSelecionado === "todos" || elemento.autor.toLowerCase() === autorSelecionado
        console.log(filtroAutor)
        return filtroGenero && filtroAutor
    })
    mostrarLivros(livrosFiltrados)
}
    

genero.addEventListener("change", filtrarLivros);
autor.addEventListener("change", filtrarLivros);
