const valores = [10, 20, 5, 7]
const it_valores = valores[Symbol.iterator]()

console.log(it_valores.next())

while(true){
    if(console.log(it_valores.next().done) == false){
        console.log(it_valores.next().value)
        return false
    }else{
        console.log(it_valores.next().value)
        return true
    }
}
console.log("Fim")
