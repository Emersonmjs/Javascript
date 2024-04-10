const inteiro = (e)=>{
    return parseInt(e)
}
const dobrar = (e)=>e*2
let numeros = ['1', '2', '3', '4', '5'].map(inteiro)
let numeros2 = ['1', '2', '3', '4', '5'].map(dobrar)
console.log(numeros)
console.log(numeros2)

const cursos = ['HTML', 'CSS', 'Javascript', 'React', 'PHP']
const val = Array.prototype.map.call(cursos,({innerHTML})=>innerHTML)
console.log(val)

cursos.map((curso, index)=>{
    console.log(curso, index)
})

function verificador(curso, index){
    console.log(curso, index)
}
cursos.map(verificador)



