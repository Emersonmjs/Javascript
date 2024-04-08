const f = (n1, n2)=>{
    return n1+ n2
}

console.log(f(10,15))

const g = Function("v1", "v2", "return v1+v2")

console.log(g(90, 10))