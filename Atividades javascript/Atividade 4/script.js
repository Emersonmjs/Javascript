function verificaNumero({numero}){
    if(numero > 0){
        return "O número é positivo"
    } else if(numero < 0){
        return "O número é negativo"
    } else{
        return "O número é zero"
    }
}


let resultado1 = verificaNumero({numero: 4})
let resultado2 = verificaNumero({numero: -14})
let resultado3 = verificaNumero({numero: 0})

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)