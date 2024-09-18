const listaPares = document.querySelector("#lista-pares")

let numeros = [1,3,6,10,13,24,9,20]
for(let i = 0; i < numeros.length; i++){
    if(numeros[i] %2 == 0){
        console.log(numeros[i])
        const numeroPar = document.createElement("li")
        numeroPar.textContent = numeros[i]
        listaPares.appendChild(numeroPar)
    }
    
}