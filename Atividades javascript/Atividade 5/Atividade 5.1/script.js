const listaNumeros = document.querySelector("#lista-numeros")

let numeros = [10,20,30,40,50]
for(let i = 0; i < numeros.length; i++){
    const numero = document.createElement("li")
    numero.textContent = numeros[i]
    listaNumeros.appendChild(numero)
    console.log(i)
}