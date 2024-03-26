let valores = [7, 9, 8, 3, 5]
console.log(valores)

/*
for (var pos = 0; pos < valores.length; pos++){
    console.log(`Vetor na posição ${pos} tem número ${valores[pos]}`)
}
*/
/*
for(let pos in valores){
    console.log(`O vetor na posição ${pos} tem o valor ${valores[pos]}`)
}
*/

var pos = valores.indexOf(9)
if (pos == -1){
    console.log('Valor não encontrado')
} else{
    console.log(`A posição do valor é ${pos}`)
}