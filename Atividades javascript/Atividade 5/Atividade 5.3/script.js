const numerosFiltrados = document.querySelector("#numeros-filtrados")

let numeros = [1, 5, 20, 15, 10, 9, 7, 11, 30, 2]
console.log(numeros)
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > 10){
        const numeroFiltrado = document.createElement("li")
        numeroFiltrado.textContent = numeros[i]
        numerosFiltrados.appendChild(numeroFiltrado)
    }
}