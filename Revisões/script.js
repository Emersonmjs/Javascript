// var elementos = [...document.querySelectorAll('div')]

// for (i in elementos){
//     console.log(i)
// }

function soma(...valores){
    let total = 0
    for (i of valores){
        total += i
    }
    return total
}

console.log(soma(5,10,20))