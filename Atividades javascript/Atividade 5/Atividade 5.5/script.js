const nomesFiltrados = document.querySelector("#nomes-filtrados")

let nomes = ["Emerson", "Ítalo", "Bruno", "Adriel", "Ana Clara", "Ana Júlia", "Carlos"]


function filtro(array){
    for(let i = 0; i < array.length; i++){
        if(array[i][0].toUpperCase() === "A"){
            const nome = document.createElement("li")
            nome.textContent = array[i]
            nomesFiltrados.appendChild(nome)
        }
    }
}

filtro(nomes)