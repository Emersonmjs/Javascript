const produtosFiltrados = document.querySelector("#produtos-filtrados")

let produtos = [
    {
        nome: "Placa mãe",
        preco: 660,
        disponibilidade: false
    },
    {
        nome: "Placa de vídeo",
        preco: 1000,
        disponibilidade: true
    },
    {
        nome: "Processador",
        preco: 660,
        disponibilidade: true
    },
    {
        nome: "Fonte",
        preco: 250,
        disponibilidade: true
    },
    {
        nome: "Gabinete",
        preco: 100,
        disponibilidade: false
    }

]

function filtroDisponível(array){
    
    for(let i = 0; i < array.length; i++){
        if(array[i].disponibilidade){
            array[i].preco -= array[i].preco*(10/100)
            const produto = document.createElement("li")
            produto.innerHTML = `
            Nome: ${array[i].nome} <br>
            Preco: ${array[i].preco.toFixed(2)} <br>
            Disponibilidade: ${array[i].disponibilidade? "Em estoque": "indisponível"} <br><hr>
            `
            produtosFiltrados.appendChild(produto)
        }
    }
    
}

filtroDisponível(produtos)