const listaProdutos = document.querySelector("#lista-produtos")
const busca = document.querySelector("#busca")

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
function criarProduto(){
    for(let i = 0; i < produtos.length; i++){
        const produto = document.createElement("li")
        produto.innerHTML = `
        Nome: ${produtos[i].nome}<br>
        Preço: ${produtos[i].preco}<br><hr>`
        console.log(produto)
        return produto
    }
}

listaProdutos.appendChild(criarProduto())

let conteudo = ""
busca.addEventListener("input", (event)=>{
    conteudo += event.data
    for(let i = 0; i < produtos.length; i++){
        if(conteudo.toUpperCase() === produtos[i].nome.toUpperCase()){
            const produto = criarProduto()
            listaProdutos.appendChild(produto)
        }
    }
    
})