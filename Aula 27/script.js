// function* contador(){
//     let i = 0
//     while(true){
//         yield i++
//         if(i > 5){
//             break
//         }
//     }
// }

// const itc= contador()
// for(let c of itc){
//     console.log(c)
// }

// function* perguntas(){
//     const nome = yield "Qual é o seu nome?"
//     const esporte = yield "Qual é o seu esporte favorito?"
//     return "Seu nome é: " + nome + " e seu esporte favorito é: " + esporte +"!"
// }

// const itp = perguntas()
// console.log(itp.next().value)
// console.log(itp.next('Emerson').value)
// console.log(itp.next('Basket').value)

function* pessoal(){
    const idade = yield "Qual é a sua idade?"
    if(idade >= 18){
        const escolaridade = yield "Qual é a sua escolaridade?"
        return "Sua idade é de " + idade + " anos e sua escolaridade é " + escolaridade +"!"
    } else{
        const serie = yield "Qual a sua série?"
        return "Sua idade é de " + idade + " anos e sua série é " + serie + "!"
    }
}

const itp = pessoal()
console.log(itp.next().value)
console.log(itp.next(19).value)
console.log(itp.next("Técnico").value)
