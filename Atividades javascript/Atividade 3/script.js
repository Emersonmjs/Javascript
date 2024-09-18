function soma({numero1}, {numero2}){
    let soma = numero1+numero2
    return soma
}

let resultado1 = soma({numero1: 2}, {numero2: 5})
let resultado2 = soma({numero1: 19}, {numero2: 3})
let resultado3 = soma({numero1: 20}, {numero2: 34})

console.log("Resultado 1:",resultado1)
console.log("Resultado 2:",resultado2)
console.log("Resultado 3:",resultado3)