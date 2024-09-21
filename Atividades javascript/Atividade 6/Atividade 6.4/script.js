const categoria = document.querySelector("#categoria")
const preco = document.querySelector("#preco")
const listaProdutos = document.querySelector("#lista-produtos")

let produtos = [
    { nome: "Televisão", categoria: "eletronicos", preco: 1200 },
    { nome: "Geladeira", categoria: "eletrodomesticos", preco: 900 },
    { nome: "Sofá", categoria: "moveis", preco: 700 },
    { nome: "Computador", categoria: "eletronicos", preco: 2500 },
    { nome: "Mesa de Jantar", categoria: "moveis", preco: 450 },
    { nome: "Micro-ondas", categoria: "eletrodomesticos", preco: 300 }
];

function mostrarProdutos(array){
    console.log(array)
    listaProdutos.innerHTML = ""
    array.forEach((elemento)=>{
        const produto = document.createElement("li")
        produto.innerHTML = `
        Nome: ${elemento.nome}<br>
        Categoria: ${elemento.categoria}<br>
        Preço: ${elemento.preco}<br><hr>`
        listaProdutos.appendChild(produto)
    })
}

mostrarProdutos(produtos)

function parteEspecificaSelecionada(array, valor, campo){
    const valorSelecionado = valor
    if(campo === "categoria"){
        return array.filter((elemento)=>{
            return valorSelecionado === "todos" || elemento[campo].toLowerCase() === valorSelecionado
        })
    }else if(campo === "preco"){
        return filtragemPreco(array, valorSelecionado)
    }
    
}

function filtragemPreco(array, valor){
    if(valor === "baixo"){
        return array.filter((elemento)=>{
            return elemento.preco <= 500
        })
    } else if(valor === "medio"){
        return array.filter((elemento)=>{
            return elemento.preco > 500 && elemento.preco <= 1000
        })
    }else if(valor === "alto"){
        return array.filter((elemento)=>{
            return elemento.preco > 1000
        })
    }else if(valor === "todos"){
        return array
    }
}

function filtroProdutos(){
    const valorCategoria = categoria.value.toLowerCase()
    const valorPreco = preco.value.toLowerCase()
    
    let produtosFiltrados = parteEspecificaSelecionada(produtos, valorCategoria, "categoria")

    produtosFiltrados = parteEspecificaSelecionada(produtosFiltrados, valorPreco, "preco")

    mostrarProdutos(produtosFiltrados)
}

categoria.addEventListener("change", filtroProdutos)
preco.addEventListener("change", filtroProdutos)

