const listaProdutos = document.querySelector("#lista-produtos")
const busca = document.querySelector("#busca")
busca.focus()
let produtos = [
    {
        nome: "Placa mãe",
        preco: 660
    },
    {
        nome: "Placa de vídeo",
        preco: 1000
    },
    {
        nome: "Processador",
        preco: 660
    },
    {
        nome: "Fonte",
        preco: 250
    },
    {
        nome: "Gabinete",
        preco: 100
    },
    {
        nome: "Memória RAM",
        preco: 660
    },
    {
        nome: "Teclado",
        preco: 250
    },
    {
        nome: "Mouse",
        preco: 100
    }

]

let texto = ""

function removerAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function mostrarProdutos(array){

    listaProdutos.innerHTML = ""

    array.forEach((elemento)=>{
        const produto = document.createElement("li")
        produto.innerHTML = `
        Nome: ${elemento.nome}<br>
        Preço: ${elemento.preco}<br><hr>`
        listaProdutos.appendChild(produto)
    })
}

mostrarProdutos(produtos)

function filtrarProdutos(event){
    texto = removerAcentos(event.target.value.toLowerCase())
    const arrayFiltrado = produtos.filter((elemento)=>{
        return removerAcentos(elemento.nome.toLowerCase()).includes(texto)
    })
    
    mostrarProdutos(arrayFiltrado)
}

busca.addEventListener("input", filtrarProdutos)