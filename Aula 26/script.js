const somar=val=>{
    let res = 0
    for (i of val){
        res += i
    }
    return res
}

const soma=(...valores) =>{
    return somar(valores)
}

console.log(soma(10, 2, 5, 4, 60))

const soma2=(...valores) =>{
    return somar(valores)
}

console.log(soma2(5,15,21,30))