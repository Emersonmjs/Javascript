let soma = document.querySelector("#soma")

let numeros = [1, 10, 20, 5, 6, 24]
let somaTotal = 0
for(let i = 0; i < numeros.length; i++){
    somaTotal = somaTotal + numeros[i]
    
}

soma.textContent = somaTotal