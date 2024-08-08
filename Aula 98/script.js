const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for("Bruno") //Identificador de registro global.
const s4 = Symbol.for("Bruno") //Tome cuidado pois podem ser definidos valores de registro global iguais para objetos diferentes. 

console.log(s1)
console.log(s2)

console.log(s3===s4)
console.log(typeof(s1))


console.log(Symbol.keyFor(s3)) //Só vai trabalhar com quem ganhou registrador global.
console.log(Symbol.keyFor(s4))