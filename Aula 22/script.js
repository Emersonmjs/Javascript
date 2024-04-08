function soma(...valores){
    let somaValroes = 0
    for (let i of valores){
        somaValroes += i
    }
    return somaValroes
}

console.log(soma(5,10,20,60))